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
return (function (state_32856){
var state_val_32857 = (state_32856[(1)]);
if((state_val_32857 === (1))){
var state_32856__$1 = state_32856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32856__$1,(2),d,res__$1);
} else {
if((state_val_32857 === (2))){
var inst_32854 = (state_32856[(2)]);
var state_32856__$1 = state_32856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32856__$1,inst_32854);
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
var statearr_32861 = [null,null,null,null,null,null,null];
(statearr_32861[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__);

(statearr_32861[(1)] = (1));

return statearr_32861;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1 = (function (state_32856){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_32856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e32862){if((e32862 instanceof Object)){
var ex__10431__auto__ = e32862;
var statearr_32863_32865 = state_32856;
(statearr_32863_32865[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32866 = state_32856;
state_32856 = G__32866;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__ = function(state_32856){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1.call(this,state_32856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__,res,d))
})();
var state__10450__auto__ = (function (){var statearr_32864 = f__10449__auto__.call(null);
(statearr_32864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_32864;
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
return (function (state_32894){
var state_val_32895 = (state_32894[(1)]);
if((state_val_32895 === (1))){
var inst_32887 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_32894__$1 = state_32894;
if(cljs.core.truth_(inst_32887)){
var statearr_32896_32907 = state_32894__$1;
(statearr_32896_32907[(1)] = (2));

} else {
var statearr_32897_32908 = state_32894__$1;
(statearr_32897_32908[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (2))){
var state_32894__$1 = state_32894;
var statearr_32898_32909 = state_32894__$1;
(statearr_32898_32909[(2)] = line);

(statearr_32898_32909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (3))){
var inst_32890 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_32894__$1 = state_32894;
var statearr_32899_32910 = state_32894__$1;
(statearr_32899_32910[(2)] = inst_32890);

(statearr_32899_32910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (4))){
var inst_32892 = (state_32894[(2)]);
var state_32894__$1 = state_32894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32894__$1,inst_32892);
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
var statearr_32903 = [null,null,null,null,null,null,null];
(statearr_32903[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__);

(statearr_32903[(1)] = (1));

return statearr_32903;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1 = (function (state_32894){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_32894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e32904){if((e32904 instanceof Object)){
var ex__10431__auto__ = e32904;
var statearr_32905_32911 = state_32894;
(statearr_32905_32911[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32912 = state_32894;
state_32894 = G__32912;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__ = function(state_32894){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1.call(this,state_32894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_32906 = f__10449__auto__.call(null);
(statearr_32906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_32906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
drop_dot.core.c_test = cljs.core.async.chan.call(null);

drop_dot.core.c_test = drop_dot.core.line__GT_chan_verified_path.call(null,"line");

var c__10448__auto___32926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___32926){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___32926){
return (function (state_32917){
var state_val_32918 = (state_32917[(1)]);
if((state_val_32918 === (1))){
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32917__$1,(2),drop_dot.core.c_test);
} else {
if((state_val_32918 === (2))){
var inst_32914 = (state_32917[(2)]);
var inst_32915 = cljs.core.println.call(null,inst_32914);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32917__$1,inst_32915);
} else {
return null;
}
}
});})(c__10448__auto___32926))
;
return ((function (switch__10427__auto__,c__10448__auto___32926){
return (function() {
var drop_dot$core$state_machine__10428__auto__ = null;
var drop_dot$core$state_machine__10428__auto____0 = (function (){
var statearr_32922 = [null,null,null,null,null,null,null];
(statearr_32922[(0)] = drop_dot$core$state_machine__10428__auto__);

(statearr_32922[(1)] = (1));

return statearr_32922;
});
var drop_dot$core$state_machine__10428__auto____1 = (function (state_32917){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_32917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e32923){if((e32923 instanceof Object)){
var ex__10431__auto__ = e32923;
var statearr_32924_32927 = state_32917;
(statearr_32924_32927[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32928 = state_32917;
state_32917 = G__32928;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$state_machine__10428__auto__ = function(state_32917){
switch(arguments.length){
case 0:
return drop_dot$core$state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$state_machine__10428__auto____1.call(this,state_32917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$state_machine__10428__auto____0;
drop_dot$core$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$state_machine__10428__auto____1;
return drop_dot$core$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___32926))
})();
var state__10450__auto__ = (function (){var statearr_32925 = f__10449__auto__.call(null);
(statearr_32925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___32926);

return statearr_32925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___32926))
);

