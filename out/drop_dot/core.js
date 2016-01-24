// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('cljs.test');
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
return (function (state_57790){
var state_val_57791 = (state_57790[(1)]);
if((state_val_57791 === (1))){
var state_57790__$1 = state_57790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57790__$1,(2),d,res__$1);
} else {
if((state_val_57791 === (2))){
var inst_57788 = (state_57790[(2)]);
var state_57790__$1 = state_57790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57790__$1,inst_57788);
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
var statearr_57795 = [null,null,null,null,null,null,null];
(statearr_57795[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__);

(statearr_57795[(1)] = (1));

return statearr_57795;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1 = (function (state_57790){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_57790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e57796){if((e57796 instanceof Object)){
var ex__10431__auto__ = e57796;
var statearr_57797_57799 = state_57790;
(statearr_57797_57799[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57800 = state_57790;
state_57790 = G__57800;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__ = function(state_57790){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1.call(this,state_57790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__,res,d))
})();
var state__10450__auto__ = (function (){var statearr_57798 = f__10449__auto__.call(null);
(statearr_57798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_57798;
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
return (function (state_57828){
var state_val_57829 = (state_57828[(1)]);
if((state_val_57829 === (1))){
var inst_57821 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_57828__$1 = state_57828;
if(cljs.core.truth_(inst_57821)){
var statearr_57830_57841 = state_57828__$1;
(statearr_57830_57841[(1)] = (2));

} else {
var statearr_57831_57842 = state_57828__$1;
(statearr_57831_57842[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57829 === (2))){
var state_57828__$1 = state_57828;
var statearr_57832_57843 = state_57828__$1;
(statearr_57832_57843[(2)] = line);

(statearr_57832_57843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57829 === (3))){
var inst_57824 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_57828__$1 = state_57828;
var statearr_57833_57844 = state_57828__$1;
(statearr_57833_57844[(2)] = inst_57824);

(statearr_57833_57844[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57829 === (4))){
var inst_57826 = (state_57828[(2)]);
var state_57828__$1 = state_57828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57828__$1,inst_57826);
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
var statearr_57837 = [null,null,null,null,null,null,null];
(statearr_57837[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__);

(statearr_57837[(1)] = (1));

return statearr_57837;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1 = (function (state_57828){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_57828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e57838){if((e57838 instanceof Object)){
var ex__10431__auto__ = e57838;
var statearr_57839_57845 = state_57828;
(statearr_57839_57845[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57846 = state_57828;
state_57828 = G__57846;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__ = function(state_57828){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1.call(this,state_57828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_57840 = f__10449__auto__.call(null);
(statearr_57840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_57840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
drop_dot.core.chan_verified_path__GT_chan_verified_droppee = (function drop_dot$core$chan_verified_path__GT_chan_verified_droppee(){
return null;
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
return (function (state_57926){
var state_val_57927 = (state_57926[(1)]);
if((state_val_57927 === (7))){
var inst_57921 = (state_57926[(2)]);
var inst_57922 = cljs.core.println.call(null,"done");
var state_57926__$1 = (function (){var statearr_57929 = state_57926;
(statearr_57929[(7)] = inst_57921);

return statearr_57929;
})();
var statearr_57930_57955 = state_57926__$1;
(statearr_57930_57955[(2)] = inst_57922);

(statearr_57930_57955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57927 === (1))){
var inst_57901 = chan_config;
var state_57926__$1 = (function (){var statearr_57931 = state_57926;
(statearr_57931[(8)] = inst_57901);

return statearr_57931;
})();
var statearr_57932_57956 = state_57926__$1;
(statearr_57932_57956[(2)] = null);

(statearr_57932_57956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57927 === (4))){
var inst_57904 = (state_57926[(9)]);
var inst_57904__$1 = (state_57926[(2)]);
var state_57926__$1 = (function (){var statearr_57933 = state_57926;
(statearr_57933[(9)] = inst_57904__$1);

return statearr_57933;
})();
if(cljs.core.truth_(inst_57904__$1)){
var statearr_57934_57957 = state_57926__$1;
(statearr_57934_57957[(1)] = (5));

} else {
var statearr_57935_57958 = state_57926__$1;
(statearr_57935_57958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57927 === (13))){
var inst_57901 = (state_57926[(8)]);
var inst_57917 = (state_57926[(2)]);
var tmp57928 = inst_57901;
var inst_57901__$1 = tmp57928;
var state_57926__$1 = (function (){var statearr_57936 = state_57926;
(statearr_57936[(8)] = inst_57901__$1);

(statearr_57936[(10)] = inst_57917);

return statearr_57936;
})();
var statearr_57937_57959 = state_57926__$1;
(statearr_57937_57959[(2)] = null);

(statearr_57937_57959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57927 === (6))){
var state_57926__$1 = state_57926;
var statearr_57938_57960 = state_57926__$1;
(statearr_57938_57960[(2)] = null);

(statearr_57938_57960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57927 === (3))){
var inst_57924 = (state_57926[(2)]);
var state_57926__$1 = state_57926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57926__$1,inst_57924);
} else {
if((state_val_57927 === (12))){
var state_57926__$1 = state_57926;
var statearr_57939_57961 = state_57926__$1;
(statearr_57939_57961[(2)] = null);

(statearr_57939_57961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57927 === (2))){
var inst_57901 = (state_57926[(8)]);
var state_57926__$1 = state_57926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57926__$1,(4),inst_57901);
} else {
if((state_val_57927 === (11))){
var inst_57904 = (state_57926[(9)]);
var inst_57914 = drop_dot.core.link_line.call(null,inst_57904);
var state_57926__$1 = state_57926;
var statearr_57940_57962 = state_57926__$1;
(statearr_57940_57962[(2)] = inst_57914);

(statearr_57940_57962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57927 === (9))){
var state_57926__$1 = state_57926;
var statearr_57941_57963 = state_57926__$1;
(statearr_57941_57963[(2)] = null);

(statearr_57941_57963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57927 === (5))){
var inst_57906 = cljs.core._EQ_.call(null,cmd,"drop");
var state_57926__$1 = state_57926;
if(inst_57906){
var statearr_57942_57964 = state_57926__$1;
(statearr_57942_57964[(1)] = (8));

} else {
var statearr_57943_57965 = state_57926__$1;
(statearr_57943_57965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57927 === (10))){
var inst_57911 = (state_57926[(2)]);
var inst_57912 = cljs.core._EQ_.call(null,cmd,"link");
var state_57926__$1 = (function (){var statearr_57944 = state_57926;
(statearr_57944[(11)] = inst_57911);

return statearr_57944;
})();
if(inst_57912){
var statearr_57945_57966 = state_57926__$1;
(statearr_57945_57966[(1)] = (11));

} else {
var statearr_57946_57967 = state_57926__$1;
(statearr_57946_57967[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57927 === (8))){
var inst_57904 = (state_57926[(9)]);
var inst_57908 = drop_dot.core.drop_line.call(null,inst_57904);
var state_57926__$1 = state_57926;
var statearr_57947_57968 = state_57926__$1;
(statearr_57947_57968[(2)] = inst_57908);

(statearr_57947_57968[(1)] = (10));


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
var statearr_57951 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57951[(0)] = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__);

(statearr_57951[(1)] = (1));

return statearr_57951;
});
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____1 = (function (state_57926){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_57926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e57952){if((e57952 instanceof Object)){
var ex__10431__auto__ = e57952;
var statearr_57953_57969 = state_57926;
(statearr_57953_57969[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57970 = state_57926;
state_57926 = G__57970;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__ = function(state_57926){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____1.call(this,state_57926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____0;
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_57954 = f__10449__auto__.call(null);
(statearr_57954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_57954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10448__auto___58067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___58067,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___58067,c){
return (function (state_58031){
var state_val_58032 = (state_58031[(1)]);
if((state_val_58032 === (1))){
var inst_58020 = (state_58031[(7)]);
var inst_58021 = (state_58031[(8)]);
var inst_58019 = (state_58031[(9)]);
var inst_58019__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_58020__$1 = cljs.core.async.chan.call(null,(1));
var inst_58021__$1 = (function (){var res = inst_58019__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_58020__$1;
return ((function (res,config_path,wcc,inst_58020,inst_58021,inst_58019,inst_58019__$1,inst_58020__$1,state_val_58032,c__10448__auto___58067,c){
return (function (error,res__$1){
var c__10448__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto____$1,res,config_path,wcc,inst_58020,inst_58021,inst_58019,inst_58019__$1,inst_58020__$1,state_val_58032,c__10448__auto___58067,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto____$1,res,config_path,wcc,inst_58020,inst_58021,inst_58019,inst_58019__$1,inst_58020__$1,state_val_58032,c__10448__auto___58067,c){
return (function (state_58036){
var state_val_58037 = (state_58036[(1)]);
if((state_val_58037 === (1))){
var state_58036__$1 = state_58036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58036__$1,(2),wcc,res__$1);
} else {
if((state_val_58037 === (2))){
var inst_58034 = (state_58036[(2)]);
var state_58036__$1 = state_58036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58036__$1,inst_58034);
} else {
return null;
}
}
});})(c__10448__auto____$1,res,config_path,wcc,inst_58020,inst_58021,inst_58019,inst_58019__$1,inst_58020__$1,state_val_58032,c__10448__auto___58067,c))
;
return ((function (switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,inst_58020,inst_58021,inst_58019,inst_58019__$1,inst_58020__$1,state_val_58032,c__10448__auto___58067,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0 = (function (){
var statearr_58041 = [null,null,null,null,null,null,null];
(statearr_58041[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10428__auto__);

(statearr_58041[(1)] = (1));

return statearr_58041;
});
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1 = (function (state_58036){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_58036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e58042){if((e58042 instanceof Object)){
var ex__10431__auto__ = e58042;
var statearr_58043_58068 = state_58036;
(statearr_58043_58068[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58069 = state_58036;
state_58036 = G__58069;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = function(state_58036){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1.call(this,state_58036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,inst_58020,inst_58021,inst_58019,inst_58019__$1,inst_58020__$1,state_val_58032,c__10448__auto___58067,c))
})();
var state__10450__auto__ = (function (){var statearr_58044 = f__10449__auto__.call(null);
(statearr_58044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto____$1);

return statearr_58044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto____$1,res,config_path,wcc,inst_58020,inst_58021,inst_58019,inst_58019__$1,inst_58020__$1,state_val_58032,c__10448__auto___58067,c))
);

return c__10448__auto____$1;
});
;})(res,config_path,wcc,inst_58020,inst_58021,inst_58019,inst_58019__$1,inst_58020__$1,state_val_58032,c__10448__auto___58067,c))
})();
var inst_58022 = inst_58019__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_58021__$1);
var state_58031__$1 = (function (){var statearr_58045 = state_58031;
(statearr_58045[(7)] = inst_58020__$1);

(statearr_58045[(8)] = inst_58021__$1);

(statearr_58045[(9)] = inst_58019__$1);

(statearr_58045[(10)] = inst_58022);

return statearr_58045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58031__$1,(2),inst_58020__$1);
} else {
if((state_val_58032 === (2))){
var inst_58020 = (state_58031[(7)]);
var inst_58021 = (state_58031[(8)]);
var inst_58019 = (state_58031[(9)]);
var inst_58022 = (state_58031[(10)]);
var inst_58024 = (state_58031[(2)]);
var inst_58025 = [cljs.core.str(inst_58024)].join('');
var inst_58026 = parseInt(inst_58025);
var inst_58027 = (function (){var res = inst_58019;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_58020;
var wcc_jammer = inst_58021;
var get_wc = inst_58022;
var lines = inst_58026;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_58020,inst_58021,inst_58019,inst_58022,inst_58024,inst_58025,inst_58026,state_val_58032,c__10448__auto___58067,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_58020,inst_58021,inst_58019,inst_58022,inst_58024,inst_58025,inst_58026,state_val_58032,c__10448__auto___58067,c))
})();
var inst_58028 = (function (){var res = inst_58019;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_58020;
var wcc_jammer = inst_58021;
var get_wc = inst_58022;
var lines = inst_58026;
var close_if_done = inst_58027;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_58020,inst_58021,inst_58019,inst_58022,inst_58024,inst_58025,inst_58026,inst_58027,state_val_58032,c__10448__auto___58067,c){
return (function (res__$1){
var c__10448__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_58020,inst_58021,inst_58019,inst_58022,inst_58024,inst_58025,inst_58026,inst_58027,state_val_58032,c__10448__auto___58067,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_58020,inst_58021,inst_58019,inst_58022,inst_58024,inst_58025,inst_58026,inst_58027,state_val_58032,c__10448__auto___58067,c){
return (function (state_58050){
var state_val_58051 = (state_58050[(1)]);
if((state_val_58051 === (1))){
var state_58050__$1 = state_58050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58050__$1,(2),c,res__$1);
} else {
if((state_val_58051 === (2))){
var inst_58047 = (state_58050[(2)]);
var inst_58048 = close_if_done.call(null);
var state_58050__$1 = (function (){var statearr_58052 = state_58050;
(statearr_58052[(7)] = inst_58047);

return statearr_58052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58050__$1,inst_58048);
} else {
return null;
}
}
});})(c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_58020,inst_58021,inst_58019,inst_58022,inst_58024,inst_58025,inst_58026,inst_58027,state_val_58032,c__10448__auto___58067,c))
;
return ((function (switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_58020,inst_58021,inst_58019,inst_58022,inst_58024,inst_58025,inst_58026,inst_58027,state_val_58032,c__10448__auto___58067,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0 = (function (){
var statearr_58056 = [null,null,null,null,null,null,null,null];
(statearr_58056[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10428__auto__);

(statearr_58056[(1)] = (1));

return statearr_58056;
});
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1 = (function (state_58050){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_58050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e58057){if((e58057 instanceof Object)){
var ex__10431__auto__ = e58057;
var statearr_58058_58070 = state_58050;
(statearr_58058_58070[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58071 = state_58050;
state_58050 = G__58071;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = function(state_58050){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1.call(this,state_58050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_58020,inst_58021,inst_58019,inst_58022,inst_58024,inst_58025,inst_58026,inst_58027,state_val_58032,c__10448__auto___58067,c))
})();
var state__10450__auto__ = (function (){var statearr_58059 = f__10449__auto__.call(null);
(statearr_58059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto____$1);

return statearr_58059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_58020,inst_58021,inst_58019,inst_58022,inst_58024,inst_58025,inst_58026,inst_58027,state_val_58032,c__10448__auto___58067,c))
);

return c__10448__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_58020,inst_58021,inst_58019,inst_58022,inst_58024,inst_58025,inst_58026,inst_58027,state_val_58032,c__10448__auto___58067,c))
})();
var inst_58029 = inst_58019.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_58028);
var state_58031__$1 = state_58031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58031__$1,inst_58029);
} else {
return null;
}
}
});})(c__10448__auto___58067,c))
;
return ((function (switch__10427__auto__,c__10448__auto___58067,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0 = (function (){
var statearr_58063 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58063[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10428__auto__);

(statearr_58063[(1)] = (1));

return statearr_58063;
});
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1 = (function (state_58031){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_58031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e58064){if((e58064 instanceof Object)){
var ex__10431__auto__ = e58064;
var statearr_58065_58072 = state_58031;
(statearr_58065_58072[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58073 = state_58031;
state_58031 = G__58073;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = function(state_58031){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1.call(this,state_58031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___58067,c))
})();
var state__10450__auto__ = (function (){var statearr_58066 = f__10449__auto__.call(null);
(statearr_58066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___58067);

return statearr_58066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___58067,c))
);


return c;
});
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__9165__auto__ = [];
var len__9158__auto___58075 = arguments.length;
var i__9159__auto___58076 = (0);
while(true){
if((i__9159__auto___58076 < len__9158__auto___58075)){
args__9165__auto__.push((arguments[i__9159__auto___58076]));

var G__58077 = (i__9159__auto___58076 + (1));
i__9159__auto___58076 = G__58077;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq58074){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58074));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map