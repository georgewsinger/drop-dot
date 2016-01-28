// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs.nodejs.enable_util_print_BANG_.call(null);
drop_dot.core.pure_js = cljs.nodejs.require.call(null,"../js/pure-js.js");
drop_dot.core.chan_vec_cmd__GT_exec = (function drop_dot$core$chan_vec_cmd__GT_exec(input_chan){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_93034){
var state_val_93035 = (state_93034[(1)]);
if((state_val_93035 === (1))){
var state_93034__$1 = state_93034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93034__$1,(2),input_chan);
} else {
if((state_val_93035 === (2))){
var inst_93013 = (state_93034[(2)]);
var inst_93014 = inst_93013;
var state_93034__$1 = (function (){var statearr_93036 = state_93034;
(statearr_93036[(7)] = inst_93014);

return statearr_93036;
})();
var statearr_93037_93064 = state_93034__$1;
(statearr_93037_93064[(2)] = null);

(statearr_93037_93064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93035 === (3))){
var inst_93014 = (state_93034[(7)]);
var inst_93016 = cljs.core.count.call(null,inst_93014);
var inst_93017 = cljs.core._EQ_.call(null,inst_93016,(0));
var state_93034__$1 = state_93034;
if(inst_93017){
var statearr_93038_93065 = state_93034__$1;
(statearr_93038_93065[(1)] = (5));

} else {
var statearr_93039_93066 = state_93034__$1;
(statearr_93039_93066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93035 === (4))){
var inst_93032 = (state_93034[(2)]);
var state_93034__$1 = state_93034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93034__$1,inst_93032);
} else {
if((state_val_93035 === (5))){
var state_93034__$1 = state_93034;
var statearr_93040_93067 = state_93034__$1;
(statearr_93040_93067[(2)] = null);

(statearr_93040_93067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93035 === (6))){
var inst_93014 = (state_93034[(7)]);
var inst_93020 = cljs.core.async.chan.call(null);
var inst_93021 = cljs.core.first.call(null,inst_93014);
var inst_93022 = (function (){var v = inst_93014;
var rc = inst_93020;
var cmd = inst_93021;
return ((function (v,rc,cmd,inst_93014,inst_93020,inst_93021,state_val_93035,c__9318__auto__){
return (function (res){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,v,rc,cmd,inst_93014,inst_93020,inst_93021,state_val_93035,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,v,rc,cmd,inst_93014,inst_93020,inst_93021,state_val_93035,c__9318__auto__){
return (function (state_93044){
var state_val_93045 = (state_93044[(1)]);
if((state_val_93045 === (1))){
var state_93044__$1 = state_93044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93044__$1,(2),rc,res);
} else {
if((state_val_93045 === (2))){
var inst_93042 = (state_93044[(2)]);
var state_93044__$1 = state_93044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93044__$1,inst_93042);
} else {
return null;
}
}
});})(c__9318__auto____$1,v,rc,cmd,inst_93014,inst_93020,inst_93021,state_val_93035,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_93014,inst_93020,inst_93021,state_val_93035,c__9318__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0 = (function (){
var statearr_93049 = [null,null,null,null,null,null,null];
(statearr_93049[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_93049[(1)] = (1));

return statearr_93049;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_93044){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93050){if((e93050 instanceof Object)){
var ex__9301__auto__ = e93050;
var statearr_93051_93068 = state_93044;
(statearr_93051_93068[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93069 = state_93044;
state_93044 = G__93069;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_93044){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_93044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_93014,inst_93020,inst_93021,state_val_93035,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93052 = f__9319__auto__.call(null);
(statearr_93052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_93052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,v,rc,cmd,inst_93014,inst_93020,inst_93021,state_val_93035,c__9318__auto__))
);

return c__9318__auto____$1;
});
;})(v,rc,cmd,inst_93014,inst_93020,inst_93021,state_val_93035,c__9318__auto__))
})();
var inst_93023 = drop_dot.core.pure_js.execAndPrint(inst_93021,inst_93022);
var state_93034__$1 = (function (){var statearr_93053 = state_93034;
(statearr_93053[(8)] = inst_93023);

return statearr_93053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93034__$1,(8),inst_93020);
} else {
if((state_val_93035 === (7))){
var inst_93030 = (state_93034[(2)]);
var state_93034__$1 = state_93034;
var statearr_93054_93070 = state_93034__$1;
(statearr_93054_93070[(2)] = inst_93030);

(statearr_93054_93070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93035 === (8))){
var inst_93014 = (state_93034[(7)]);
var inst_93025 = (state_93034[(2)]);
var inst_93026 = cljs.core.rest.call(null,inst_93014);
var inst_93027 = cljs.core.vec.call(null,inst_93026);
var inst_93014__$1 = inst_93027;
var state_93034__$1 = (function (){var statearr_93055 = state_93034;
(statearr_93055[(9)] = inst_93025);

(statearr_93055[(7)] = inst_93014__$1);

return statearr_93055;
})();
var statearr_93056_93071 = state_93034__$1;
(statearr_93056_93071[(2)] = null);

(statearr_93056_93071[(1)] = (3));


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
var statearr_93060 = [null,null,null,null,null,null,null,null,null,null];
(statearr_93060[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_93060[(1)] = (1));

return statearr_93060;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_93034){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93061){if((e93061 instanceof Object)){
var ex__9301__auto__ = e93061;
var statearr_93062_93072 = state_93034;
(statearr_93062_93072[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93073 = state_93034;
state_93034 = G__93073;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_93034){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_93034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93063 = f__9319__auto__.call(null);
(statearr_93063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_93063;
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
return (function (state_93085){
var state_val_93086 = (state_93085[(1)]);
if((state_val_93086 === (1))){
var state_93085__$1 = state_93085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93085__$1,v);
} else {
return null;
}
});})(c__9318__auto__,c))
;
return ((function (switch__9297__auto__,c__9318__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0 = (function (){
var statearr_93090 = [null,null,null,null,null,null,null];
(statearr_93090[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__);

(statearr_93090[(1)] = (1));

return statearr_93090;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1 = (function (state_93085){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93091){if((e93091 instanceof Object)){
var ex__9301__auto__ = e93091;
var statearr_93092_93094 = state_93085;
(statearr_93092_93094[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93095 = state_93085;
state_93085 = G__93095;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = function(state_93085){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1.call(this,state_93085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,c))
})();
var state__9320__auto__ = (function (){var statearr_93093 = f__9319__auto__.call(null);
(statearr_93093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_93093;
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
var res = cljs.nodejs.require.call(null,"../js/pure-js.js");
var d = cljs.core.async.chan.call(null);
res.confirmPathExists(line,((function (res,d){
return (function (res__$1){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,res,d){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,res,d){
return (function (state_93111){
var state_val_93112 = (state_93111[(1)]);
if((state_val_93112 === (1))){
var state_93111__$1 = state_93111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93111__$1,(2),d,res__$1);
} else {
if((state_val_93112 === (2))){
var inst_93109 = (state_93111[(2)]);
var state_93111__$1 = state_93111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93111__$1,inst_93109);
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
var statearr_93116 = [null,null,null,null,null,null,null];
(statearr_93116[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__);

(statearr_93116[(1)] = (1));

return statearr_93116;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1 = (function (state_93111){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93117){if((e93117 instanceof Object)){
var ex__9301__auto__ = e93117;
var statearr_93118_93120 = state_93111;
(statearr_93118_93120[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93121 = state_93111;
state_93111 = G__93121;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__ = function(state_93111){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1.call(this,state_93111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,res,d))
})();
var state__9320__auto__ = (function (){var statearr_93119 = f__9319__auto__.call(null);
(statearr_93119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_93119;
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
return (function (state_93153){
var state_val_93154 = (state_93153[(1)]);
if((state_val_93154 === (1))){
var inst_93144 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_93153__$1 = state_93153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93153__$1,(2),inst_93144);
} else {
if((state_val_93154 === (2))){
var inst_93146 = (state_93153[(2)]);
var state_93153__$1 = state_93153;
if(cljs.core.truth_(inst_93146)){
var statearr_93155_93166 = state_93153__$1;
(statearr_93155_93166[(1)] = (3));

} else {
var statearr_93156_93167 = state_93153__$1;
(statearr_93156_93167[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93154 === (3))){
var state_93153__$1 = state_93153;
var statearr_93157_93168 = state_93153__$1;
(statearr_93157_93168[(2)] = line);

(statearr_93157_93168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93154 === (4))){
var inst_93149 = [cljs.core.str("ERROR: "),cljs.core.str(line),cljs.core.str(" does not exist on this machine.")].join('');
var state_93153__$1 = state_93153;
var statearr_93158_93169 = state_93153__$1;
(statearr_93158_93169[(2)] = inst_93149);

(statearr_93158_93169[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93154 === (5))){
var inst_93151 = (state_93153[(2)]);
var state_93153__$1 = state_93153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93153__$1,inst_93151);
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
var statearr_93162 = [null,null,null,null,null,null,null];
(statearr_93162[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__);

(statearr_93162[(1)] = (1));

return statearr_93162;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1 = (function (state_93153){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93163){if((e93163 instanceof Object)){
var ex__9301__auto__ = e93163;
var statearr_93164_93170 = state_93153;
(statearr_93164_93170[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93171 = state_93153;
state_93153 = G__93171;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__ = function(state_93153){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1.call(this,state_93153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93165 = f__9319__auto__.call(null);
(statearr_93165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_93165;
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
return (function (state_93242){
var state_val_93243 = (state_93242[(1)]);
if((state_val_93243 === (1))){
var state_93242__$1 = state_93242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93242__$1,(2),chan_verified_path);
} else {
if((state_val_93243 === (2))){
var inst_93229 = (state_93242[(7)]);
var inst_93228 = (state_93242[(8)]);
var inst_93228__$1 = (state_93242[(2)]);
var inst_93229__$1 = cljs.core.async.chan.call(null,(1));
var inst_93230 = (function (){var verified_path = inst_93228__$1;
var rc = inst_93229__$1;
return ((function (verified_path,rc,inst_93229,inst_93228,inst_93228__$1,inst_93229__$1,state_val_93243,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_93229,inst_93228,inst_93228__$1,inst_93229__$1,state_val_93243,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_93229,inst_93228,inst_93228__$1,inst_93229__$1,state_val_93243,c__9318__auto__){
return (function (state_93248){
var state_val_93249 = (state_93248[(1)]);
if((state_val_93249 === (1))){
var inst_93244 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced on this machine.")].join('');
var state_93248__$1 = state_93248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93248__$1,(2),rc,inst_93244);
} else {
if((state_val_93249 === (2))){
var inst_93246 = (state_93248[(2)]);
var state_93248__$1 = state_93248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93248__$1,inst_93246);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_93229,inst_93228,inst_93228__$1,inst_93229__$1,state_val_93243,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_93229,inst_93228,inst_93228__$1,inst_93229__$1,state_val_93243,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_93253 = [null,null,null,null,null,null,null];
(statearr_93253[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_93253[(1)] = (1));

return statearr_93253;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_93248){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93254){if((e93254 instanceof Object)){
var ex__9301__auto__ = e93254;
var statearr_93255_93282 = state_93248;
(statearr_93255_93282[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93283 = state_93248;
state_93248 = G__93283;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_93248){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_93248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_93229,inst_93228,inst_93228__$1,inst_93229__$1,state_val_93243,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93256 = f__9319__auto__.call(null);
(statearr_93256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_93256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_93229,inst_93228,inst_93228__$1,inst_93229__$1,state_val_93243,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_93229,inst_93228,inst_93228__$1,inst_93229__$1,state_val_93243,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_93229,inst_93228,inst_93228__$1,inst_93229__$1,state_val_93243,c__9318__auto__){
return (function (state_93260){
var state_val_93261 = (state_93260[(1)]);
if((state_val_93261 === (1))){
var state_93260__$1 = state_93260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93260__$1,(2),rc,verified_path);
} else {
if((state_val_93261 === (2))){
var inst_93258 = (state_93260[(2)]);
var state_93260__$1 = state_93260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93260__$1,inst_93258);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_93229,inst_93228,inst_93228__$1,inst_93229__$1,state_val_93243,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_93229,inst_93228,inst_93228__$1,inst_93229__$1,state_val_93243,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_93265 = [null,null,null,null,null,null,null];
(statearr_93265[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_93265[(1)] = (1));

return statearr_93265;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_93260){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93266){if((e93266 instanceof Object)){
var ex__9301__auto__ = e93266;
var statearr_93267_93284 = state_93260;
(statearr_93267_93284[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93285 = state_93260;
state_93260 = G__93285;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_93260){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_93260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_93229,inst_93228,inst_93228__$1,inst_93229__$1,state_val_93243,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93268 = f__9319__auto__.call(null);
(statearr_93268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_93268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_93229,inst_93228,inst_93228__$1,inst_93229__$1,state_val_93243,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(verified_path,rc,inst_93229,inst_93228,inst_93228__$1,inst_93229__$1,state_val_93243,c__9318__auto__))
})();
var inst_93231 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_93228__$1);
var state_93242__$1 = (function (){var statearr_93269 = state_93242;
(statearr_93269[(7)] = inst_93229__$1);

(statearr_93269[(8)] = inst_93228__$1);

(statearr_93269[(9)] = inst_93230);

return statearr_93269;
})();
if(cljs.core.truth_(inst_93231)){
var statearr_93270_93286 = state_93242__$1;
(statearr_93270_93286[(1)] = (3));

} else {
var statearr_93271_93287 = state_93242__$1;
(statearr_93271_93287[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93243 === (3))){
var inst_93229 = (state_93242[(7)]);
var inst_93228 = (state_93242[(8)]);
var state_93242__$1 = state_93242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93242__$1,(6),inst_93229,inst_93228);
} else {
if((state_val_93243 === (4))){
var inst_93228 = (state_93242[(8)]);
var inst_93230 = (state_93242[(9)]);
var inst_93236 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_93228,inst_93230);
var state_93242__$1 = state_93242;
var statearr_93272_93288 = state_93242__$1;
(statearr_93272_93288[(2)] = inst_93236);

(statearr_93272_93288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93243 === (5))){
var inst_93229 = (state_93242[(7)]);
var inst_93238 = (state_93242[(2)]);
var state_93242__$1 = (function (){var statearr_93273 = state_93242;
(statearr_93273[(10)] = inst_93238);

return statearr_93273;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93242__$1,(7),inst_93229);
} else {
if((state_val_93243 === (6))){
var inst_93234 = (state_93242[(2)]);
var state_93242__$1 = state_93242;
var statearr_93274_93289 = state_93242__$1;
(statearr_93274_93289[(2)] = inst_93234);

(statearr_93274_93289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93243 === (7))){
var inst_93240 = (state_93242[(2)]);
var state_93242__$1 = state_93242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93242__$1,inst_93240);
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
var statearr_93278 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_93278[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_93278[(1)] = (1));

return statearr_93278;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_93242){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93279){if((e93279 instanceof Object)){
var ex__9301__auto__ = e93279;
var statearr_93280_93290 = state_93242;
(statearr_93280_93290[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93291 = state_93242;
state_93242 = G__93291;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_93242){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_93242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93281 = f__9319__auto__.call(null);
(statearr_93281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_93281;
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
return (function (state_93326){
var state_val_93327 = (state_93326[(1)]);
if((state_val_93327 === (1))){
var state_93326__$1 = state_93326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93326__$1,(2),c);
} else {
if((state_val_93327 === (2))){
var inst_93317 = (state_93326[(7)]);
var inst_93317__$1 = (state_93326[(2)]);
var inst_93318 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_93317__$1);
var state_93326__$1 = (function (){var statearr_93328 = state_93326;
(statearr_93328[(7)] = inst_93317__$1);

return statearr_93328;
})();
if(cljs.core.truth_(inst_93318)){
var statearr_93329_93340 = state_93326__$1;
(statearr_93329_93340[(1)] = (3));

} else {
var statearr_93330_93341 = state_93326__$1;
(statearr_93330_93341[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93327 === (3))){
var inst_93317 = (state_93326[(7)]);
var inst_93320 = cljs.core.println.call(null,inst_93317);
var state_93326__$1 = state_93326;
var statearr_93331_93342 = state_93326__$1;
(statearr_93331_93342[(2)] = inst_93320);

(statearr_93331_93342[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93327 === (4))){
var inst_93317 = (state_93326[(7)]);
var inst_93322 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_93317);
var state_93326__$1 = state_93326;
var statearr_93332_93343 = state_93326__$1;
(statearr_93332_93343[(2)] = inst_93322);

(statearr_93332_93343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93327 === (5))){
var inst_93324 = (state_93326[(2)]);
var state_93326__$1 = state_93326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93326__$1,inst_93324);
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
var statearr_93336 = [null,null,null,null,null,null,null,null];
(statearr_93336[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_93336[(1)] = (1));

return statearr_93336;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_93326){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93337){if((e93337 instanceof Object)){
var ex__9301__auto__ = e93337;
var statearr_93338_93344 = state_93326;
(statearr_93338_93344[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93345 = state_93326;
state_93326 = G__93345;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_93326){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_93326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93339 = f__9319__auto__.call(null);
(statearr_93339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_93339;
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
return (function (state_93374){
var state_val_93375 = (state_93374[(1)]);
if((state_val_93375 === (1))){
var state_93374__$1 = state_93374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93374__$1,(2),rc,line);
} else {
if((state_val_93375 === (2))){
var inst_93372 = (state_93374[(2)]);
var state_93374__$1 = state_93374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93374__$1,inst_93372);
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
var statearr_93379 = [null,null,null,null,null,null,null];
(statearr_93379[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_93379[(1)] = (1));

return statearr_93379;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_93374){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93380){if((e93380 instanceof Object)){
var ex__9301__auto__ = e93380;
var statearr_93381_93396 = state_93374;
(statearr_93381_93396[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93397 = state_93374;
state_93374 = G__93397;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_93374){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_93374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_93382 = f__9319__auto__.call(null);
(statearr_93382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_93382;
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
return (function (state_93387){
var state_val_93388 = (state_93387[(1)]);
if((state_val_93388 === (1))){
var inst_93383 = [cljs.core.str("ERROR: Invalid line: there is nothing to link "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_93387__$1 = state_93387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93387__$1,(2),rc,inst_93383);
} else {
if((state_val_93388 === (2))){
var inst_93385 = (state_93387[(2)]);
var state_93387__$1 = state_93387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93387__$1,inst_93385);
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
var statearr_93392 = [null,null,null,null,null,null,null];
(statearr_93392[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_93392[(1)] = (1));

return statearr_93392;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_93387){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93393){if((e93393 instanceof Object)){
var ex__9301__auto__ = e93393;
var statearr_93394_93398 = state_93387;
(statearr_93394_93398[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93399 = state_93387;
state_93387 = G__93399;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_93387){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_93387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_93395 = f__9319__auto__.call(null);
(statearr_93395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_93395;
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
drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking = (function drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking(chan_linkable_path){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_93470){
var state_val_93471 = (state_93470[(1)]);
if((state_val_93471 === (1))){
var state_93470__$1 = state_93470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93470__$1,(2),chan_linkable_path);
} else {
if((state_val_93471 === (2))){
var inst_93456 = (state_93470[(7)]);
var inst_93457 = (state_93470[(8)]);
var inst_93456__$1 = (state_93470[(2)]);
var inst_93457__$1 = cljs.core.async.chan.call(null,(1));
var inst_93458 = (function (){var linkable_path = inst_93456__$1;
var rc = inst_93457__$1;
return ((function (linkable_path,rc,inst_93456,inst_93457,inst_93456__$1,inst_93457__$1,state_val_93471,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_93456,inst_93457,inst_93456__$1,inst_93457__$1,state_val_93471,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_93456,inst_93457,inst_93456__$1,inst_93457__$1,state_val_93471,c__9318__auto__){
return (function (state_93476){
var state_val_93477 = (state_93476[(1)]);
if((state_val_93477 === (1))){
var inst_93472 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_93476__$1 = state_93476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93476__$1,(2),rc,inst_93472);
} else {
if((state_val_93477 === (2))){
var inst_93474 = (state_93476[(2)]);
var state_93476__$1 = state_93476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93476__$1,inst_93474);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_93456,inst_93457,inst_93456__$1,inst_93457__$1,state_val_93471,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_93456,inst_93457,inst_93456__$1,inst_93457__$1,state_val_93471,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_93481 = [null,null,null,null,null,null,null];
(statearr_93481[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_93481[(1)] = (1));

return statearr_93481;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_93476){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93482){if((e93482 instanceof Object)){
var ex__9301__auto__ = e93482;
var statearr_93483_93510 = state_93476;
(statearr_93483_93510[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93511 = state_93476;
state_93476 = G__93511;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_93476){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_93476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_93456,inst_93457,inst_93456__$1,inst_93457__$1,state_val_93471,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93484 = f__9319__auto__.call(null);
(statearr_93484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_93484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_93456,inst_93457,inst_93456__$1,inst_93457__$1,state_val_93471,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_93456,inst_93457,inst_93456__$1,inst_93457__$1,state_val_93471,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_93456,inst_93457,inst_93456__$1,inst_93457__$1,state_val_93471,c__9318__auto__){
return (function (state_93488){
var state_val_93489 = (state_93488[(1)]);
if((state_val_93489 === (1))){
var state_93488__$1 = state_93488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93488__$1,(2),rc,linkable_path);
} else {
if((state_val_93489 === (2))){
var inst_93486 = (state_93488[(2)]);
var state_93488__$1 = state_93488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93488__$1,inst_93486);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_93456,inst_93457,inst_93456__$1,inst_93457__$1,state_val_93471,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_93456,inst_93457,inst_93456__$1,inst_93457__$1,state_val_93471,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_93493 = [null,null,null,null,null,null,null];
(statearr_93493[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_93493[(1)] = (1));

return statearr_93493;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_93488){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93494){if((e93494 instanceof Object)){
var ex__9301__auto__ = e93494;
var statearr_93495_93512 = state_93488;
(statearr_93495_93512[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93513 = state_93488;
state_93488 = G__93513;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_93488){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_93488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_93456,inst_93457,inst_93456__$1,inst_93457__$1,state_val_93471,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93496 = f__9319__auto__.call(null);
(statearr_93496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_93496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_93456,inst_93457,inst_93456__$1,inst_93457__$1,state_val_93471,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_93456,inst_93457,inst_93456__$1,inst_93457__$1,state_val_93471,c__9318__auto__))
})();
var inst_93459 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_93456__$1);
var state_93470__$1 = (function (){var statearr_93497 = state_93470;
(statearr_93497[(7)] = inst_93456__$1);

(statearr_93497[(8)] = inst_93457__$1);

(statearr_93497[(9)] = inst_93458);

return statearr_93497;
})();
if(cljs.core.truth_(inst_93459)){
var statearr_93498_93514 = state_93470__$1;
(statearr_93498_93514[(1)] = (3));

} else {
var statearr_93499_93515 = state_93470__$1;
(statearr_93499_93515[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93471 === (3))){
var inst_93456 = (state_93470[(7)]);
var inst_93457 = (state_93470[(8)]);
var state_93470__$1 = state_93470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93470__$1,(6),inst_93457,inst_93456);
} else {
if((state_val_93471 === (4))){
var inst_93456 = (state_93470[(7)]);
var inst_93458 = (state_93470[(9)]);
var inst_93464 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_93456,inst_93458);
var state_93470__$1 = state_93470;
var statearr_93500_93516 = state_93470__$1;
(statearr_93500_93516[(2)] = inst_93464);

(statearr_93500_93516[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93471 === (5))){
var inst_93457 = (state_93470[(8)]);
var inst_93466 = (state_93470[(2)]);
var state_93470__$1 = (function (){var statearr_93501 = state_93470;
(statearr_93501[(10)] = inst_93466);

return statearr_93501;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93470__$1,(7),inst_93457);
} else {
if((state_val_93471 === (6))){
var inst_93462 = (state_93470[(2)]);
var state_93470__$1 = state_93470;
var statearr_93502_93517 = state_93470__$1;
(statearr_93502_93517[(2)] = inst_93462);

(statearr_93502_93517[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93471 === (7))){
var inst_93468 = (state_93470[(2)]);
var state_93470__$1 = state_93470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93470__$1,inst_93468);
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
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_93506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_93506[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_93506[(1)] = (1));

return statearr_93506;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_93470){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93507){if((e93507 instanceof Object)){
var ex__9301__auto__ = e93507;
var statearr_93508_93518 = state_93470;
(statearr_93508_93518[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93519 = state_93470;
state_93470 = G__93519;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_93470){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_93470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93509 = f__9319__auto__.call(null);
(statearr_93509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_93509;
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
return (function (state_93590){
var state_val_93591 = (state_93590[(1)]);
if((state_val_93591 === (1))){
var state_93590__$1 = state_93590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93590__$1,(2),chan_linkable_path_that_wants_linking);
} else {
if((state_val_93591 === (2))){
var inst_93577 = (state_93590[(7)]);
var inst_93576 = (state_93590[(8)]);
var inst_93576__$1 = (state_93590[(2)]);
var inst_93577__$1 = cljs.core.async.chan.call(null,(1));
var inst_93578 = (function (){var linkable_path = inst_93576__$1;
var rc = inst_93577__$1;
return ((function (linkable_path,rc,inst_93577,inst_93576,inst_93576__$1,inst_93577__$1,state_val_93591,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_93577,inst_93576,inst_93576__$1,inst_93577__$1,state_val_93591,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_93577,inst_93576,inst_93576__$1,inst_93577__$1,state_val_93591,c__9318__auto__){
return (function (state_93596){
var state_val_93597 = (state_93596[(1)]);
if((state_val_93597 === (1))){
var inst_93592 = [cljs.core.str("ERROR: "),cljs.core.str(linkable_path),cljs.core.str(" already has a version on this system; please remove this file and re-run this command.")].join('');
var state_93596__$1 = state_93596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93596__$1,(2),rc,inst_93592);
} else {
if((state_val_93597 === (2))){
var inst_93594 = (state_93596[(2)]);
var state_93596__$1 = state_93596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93596__$1,inst_93594);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_93577,inst_93576,inst_93576__$1,inst_93577__$1,state_val_93591,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_93577,inst_93576,inst_93576__$1,inst_93577__$1,state_val_93591,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_93601 = [null,null,null,null,null,null,null];
(statearr_93601[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_93601[(1)] = (1));

return statearr_93601;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_93596){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93602){if((e93602 instanceof Object)){
var ex__9301__auto__ = e93602;
var statearr_93603_93630 = state_93596;
(statearr_93603_93630[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93631 = state_93596;
state_93596 = G__93631;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_93596){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_93596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_93577,inst_93576,inst_93576__$1,inst_93577__$1,state_val_93591,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93604 = f__9319__auto__.call(null);
(statearr_93604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_93604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_93577,inst_93576,inst_93576__$1,inst_93577__$1,state_val_93591,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_93577,inst_93576,inst_93576__$1,inst_93577__$1,state_val_93591,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_93577,inst_93576,inst_93576__$1,inst_93577__$1,state_val_93591,c__9318__auto__){
return (function (state_93608){
var state_val_93609 = (state_93608[(1)]);
if((state_val_93609 === (1))){
var state_93608__$1 = state_93608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93608__$1,(2),rc,linkable_path);
} else {
if((state_val_93609 === (2))){
var inst_93606 = (state_93608[(2)]);
var state_93608__$1 = state_93608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93608__$1,inst_93606);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_93577,inst_93576,inst_93576__$1,inst_93577__$1,state_val_93591,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_93577,inst_93576,inst_93576__$1,inst_93577__$1,state_val_93591,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_93613 = [null,null,null,null,null,null,null];
(statearr_93613[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_93613[(1)] = (1));

return statearr_93613;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_93608){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93614){if((e93614 instanceof Object)){
var ex__9301__auto__ = e93614;
var statearr_93615_93632 = state_93608;
(statearr_93615_93632[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93633 = state_93608;
state_93608 = G__93633;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_93608){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_93608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_93577,inst_93576,inst_93576__$1,inst_93577__$1,state_val_93591,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93616 = f__9319__auto__.call(null);
(statearr_93616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_93616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_93577,inst_93576,inst_93576__$1,inst_93577__$1,state_val_93591,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_93577,inst_93576,inst_93576__$1,inst_93577__$1,state_val_93591,c__9318__auto__))
})();
var inst_93579 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_93576__$1);
var state_93590__$1 = (function (){var statearr_93617 = state_93590;
(statearr_93617[(9)] = inst_93578);

(statearr_93617[(7)] = inst_93577__$1);

(statearr_93617[(8)] = inst_93576__$1);

return statearr_93617;
})();
if(cljs.core.truth_(inst_93579)){
var statearr_93618_93634 = state_93590__$1;
(statearr_93618_93634[(1)] = (3));

} else {
var statearr_93619_93635 = state_93590__$1;
(statearr_93619_93635[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93591 === (3))){
var inst_93577 = (state_93590[(7)]);
var inst_93576 = (state_93590[(8)]);
var state_93590__$1 = state_93590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93590__$1,(6),inst_93577,inst_93576);
} else {
if((state_val_93591 === (4))){
var inst_93578 = (state_93590[(9)]);
var inst_93576 = (state_93590[(8)]);
var inst_93584 = drop_dot.core.pure_js.pathExists(inst_93576,inst_93578);
var state_93590__$1 = state_93590;
var statearr_93620_93636 = state_93590__$1;
(statearr_93620_93636[(2)] = inst_93584);

(statearr_93620_93636[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93591 === (5))){
var inst_93577 = (state_93590[(7)]);
var inst_93586 = (state_93590[(2)]);
var state_93590__$1 = (function (){var statearr_93621 = state_93590;
(statearr_93621[(10)] = inst_93586);

return statearr_93621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93590__$1,(7),inst_93577);
} else {
if((state_val_93591 === (6))){
var inst_93582 = (state_93590[(2)]);
var state_93590__$1 = state_93590;
var statearr_93622_93637 = state_93590__$1;
(statearr_93622_93637[(2)] = inst_93582);

(statearr_93622_93637[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93591 === (7))){
var inst_93588 = (state_93590[(2)]);
var state_93590__$1 = state_93590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93590__$1,inst_93588);
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
var statearr_93626 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_93626[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_93626[(1)] = (1));

return statearr_93626;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_93590){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93627){if((e93627 instanceof Object)){
var ex__9301__auto__ = e93627;
var statearr_93628_93638 = state_93590;
(statearr_93628_93638[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93639 = state_93590;
state_93590 = G__93639;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_93590){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_93590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93629 = f__9319__auto__.call(null);
(statearr_93629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_93629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.link_chan_path_that_needs_linking = (function drop_dot$core$link_chan_path_that_needs_linking(c){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_93692){
var state_val_93693 = (state_93692[(1)]);
if((state_val_93693 === (1))){
var state_93692__$1 = state_93692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93692__$1,(2),c);
} else {
if((state_val_93693 === (2))){
var inst_93675 = (state_93692[(7)]);
var inst_93674 = (state_93692[(2)]);
var inst_93675__$1 = drop_dot.core.pure_js.localExpandHomeDir(inst_93674);
var inst_93676 = drop_dot.core.pure_js.getDirname(inst_93675__$1);
var inst_93677 = drop_dot.core.pure_js.getBasename(inst_93675__$1);
var inst_93678 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_93675__$1);
var state_93692__$1 = (function (){var statearr_93694 = state_93692;
(statearr_93694[(7)] = inst_93675__$1);

(statearr_93694[(8)] = inst_93677);

(statearr_93694[(9)] = inst_93676);

return statearr_93694;
})();
if(cljs.core.truth_(inst_93678)){
var statearr_93695_93706 = state_93692__$1;
(statearr_93695_93706[(1)] = (3));

} else {
var statearr_93696_93707 = state_93692__$1;
(statearr_93696_93707[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93693 === (3))){
var inst_93675 = (state_93692[(7)]);
var inst_93680 = [cljs.core.str(inst_93675)].join('');
var inst_93681 = cljs.core.println.call(null,inst_93680);
var state_93692__$1 = state_93692;
var statearr_93697_93708 = state_93692__$1;
(statearr_93697_93708[(2)] = inst_93681);

(statearr_93697_93708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93693 === (4))){
var inst_93675 = (state_93692[(7)]);
var inst_93677 = (state_93692[(8)]);
var inst_93676 = (state_93692[(9)]);
var inst_93683 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_93684 = [cljs.core.str("mkdir -vp "),cljs.core.str(inst_93676)].join('');
var inst_93685 = [cljs.core.str("ln -sv ~/Dropbox/.drop-dot/"),cljs.core.str(inst_93677),cljs.core.str(" "),cljs.core.str(inst_93675)].join('');
var inst_93686 = [inst_93684,inst_93685];
var inst_93687 = (new cljs.core.PersistentVector(null,2,(5),inst_93683,inst_93686,null));
var inst_93688 = drop_dot.core.exec_vec_of_commands.call(null,inst_93687);
var state_93692__$1 = state_93692;
var statearr_93698_93709 = state_93692__$1;
(statearr_93698_93709[(2)] = inst_93688);

(statearr_93698_93709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93693 === (5))){
var inst_93690 = (state_93692[(2)]);
var state_93692__$1 = state_93692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93692__$1,inst_93690);
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
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_93702 = [null,null,null,null,null,null,null,null,null,null];
(statearr_93702[(0)] = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__);

(statearr_93702[(1)] = (1));

return statearr_93702;
});
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_93692){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93703){if((e93703 instanceof Object)){
var ex__9301__auto__ = e93703;
var statearr_93704_93710 = state_93692;
(statearr_93704_93710[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93711 = state_93692;
state_93692 = G__93711;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__ = function(state_93692){
switch(arguments.length){
case 0:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_93692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93705 = f__9319__auto__.call(null);
(statearr_93705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_93705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
return drop_dot.core.link_chan_path_that_needs_linking.call(null,drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,drop_dot.core.line__GT_chan_linkable_path.call(null,line))));
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_93788){
var state_val_93789 = (state_93788[(1)]);
if((state_val_93789 === (7))){
var inst_93784 = (state_93788[(2)]);
var state_93788__$1 = state_93788;
var statearr_93791_93816 = state_93788__$1;
(statearr_93791_93816[(2)] = inst_93784);

(statearr_93791_93816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93789 === (1))){
var inst_93764 = chan_config;
var state_93788__$1 = (function (){var statearr_93792 = state_93788;
(statearr_93792[(7)] = inst_93764);

return statearr_93792;
})();
var statearr_93793_93817 = state_93788__$1;
(statearr_93793_93817[(2)] = null);

(statearr_93793_93817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93789 === (4))){
var inst_93767 = (state_93788[(8)]);
var inst_93767__$1 = (state_93788[(2)]);
var state_93788__$1 = (function (){var statearr_93794 = state_93788;
(statearr_93794[(8)] = inst_93767__$1);

return statearr_93794;
})();
if(cljs.core.truth_(inst_93767__$1)){
var statearr_93795_93818 = state_93788__$1;
(statearr_93795_93818[(1)] = (5));

} else {
var statearr_93796_93819 = state_93788__$1;
(statearr_93796_93819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93789 === (13))){
var inst_93764 = (state_93788[(7)]);
var inst_93780 = (state_93788[(2)]);
var tmp93790 = inst_93764;
var inst_93764__$1 = tmp93790;
var state_93788__$1 = (function (){var statearr_93797 = state_93788;
(statearr_93797[(7)] = inst_93764__$1);

(statearr_93797[(9)] = inst_93780);

return statearr_93797;
})();
var statearr_93798_93820 = state_93788__$1;
(statearr_93798_93820[(2)] = null);

(statearr_93798_93820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93789 === (6))){
var state_93788__$1 = state_93788;
var statearr_93799_93821 = state_93788__$1;
(statearr_93799_93821[(2)] = null);

(statearr_93799_93821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93789 === (3))){
var inst_93786 = (state_93788[(2)]);
var state_93788__$1 = state_93788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93788__$1,inst_93786);
} else {
if((state_val_93789 === (12))){
var state_93788__$1 = state_93788;
var statearr_93800_93822 = state_93788__$1;
(statearr_93800_93822[(2)] = null);

(statearr_93800_93822[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93789 === (2))){
var inst_93764 = (state_93788[(7)]);
var state_93788__$1 = state_93788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93788__$1,(4),inst_93764);
} else {
if((state_val_93789 === (11))){
var inst_93767 = (state_93788[(8)]);
var inst_93777 = drop_dot.core.link_line.call(null,inst_93767);
var state_93788__$1 = state_93788;
var statearr_93801_93823 = state_93788__$1;
(statearr_93801_93823[(2)] = inst_93777);

(statearr_93801_93823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93789 === (9))){
var state_93788__$1 = state_93788;
var statearr_93802_93824 = state_93788__$1;
(statearr_93802_93824[(2)] = null);

(statearr_93802_93824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93789 === (5))){
var inst_93769 = cljs.core._EQ_.call(null,cmd,"drop");
var state_93788__$1 = state_93788;
if(inst_93769){
var statearr_93803_93825 = state_93788__$1;
(statearr_93803_93825[(1)] = (8));

} else {
var statearr_93804_93826 = state_93788__$1;
(statearr_93804_93826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93789 === (10))){
var inst_93774 = (state_93788[(2)]);
var inst_93775 = cljs.core._EQ_.call(null,cmd,"link");
var state_93788__$1 = (function (){var statearr_93805 = state_93788;
(statearr_93805[(10)] = inst_93774);

return statearr_93805;
})();
if(inst_93775){
var statearr_93806_93827 = state_93788__$1;
(statearr_93806_93827[(1)] = (11));

} else {
var statearr_93807_93828 = state_93788__$1;
(statearr_93807_93828[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93789 === (8))){
var inst_93767 = (state_93788[(8)]);
var inst_93771 = drop_dot.core.drop_line.call(null,inst_93767);
var state_93788__$1 = state_93788;
var statearr_93808_93829 = state_93788__$1;
(statearr_93808_93829[(2)] = inst_93771);

(statearr_93808_93829[(1)] = (10));


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
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0 = (function (){
var statearr_93812 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_93812[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__);

(statearr_93812[(1)] = (1));

return statearr_93812;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1 = (function (state_93788){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93813){if((e93813 instanceof Object)){
var ex__9301__auto__ = e93813;
var statearr_93814_93830 = state_93788;
(statearr_93814_93830[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93831 = state_93788;
state_93788 = G__93831;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__ = function(state_93788){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1.call(this,state_93788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_93815 = f__9319__auto__.call(null);
(statearr_93815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_93815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__9318__auto___93928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto___93928,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto___93928,c){
return (function (state_93892){
var state_val_93893 = (state_93892[(1)]);
if((state_val_93893 === (1))){
var inst_93882 = (state_93892[(7)]);
var inst_93881 = (state_93892[(8)]);
var inst_93880 = (state_93892[(9)]);
var inst_93880__$1 = cljs.nodejs.require.call(null,"../js/pure-js.js");
var inst_93881__$1 = cljs.core.async.chan.call(null,(1));
var inst_93882__$1 = (function (){var res = inst_93880__$1;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_93881__$1;
return ((function (res,config_path,wcc,inst_93882,inst_93881,inst_93880,inst_93880__$1,inst_93881__$1,state_val_93893,c__9318__auto___93928,c){
return (function (error,res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,inst_93882,inst_93881,inst_93880,inst_93880__$1,inst_93881__$1,state_val_93893,c__9318__auto___93928,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,inst_93882,inst_93881,inst_93880,inst_93880__$1,inst_93881__$1,state_val_93893,c__9318__auto___93928,c){
return (function (state_93897){
var state_val_93898 = (state_93897[(1)]);
if((state_val_93898 === (1))){
var state_93897__$1 = state_93897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93897__$1,(2),wcc,res__$1);
} else {
if((state_val_93898 === (2))){
var inst_93895 = (state_93897[(2)]);
var state_93897__$1 = state_93897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93897__$1,inst_93895);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,inst_93882,inst_93881,inst_93880,inst_93880__$1,inst_93881__$1,state_val_93893,c__9318__auto___93928,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_93882,inst_93881,inst_93880,inst_93880__$1,inst_93881__$1,state_val_93893,c__9318__auto___93928,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_93902 = [null,null,null,null,null,null,null];
(statearr_93902[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_93902[(1)] = (1));

return statearr_93902;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_93897){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93903){if((e93903 instanceof Object)){
var ex__9301__auto__ = e93903;
var statearr_93904_93929 = state_93897;
(statearr_93904_93929[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93930 = state_93897;
state_93897 = G__93930;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_93897){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_93897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_93882,inst_93881,inst_93880,inst_93880__$1,inst_93881__$1,state_val_93893,c__9318__auto___93928,c))
})();
var state__9320__auto__ = (function (){var statearr_93905 = f__9319__auto__.call(null);
(statearr_93905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_93905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,inst_93882,inst_93881,inst_93880,inst_93880__$1,inst_93881__$1,state_val_93893,c__9318__auto___93928,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,inst_93882,inst_93881,inst_93880,inst_93880__$1,inst_93881__$1,state_val_93893,c__9318__auto___93928,c))
})();
var inst_93883 = inst_93880__$1.getFileLineCount("~/Dropbox/.drop-dot/.drop-dot",inst_93882__$1);
var state_93892__$1 = (function (){var statearr_93906 = state_93892;
(statearr_93906[(7)] = inst_93882__$1);

(statearr_93906[(8)] = inst_93881__$1);

(statearr_93906[(10)] = inst_93883);

(statearr_93906[(9)] = inst_93880__$1);

return statearr_93906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93892__$1,(2),inst_93881__$1);
} else {
if((state_val_93893 === (2))){
var inst_93882 = (state_93892[(7)]);
var inst_93881 = (state_93892[(8)]);
var inst_93883 = (state_93892[(10)]);
var inst_93880 = (state_93892[(9)]);
var inst_93885 = (state_93892[(2)]);
var inst_93886 = [cljs.core.str(inst_93885)].join('');
var inst_93887 = parseInt(inst_93886);
var inst_93888 = (function (){var res = inst_93880;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_93881;
var wcc_jammer = inst_93882;
var get_wc = inst_93883;
var lines = inst_93887;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_93882,inst_93881,inst_93883,inst_93880,inst_93885,inst_93886,inst_93887,state_val_93893,c__9318__auto___93928,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_93882,inst_93881,inst_93883,inst_93880,inst_93885,inst_93886,inst_93887,state_val_93893,c__9318__auto___93928,c))
})();
var inst_93889 = (function (){var res = inst_93880;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_93881;
var wcc_jammer = inst_93882;
var get_wc = inst_93883;
var lines = inst_93887;
var close_if_done = inst_93888;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_93882,inst_93881,inst_93883,inst_93880,inst_93885,inst_93886,inst_93887,inst_93888,state_val_93893,c__9318__auto___93928,c){
return (function (res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_93882,inst_93881,inst_93883,inst_93880,inst_93885,inst_93886,inst_93887,inst_93888,state_val_93893,c__9318__auto___93928,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_93882,inst_93881,inst_93883,inst_93880,inst_93885,inst_93886,inst_93887,inst_93888,state_val_93893,c__9318__auto___93928,c){
return (function (state_93911){
var state_val_93912 = (state_93911[(1)]);
if((state_val_93912 === (1))){
var state_93911__$1 = state_93911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93911__$1,(2),c,res__$1);
} else {
if((state_val_93912 === (2))){
var inst_93908 = (state_93911[(2)]);
var inst_93909 = close_if_done.call(null);
var state_93911__$1 = (function (){var statearr_93913 = state_93911;
(statearr_93913[(7)] = inst_93908);

return statearr_93913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93911__$1,inst_93909);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_93882,inst_93881,inst_93883,inst_93880,inst_93885,inst_93886,inst_93887,inst_93888,state_val_93893,c__9318__auto___93928,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_93882,inst_93881,inst_93883,inst_93880,inst_93885,inst_93886,inst_93887,inst_93888,state_val_93893,c__9318__auto___93928,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_93917 = [null,null,null,null,null,null,null,null];
(statearr_93917[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_93917[(1)] = (1));

return statearr_93917;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_93911){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93918){if((e93918 instanceof Object)){
var ex__9301__auto__ = e93918;
var statearr_93919_93931 = state_93911;
(statearr_93919_93931[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93932 = state_93911;
state_93911 = G__93932;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_93911){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_93911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_93882,inst_93881,inst_93883,inst_93880,inst_93885,inst_93886,inst_93887,inst_93888,state_val_93893,c__9318__auto___93928,c))
})();
var state__9320__auto__ = (function (){var statearr_93920 = f__9319__auto__.call(null);
(statearr_93920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_93920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_93882,inst_93881,inst_93883,inst_93880,inst_93885,inst_93886,inst_93887,inst_93888,state_val_93893,c__9318__auto___93928,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_93882,inst_93881,inst_93883,inst_93880,inst_93885,inst_93886,inst_93887,inst_93888,state_val_93893,c__9318__auto___93928,c))
})();
var inst_93890 = inst_93880.getLinesFromFile("~/Dropbox/.drop-dot/.drop-dot",inst_93889);
var state_93892__$1 = state_93892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93892__$1,inst_93890);
} else {
return null;
}
}
});})(c__9318__auto___93928,c))
;
return ((function (switch__9297__auto__,c__9318__auto___93928,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_93924 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_93924[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_93924[(1)] = (1));

return statearr_93924;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_93892){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e93925){if((e93925 instanceof Object)){
var ex__9301__auto__ = e93925;
var statearr_93926_93933 = state_93892;
(statearr_93926_93933[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93934 = state_93892;
state_93892 = G__93934;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_93892){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_93892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto___93928,c))
})();
var state__9320__auto__ = (function (){var statearr_93927 = f__9319__auto__.call(null);
(statearr_93927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto___93928);

return statearr_93927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto___93928,c))
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
var len__7018__auto___93936 = arguments.length;
var i__7019__auto___93937 = (0);
while(true){
if((i__7019__auto___93937 < len__7018__auto___93936)){
args__7025__auto__.push((arguments[i__7019__auto___93937]));

var G__93938 = (i__7019__auto___93937 + (1));
i__7019__auto___93937 = G__93938;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq93935){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq93935));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map