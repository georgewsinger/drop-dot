// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
drop_dot.core.path_exists_QMARK_ = (function drop_dot$core$path_exists_QMARK_(path){
return null;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10448__auto___28008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___28008,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___28008,c){
return (function (state_27972){
var state_val_27973 = (state_27972[(1)]);
if((state_val_27973 === (1))){
var inst_27961 = (state_27972[(7)]);
var inst_27962 = (state_27972[(8)]);
var inst_27960 = (state_27972[(9)]);
var inst_27960__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_27961__$1 = cljs.core.async.chan.call(null,(1));
var inst_27962__$1 = (function (){var res = inst_27960__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_27961__$1;
return ((function (res,config_path,wcc,inst_27961,inst_27962,inst_27960,inst_27960__$1,inst_27961__$1,state_val_27973,c__10448__auto___28008,c){
return (function (error,res__$1){
var c__10448__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto____$1,res,config_path,wcc,inst_27961,inst_27962,inst_27960,inst_27960__$1,inst_27961__$1,state_val_27973,c__10448__auto___28008,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto____$1,res,config_path,wcc,inst_27961,inst_27962,inst_27960,inst_27960__$1,inst_27961__$1,state_val_27973,c__10448__auto___28008,c){
return (function (state_27977){
var state_val_27978 = (state_27977[(1)]);
if((state_val_27978 === (1))){
var state_27977__$1 = state_27977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27977__$1,(2),wcc,res__$1);
} else {
if((state_val_27978 === (2))){
var inst_27975 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27977__$1,inst_27975);
} else {
return null;
}
}
});})(c__10448__auto____$1,res,config_path,wcc,inst_27961,inst_27962,inst_27960,inst_27960__$1,inst_27961__$1,state_val_27973,c__10448__auto___28008,c))
;
return ((function (switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,inst_27961,inst_27962,inst_27960,inst_27960__$1,inst_27961__$1,state_val_27973,c__10448__auto___28008,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0 = (function (){
var statearr_27982 = [null,null,null,null,null,null,null];
(statearr_27982[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10428__auto__);

(statearr_27982[(1)] = (1));

return statearr_27982;
});
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1 = (function (state_27977){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_27977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e27983){if((e27983 instanceof Object)){
var ex__10431__auto__ = e27983;
var statearr_27984_28009 = state_27977;
(statearr_27984_28009[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28010 = state_27977;
state_27977 = G__28010;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = function(state_27977){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1.call(this,state_27977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,inst_27961,inst_27962,inst_27960,inst_27960__$1,inst_27961__$1,state_val_27973,c__10448__auto___28008,c))
})();
var state__10450__auto__ = (function (){var statearr_27985 = f__10449__auto__.call(null);
(statearr_27985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto____$1);

return statearr_27985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto____$1,res,config_path,wcc,inst_27961,inst_27962,inst_27960,inst_27960__$1,inst_27961__$1,state_val_27973,c__10448__auto___28008,c))
);

return c__10448__auto____$1;
});
;})(res,config_path,wcc,inst_27961,inst_27962,inst_27960,inst_27960__$1,inst_27961__$1,state_val_27973,c__10448__auto___28008,c))
})();
var inst_27963 = inst_27960__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_27962__$1);
var state_27972__$1 = (function (){var statearr_27986 = state_27972;
(statearr_27986[(7)] = inst_27961__$1);

(statearr_27986[(8)] = inst_27962__$1);

(statearr_27986[(9)] = inst_27960__$1);

(statearr_27986[(10)] = inst_27963);

return statearr_27986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27972__$1,(2),inst_27961__$1);
} else {
if((state_val_27973 === (2))){
var inst_27961 = (state_27972[(7)]);
var inst_27962 = (state_27972[(8)]);
var inst_27960 = (state_27972[(9)]);
var inst_27963 = (state_27972[(10)]);
var inst_27965 = (state_27972[(2)]);
var inst_27966 = [cljs.core.str(inst_27965)].join('');
var inst_27967 = parseInt(inst_27966);
var inst_27968 = (function (){var res = inst_27960;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_27961;
var wcc_jammer = inst_27962;
var get_wc = inst_27963;
var lines = inst_27967;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_27961,inst_27962,inst_27960,inst_27963,inst_27965,inst_27966,inst_27967,state_val_27973,c__10448__auto___28008,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_27961,inst_27962,inst_27960,inst_27963,inst_27965,inst_27966,inst_27967,state_val_27973,c__10448__auto___28008,c))
})();
var inst_27969 = (function (){var res = inst_27960;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_27961;
var wcc_jammer = inst_27962;
var get_wc = inst_27963;
var lines = inst_27967;
var close_if_done = inst_27968;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27961,inst_27962,inst_27960,inst_27963,inst_27965,inst_27966,inst_27967,inst_27968,state_val_27973,c__10448__auto___28008,c){
return (function (res__$1){
var c__10448__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27961,inst_27962,inst_27960,inst_27963,inst_27965,inst_27966,inst_27967,inst_27968,state_val_27973,c__10448__auto___28008,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27961,inst_27962,inst_27960,inst_27963,inst_27965,inst_27966,inst_27967,inst_27968,state_val_27973,c__10448__auto___28008,c){
return (function (state_27991){
var state_val_27992 = (state_27991[(1)]);
if((state_val_27992 === (1))){
var state_27991__$1 = state_27991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27991__$1,(2),c,res__$1);
} else {
if((state_val_27992 === (2))){
var inst_27988 = (state_27991[(2)]);
var inst_27989 = close_if_done.call(null);
var state_27991__$1 = (function (){var statearr_27993 = state_27991;
(statearr_27993[(7)] = inst_27988);

return statearr_27993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27991__$1,inst_27989);
} else {
return null;
}
}
});})(c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27961,inst_27962,inst_27960,inst_27963,inst_27965,inst_27966,inst_27967,inst_27968,state_val_27973,c__10448__auto___28008,c))
;
return ((function (switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27961,inst_27962,inst_27960,inst_27963,inst_27965,inst_27966,inst_27967,inst_27968,state_val_27973,c__10448__auto___28008,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0 = (function (){
var statearr_27997 = [null,null,null,null,null,null,null,null];
(statearr_27997[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10428__auto__);

(statearr_27997[(1)] = (1));

return statearr_27997;
});
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1 = (function (state_27991){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_27991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e27998){if((e27998 instanceof Object)){
var ex__10431__auto__ = e27998;
var statearr_27999_28011 = state_27991;
(statearr_27999_28011[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28012 = state_27991;
state_27991 = G__28012;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = function(state_27991){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1.call(this,state_27991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27961,inst_27962,inst_27960,inst_27963,inst_27965,inst_27966,inst_27967,inst_27968,state_val_27973,c__10448__auto___28008,c))
})();
var state__10450__auto__ = (function (){var statearr_28000 = f__10449__auto__.call(null);
(statearr_28000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto____$1);

return statearr_28000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27961,inst_27962,inst_27960,inst_27963,inst_27965,inst_27966,inst_27967,inst_27968,state_val_27973,c__10448__auto___28008,c))
);

return c__10448__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27961,inst_27962,inst_27960,inst_27963,inst_27965,inst_27966,inst_27967,inst_27968,state_val_27973,c__10448__auto___28008,c))
})();
var inst_27970 = inst_27960.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_27969);
var state_27972__$1 = state_27972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27972__$1,inst_27970);
} else {
return null;
}
}
});})(c__10448__auto___28008,c))
;
return ((function (switch__10427__auto__,c__10448__auto___28008,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0 = (function (){
var statearr_28004 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28004[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10428__auto__);

(statearr_28004[(1)] = (1));

return statearr_28004;
});
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1 = (function (state_27972){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_27972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e28005){if((e28005 instanceof Object)){
var ex__10431__auto__ = e28005;
var statearr_28006_28013 = state_27972;
(statearr_28006_28013[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28014 = state_27972;
state_27972 = G__28014;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = function(state_27972){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1.call(this,state_27972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___28008,c))
})();
var state__10450__auto__ = (function (){var statearr_28007 = f__10449__auto__.call(null);
(statearr_28007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___28008);

return statearr_28007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___28008,c))
);


return c;
});
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__9165__auto__ = [];
var len__9158__auto___28016 = arguments.length;
var i__9159__auto___28017 = (0);
while(true){
if((i__9159__auto___28017 < len__9158__auto___28016)){
args__9165__auto__.push((arguments[i__9159__auto___28017]));

var G__28018 = (i__9159__auto___28017 + (1));
i__9159__auto___28017 = G__28018;
continue;
} else {
}
break;
}

var argseq__9166__auto__ = ((((0) < args__9165__auto__.length))?(new cljs.core.IndexedSeq(args__9165__auto__.slice((0)),(0))):null);
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__9166__auto__);
});

drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = cljs.nodejs.require.call(null,"minimist");
var argv = minimist.call(null,cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,args)));
var e = (function (){var or__8100__auto__ = argv.e;
if(cljs.core.truth_(or__8100__auto__)){
return or__8100__auto__;
} else {
return "e option";
}
})();
var arg = (function (){var or__8100__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__8100__auto__)){
return or__8100__auto__;
} else {
return "$HOME";
}
})();
cljs.core.println.call(null,argv);

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

drop_dot.core._main.cljs$lang$applyTo = (function (seq28015){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28015));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map