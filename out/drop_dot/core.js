// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
drop_dot.core.chan_path_exists_QMARK_ = (function drop_dot$core$chan_path_exists_QMARK_(line){
var res = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var d = cljs.core.async.chan.call(null);
res.confirmPathExists(line,((function (res,d){
return (function (res__$1){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__,res,d){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__,res,d){
return (function (state_52701){
var state_val_52702 = (state_52701[(1)]);
if((state_val_52702 === (1))){
var state_52701__$1 = state_52701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52701__$1,(2),d,res__$1);
} else {
if((state_val_52702 === (2))){
var inst_52699 = (state_52701[(2)]);
var state_52701__$1 = state_52701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52701__$1,inst_52699);
} else {
return null;
}
}
});})(c__10448__auto__,res,d))
;
return ((function (switch__10427__auto__,c__10448__auto__,res,d){
return (function() {
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0 = (function (){
var statearr_52706 = [null,null,null,null,null,null,null];
(statearr_52706[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__);

(statearr_52706[(1)] = (1));

return statearr_52706;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1 = (function (state_52701){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_52701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e52707){if((e52707 instanceof Object)){
var ex__10431__auto__ = e52707;
var statearr_52708_52710 = state_52701;
(statearr_52708_52710[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52711 = state_52701;
state_52701 = G__52711;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__ = function(state_52701){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1.call(this,state_52701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__,res,d))
})();
var state__10450__auto__ = (function (){var statearr_52709 = f__10449__auto__.call(null);
(statearr_52709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_52709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__,res,d))
);

return c__10448__auto__;
});})(res,d))
);

return d;
});
drop_dot.core.line__GT_chan_verified_path = (function drop_dot$core$line__GT_chan_verified_path(line){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__){
return (function (state_52739){
var state_val_52740 = (state_52739[(1)]);
if((state_val_52740 === (1))){
var inst_52732 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_52739__$1 = state_52739;
if(cljs.core.truth_(inst_52732)){
var statearr_52741_52752 = state_52739__$1;
(statearr_52741_52752[(1)] = (2));

} else {
var statearr_52742_52753 = state_52739__$1;
(statearr_52742_52753[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52740 === (2))){
var state_52739__$1 = state_52739;
var statearr_52743_52754 = state_52739__$1;
(statearr_52743_52754[(2)] = line);

(statearr_52743_52754[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52740 === (3))){
var inst_52735 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_52739__$1 = state_52739;
var statearr_52744_52755 = state_52739__$1;
(statearr_52744_52755[(2)] = inst_52735);

(statearr_52744_52755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52740 === (4))){
var inst_52737 = (state_52739[(2)]);
var state_52739__$1 = state_52739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52739__$1,inst_52737);
} else {
return null;
}
}
}
}
});})(c__10448__auto__))
;
return ((function (switch__10427__auto__,c__10448__auto__){
return (function() {
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__ = null;
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0 = (function (){
var statearr_52748 = [null,null,null,null,null,null,null];
(statearr_52748[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__);

(statearr_52748[(1)] = (1));

return statearr_52748;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1 = (function (state_52739){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_52739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e52749){if((e52749 instanceof Object)){
var ex__10431__auto__ = e52749;
var statearr_52750_52756 = state_52739;
(statearr_52750_52756[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52757 = state_52739;
state_52739 = G__52757;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__ = function(state_52739){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1.call(this,state_52739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_52751 = f__10449__auto__.call(null);
(statearr_52751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_52751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
drop_dot.core.drop_line = (function drop_dot$core$drop_line(line){
return drop_dot.core.drop_a_chan_verified_droppee.call(null,drop_dot.core.chan_verified_path__GT_chan_verified_droppee.call(null,drop_dot.core.line__GT_chan_verified_path.call(null,line)));
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
return drop_dot.core.link_a_chan_verified_linkee.call(null,drop_dot.core.line__GT_chan_verified_linkee.call(null,line));
});
drop_dot.core.chan_config__GT_exec_drop_dot = (function drop_dot$core$chan_config__GT_exec_drop_dot(chan_config,cmd){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__){
return (function (state_52837){
var state_val_52838 = (state_52837[(1)]);
if((state_val_52838 === (7))){
var inst_52832 = (state_52837[(2)]);
var inst_52833 = cljs.core.println.call(null,"done");
var state_52837__$1 = (function (){var statearr_52840 = state_52837;
(statearr_52840[(7)] = inst_52832);

return statearr_52840;
})();
var statearr_52841_52866 = state_52837__$1;
(statearr_52841_52866[(2)] = inst_52833);

(statearr_52841_52866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52838 === (1))){
var inst_52812 = chan_config;
var state_52837__$1 = (function (){var statearr_52842 = state_52837;
(statearr_52842[(8)] = inst_52812);

return statearr_52842;
})();
var statearr_52843_52867 = state_52837__$1;
(statearr_52843_52867[(2)] = null);

(statearr_52843_52867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52838 === (4))){
var inst_52815 = (state_52837[(9)]);
var inst_52815__$1 = (state_52837[(2)]);
var state_52837__$1 = (function (){var statearr_52844 = state_52837;
(statearr_52844[(9)] = inst_52815__$1);

return statearr_52844;
})();
if(cljs.core.truth_(inst_52815__$1)){
var statearr_52845_52868 = state_52837__$1;
(statearr_52845_52868[(1)] = (5));

} else {
var statearr_52846_52869 = state_52837__$1;
(statearr_52846_52869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52838 === (13))){
var inst_52812 = (state_52837[(8)]);
var inst_52828 = (state_52837[(2)]);
var tmp52839 = inst_52812;
var inst_52812__$1 = tmp52839;
var state_52837__$1 = (function (){var statearr_52847 = state_52837;
(statearr_52847[(8)] = inst_52812__$1);

(statearr_52847[(10)] = inst_52828);

return statearr_52847;
})();
var statearr_52848_52870 = state_52837__$1;
(statearr_52848_52870[(2)] = null);

(statearr_52848_52870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52838 === (6))){
var state_52837__$1 = state_52837;
var statearr_52849_52871 = state_52837__$1;
(statearr_52849_52871[(2)] = null);

(statearr_52849_52871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52838 === (3))){
var inst_52835 = (state_52837[(2)]);
var state_52837__$1 = state_52837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52837__$1,inst_52835);
} else {
if((state_val_52838 === (12))){
var state_52837__$1 = state_52837;
var statearr_52850_52872 = state_52837__$1;
(statearr_52850_52872[(2)] = null);

(statearr_52850_52872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52838 === (2))){
var inst_52812 = (state_52837[(8)]);
var state_52837__$1 = state_52837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52837__$1,(4),inst_52812);
} else {
if((state_val_52838 === (11))){
var inst_52815 = (state_52837[(9)]);
var inst_52825 = drop_dot.core.link_line.call(null,inst_52815);
var state_52837__$1 = state_52837;
var statearr_52851_52873 = state_52837__$1;
(statearr_52851_52873[(2)] = inst_52825);

(statearr_52851_52873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52838 === (9))){
var state_52837__$1 = state_52837;
var statearr_52852_52874 = state_52837__$1;
(statearr_52852_52874[(2)] = null);

(statearr_52852_52874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52838 === (5))){
var inst_52817 = cljs.core._EQ_.call(null,cmd,"drop");
var state_52837__$1 = state_52837;
if(inst_52817){
var statearr_52853_52875 = state_52837__$1;
(statearr_52853_52875[(1)] = (8));

} else {
var statearr_52854_52876 = state_52837__$1;
(statearr_52854_52876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52838 === (10))){
var inst_52822 = (state_52837[(2)]);
var inst_52823 = cljs.core._EQ_.call(null,cmd,"link");
var state_52837__$1 = (function (){var statearr_52855 = state_52837;
(statearr_52855[(11)] = inst_52822);

return statearr_52855;
})();
if(inst_52823){
var statearr_52856_52877 = state_52837__$1;
(statearr_52856_52877[(1)] = (11));

} else {
var statearr_52857_52878 = state_52837__$1;
(statearr_52857_52878[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52838 === (8))){
var inst_52815 = (state_52837[(9)]);
var inst_52819 = drop_dot.core.drop_line.call(null,inst_52815);
var state_52837__$1 = state_52837;
var statearr_52858_52879 = state_52837__$1;
(statearr_52858_52879[(2)] = inst_52819);

(statearr_52858_52879[(1)] = (10));


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
});})(c__10448__auto__))
;
return ((function (switch__10427__auto__,c__10448__auto__){
return (function() {
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____0 = (function (){
var statearr_52862 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52862[(0)] = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__);

(statearr_52862[(1)] = (1));

return statearr_52862;
});
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____1 = (function (state_52837){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_52837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e52863){if((e52863 instanceof Object)){
var ex__10431__auto__ = e52863;
var statearr_52864_52880 = state_52837;
(statearr_52864_52880[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52881 = state_52837;
state_52837 = G__52881;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__ = function(state_52837){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____1.call(this,state_52837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____0;
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_52865 = f__10449__auto__.call(null);
(statearr_52865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_52865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10448__auto___52978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___52978,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___52978,c){
return (function (state_52942){
var state_val_52943 = (state_52942[(1)]);
if((state_val_52943 === (1))){
var inst_52930 = (state_52942[(7)]);
var inst_52932 = (state_52942[(8)]);
var inst_52931 = (state_52942[(9)]);
var inst_52930__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_52931__$1 = cljs.core.async.chan.call(null,(1));
var inst_52932__$1 = (function (){var res = inst_52930__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_52931__$1;
return ((function (res,config_path,wcc,inst_52930,inst_52932,inst_52931,inst_52930__$1,inst_52931__$1,state_val_52943,c__10448__auto___52978,c){
return (function (error,res__$1){
var c__10448__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto____$1,res,config_path,wcc,inst_52930,inst_52932,inst_52931,inst_52930__$1,inst_52931__$1,state_val_52943,c__10448__auto___52978,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto____$1,res,config_path,wcc,inst_52930,inst_52932,inst_52931,inst_52930__$1,inst_52931__$1,state_val_52943,c__10448__auto___52978,c){
return (function (state_52947){
var state_val_52948 = (state_52947[(1)]);
if((state_val_52948 === (1))){
var state_52947__$1 = state_52947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52947__$1,(2),wcc,res__$1);
} else {
if((state_val_52948 === (2))){
var inst_52945 = (state_52947[(2)]);
var state_52947__$1 = state_52947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52947__$1,inst_52945);
} else {
return null;
}
}
});})(c__10448__auto____$1,res,config_path,wcc,inst_52930,inst_52932,inst_52931,inst_52930__$1,inst_52931__$1,state_val_52943,c__10448__auto___52978,c))
;
return ((function (switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,inst_52930,inst_52932,inst_52931,inst_52930__$1,inst_52931__$1,state_val_52943,c__10448__auto___52978,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0 = (function (){
var statearr_52952 = [null,null,null,null,null,null,null];
(statearr_52952[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10428__auto__);

(statearr_52952[(1)] = (1));

return statearr_52952;
});
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1 = (function (state_52947){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_52947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e52953){if((e52953 instanceof Object)){
var ex__10431__auto__ = e52953;
var statearr_52954_52979 = state_52947;
(statearr_52954_52979[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52980 = state_52947;
state_52947 = G__52980;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = function(state_52947){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1.call(this,state_52947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,inst_52930,inst_52932,inst_52931,inst_52930__$1,inst_52931__$1,state_val_52943,c__10448__auto___52978,c))
})();
var state__10450__auto__ = (function (){var statearr_52955 = f__10449__auto__.call(null);
(statearr_52955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto____$1);

return statearr_52955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto____$1,res,config_path,wcc,inst_52930,inst_52932,inst_52931,inst_52930__$1,inst_52931__$1,state_val_52943,c__10448__auto___52978,c))
);

return c__10448__auto____$1;
});
;})(res,config_path,wcc,inst_52930,inst_52932,inst_52931,inst_52930__$1,inst_52931__$1,state_val_52943,c__10448__auto___52978,c))
})();
var inst_52933 = inst_52930__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_52932__$1);
var state_52942__$1 = (function (){var statearr_52956 = state_52942;
(statearr_52956[(7)] = inst_52930__$1);

(statearr_52956[(10)] = inst_52933);

(statearr_52956[(8)] = inst_52932__$1);

(statearr_52956[(9)] = inst_52931__$1);

return statearr_52956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52942__$1,(2),inst_52931__$1);
} else {
if((state_val_52943 === (2))){
var inst_52930 = (state_52942[(7)]);
var inst_52933 = (state_52942[(10)]);
var inst_52932 = (state_52942[(8)]);
var inst_52931 = (state_52942[(9)]);
var inst_52935 = (state_52942[(2)]);
var inst_52936 = [cljs.core.str(inst_52935)].join('');
var inst_52937 = parseInt(inst_52936);
var inst_52938 = (function (){var res = inst_52930;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_52931;
var wcc_jammer = inst_52932;
var get_wc = inst_52933;
var lines = inst_52937;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_52930,inst_52933,inst_52932,inst_52931,inst_52935,inst_52936,inst_52937,state_val_52943,c__10448__auto___52978,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_52930,inst_52933,inst_52932,inst_52931,inst_52935,inst_52936,inst_52937,state_val_52943,c__10448__auto___52978,c))
})();
var inst_52939 = (function (){var res = inst_52930;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_52931;
var wcc_jammer = inst_52932;
var get_wc = inst_52933;
var lines = inst_52937;
var close_if_done = inst_52938;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_52930,inst_52933,inst_52932,inst_52931,inst_52935,inst_52936,inst_52937,inst_52938,state_val_52943,c__10448__auto___52978,c){
return (function (res__$1){
var c__10448__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_52930,inst_52933,inst_52932,inst_52931,inst_52935,inst_52936,inst_52937,inst_52938,state_val_52943,c__10448__auto___52978,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_52930,inst_52933,inst_52932,inst_52931,inst_52935,inst_52936,inst_52937,inst_52938,state_val_52943,c__10448__auto___52978,c){
return (function (state_52961){
var state_val_52962 = (state_52961[(1)]);
if((state_val_52962 === (1))){
var state_52961__$1 = state_52961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52961__$1,(2),c,res__$1);
} else {
if((state_val_52962 === (2))){
var inst_52958 = (state_52961[(2)]);
var inst_52959 = close_if_done.call(null);
var state_52961__$1 = (function (){var statearr_52963 = state_52961;
(statearr_52963[(7)] = inst_52958);

return statearr_52963;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52961__$1,inst_52959);
} else {
return null;
}
}
});})(c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_52930,inst_52933,inst_52932,inst_52931,inst_52935,inst_52936,inst_52937,inst_52938,state_val_52943,c__10448__auto___52978,c))
;
return ((function (switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_52930,inst_52933,inst_52932,inst_52931,inst_52935,inst_52936,inst_52937,inst_52938,state_val_52943,c__10448__auto___52978,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0 = (function (){
var statearr_52967 = [null,null,null,null,null,null,null,null];
(statearr_52967[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10428__auto__);

(statearr_52967[(1)] = (1));

return statearr_52967;
});
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1 = (function (state_52961){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_52961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e52968){if((e52968 instanceof Object)){
var ex__10431__auto__ = e52968;
var statearr_52969_52981 = state_52961;
(statearr_52969_52981[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52982 = state_52961;
state_52961 = G__52982;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = function(state_52961){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1.call(this,state_52961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_52930,inst_52933,inst_52932,inst_52931,inst_52935,inst_52936,inst_52937,inst_52938,state_val_52943,c__10448__auto___52978,c))
})();
var state__10450__auto__ = (function (){var statearr_52970 = f__10449__auto__.call(null);
(statearr_52970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto____$1);

return statearr_52970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_52930,inst_52933,inst_52932,inst_52931,inst_52935,inst_52936,inst_52937,inst_52938,state_val_52943,c__10448__auto___52978,c))
);

return c__10448__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_52930,inst_52933,inst_52932,inst_52931,inst_52935,inst_52936,inst_52937,inst_52938,state_val_52943,c__10448__auto___52978,c))
})();
var inst_52940 = inst_52930.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_52939);
var state_52942__$1 = state_52942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52942__$1,inst_52940);
} else {
return null;
}
}
});})(c__10448__auto___52978,c))
;
return ((function (switch__10427__auto__,c__10448__auto___52978,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0 = (function (){
var statearr_52974 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52974[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10428__auto__);

(statearr_52974[(1)] = (1));

return statearr_52974;
});
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1 = (function (state_52942){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_52942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e52975){if((e52975 instanceof Object)){
var ex__10431__auto__ = e52975;
var statearr_52976_52983 = state_52942;
(statearr_52976_52983[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52984 = state_52942;
state_52942 = G__52984;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = function(state_52942){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1.call(this,state_52942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___52978,c))
})();
var state__10450__auto__ = (function (){var statearr_52977 = f__10449__auto__.call(null);
(statearr_52977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___52978);

return statearr_52977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___52978,c))
);


return c;
});
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__9165__auto__ = [];
var len__9158__auto___52986 = arguments.length;
var i__9159__auto___52987 = (0);
while(true){
if((i__9159__auto___52987 < len__9158__auto___52986)){
args__9165__auto__.push((arguments[i__9159__auto___52987]));

var G__52988 = (i__9159__auto___52987 + (1));
i__9159__auto___52987 = G__52988;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq52985){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52985));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map