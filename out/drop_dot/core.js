// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs.nodejs.enable_util_print_BANG_.call(null);
drop_dot.core.pure_js = cljs.nodejs.require.call(null,"../js/pure-js.js");
drop_dot.core.chan_vec_cmd__GT_exec = (function drop_dot$core$chan_vec_cmd__GT_exec(input_chan){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_391811){
var state_val_391812 = (state_391811[(1)]);
if((state_val_391812 === (1))){
var state_391811__$1 = state_391811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_391811__$1,(2),input_chan);
} else {
if((state_val_391812 === (2))){
var inst_391790 = (state_391811[(2)]);
var inst_391791 = inst_391790;
var state_391811__$1 = (function (){var statearr_391813 = state_391811;
(statearr_391813[(7)] = inst_391791);

return statearr_391813;
})();
var statearr_391814_391841 = state_391811__$1;
(statearr_391814_391841[(2)] = null);

(statearr_391814_391841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_391812 === (3))){
var inst_391791 = (state_391811[(7)]);
var inst_391793 = cljs.core.count.call(null,inst_391791);
var inst_391794 = cljs.core._EQ_.call(null,inst_391793,(0));
var state_391811__$1 = state_391811;
if(inst_391794){
var statearr_391815_391842 = state_391811__$1;
(statearr_391815_391842[(1)] = (5));

} else {
var statearr_391816_391843 = state_391811__$1;
(statearr_391816_391843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_391812 === (4))){
var inst_391809 = (state_391811[(2)]);
var state_391811__$1 = state_391811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_391811__$1,inst_391809);
} else {
if((state_val_391812 === (5))){
var state_391811__$1 = state_391811;
var statearr_391817_391844 = state_391811__$1;
(statearr_391817_391844[(2)] = null);

(statearr_391817_391844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_391812 === (6))){
var inst_391791 = (state_391811[(7)]);
var inst_391797 = cljs.core.async.chan.call(null);
var inst_391798 = cljs.core.first.call(null,inst_391791);
var inst_391799 = (function (){var v = inst_391791;
var rc = inst_391797;
var cmd = inst_391798;
return ((function (v,rc,cmd,inst_391791,inst_391797,inst_391798,state_val_391812,c__10446__auto__){
return (function (res){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,v,rc,cmd,inst_391791,inst_391797,inst_391798,state_val_391812,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,v,rc,cmd,inst_391791,inst_391797,inst_391798,state_val_391812,c__10446__auto__){
return (function (state_391821){
var state_val_391822 = (state_391821[(1)]);
if((state_val_391822 === (1))){
var state_391821__$1 = state_391821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_391821__$1,(2),rc,res);
} else {
if((state_val_391822 === (2))){
var inst_391819 = (state_391821[(2)]);
var state_391821__$1 = state_391821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_391821__$1,inst_391819);
} else {
return null;
}
}
});})(c__10446__auto____$1,v,rc,cmd,inst_391791,inst_391797,inst_391798,state_val_391812,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_391791,inst_391797,inst_391798,state_val_391812,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_391826 = [null,null,null,null,null,null,null];
(statearr_391826[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_391826[(1)] = (1));

return statearr_391826;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_391821){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_391821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e391827){if((e391827 instanceof Object)){
var ex__10429__auto__ = e391827;
var statearr_391828_391845 = state_391821;
(statearr_391828_391845[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_391821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e391827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__391846 = state_391821;
state_391821 = G__391846;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_391821){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_391821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_391791,inst_391797,inst_391798,state_val_391812,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_391829 = f__10447__auto__.call(null);
(statearr_391829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_391829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,v,rc,cmd,inst_391791,inst_391797,inst_391798,state_val_391812,c__10446__auto__))
);

return c__10446__auto____$1;
});
;})(v,rc,cmd,inst_391791,inst_391797,inst_391798,state_val_391812,c__10446__auto__))
})();
var inst_391800 = drop_dot.core.pure_js.execAndPrint(inst_391798,inst_391799);
var state_391811__$1 = (function (){var statearr_391830 = state_391811;
(statearr_391830[(8)] = inst_391800);

return statearr_391830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_391811__$1,(8),inst_391797);
} else {
if((state_val_391812 === (7))){
var inst_391807 = (state_391811[(2)]);
var state_391811__$1 = state_391811;
var statearr_391831_391847 = state_391811__$1;
(statearr_391831_391847[(2)] = inst_391807);

(statearr_391831_391847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_391812 === (8))){
var inst_391791 = (state_391811[(7)]);
var inst_391802 = (state_391811[(2)]);
var inst_391803 = cljs.core.rest.call(null,inst_391791);
var inst_391804 = cljs.core.vec.call(null,inst_391803);
var inst_391791__$1 = inst_391804;
var state_391811__$1 = (function (){var statearr_391832 = state_391811;
(statearr_391832[(7)] = inst_391791__$1);

(statearr_391832[(9)] = inst_391802);

return statearr_391832;
})();
var statearr_391833_391848 = state_391811__$1;
(statearr_391833_391848[(2)] = null);

(statearr_391833_391848[(1)] = (3));


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
var statearr_391837 = [null,null,null,null,null,null,null,null,null,null];
(statearr_391837[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_391837[(1)] = (1));

return statearr_391837;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_391811){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_391811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e391838){if((e391838 instanceof Object)){
var ex__10429__auto__ = e391838;
var statearr_391839_391849 = state_391811;
(statearr_391839_391849[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_391811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e391838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__391850 = state_391811;
state_391811 = G__391850;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_391811){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_391811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_391840 = f__10447__auto__.call(null);
(statearr_391840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_391840;
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
return (function (state_391862){
var state_val_391863 = (state_391862[(1)]);
if((state_val_391863 === (1))){
var state_391862__$1 = state_391862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_391862__$1,v);
} else {
return null;
}
});})(c__10446__auto__,c))
;
return ((function (switch__10425__auto__,c__10446__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0 = (function (){
var statearr_391867 = [null,null,null,null,null,null,null];
(statearr_391867[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__);

(statearr_391867[(1)] = (1));

return statearr_391867;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1 = (function (state_391862){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_391862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e391868){if((e391868 instanceof Object)){
var ex__10429__auto__ = e391868;
var statearr_391869_391871 = state_391862;
(statearr_391869_391871[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_391862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e391868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__391872 = state_391862;
state_391862 = G__391872;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = function(state_391862){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1.call(this,state_391862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,c))
})();
var state__10448__auto__ = (function (){var statearr_391870 = f__10447__auto__.call(null);
(statearr_391870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_391870;
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
var res = cljs.nodejs.require.call(null,"../js/pure-js.js");
var d = cljs.core.async.chan.call(null);
res.confirmPathExists(line,((function (res,d){
return (function (res__$1){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__,res,d){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__,res,d){
return (function (state_391888){
var state_val_391889 = (state_391888[(1)]);
if((state_val_391889 === (1))){
var state_391888__$1 = state_391888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_391888__$1,(2),d,res__$1);
} else {
if((state_val_391889 === (2))){
var inst_391886 = (state_391888[(2)]);
var state_391888__$1 = state_391888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_391888__$1,inst_391886);
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
var statearr_391893 = [null,null,null,null,null,null,null];
(statearr_391893[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__);

(statearr_391893[(1)] = (1));

return statearr_391893;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1 = (function (state_391888){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_391888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e391894){if((e391894 instanceof Object)){
var ex__10429__auto__ = e391894;
var statearr_391895_391897 = state_391888;
(statearr_391895_391897[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_391888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e391894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__391898 = state_391888;
state_391888 = G__391898;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = function(state_391888){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1.call(this,state_391888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,res,d))
})();
var state__10448__auto__ = (function (){var statearr_391896 = f__10447__auto__.call(null);
(statearr_391896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_391896;
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
return (function (state_391930){
var state_val_391931 = (state_391930[(1)]);
if((state_val_391931 === (1))){
var inst_391921 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_391930__$1 = state_391930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_391930__$1,(2),inst_391921);
} else {
if((state_val_391931 === (2))){
var inst_391923 = (state_391930[(2)]);
var state_391930__$1 = state_391930;
if(cljs.core.truth_(inst_391923)){
var statearr_391932_391943 = state_391930__$1;
(statearr_391932_391943[(1)] = (3));

} else {
var statearr_391933_391944 = state_391930__$1;
(statearr_391933_391944[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_391931 === (3))){
var state_391930__$1 = state_391930;
var statearr_391934_391945 = state_391930__$1;
(statearr_391934_391945[(2)] = line);

(statearr_391934_391945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_391931 === (4))){
var inst_391926 = [cljs.core.str("ERROR: "),cljs.core.str(line),cljs.core.str(" does not exist on this machine.")].join('');
var state_391930__$1 = state_391930;
var statearr_391935_391946 = state_391930__$1;
(statearr_391935_391946[(2)] = inst_391926);

(statearr_391935_391946[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_391931 === (5))){
var inst_391928 = (state_391930[(2)]);
var state_391930__$1 = state_391930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_391930__$1,inst_391928);
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
var statearr_391939 = [null,null,null,null,null,null,null];
(statearr_391939[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__);

(statearr_391939[(1)] = (1));

return statearr_391939;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1 = (function (state_391930){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_391930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e391940){if((e391940 instanceof Object)){
var ex__10429__auto__ = e391940;
var statearr_391941_391947 = state_391930;
(statearr_391941_391947[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_391930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e391940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__391948 = state_391930;
state_391930 = G__391948;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = function(state_391930){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1.call(this,state_391930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_391942 = f__10447__auto__.call(null);
(statearr_391942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_391942;
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
return (function (state_392019){
var state_val_392020 = (state_392019[(1)]);
if((state_val_392020 === (1))){
var state_392019__$1 = state_392019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_392019__$1,(2),chan_verified_path);
} else {
if((state_val_392020 === (2))){
var inst_392005 = (state_392019[(7)]);
var inst_392006 = (state_392019[(8)]);
var inst_392005__$1 = (state_392019[(2)]);
var inst_392006__$1 = cljs.core.async.chan.call(null,(1));
var inst_392007 = (function (){var verified_path = inst_392005__$1;
var rc = inst_392006__$1;
return ((function (verified_path,rc,inst_392005,inst_392006,inst_392005__$1,inst_392006__$1,state_val_392020,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_392005,inst_392006,inst_392005__$1,inst_392006__$1,state_val_392020,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_392005,inst_392006,inst_392005__$1,inst_392006__$1,state_val_392020,c__10446__auto__){
return (function (state_392025){
var state_val_392026 = (state_392025[(1)]);
if((state_val_392026 === (1))){
var inst_392021 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced on this machine.")].join('');
var state_392025__$1 = state_392025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_392025__$1,(2),rc,inst_392021);
} else {
if((state_val_392026 === (2))){
var inst_392023 = (state_392025[(2)]);
var state_392025__$1 = state_392025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392025__$1,inst_392023);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_392005,inst_392006,inst_392005__$1,inst_392006__$1,state_val_392020,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_392005,inst_392006,inst_392005__$1,inst_392006__$1,state_val_392020,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_392030 = [null,null,null,null,null,null,null];
(statearr_392030[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_392030[(1)] = (1));

return statearr_392030;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_392025){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392031){if((e392031 instanceof Object)){
var ex__10429__auto__ = e392031;
var statearr_392032_392059 = state_392025;
(statearr_392032_392059[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392060 = state_392025;
state_392025 = G__392060;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_392025){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_392025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_392005,inst_392006,inst_392005__$1,inst_392006__$1,state_val_392020,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_392033 = f__10447__auto__.call(null);
(statearr_392033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_392033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_392005,inst_392006,inst_392005__$1,inst_392006__$1,state_val_392020,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_392005,inst_392006,inst_392005__$1,inst_392006__$1,state_val_392020,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_392005,inst_392006,inst_392005__$1,inst_392006__$1,state_val_392020,c__10446__auto__){
return (function (state_392037){
var state_val_392038 = (state_392037[(1)]);
if((state_val_392038 === (1))){
var state_392037__$1 = state_392037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_392037__$1,(2),rc,verified_path);
} else {
if((state_val_392038 === (2))){
var inst_392035 = (state_392037[(2)]);
var state_392037__$1 = state_392037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392037__$1,inst_392035);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_392005,inst_392006,inst_392005__$1,inst_392006__$1,state_val_392020,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_392005,inst_392006,inst_392005__$1,inst_392006__$1,state_val_392020,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_392042 = [null,null,null,null,null,null,null];
(statearr_392042[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_392042[(1)] = (1));

return statearr_392042;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_392037){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392043){if((e392043 instanceof Object)){
var ex__10429__auto__ = e392043;
var statearr_392044_392061 = state_392037;
(statearr_392044_392061[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392062 = state_392037;
state_392037 = G__392062;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_392037){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_392037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_392005,inst_392006,inst_392005__$1,inst_392006__$1,state_val_392020,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_392045 = f__10447__auto__.call(null);
(statearr_392045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_392045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_392005,inst_392006,inst_392005__$1,inst_392006__$1,state_val_392020,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(verified_path,rc,inst_392005,inst_392006,inst_392005__$1,inst_392006__$1,state_val_392020,c__10446__auto__))
})();
var inst_392008 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_392005__$1);
var state_392019__$1 = (function (){var statearr_392046 = state_392019;
(statearr_392046[(7)] = inst_392005__$1);

(statearr_392046[(9)] = inst_392007);

(statearr_392046[(8)] = inst_392006__$1);

return statearr_392046;
})();
if(cljs.core.truth_(inst_392008)){
var statearr_392047_392063 = state_392019__$1;
(statearr_392047_392063[(1)] = (3));

} else {
var statearr_392048_392064 = state_392019__$1;
(statearr_392048_392064[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392020 === (3))){
var inst_392005 = (state_392019[(7)]);
var inst_392006 = (state_392019[(8)]);
var state_392019__$1 = state_392019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_392019__$1,(6),inst_392006,inst_392005);
} else {
if((state_val_392020 === (4))){
var inst_392005 = (state_392019[(7)]);
var inst_392007 = (state_392019[(9)]);
var inst_392013 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_392005,inst_392007);
var state_392019__$1 = state_392019;
var statearr_392049_392065 = state_392019__$1;
(statearr_392049_392065[(2)] = inst_392013);

(statearr_392049_392065[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392020 === (5))){
var inst_392006 = (state_392019[(8)]);
var inst_392015 = (state_392019[(2)]);
var state_392019__$1 = (function (){var statearr_392050 = state_392019;
(statearr_392050[(10)] = inst_392015);

return statearr_392050;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_392019__$1,(7),inst_392006);
} else {
if((state_val_392020 === (6))){
var inst_392011 = (state_392019[(2)]);
var state_392019__$1 = state_392019;
var statearr_392051_392066 = state_392019__$1;
(statearr_392051_392066[(2)] = inst_392011);

(statearr_392051_392066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392020 === (7))){
var inst_392017 = (state_392019[(2)]);
var state_392019__$1 = state_392019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392019__$1,inst_392017);
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
var statearr_392055 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_392055[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_392055[(1)] = (1));

return statearr_392055;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_392019){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392056){if((e392056 instanceof Object)){
var ex__10429__auto__ = e392056;
var statearr_392057_392067 = state_392019;
(statearr_392057_392067[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392068 = state_392019;
state_392019 = G__392068;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_392019){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_392019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_392058 = f__10447__auto__.call(null);
(statearr_392058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_392058;
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
return (function (state_392103){
var state_val_392104 = (state_392103[(1)]);
if((state_val_392104 === (1))){
var state_392103__$1 = state_392103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_392103__$1,(2),c);
} else {
if((state_val_392104 === (2))){
var inst_392094 = (state_392103[(7)]);
var inst_392094__$1 = (state_392103[(2)]);
var inst_392095 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_392094__$1);
var state_392103__$1 = (function (){var statearr_392105 = state_392103;
(statearr_392105[(7)] = inst_392094__$1);

return statearr_392105;
})();
if(cljs.core.truth_(inst_392095)){
var statearr_392106_392117 = state_392103__$1;
(statearr_392106_392117[(1)] = (3));

} else {
var statearr_392107_392118 = state_392103__$1;
(statearr_392107_392118[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392104 === (3))){
var inst_392094 = (state_392103[(7)]);
var inst_392097 = cljs.core.println.call(null,inst_392094);
var state_392103__$1 = state_392103;
var statearr_392108_392119 = state_392103__$1;
(statearr_392108_392119[(2)] = inst_392097);

(statearr_392108_392119[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392104 === (4))){
var inst_392094 = (state_392103[(7)]);
var inst_392099 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_392094);
var state_392103__$1 = state_392103;
var statearr_392109_392120 = state_392103__$1;
(statearr_392109_392120[(2)] = inst_392099);

(statearr_392109_392120[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392104 === (5))){
var inst_392101 = (state_392103[(2)]);
var state_392103__$1 = state_392103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392103__$1,inst_392101);
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
var statearr_392113 = [null,null,null,null,null,null,null,null];
(statearr_392113[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_392113[(1)] = (1));

return statearr_392113;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_392103){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392114){if((e392114 instanceof Object)){
var ex__10429__auto__ = e392114;
var statearr_392115_392121 = state_392103;
(statearr_392115_392121[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392122 = state_392103;
state_392103 = G__392122;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_392103){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_392103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_392116 = f__10447__auto__.call(null);
(statearr_392116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_392116;
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
return (function (state_392151){
var state_val_392152 = (state_392151[(1)]);
if((state_val_392152 === (1))){
var state_392151__$1 = state_392151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_392151__$1,(2),rc,line);
} else {
if((state_val_392152 === (2))){
var inst_392149 = (state_392151[(2)]);
var state_392151__$1 = state_392151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392151__$1,inst_392149);
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
var statearr_392156 = [null,null,null,null,null,null,null];
(statearr_392156[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__);

(statearr_392156[(1)] = (1));

return statearr_392156;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1 = (function (state_392151){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392157){if((e392157 instanceof Object)){
var ex__10429__auto__ = e392157;
var statearr_392158_392173 = state_392151;
(statearr_392158_392173[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392174 = state_392151;
state_392151 = G__392174;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = function(state_392151){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1.call(this,state_392151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,basename,target_path,rc))
})();
var state__10448__auto__ = (function (){var statearr_392159 = f__10447__auto__.call(null);
(statearr_392159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_392159;
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
return (function (state_392164){
var state_val_392165 = (state_392164[(1)]);
if((state_val_392165 === (1))){
var inst_392160 = [cljs.core.str("ERROR: Invalid line: there is nothing to link "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_392164__$1 = state_392164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_392164__$1,(2),rc,inst_392160);
} else {
if((state_val_392165 === (2))){
var inst_392162 = (state_392164[(2)]);
var state_392164__$1 = state_392164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392164__$1,inst_392162);
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
var statearr_392169 = [null,null,null,null,null,null,null];
(statearr_392169[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__);

(statearr_392169[(1)] = (1));

return statearr_392169;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1 = (function (state_392164){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392170){if((e392170 instanceof Object)){
var ex__10429__auto__ = e392170;
var statearr_392171_392175 = state_392164;
(statearr_392171_392175[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392176 = state_392164;
state_392164 = G__392176;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = function(state_392164){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1.call(this,state_392164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,basename,target_path,rc))
})();
var state__10448__auto__ = (function (){var statearr_392172 = f__10447__auto__.call(null);
(statearr_392172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_392172;
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
return (function (state_392247){
var state_val_392248 = (state_392247[(1)]);
if((state_val_392248 === (1))){
var state_392247__$1 = state_392247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_392247__$1,(2),chan_linkable_path);
} else {
if((state_val_392248 === (2))){
var inst_392234 = (state_392247[(7)]);
var inst_392233 = (state_392247[(8)]);
var inst_392233__$1 = (state_392247[(2)]);
var inst_392234__$1 = cljs.core.async.chan.call(null,(1));
var inst_392235 = (function (){var linkable_path = inst_392233__$1;
var rc = inst_392234__$1;
return ((function (linkable_path,rc,inst_392234,inst_392233,inst_392233__$1,inst_392234__$1,state_val_392248,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_392234,inst_392233,inst_392233__$1,inst_392234__$1,state_val_392248,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_392234,inst_392233,inst_392233__$1,inst_392234__$1,state_val_392248,c__10446__auto__){
return (function (state_392253){
var state_val_392254 = (state_392253[(1)]);
if((state_val_392254 === (1))){
var inst_392249 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_392253__$1 = state_392253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_392253__$1,(2),rc,inst_392249);
} else {
if((state_val_392254 === (2))){
var inst_392251 = (state_392253[(2)]);
var state_392253__$1 = state_392253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392253__$1,inst_392251);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_392234,inst_392233,inst_392233__$1,inst_392234__$1,state_val_392248,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_392234,inst_392233,inst_392233__$1,inst_392234__$1,state_val_392248,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_392258 = [null,null,null,null,null,null,null];
(statearr_392258[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_392258[(1)] = (1));

return statearr_392258;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_392253){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392259){if((e392259 instanceof Object)){
var ex__10429__auto__ = e392259;
var statearr_392260_392287 = state_392253;
(statearr_392260_392287[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392288 = state_392253;
state_392253 = G__392288;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_392253){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_392253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_392234,inst_392233,inst_392233__$1,inst_392234__$1,state_val_392248,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_392261 = f__10447__auto__.call(null);
(statearr_392261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_392261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_392234,inst_392233,inst_392233__$1,inst_392234__$1,state_val_392248,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_392234,inst_392233,inst_392233__$1,inst_392234__$1,state_val_392248,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_392234,inst_392233,inst_392233__$1,inst_392234__$1,state_val_392248,c__10446__auto__){
return (function (state_392265){
var state_val_392266 = (state_392265[(1)]);
if((state_val_392266 === (1))){
var state_392265__$1 = state_392265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_392265__$1,(2),rc,linkable_path);
} else {
if((state_val_392266 === (2))){
var inst_392263 = (state_392265[(2)]);
var state_392265__$1 = state_392265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392265__$1,inst_392263);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_392234,inst_392233,inst_392233__$1,inst_392234__$1,state_val_392248,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_392234,inst_392233,inst_392233__$1,inst_392234__$1,state_val_392248,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_392270 = [null,null,null,null,null,null,null];
(statearr_392270[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_392270[(1)] = (1));

return statearr_392270;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_392265){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392271){if((e392271 instanceof Object)){
var ex__10429__auto__ = e392271;
var statearr_392272_392289 = state_392265;
(statearr_392272_392289[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392290 = state_392265;
state_392265 = G__392290;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_392265){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_392265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_392234,inst_392233,inst_392233__$1,inst_392234__$1,state_val_392248,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_392273 = f__10447__auto__.call(null);
(statearr_392273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_392273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_392234,inst_392233,inst_392233__$1,inst_392234__$1,state_val_392248,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(linkable_path,rc,inst_392234,inst_392233,inst_392233__$1,inst_392234__$1,state_val_392248,c__10446__auto__))
})();
var inst_392236 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_392233__$1);
var state_392247__$1 = (function (){var statearr_392274 = state_392247;
(statearr_392274[(9)] = inst_392235);

(statearr_392274[(7)] = inst_392234__$1);

(statearr_392274[(8)] = inst_392233__$1);

return statearr_392274;
})();
if(cljs.core.truth_(inst_392236)){
var statearr_392275_392291 = state_392247__$1;
(statearr_392275_392291[(1)] = (3));

} else {
var statearr_392276_392292 = state_392247__$1;
(statearr_392276_392292[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392248 === (3))){
var inst_392234 = (state_392247[(7)]);
var inst_392233 = (state_392247[(8)]);
var state_392247__$1 = state_392247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_392247__$1,(6),inst_392234,inst_392233);
} else {
if((state_val_392248 === (4))){
var inst_392235 = (state_392247[(9)]);
var inst_392233 = (state_392247[(8)]);
var inst_392241 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_392233,inst_392235);
var state_392247__$1 = state_392247;
var statearr_392277_392293 = state_392247__$1;
(statearr_392277_392293[(2)] = inst_392241);

(statearr_392277_392293[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392248 === (5))){
var inst_392234 = (state_392247[(7)]);
var inst_392243 = (state_392247[(2)]);
var state_392247__$1 = (function (){var statearr_392278 = state_392247;
(statearr_392278[(10)] = inst_392243);

return statearr_392278;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_392247__$1,(7),inst_392234);
} else {
if((state_val_392248 === (6))){
var inst_392239 = (state_392247[(2)]);
var state_392247__$1 = state_392247;
var statearr_392279_392294 = state_392247__$1;
(statearr_392279_392294[(2)] = inst_392239);

(statearr_392279_392294[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392248 === (7))){
var inst_392245 = (state_392247[(2)]);
var state_392247__$1 = state_392247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392247__$1,inst_392245);
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
var statearr_392283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_392283[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_392283[(1)] = (1));

return statearr_392283;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_392247){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392284){if((e392284 instanceof Object)){
var ex__10429__auto__ = e392284;
var statearr_392285_392295 = state_392247;
(statearr_392285_392295[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392296 = state_392247;
state_392247 = G__392296;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_392247){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_392247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_392286 = f__10447__auto__.call(null);
(statearr_392286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_392286;
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
return (function (state_392367){
var state_val_392368 = (state_392367[(1)]);
if((state_val_392368 === (1))){
var state_392367__$1 = state_392367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_392367__$1,(2),chan_linkable_path_that_wants_linking);
} else {
if((state_val_392368 === (2))){
var inst_392354 = (state_392367[(7)]);
var inst_392353 = (state_392367[(8)]);
var inst_392353__$1 = (state_392367[(2)]);
var inst_392354__$1 = cljs.core.async.chan.call(null,(1));
var inst_392355 = (function (){var linkable_path = inst_392353__$1;
var rc = inst_392354__$1;
return ((function (linkable_path,rc,inst_392354,inst_392353,inst_392353__$1,inst_392354__$1,state_val_392368,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_392354,inst_392353,inst_392353__$1,inst_392354__$1,state_val_392368,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_392354,inst_392353,inst_392353__$1,inst_392354__$1,state_val_392368,c__10446__auto__){
return (function (state_392373){
var state_val_392374 = (state_392373[(1)]);
if((state_val_392374 === (1))){
var inst_392369 = [cljs.core.str("ERROR: "),cljs.core.str(linkable_path),cljs.core.str(" already has a version on this system; please remove this file and re-run this command.")].join('');
var state_392373__$1 = state_392373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_392373__$1,(2),rc,inst_392369);
} else {
if((state_val_392374 === (2))){
var inst_392371 = (state_392373[(2)]);
var state_392373__$1 = state_392373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392373__$1,inst_392371);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_392354,inst_392353,inst_392353__$1,inst_392354__$1,state_val_392368,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_392354,inst_392353,inst_392353__$1,inst_392354__$1,state_val_392368,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_392378 = [null,null,null,null,null,null,null];
(statearr_392378[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_392378[(1)] = (1));

return statearr_392378;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_392373){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392379){if((e392379 instanceof Object)){
var ex__10429__auto__ = e392379;
var statearr_392380_392407 = state_392373;
(statearr_392380_392407[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392408 = state_392373;
state_392373 = G__392408;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_392373){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_392373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_392354,inst_392353,inst_392353__$1,inst_392354__$1,state_val_392368,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_392381 = f__10447__auto__.call(null);
(statearr_392381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_392381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_392354,inst_392353,inst_392353__$1,inst_392354__$1,state_val_392368,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_392354,inst_392353,inst_392353__$1,inst_392354__$1,state_val_392368,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_392354,inst_392353,inst_392353__$1,inst_392354__$1,state_val_392368,c__10446__auto__){
return (function (state_392385){
var state_val_392386 = (state_392385[(1)]);
if((state_val_392386 === (1))){
var state_392385__$1 = state_392385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_392385__$1,(2),rc,linkable_path);
} else {
if((state_val_392386 === (2))){
var inst_392383 = (state_392385[(2)]);
var state_392385__$1 = state_392385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392385__$1,inst_392383);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_392354,inst_392353,inst_392353__$1,inst_392354__$1,state_val_392368,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_392354,inst_392353,inst_392353__$1,inst_392354__$1,state_val_392368,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_392390 = [null,null,null,null,null,null,null];
(statearr_392390[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_392390[(1)] = (1));

return statearr_392390;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_392385){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392391){if((e392391 instanceof Object)){
var ex__10429__auto__ = e392391;
var statearr_392392_392409 = state_392385;
(statearr_392392_392409[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392410 = state_392385;
state_392385 = G__392410;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_392385){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_392385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_392354,inst_392353,inst_392353__$1,inst_392354__$1,state_val_392368,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_392393 = f__10447__auto__.call(null);
(statearr_392393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_392393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_392354,inst_392353,inst_392353__$1,inst_392354__$1,state_val_392368,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(linkable_path,rc,inst_392354,inst_392353,inst_392353__$1,inst_392354__$1,state_val_392368,c__10446__auto__))
})();
var inst_392356 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_392353__$1);
var state_392367__$1 = (function (){var statearr_392394 = state_392367;
(statearr_392394[(9)] = inst_392355);

(statearr_392394[(7)] = inst_392354__$1);

(statearr_392394[(8)] = inst_392353__$1);

return statearr_392394;
})();
if(cljs.core.truth_(inst_392356)){
var statearr_392395_392411 = state_392367__$1;
(statearr_392395_392411[(1)] = (3));

} else {
var statearr_392396_392412 = state_392367__$1;
(statearr_392396_392412[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392368 === (3))){
var inst_392354 = (state_392367[(7)]);
var inst_392353 = (state_392367[(8)]);
var state_392367__$1 = state_392367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_392367__$1,(6),inst_392354,inst_392353);
} else {
if((state_val_392368 === (4))){
var inst_392355 = (state_392367[(9)]);
var inst_392353 = (state_392367[(8)]);
var inst_392361 = drop_dot.core.pure_js.pathExists(inst_392353,inst_392355);
var state_392367__$1 = state_392367;
var statearr_392397_392413 = state_392367__$1;
(statearr_392397_392413[(2)] = inst_392361);

(statearr_392397_392413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392368 === (5))){
var inst_392354 = (state_392367[(7)]);
var inst_392363 = (state_392367[(2)]);
var state_392367__$1 = (function (){var statearr_392398 = state_392367;
(statearr_392398[(10)] = inst_392363);

return statearr_392398;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_392367__$1,(7),inst_392354);
} else {
if((state_val_392368 === (6))){
var inst_392359 = (state_392367[(2)]);
var state_392367__$1 = state_392367;
var statearr_392399_392414 = state_392367__$1;
(statearr_392399_392414[(2)] = inst_392359);

(statearr_392399_392414[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392368 === (7))){
var inst_392365 = (state_392367[(2)]);
var state_392367__$1 = state_392367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392367__$1,inst_392365);
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
var statearr_392403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_392403[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_392403[(1)] = (1));

return statearr_392403;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_392367){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392404){if((e392404 instanceof Object)){
var ex__10429__auto__ = e392404;
var statearr_392405_392415 = state_392367;
(statearr_392405_392415[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392416 = state_392367;
state_392367 = G__392416;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_392367){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_392367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_392406 = f__10447__auto__.call(null);
(statearr_392406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_392406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.link_chan_path_that_needs_linking = (function drop_dot$core$link_chan_path_that_needs_linking(c){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_392469){
var state_val_392470 = (state_392469[(1)]);
if((state_val_392470 === (1))){
var state_392469__$1 = state_392469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_392469__$1,(2),c);
} else {
if((state_val_392470 === (2))){
var inst_392452 = (state_392469[(7)]);
var inst_392451 = (state_392469[(2)]);
var inst_392452__$1 = drop_dot.core.pure_js.localExpandHomeDir(inst_392451);
var inst_392453 = drop_dot.core.pure_js.getDirname(inst_392452__$1);
var inst_392454 = drop_dot.core.pure_js.getBasename(inst_392452__$1);
var inst_392455 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_392452__$1);
var state_392469__$1 = (function (){var statearr_392471 = state_392469;
(statearr_392471[(7)] = inst_392452__$1);

(statearr_392471[(8)] = inst_392453);

(statearr_392471[(9)] = inst_392454);

return statearr_392471;
})();
if(cljs.core.truth_(inst_392455)){
var statearr_392472_392483 = state_392469__$1;
(statearr_392472_392483[(1)] = (3));

} else {
var statearr_392473_392484 = state_392469__$1;
(statearr_392473_392484[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392470 === (3))){
var inst_392452 = (state_392469[(7)]);
var inst_392457 = [cljs.core.str(inst_392452)].join('');
var inst_392458 = cljs.core.println.call(null,inst_392457);
var state_392469__$1 = state_392469;
var statearr_392474_392485 = state_392469__$1;
(statearr_392474_392485[(2)] = inst_392458);

(statearr_392474_392485[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392470 === (4))){
var inst_392452 = (state_392469[(7)]);
var inst_392453 = (state_392469[(8)]);
var inst_392454 = (state_392469[(9)]);
var inst_392460 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_392461 = [cljs.core.str("mkdir -vp "),cljs.core.str(inst_392453)].join('');
var inst_392462 = [cljs.core.str("ln -sv ~/Dropbox/.drop-dot/"),cljs.core.str(inst_392454),cljs.core.str(" "),cljs.core.str(inst_392452)].join('');
var inst_392463 = [inst_392461,inst_392462];
var inst_392464 = (new cljs.core.PersistentVector(null,2,(5),inst_392460,inst_392463,null));
var inst_392465 = drop_dot.core.exec_vec_of_commands.call(null,inst_392464);
var state_392469__$1 = state_392469;
var statearr_392475_392486 = state_392469__$1;
(statearr_392475_392486[(2)] = inst_392465);

(statearr_392475_392486[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392470 === (5))){
var inst_392467 = (state_392469[(2)]);
var state_392469__$1 = state_392469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392469__$1,inst_392467);
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
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_392479 = [null,null,null,null,null,null,null,null,null,null];
(statearr_392479[(0)] = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__);

(statearr_392479[(1)] = (1));

return statearr_392479;
});
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_392469){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392480){if((e392480 instanceof Object)){
var ex__10429__auto__ = e392480;
var statearr_392481_392487 = state_392469;
(statearr_392481_392487[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392488 = state_392469;
state_392469 = G__392488;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__ = function(state_392469){
switch(arguments.length){
case 0:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_392469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_392482 = f__10447__auto__.call(null);
(statearr_392482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_392482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
return drop_dot.core.link_chan_path_that_needs_linking.call(null,drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,drop_dot.core.line__GT_chan_linkable_path.call(null,line))));
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_392565){
var state_val_392566 = (state_392565[(1)]);
if((state_val_392566 === (7))){
var inst_392561 = (state_392565[(2)]);
var state_392565__$1 = state_392565;
var statearr_392568_392593 = state_392565__$1;
(statearr_392568_392593[(2)] = inst_392561);

(statearr_392568_392593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392566 === (1))){
var inst_392541 = chan_config;
var state_392565__$1 = (function (){var statearr_392569 = state_392565;
(statearr_392569[(7)] = inst_392541);

return statearr_392569;
})();
var statearr_392570_392594 = state_392565__$1;
(statearr_392570_392594[(2)] = null);

(statearr_392570_392594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392566 === (4))){
var inst_392544 = (state_392565[(8)]);
var inst_392544__$1 = (state_392565[(2)]);
var state_392565__$1 = (function (){var statearr_392571 = state_392565;
(statearr_392571[(8)] = inst_392544__$1);

return statearr_392571;
})();
if(cljs.core.truth_(inst_392544__$1)){
var statearr_392572_392595 = state_392565__$1;
(statearr_392572_392595[(1)] = (5));

} else {
var statearr_392573_392596 = state_392565__$1;
(statearr_392573_392596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392566 === (13))){
var inst_392541 = (state_392565[(7)]);
var inst_392557 = (state_392565[(2)]);
var tmp392567 = inst_392541;
var inst_392541__$1 = tmp392567;
var state_392565__$1 = (function (){var statearr_392574 = state_392565;
(statearr_392574[(7)] = inst_392541__$1);

(statearr_392574[(9)] = inst_392557);

return statearr_392574;
})();
var statearr_392575_392597 = state_392565__$1;
(statearr_392575_392597[(2)] = null);

(statearr_392575_392597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392566 === (6))){
var state_392565__$1 = state_392565;
var statearr_392576_392598 = state_392565__$1;
(statearr_392576_392598[(2)] = null);

(statearr_392576_392598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392566 === (3))){
var inst_392563 = (state_392565[(2)]);
var state_392565__$1 = state_392565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392565__$1,inst_392563);
} else {
if((state_val_392566 === (12))){
var state_392565__$1 = state_392565;
var statearr_392577_392599 = state_392565__$1;
(statearr_392577_392599[(2)] = null);

(statearr_392577_392599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392566 === (2))){
var inst_392541 = (state_392565[(7)]);
var state_392565__$1 = state_392565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_392565__$1,(4),inst_392541);
} else {
if((state_val_392566 === (11))){
var inst_392544 = (state_392565[(8)]);
var inst_392554 = drop_dot.core.link_line.call(null,inst_392544);
var state_392565__$1 = state_392565;
var statearr_392578_392600 = state_392565__$1;
(statearr_392578_392600[(2)] = inst_392554);

(statearr_392578_392600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392566 === (9))){
var state_392565__$1 = state_392565;
var statearr_392579_392601 = state_392565__$1;
(statearr_392579_392601[(2)] = null);

(statearr_392579_392601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392566 === (5))){
var inst_392546 = cljs.core._EQ_.call(null,cmd,"drop");
var state_392565__$1 = state_392565;
if(inst_392546){
var statearr_392580_392602 = state_392565__$1;
(statearr_392580_392602[(1)] = (8));

} else {
var statearr_392581_392603 = state_392565__$1;
(statearr_392581_392603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392566 === (10))){
var inst_392551 = (state_392565[(2)]);
var inst_392552 = cljs.core._EQ_.call(null,cmd,"link");
var state_392565__$1 = (function (){var statearr_392582 = state_392565;
(statearr_392582[(10)] = inst_392551);

return statearr_392582;
})();
if(inst_392552){
var statearr_392583_392604 = state_392565__$1;
(statearr_392583_392604[(1)] = (11));

} else {
var statearr_392584_392605 = state_392565__$1;
(statearr_392584_392605[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_392566 === (8))){
var inst_392544 = (state_392565[(8)]);
var inst_392548 = drop_dot.core.drop_line.call(null,inst_392544);
var state_392565__$1 = state_392565;
var statearr_392585_392606 = state_392565__$1;
(statearr_392585_392606[(2)] = inst_392548);

(statearr_392585_392606[(1)] = (10));


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
var statearr_392589 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_392589[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__);

(statearr_392589[(1)] = (1));

return statearr_392589;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1 = (function (state_392565){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392590){if((e392590 instanceof Object)){
var ex__10429__auto__ = e392590;
var statearr_392591_392607 = state_392565;
(statearr_392591_392607[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392608 = state_392565;
state_392565 = G__392608;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = function(state_392565){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1.call(this,state_392565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_392592 = f__10447__auto__.call(null);
(statearr_392592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_392592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10446__auto___392705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___392705,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___392705,c){
return (function (state_392669){
var state_val_392670 = (state_392669[(1)]);
if((state_val_392670 === (1))){
var inst_392659 = (state_392669[(7)]);
var inst_392658 = (state_392669[(8)]);
var inst_392657 = (state_392669[(9)]);
var inst_392657__$1 = cljs.nodejs.require.call(null,"../js/pure-js.js");
var inst_392658__$1 = cljs.core.async.chan.call(null,(1));
var inst_392659__$1 = (function (){var res = inst_392657__$1;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_392658__$1;
return ((function (res,config_path,wcc,inst_392659,inst_392658,inst_392657,inst_392657__$1,inst_392658__$1,state_val_392670,c__10446__auto___392705,c){
return (function (error,res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,inst_392659,inst_392658,inst_392657,inst_392657__$1,inst_392658__$1,state_val_392670,c__10446__auto___392705,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,inst_392659,inst_392658,inst_392657,inst_392657__$1,inst_392658__$1,state_val_392670,c__10446__auto___392705,c){
return (function (state_392674){
var state_val_392675 = (state_392674[(1)]);
if((state_val_392675 === (1))){
var state_392674__$1 = state_392674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_392674__$1,(2),wcc,res__$1);
} else {
if((state_val_392675 === (2))){
var inst_392672 = (state_392674[(2)]);
var state_392674__$1 = state_392674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392674__$1,inst_392672);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,inst_392659,inst_392658,inst_392657,inst_392657__$1,inst_392658__$1,state_val_392670,c__10446__auto___392705,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_392659,inst_392658,inst_392657,inst_392657__$1,inst_392658__$1,state_val_392670,c__10446__auto___392705,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_392679 = [null,null,null,null,null,null,null];
(statearr_392679[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_392679[(1)] = (1));

return statearr_392679;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_392674){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392680){if((e392680 instanceof Object)){
var ex__10429__auto__ = e392680;
var statearr_392681_392706 = state_392674;
(statearr_392681_392706[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392707 = state_392674;
state_392674 = G__392707;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_392674){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_392674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_392659,inst_392658,inst_392657,inst_392657__$1,inst_392658__$1,state_val_392670,c__10446__auto___392705,c))
})();
var state__10448__auto__ = (function (){var statearr_392682 = f__10447__auto__.call(null);
(statearr_392682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_392682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,inst_392659,inst_392658,inst_392657,inst_392657__$1,inst_392658__$1,state_val_392670,c__10446__auto___392705,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,inst_392659,inst_392658,inst_392657,inst_392657__$1,inst_392658__$1,state_val_392670,c__10446__auto___392705,c))
})();
var inst_392660 = inst_392657__$1.getFileLineCount("~/Dropbox/.drop-dot/.drop-dot",inst_392659__$1);
var state_392669__$1 = (function (){var statearr_392683 = state_392669;
(statearr_392683[(7)] = inst_392659__$1);

(statearr_392683[(8)] = inst_392658__$1);

(statearr_392683[(9)] = inst_392657__$1);

(statearr_392683[(10)] = inst_392660);

return statearr_392683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_392669__$1,(2),inst_392658__$1);
} else {
if((state_val_392670 === (2))){
var inst_392659 = (state_392669[(7)]);
var inst_392658 = (state_392669[(8)]);
var inst_392657 = (state_392669[(9)]);
var inst_392660 = (state_392669[(10)]);
var inst_392662 = (state_392669[(2)]);
var inst_392663 = [cljs.core.str(inst_392662)].join('');
var inst_392664 = parseInt(inst_392663);
var inst_392665 = (function (){var res = inst_392657;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_392658;
var wcc_jammer = inst_392659;
var get_wc = inst_392660;
var lines = inst_392664;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_392659,inst_392658,inst_392657,inst_392660,inst_392662,inst_392663,inst_392664,state_val_392670,c__10446__auto___392705,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_392659,inst_392658,inst_392657,inst_392660,inst_392662,inst_392663,inst_392664,state_val_392670,c__10446__auto___392705,c))
})();
var inst_392666 = (function (){var res = inst_392657;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_392658;
var wcc_jammer = inst_392659;
var get_wc = inst_392660;
var lines = inst_392664;
var close_if_done = inst_392665;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_392659,inst_392658,inst_392657,inst_392660,inst_392662,inst_392663,inst_392664,inst_392665,state_val_392670,c__10446__auto___392705,c){
return (function (res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_392659,inst_392658,inst_392657,inst_392660,inst_392662,inst_392663,inst_392664,inst_392665,state_val_392670,c__10446__auto___392705,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_392659,inst_392658,inst_392657,inst_392660,inst_392662,inst_392663,inst_392664,inst_392665,state_val_392670,c__10446__auto___392705,c){
return (function (state_392688){
var state_val_392689 = (state_392688[(1)]);
if((state_val_392689 === (1))){
var state_392688__$1 = state_392688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_392688__$1,(2),c,res__$1);
} else {
if((state_val_392689 === (2))){
var inst_392685 = (state_392688[(2)]);
var inst_392686 = close_if_done.call(null);
var state_392688__$1 = (function (){var statearr_392690 = state_392688;
(statearr_392690[(7)] = inst_392685);

return statearr_392690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392688__$1,inst_392686);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_392659,inst_392658,inst_392657,inst_392660,inst_392662,inst_392663,inst_392664,inst_392665,state_val_392670,c__10446__auto___392705,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_392659,inst_392658,inst_392657,inst_392660,inst_392662,inst_392663,inst_392664,inst_392665,state_val_392670,c__10446__auto___392705,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_392694 = [null,null,null,null,null,null,null,null];
(statearr_392694[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_392694[(1)] = (1));

return statearr_392694;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_392688){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392695){if((e392695 instanceof Object)){
var ex__10429__auto__ = e392695;
var statearr_392696_392708 = state_392688;
(statearr_392696_392708[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392709 = state_392688;
state_392688 = G__392709;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_392688){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_392688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_392659,inst_392658,inst_392657,inst_392660,inst_392662,inst_392663,inst_392664,inst_392665,state_val_392670,c__10446__auto___392705,c))
})();
var state__10448__auto__ = (function (){var statearr_392697 = f__10447__auto__.call(null);
(statearr_392697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_392697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_392659,inst_392658,inst_392657,inst_392660,inst_392662,inst_392663,inst_392664,inst_392665,state_val_392670,c__10446__auto___392705,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_392659,inst_392658,inst_392657,inst_392660,inst_392662,inst_392663,inst_392664,inst_392665,state_val_392670,c__10446__auto___392705,c))
})();
var inst_392667 = inst_392657.getLinesFromFile("~/Dropbox/.drop-dot/.drop-dot",inst_392666);
var state_392669__$1 = state_392669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_392669__$1,inst_392667);
} else {
return null;
}
}
});})(c__10446__auto___392705,c))
;
return ((function (switch__10425__auto__,c__10446__auto___392705,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_392701 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_392701[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_392701[(1)] = (1));

return statearr_392701;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_392669){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_392669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e392702){if((e392702 instanceof Object)){
var ex__10429__auto__ = e392702;
var statearr_392703_392710 = state_392669;
(statearr_392703_392710[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_392669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e392702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__392711 = state_392669;
state_392669 = G__392711;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_392669){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_392669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___392705,c))
})();
var state__10448__auto__ = (function (){var statearr_392704 = f__10447__auto__.call(null);
(statearr_392704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___392705);

return statearr_392704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___392705,c))
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
var len__9156__auto___392713 = arguments.length;
var i__9157__auto___392714 = (0);
while(true){
if((i__9157__auto___392714 < len__9156__auto___392713)){
args__9163__auto__.push((arguments[i__9157__auto___392714]));

var G__392715 = (i__9157__auto___392714 + (1));
i__9157__auto___392714 = G__392715;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq392712){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq392712));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map