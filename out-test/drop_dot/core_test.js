// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core_test');
goog.require('cljs.core');
goog.require('drop_dot.core');
goog.require('cljs.test');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST = (function drop_dot$core_test$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$var);
});
drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test93941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test93941 = (function (meta93942){
this.meta93942 = meta93942;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test93941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_93943,meta93942__$1){
var self__ = this;
var _93943__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test93941(meta93942__$1));
});

drop_dot.core_test.t_drop_dot$core_test93941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_93943){
var self__ = this;
var _93943__$1 = this;
return self__.meta93942;
});

drop_dot.core_test.t_drop_dot$core_test93941.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test93941.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_94082){
var state_val_94083 = (state_94082[(1)]);
if((state_val_94083 === (7))){
var inst_93965 = (state_94082[(7)]);
var inst_93975 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_93976 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_93977 = cljs.core.List.EMPTY;
var inst_93978 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_93979 = cljs.core.cons.call(null,inst_93978,inst_93965);
var inst_93980 = cljs.core._conj.call(null,inst_93977,inst_93979);
var inst_93981 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_93982 = cljs.core._conj.call(null,inst_93980,inst_93981);
var inst_93983 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_93976,inst_93982,null];
var inst_93984 = cljs.core.PersistentHashMap.fromArrays(inst_93975,inst_93983);
var inst_93985 = cljs.test.do_report.call(null,inst_93984);
var state_94082__$1 = state_94082;
var statearr_94084_94345 = state_94082__$1;
(statearr_94084_94345[(2)] = inst_93985);

(statearr_94084_94345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (20))){
var inst_94055 = (state_94082[(8)]);
var inst_94058 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94059 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_94060 = cljs.core.cons.call(null,cljs.core._EQ_,inst_94055);
var inst_94061 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_94059,inst_94060,null];
var inst_94062 = cljs.core.PersistentHashMap.fromArrays(inst_94058,inst_94061);
var inst_94063 = cljs.test.do_report.call(null,inst_94062);
var state_94082__$1 = state_94082;
var statearr_94085_94346 = state_94082__$1;
(statearr_94085_94346[(2)] = inst_94063);

(statearr_94085_94346[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (1))){
var state_94082__$1 = state_94082;
var statearr_94086_94347 = state_94082__$1;
(statearr_94086_94347[(2)] = null);

(statearr_94086_94347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94082,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_93954 = cljs.core.List.EMPTY;
var inst_93955 = cljs.core._conj.call(null,inst_93954,"ERROR:");
var inst_93959 = cljs.core.async.chan.call(null,(1));
var inst_93960 = (function (){var c__9318__auto____$1 = inst_93959;
return ((function (c__9318__auto____$1,_,inst_93954,inst_93955,inst_93959,state_val_94083,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_93954,inst_93955,inst_93959,state_val_94083,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_93957){
var state_val_93958 = (state_93957[(1)]);
if((state_val_93958 === (1))){
var state_93957__$1 = state_93957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93957__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_93954,inst_93955,inst_93959,state_val_94083,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_93954,inst_93955,inst_93959,state_val_94083,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94090 = [null,null,null,null,null,null,null];
(statearr_94090[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94090[(1)] = (1));

return statearr_94090;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_93957){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_93957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94091){if((e94091 instanceof Object)){
var ex__9301__auto__ = e94091;
var statearr_94092_94348 = state_93957;
(statearr_94092_94348[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94349 = state_93957;
state_93957 = G__94349;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_93957){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_93957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_93954,inst_93955,inst_93959,state_val_94083,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_94093 = f__9319__auto__.call(null);
(statearr_94093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_94093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_93954,inst_93955,inst_93959,state_val_94083,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_93961 = cljs.core.async.impl.dispatch.run.call(null,inst_93960);
var inst_93962 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_93959);
var state_94082__$1 = (function (){var statearr_94094 = state_94082;
(statearr_94094[(9)] = inst_93961);

(statearr_94094[(10)] = inst_93955);

return statearr_94094;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94082__$1,(5),inst_93962);
} else {
if((state_val_94083 === (15))){
var inst_94011 = (state_94082[(11)]);
var inst_94032 = (state_94082[(2)]);
var state_94082__$1 = (function (){var statearr_94095 = state_94082;
(statearr_94095[(12)] = inst_94032);

return statearr_94095;
})();
var statearr_94096_94350 = state_94082__$1;
(statearr_94096_94350[(2)] = inst_94011);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (21))){
var inst_94055 = (state_94082[(8)]);
var inst_94065 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94066 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_94067 = cljs.core.List.EMPTY;
var inst_94068 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_94069 = cljs.core.cons.call(null,inst_94068,inst_94055);
var inst_94070 = cljs.core._conj.call(null,inst_94067,inst_94069);
var inst_94071 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_94072 = cljs.core._conj.call(null,inst_94070,inst_94071);
var inst_94073 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_94066,inst_94072,null];
var inst_94074 = cljs.core.PersistentHashMap.fromArrays(inst_94065,inst_94073);
var inst_94075 = cljs.test.do_report.call(null,inst_94074);
var state_94082__$1 = state_94082;
var statearr_94097_94351 = state_94082__$1;
(statearr_94097_94351[(2)] = inst_94075);

(statearr_94097_94351[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (13))){
var inst_94010 = (state_94082[(13)]);
var inst_94013 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94014 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_94015 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_94010);
var inst_94016 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_94014,inst_94015,null];
var inst_94017 = cljs.core.PersistentHashMap.fromArrays(inst_94013,inst_94016);
var inst_94018 = cljs.test.do_report.call(null,inst_94017);
var state_94082__$1 = state_94082;
var statearr_94098_94352 = state_94082__$1;
(statearr_94098_94352[(2)] = inst_94018);

(statearr_94098_94352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (22))){
var inst_94056 = (state_94082[(14)]);
var inst_94077 = (state_94082[(2)]);
var state_94082__$1 = (function (){var statearr_94099 = state_94082;
(statearr_94099[(15)] = inst_94077);

return statearr_94099;
})();
var statearr_94100_94353 = state_94082__$1;
(statearr_94100_94353[(2)] = inst_94056);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (6))){
var inst_93965 = (state_94082[(7)]);
var inst_93968 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_93969 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_93970 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_93965);
var inst_93971 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_93969,inst_93970,null];
var inst_93972 = cljs.core.PersistentHashMap.fromArrays(inst_93968,inst_93971);
var inst_93973 = cljs.test.do_report.call(null,inst_93972);
var state_94082__$1 = state_94082;
var statearr_94101_94354 = state_94082__$1;
(statearr_94101_94354[(2)] = inst_93973);

(statearr_94101_94354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (17))){
var inst_94035 = (state_94082[(2)]);
var inst_94036 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94037 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_94038 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_94037,inst_94035,null];
var inst_94039 = cljs.core.PersistentHashMap.fromArrays(inst_94036,inst_94038);
var inst_94040 = cljs.test.do_report.call(null,inst_94039);
var state_94082__$1 = state_94082;
var statearr_94102_94355 = state_94082__$1;
(statearr_94102_94355[(2)] = inst_94040);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (3))){
var inst_93945 = (state_94082[(2)]);
var inst_93946 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_93947 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_93948 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_93947,inst_93945,null];
var inst_93949 = cljs.core.PersistentHashMap.fromArrays(inst_93946,inst_93948);
var inst_93950 = cljs.test.do_report.call(null,inst_93949);
var state_94082__$1 = state_94082;
var statearr_94103_94356 = state_94082__$1;
(statearr_94103_94356[(2)] = inst_93950);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (12))){
var inst_94011 = (state_94082[(11)]);
var inst_94010 = (state_94082[(13)]);
var inst_94000 = (state_94082[(16)]);
var inst_94009 = (state_94082[(2)]);
var inst_94010__$1 = cljs.core._conj.call(null,inst_94000,inst_94009);
var inst_94011__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_94010__$1);
var state_94082__$1 = (function (){var statearr_94104 = state_94082;
(statearr_94104[(11)] = inst_94011__$1);

(statearr_94104[(13)] = inst_94010__$1);

return statearr_94104;
})();
if(cljs.core.truth_(inst_94011__$1)){
var statearr_94105_94357 = state_94082__$1;
(statearr_94105_94357[(1)] = (13));

} else {
var statearr_94106_94358 = state_94082__$1;
(statearr_94106_94358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (2))){
var inst_93989 = (state_94082[(2)]);
var state_94082__$1 = (function (){var statearr_94107 = state_94082;
(statearr_94107[(17)] = inst_93989);

return statearr_94107;
})();
var statearr_94108_94359 = state_94082__$1;
(statearr_94108_94359[(2)] = null);

(statearr_94108_94359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (19))){
var inst_94055 = (state_94082[(8)]);
var inst_94056 = (state_94082[(14)]);
var inst_94045 = (state_94082[(18)]);
var inst_94054 = (state_94082[(2)]);
var inst_94055__$1 = cljs.core._conj.call(null,inst_94045,inst_94054);
var inst_94056__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_94055__$1);
var state_94082__$1 = (function (){var statearr_94109 = state_94082;
(statearr_94109[(8)] = inst_94055__$1);

(statearr_94109[(14)] = inst_94056__$1);

return statearr_94109;
})();
if(cljs.core.truth_(inst_94056__$1)){
var statearr_94110_94360 = state_94082__$1;
(statearr_94110_94360[(1)] = (20));

} else {
var statearr_94111_94361 = state_94082__$1;
(statearr_94111_94361[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94082,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_93999 = cljs.core.List.EMPTY;
var inst_94000 = cljs.core._conj.call(null,inst_93999,"ERROR: ");
var inst_94004 = cljs.core.async.chan.call(null,(1));
var inst_94005 = (function (){var c__9318__auto____$1 = inst_94004;
return ((function (c__9318__auto____$1,_,inst_93999,inst_94000,inst_94004,state_val_94083,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_93999,inst_94000,inst_94004,state_val_94083,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_94002){
var state_val_94003 = (state_94002[(1)]);
if((state_val_94003 === (1))){
var state_94002__$1 = state_94002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94002__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_93999,inst_94000,inst_94004,state_val_94083,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_93999,inst_94000,inst_94004,state_val_94083,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94115 = [null,null,null,null,null,null,null];
(statearr_94115[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94115[(1)] = (1));

return statearr_94115;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94002){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94116){if((e94116 instanceof Object)){
var ex__9301__auto__ = e94116;
var statearr_94117_94362 = state_94002;
(statearr_94117_94362[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94363 = state_94002;
state_94002 = G__94363;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94002){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_93999,inst_94000,inst_94004,state_val_94083,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_94118 = f__9319__auto__.call(null);
(statearr_94118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_94118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_93999,inst_94000,inst_94004,state_val_94083,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_94006 = cljs.core.async.impl.dispatch.run.call(null,inst_94005);
var inst_94007 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_94004);
var state_94082__$1 = (function (){var statearr_94119 = state_94082;
(statearr_94119[(19)] = inst_94006);

(statearr_94119[(16)] = inst_94000);

return statearr_94119;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94082__$1,(12),inst_94007);
} else {
if((state_val_94083 === (9))){
var inst_94034 = (state_94082[(2)]);
var state_94082__$1 = (function (){var statearr_94120 = state_94082;
(statearr_94120[(20)] = inst_94034);

return statearr_94120;
})();
var statearr_94121_94364 = state_94082__$1;
(statearr_94121_94364[(2)] = null);

(statearr_94121_94364[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (5))){
var inst_93966 = (state_94082[(21)]);
var inst_93965 = (state_94082[(7)]);
var inst_93955 = (state_94082[(10)]);
var inst_93964 = (state_94082[(2)]);
var inst_93965__$1 = cljs.core._conj.call(null,inst_93955,inst_93964);
var inst_93966__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_93965__$1);
var state_94082__$1 = (function (){var statearr_94122 = state_94082;
(statearr_94122[(21)] = inst_93966__$1);

(statearr_94122[(7)] = inst_93965__$1);

return statearr_94122;
})();
if(cljs.core.truth_(inst_93966__$1)){
var statearr_94123_94365 = state_94082__$1;
(statearr_94123_94365[(1)] = (6));

} else {
var statearr_94124_94366 = state_94082__$1;
(statearr_94124_94366[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (14))){
var inst_94010 = (state_94082[(13)]);
var inst_94020 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94021 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_94022 = cljs.core.List.EMPTY;
var inst_94023 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_94024 = cljs.core.cons.call(null,inst_94023,inst_94010);
var inst_94025 = cljs.core._conj.call(null,inst_94022,inst_94024);
var inst_94026 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_94027 = cljs.core._conj.call(null,inst_94025,inst_94026);
var inst_94028 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_94021,inst_94027,null];
var inst_94029 = cljs.core.PersistentHashMap.fromArrays(inst_94020,inst_94028);
var inst_94030 = cljs.test.do_report.call(null,inst_94029);
var state_94082__$1 = state_94082;
var statearr_94125_94367 = state_94082__$1;
(statearr_94125_94367[(2)] = inst_94030);

(statearr_94125_94367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (16))){
var inst_94079 = (state_94082[(2)]);
var inst_94080 = done.call(null);
var state_94082__$1 = (function (){var statearr_94126 = state_94082;
(statearr_94126[(22)] = inst_94079);

return statearr_94126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94082__$1,inst_94080);
} else {
if((state_val_94083 === (10))){
var inst_93990 = (state_94082[(2)]);
var inst_93991 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_93992 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_93993 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_93992,inst_93990,null];
var inst_93994 = cljs.core.PersistentHashMap.fromArrays(inst_93991,inst_93993);
var inst_93995 = cljs.test.do_report.call(null,inst_93994);
var state_94082__$1 = state_94082;
var statearr_94127_94368 = state_94082__$1;
(statearr_94127_94368[(2)] = inst_93995);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94083 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94082,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_94044 = cljs.core.List.EMPTY;
var inst_94045 = cljs.core._conj.call(null,inst_94044,"~/.in-drop-dot-only");
var inst_94049 = cljs.core.async.chan.call(null,(1));
var inst_94050 = (function (){var c__9318__auto____$1 = inst_94049;
return ((function (c__9318__auto____$1,_,inst_94044,inst_94045,inst_94049,state_val_94083,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_94044,inst_94045,inst_94049,state_val_94083,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_94047){
var state_val_94048 = (state_94047[(1)]);
if((state_val_94048 === (1))){
var state_94047__$1 = state_94047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94047__$1,"~/.in-drop-dot-only");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_94044,inst_94045,inst_94049,state_val_94083,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_94044,inst_94045,inst_94049,state_val_94083,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94131 = [null,null,null,null,null,null,null];
(statearr_94131[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94131[(1)] = (1));

return statearr_94131;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94047){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94132){if((e94132 instanceof Object)){
var ex__9301__auto__ = e94132;
var statearr_94133_94369 = state_94047;
(statearr_94133_94369[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94370 = state_94047;
state_94047 = G__94370;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94047){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_94044,inst_94045,inst_94049,state_val_94083,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_94134 = f__9319__auto__.call(null);
(statearr_94134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_94134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_94044,inst_94045,inst_94049,state_val_94083,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_94051 = cljs.core.async.impl.dispatch.run.call(null,inst_94050);
var inst_94052 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_94049);
var state_94082__$1 = (function (){var statearr_94135 = state_94082;
(statearr_94135[(18)] = inst_94045);

(statearr_94135[(23)] = inst_94051);

return statearr_94135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94082__$1,(19),inst_94052);
} else {
if((state_val_94083 === (8))){
var inst_93966 = (state_94082[(21)]);
var inst_93987 = (state_94082[(2)]);
var state_94082__$1 = (function (){var statearr_94136 = state_94082;
(statearr_94136[(24)] = inst_93987);

return statearr_94136;
})();
var statearr_94137_94371 = state_94082__$1;
(statearr_94137_94371[(2)] = inst_93966);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94082__$1);

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
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_94141[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94141[(1)] = (1));

return statearr_94141;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94082){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94142){if((e94142 instanceof Object)){
var ex__9301__auto__ = e94142;
var statearr_94143_94372 = state_94082;
(statearr_94143_94372[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94373 = state_94082;
state_94082 = G__94373;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94082){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_94144 = f__9319__auto__.call(null);
(statearr_94144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_94144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test93941.prototype.apply = (function (self__,args93944){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args93944)));
});

drop_dot.core_test.t_drop_dot$core_test93941.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_94282){
var state_val_94283 = (state_94282[(1)]);
if((state_val_94283 === (7))){
var inst_94165 = (state_94282[(7)]);
var inst_94175 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94176 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_94177 = cljs.core.List.EMPTY;
var inst_94178 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_94179 = cljs.core.cons.call(null,inst_94178,inst_94165);
var inst_94180 = cljs.core._conj.call(null,inst_94177,inst_94179);
var inst_94181 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_94182 = cljs.core._conj.call(null,inst_94180,inst_94181);
var inst_94183 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_94176,inst_94182,null];
var inst_94184 = cljs.core.PersistentHashMap.fromArrays(inst_94175,inst_94183);
var inst_94185 = cljs.test.do_report.call(null,inst_94184);
var state_94282__$1 = state_94282;
var statearr_94284_94374 = state_94282__$1;
(statearr_94284_94374[(2)] = inst_94185);

(statearr_94284_94374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (20))){
var inst_94255 = (state_94282[(8)]);
var inst_94258 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94259 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_94260 = cljs.core.cons.call(null,cljs.core._EQ_,inst_94255);
var inst_94261 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_94259,inst_94260,null];
var inst_94262 = cljs.core.PersistentHashMap.fromArrays(inst_94258,inst_94261);
var inst_94263 = cljs.test.do_report.call(null,inst_94262);
var state_94282__$1 = state_94282;
var statearr_94285_94375 = state_94282__$1;
(statearr_94285_94375[(2)] = inst_94263);

(statearr_94285_94375[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (1))){
var state_94282__$1 = state_94282;
var statearr_94286_94376 = state_94282__$1;
(statearr_94286_94376[(2)] = null);

(statearr_94286_94376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94282,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_94154 = cljs.core.List.EMPTY;
var inst_94155 = cljs.core._conj.call(null,inst_94154,"ERROR:");
var inst_94159 = cljs.core.async.chan.call(null,(1));
var inst_94160 = (function (){var c__9318__auto____$1 = inst_94159;
return ((function (c__9318__auto____$1,_,inst_94154,inst_94155,inst_94159,state_val_94283,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_94154,inst_94155,inst_94159,state_val_94283,c__9318__auto__,___10644__auto__){
return (function (state_94157){
var state_val_94158 = (state_94157[(1)]);
if((state_val_94158 === (1))){
var state_94157__$1 = state_94157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94157__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_94154,inst_94155,inst_94159,state_val_94283,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_94154,inst_94155,inst_94159,state_val_94283,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94290 = [null,null,null,null,null,null,null];
(statearr_94290[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94290[(1)] = (1));

return statearr_94290;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94157){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94291){if((e94291 instanceof Object)){
var ex__9301__auto__ = e94291;
var statearr_94292_94377 = state_94157;
(statearr_94292_94377[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94378 = state_94157;
state_94157 = G__94378;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94157){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_94154,inst_94155,inst_94159,state_val_94283,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_94293 = f__9319__auto__.call(null);
(statearr_94293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_94293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_94154,inst_94155,inst_94159,state_val_94283,c__9318__auto__,___10644__auto__))
})();
var inst_94161 = cljs.core.async.impl.dispatch.run.call(null,inst_94160);
var inst_94162 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_94159);
var state_94282__$1 = (function (){var statearr_94294 = state_94282;
(statearr_94294[(9)] = inst_94161);

(statearr_94294[(10)] = inst_94155);

return statearr_94294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94282__$1,(5),inst_94162);
} else {
if((state_val_94283 === (15))){
var inst_94211 = (state_94282[(11)]);
var inst_94232 = (state_94282[(2)]);
var state_94282__$1 = (function (){var statearr_94295 = state_94282;
(statearr_94295[(12)] = inst_94232);

return statearr_94295;
})();
var statearr_94296_94379 = state_94282__$1;
(statearr_94296_94379[(2)] = inst_94211);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (21))){
var inst_94255 = (state_94282[(8)]);
var inst_94265 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94266 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_94267 = cljs.core.List.EMPTY;
var inst_94268 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_94269 = cljs.core.cons.call(null,inst_94268,inst_94255);
var inst_94270 = cljs.core._conj.call(null,inst_94267,inst_94269);
var inst_94271 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_94272 = cljs.core._conj.call(null,inst_94270,inst_94271);
var inst_94273 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_94266,inst_94272,null];
var inst_94274 = cljs.core.PersistentHashMap.fromArrays(inst_94265,inst_94273);
var inst_94275 = cljs.test.do_report.call(null,inst_94274);
var state_94282__$1 = state_94282;
var statearr_94297_94380 = state_94282__$1;
(statearr_94297_94380[(2)] = inst_94275);

(statearr_94297_94380[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (13))){
var inst_94210 = (state_94282[(13)]);
var inst_94213 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94214 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_94215 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_94210);
var inst_94216 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_94214,inst_94215,null];
var inst_94217 = cljs.core.PersistentHashMap.fromArrays(inst_94213,inst_94216);
var inst_94218 = cljs.test.do_report.call(null,inst_94217);
var state_94282__$1 = state_94282;
var statearr_94298_94381 = state_94282__$1;
(statearr_94298_94381[(2)] = inst_94218);

(statearr_94298_94381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (22))){
var inst_94256 = (state_94282[(14)]);
var inst_94277 = (state_94282[(2)]);
var state_94282__$1 = (function (){var statearr_94299 = state_94282;
(statearr_94299[(15)] = inst_94277);

return statearr_94299;
})();
var statearr_94300_94382 = state_94282__$1;
(statearr_94300_94382[(2)] = inst_94256);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (6))){
var inst_94165 = (state_94282[(7)]);
var inst_94168 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94169 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_94170 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_94165);
var inst_94171 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_94169,inst_94170,null];
var inst_94172 = cljs.core.PersistentHashMap.fromArrays(inst_94168,inst_94171);
var inst_94173 = cljs.test.do_report.call(null,inst_94172);
var state_94282__$1 = state_94282;
var statearr_94301_94383 = state_94282__$1;
(statearr_94301_94383[(2)] = inst_94173);

(statearr_94301_94383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (17))){
var inst_94235 = (state_94282[(2)]);
var inst_94236 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94237 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_94238 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_94237,inst_94235,null];
var inst_94239 = cljs.core.PersistentHashMap.fromArrays(inst_94236,inst_94238);
var inst_94240 = cljs.test.do_report.call(null,inst_94239);
var state_94282__$1 = state_94282;
var statearr_94302_94384 = state_94282__$1;
(statearr_94302_94384[(2)] = inst_94240);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (3))){
var inst_94145 = (state_94282[(2)]);
var inst_94146 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94147 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_94148 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_94147,inst_94145,null];
var inst_94149 = cljs.core.PersistentHashMap.fromArrays(inst_94146,inst_94148);
var inst_94150 = cljs.test.do_report.call(null,inst_94149);
var state_94282__$1 = state_94282;
var statearr_94303_94385 = state_94282__$1;
(statearr_94303_94385[(2)] = inst_94150);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (12))){
var inst_94211 = (state_94282[(11)]);
var inst_94200 = (state_94282[(16)]);
var inst_94210 = (state_94282[(13)]);
var inst_94209 = (state_94282[(2)]);
var inst_94210__$1 = cljs.core._conj.call(null,inst_94200,inst_94209);
var inst_94211__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_94210__$1);
var state_94282__$1 = (function (){var statearr_94304 = state_94282;
(statearr_94304[(11)] = inst_94211__$1);

(statearr_94304[(13)] = inst_94210__$1);

return statearr_94304;
})();
if(cljs.core.truth_(inst_94211__$1)){
var statearr_94305_94386 = state_94282__$1;
(statearr_94305_94386[(1)] = (13));

} else {
var statearr_94306_94387 = state_94282__$1;
(statearr_94306_94387[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (2))){
var inst_94189 = (state_94282[(2)]);
var state_94282__$1 = (function (){var statearr_94307 = state_94282;
(statearr_94307[(17)] = inst_94189);

return statearr_94307;
})();
var statearr_94308_94388 = state_94282__$1;
(statearr_94308_94388[(2)] = null);

(statearr_94308_94388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (19))){
var inst_94245 = (state_94282[(18)]);
var inst_94256 = (state_94282[(14)]);
var inst_94255 = (state_94282[(8)]);
var inst_94254 = (state_94282[(2)]);
var inst_94255__$1 = cljs.core._conj.call(null,inst_94245,inst_94254);
var inst_94256__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_94255__$1);
var state_94282__$1 = (function (){var statearr_94309 = state_94282;
(statearr_94309[(14)] = inst_94256__$1);

(statearr_94309[(8)] = inst_94255__$1);

return statearr_94309;
})();
if(cljs.core.truth_(inst_94256__$1)){
var statearr_94310_94389 = state_94282__$1;
(statearr_94310_94389[(1)] = (20));

} else {
var statearr_94311_94390 = state_94282__$1;
(statearr_94311_94390[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94282,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_94199 = cljs.core.List.EMPTY;
var inst_94200 = cljs.core._conj.call(null,inst_94199,"ERROR: ");
var inst_94204 = cljs.core.async.chan.call(null,(1));
var inst_94205 = (function (){var c__9318__auto____$1 = inst_94204;
return ((function (c__9318__auto____$1,_,inst_94199,inst_94200,inst_94204,state_val_94283,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_94199,inst_94200,inst_94204,state_val_94283,c__9318__auto__,___10644__auto__){
return (function (state_94202){
var state_val_94203 = (state_94202[(1)]);
if((state_val_94203 === (1))){
var state_94202__$1 = state_94202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94202__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_94199,inst_94200,inst_94204,state_val_94283,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_94199,inst_94200,inst_94204,state_val_94283,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94315 = [null,null,null,null,null,null,null];
(statearr_94315[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94315[(1)] = (1));

return statearr_94315;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94202){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94316){if((e94316 instanceof Object)){
var ex__9301__auto__ = e94316;
var statearr_94317_94391 = state_94202;
(statearr_94317_94391[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94392 = state_94202;
state_94202 = G__94392;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94202){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_94199,inst_94200,inst_94204,state_val_94283,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_94318 = f__9319__auto__.call(null);
(statearr_94318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_94318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_94199,inst_94200,inst_94204,state_val_94283,c__9318__auto__,___10644__auto__))
})();
var inst_94206 = cljs.core.async.impl.dispatch.run.call(null,inst_94205);
var inst_94207 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_94204);
var state_94282__$1 = (function (){var statearr_94319 = state_94282;
(statearr_94319[(16)] = inst_94200);

(statearr_94319[(19)] = inst_94206);

return statearr_94319;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94282__$1,(12),inst_94207);
} else {
if((state_val_94283 === (9))){
var inst_94234 = (state_94282[(2)]);
var state_94282__$1 = (function (){var statearr_94320 = state_94282;
(statearr_94320[(20)] = inst_94234);

return statearr_94320;
})();
var statearr_94321_94393 = state_94282__$1;
(statearr_94321_94393[(2)] = null);

(statearr_94321_94393[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (5))){
var inst_94155 = (state_94282[(10)]);
var inst_94165 = (state_94282[(7)]);
var inst_94166 = (state_94282[(21)]);
var inst_94164 = (state_94282[(2)]);
var inst_94165__$1 = cljs.core._conj.call(null,inst_94155,inst_94164);
var inst_94166__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_94165__$1);
var state_94282__$1 = (function (){var statearr_94322 = state_94282;
(statearr_94322[(7)] = inst_94165__$1);

(statearr_94322[(21)] = inst_94166__$1);

return statearr_94322;
})();
if(cljs.core.truth_(inst_94166__$1)){
var statearr_94323_94394 = state_94282__$1;
(statearr_94323_94394[(1)] = (6));

} else {
var statearr_94324_94395 = state_94282__$1;
(statearr_94324_94395[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (14))){
var inst_94210 = (state_94282[(13)]);
var inst_94220 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94221 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_94222 = cljs.core.List.EMPTY;
var inst_94223 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_94224 = cljs.core.cons.call(null,inst_94223,inst_94210);
var inst_94225 = cljs.core._conj.call(null,inst_94222,inst_94224);
var inst_94226 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_94227 = cljs.core._conj.call(null,inst_94225,inst_94226);
var inst_94228 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_94221,inst_94227,null];
var inst_94229 = cljs.core.PersistentHashMap.fromArrays(inst_94220,inst_94228);
var inst_94230 = cljs.test.do_report.call(null,inst_94229);
var state_94282__$1 = state_94282;
var statearr_94325_94396 = state_94282__$1;
(statearr_94325_94396[(2)] = inst_94230);

(statearr_94325_94396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (16))){
var inst_94279 = (state_94282[(2)]);
var inst_94280 = done.call(null);
var state_94282__$1 = (function (){var statearr_94326 = state_94282;
(statearr_94326[(22)] = inst_94279);

return statearr_94326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94282__$1,inst_94280);
} else {
if((state_val_94283 === (10))){
var inst_94190 = (state_94282[(2)]);
var inst_94191 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94192 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_94193 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_94192,inst_94190,null];
var inst_94194 = cljs.core.PersistentHashMap.fromArrays(inst_94191,inst_94193);
var inst_94195 = cljs.test.do_report.call(null,inst_94194);
var state_94282__$1 = state_94282;
var statearr_94327_94397 = state_94282__$1;
(statearr_94327_94397[(2)] = inst_94195);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94283 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94282,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_94244 = cljs.core.List.EMPTY;
var inst_94245 = cljs.core._conj.call(null,inst_94244,"~/.in-drop-dot-only");
var inst_94249 = cljs.core.async.chan.call(null,(1));
var inst_94250 = (function (){var c__9318__auto____$1 = inst_94249;
return ((function (c__9318__auto____$1,_,inst_94244,inst_94245,inst_94249,state_val_94283,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_94244,inst_94245,inst_94249,state_val_94283,c__9318__auto__,___10644__auto__){
return (function (state_94247){
var state_val_94248 = (state_94247[(1)]);
if((state_val_94248 === (1))){
var state_94247__$1 = state_94247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94247__$1,"~/.in-drop-dot-only");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_94244,inst_94245,inst_94249,state_val_94283,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_94244,inst_94245,inst_94249,state_val_94283,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94331 = [null,null,null,null,null,null,null];
(statearr_94331[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94331[(1)] = (1));

return statearr_94331;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94247){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94332){if((e94332 instanceof Object)){
var ex__9301__auto__ = e94332;
var statearr_94333_94398 = state_94247;
(statearr_94333_94398[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94399 = state_94247;
state_94247 = G__94399;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94247){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_94244,inst_94245,inst_94249,state_val_94283,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_94334 = f__9319__auto__.call(null);
(statearr_94334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_94334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_94244,inst_94245,inst_94249,state_val_94283,c__9318__auto__,___10644__auto__))
})();
var inst_94251 = cljs.core.async.impl.dispatch.run.call(null,inst_94250);
var inst_94252 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_94249);
var state_94282__$1 = (function (){var statearr_94335 = state_94282;
(statearr_94335[(18)] = inst_94245);

(statearr_94335[(23)] = inst_94251);

return statearr_94335;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94282__$1,(19),inst_94252);
} else {
if((state_val_94283 === (8))){
var inst_94166 = (state_94282[(21)]);
var inst_94187 = (state_94282[(2)]);
var state_94282__$1 = (function (){var statearr_94336 = state_94282;
(statearr_94336[(24)] = inst_94187);

return statearr_94336;
})();
var statearr_94337_94400 = state_94282__$1;
(statearr_94337_94400[(2)] = inst_94166);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94282__$1);

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
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_94341[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94341[(1)] = (1));

return statearr_94341;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94282){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94342){if((e94342 instanceof Object)){
var ex__9301__auto__ = e94342;
var statearr_94343_94401 = state_94282;
(statearr_94343_94401[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94402 = state_94282;
state_94282 = G__94402;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94282){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_94344 = f__9319__auto__.call(null);
(statearr_94344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_94344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test93941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta93942","meta93942",-1138249843,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test93941.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test93941.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test93941";

drop_dot.core_test.t_drop_dot$core_test93941.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test93941");
});

drop_dot.core_test.__GT_t_drop_dot$core_test93941 = (function drop_dot$core_test$__GT_t_drop_dot$core_test93941(meta93942){
return (new drop_dot.core_test.t_drop_dot$core_test93941(meta93942));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test93941(null));
});

drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST","drop-dot.core-test/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST",1225581940,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST",1291546161,null),"test/drop_dot/core_test.cljs",108,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST)?drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST = (function drop_dot$core_test$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$var);
});
drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test94403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test94403 = (function (meta94404){
this.meta94404 = meta94404;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test94403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_94405,meta94404__$1){
var self__ = this;
var _94405__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test94403(meta94404__$1));
});

drop_dot.core_test.t_drop_dot$core_test94403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_94405){
var self__ = this;
var _94405__$1 = this;
return self__.meta94404;
});

drop_dot.core_test.t_drop_dot$core_test94403.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test94403.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_94544){
var state_val_94545 = (state_94544[(1)]);
if((state_val_94545 === (7))){
var inst_94427 = (state_94544[(7)]);
var inst_94437 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94438 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_94439 = cljs.core.List.EMPTY;
var inst_94440 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_94441 = cljs.core.cons.call(null,inst_94440,inst_94427);
var inst_94442 = cljs.core._conj.call(null,inst_94439,inst_94441);
var inst_94443 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_94444 = cljs.core._conj.call(null,inst_94442,inst_94443);
var inst_94445 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_94438,inst_94444,null];
var inst_94446 = cljs.core.PersistentHashMap.fromArrays(inst_94437,inst_94445);
var inst_94447 = cljs.test.do_report.call(null,inst_94446);
var state_94544__$1 = state_94544;
var statearr_94546_94807 = state_94544__$1;
(statearr_94546_94807[(2)] = inst_94447);

(statearr_94546_94807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (20))){
var inst_94517 = (state_94544[(8)]);
var inst_94520 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94521 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_94522 = cljs.core.cons.call(null,cljs.core._EQ_,inst_94517);
var inst_94523 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_94521,inst_94522,null];
var inst_94524 = cljs.core.PersistentHashMap.fromArrays(inst_94520,inst_94523);
var inst_94525 = cljs.test.do_report.call(null,inst_94524);
var state_94544__$1 = state_94544;
var statearr_94547_94808 = state_94544__$1;
(statearr_94547_94808[(2)] = inst_94525);

(statearr_94547_94808[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (1))){
var state_94544__$1 = state_94544;
var statearr_94548_94809 = state_94544__$1;
(statearr_94548_94809[(2)] = null);

(statearr_94548_94809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94544,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_94416 = cljs.core.List.EMPTY;
var inst_94417 = cljs.core._conj.call(null,inst_94416,"NOTICE: ");
var inst_94421 = cljs.core.async.chan.call(null,(1));
var inst_94422 = (function (){var c__9318__auto____$1 = inst_94421;
return ((function (c__9318__auto____$1,_,inst_94416,inst_94417,inst_94421,state_val_94545,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_94416,inst_94417,inst_94421,state_val_94545,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_94419){
var state_val_94420 = (state_94419[(1)]);
if((state_val_94420 === (1))){
var state_94419__$1 = state_94419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94419__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_94416,inst_94417,inst_94421,state_val_94545,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_94416,inst_94417,inst_94421,state_val_94545,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94552 = [null,null,null,null,null,null,null];
(statearr_94552[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94552[(1)] = (1));

return statearr_94552;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94419){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94553){if((e94553 instanceof Object)){
var ex__9301__auto__ = e94553;
var statearr_94554_94810 = state_94419;
(statearr_94554_94810[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94811 = state_94419;
state_94419 = G__94811;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94419){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_94416,inst_94417,inst_94421,state_val_94545,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_94555 = f__9319__auto__.call(null);
(statearr_94555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_94555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_94416,inst_94417,inst_94421,state_val_94545,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_94423 = cljs.core.async.impl.dispatch.run.call(null,inst_94422);
var inst_94424 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_94421);
var state_94544__$1 = (function (){var statearr_94556 = state_94544;
(statearr_94556[(9)] = inst_94417);

(statearr_94556[(10)] = inst_94423);

return statearr_94556;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94544__$1,(5),inst_94424);
} else {
if((state_val_94545 === (15))){
var inst_94473 = (state_94544[(11)]);
var inst_94494 = (state_94544[(2)]);
var state_94544__$1 = (function (){var statearr_94557 = state_94544;
(statearr_94557[(12)] = inst_94494);

return statearr_94557;
})();
var statearr_94558_94812 = state_94544__$1;
(statearr_94558_94812[(2)] = inst_94473);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94544__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (21))){
var inst_94517 = (state_94544[(8)]);
var inst_94527 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94528 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_94529 = cljs.core.List.EMPTY;
var inst_94530 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_94531 = cljs.core.cons.call(null,inst_94530,inst_94517);
var inst_94532 = cljs.core._conj.call(null,inst_94529,inst_94531);
var inst_94533 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_94534 = cljs.core._conj.call(null,inst_94532,inst_94533);
var inst_94535 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_94528,inst_94534,null];
var inst_94536 = cljs.core.PersistentHashMap.fromArrays(inst_94527,inst_94535);
var inst_94537 = cljs.test.do_report.call(null,inst_94536);
var state_94544__$1 = state_94544;
var statearr_94559_94813 = state_94544__$1;
(statearr_94559_94813[(2)] = inst_94537);

(statearr_94559_94813[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (13))){
var inst_94472 = (state_94544[(13)]);
var inst_94475 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94476 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_94477 = cljs.core.cons.call(null,cljs.core._EQ_,inst_94472);
var inst_94478 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_94476,inst_94477,null];
var inst_94479 = cljs.core.PersistentHashMap.fromArrays(inst_94475,inst_94478);
var inst_94480 = cljs.test.do_report.call(null,inst_94479);
var state_94544__$1 = state_94544;
var statearr_94560_94814 = state_94544__$1;
(statearr_94560_94814[(2)] = inst_94480);

(statearr_94560_94814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (22))){
var inst_94518 = (state_94544[(14)]);
var inst_94539 = (state_94544[(2)]);
var state_94544__$1 = (function (){var statearr_94561 = state_94544;
(statearr_94561[(15)] = inst_94539);

return statearr_94561;
})();
var statearr_94562_94815 = state_94544__$1;
(statearr_94562_94815[(2)] = inst_94518);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94544__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (6))){
var inst_94427 = (state_94544[(7)]);
var inst_94430 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94431 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_94432 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_94427);
var inst_94433 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_94431,inst_94432,null];
var inst_94434 = cljs.core.PersistentHashMap.fromArrays(inst_94430,inst_94433);
var inst_94435 = cljs.test.do_report.call(null,inst_94434);
var state_94544__$1 = state_94544;
var statearr_94563_94816 = state_94544__$1;
(statearr_94563_94816[(2)] = inst_94435);

(statearr_94563_94816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (17))){
var inst_94497 = (state_94544[(2)]);
var inst_94498 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94499 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_94500 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_94499,inst_94497,null];
var inst_94501 = cljs.core.PersistentHashMap.fromArrays(inst_94498,inst_94500);
var inst_94502 = cljs.test.do_report.call(null,inst_94501);
var state_94544__$1 = state_94544;
var statearr_94564_94817 = state_94544__$1;
(statearr_94564_94817[(2)] = inst_94502);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94544__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (3))){
var inst_94407 = (state_94544[(2)]);
var inst_94408 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94409 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_94410 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_94409,inst_94407,null];
var inst_94411 = cljs.core.PersistentHashMap.fromArrays(inst_94408,inst_94410);
var inst_94412 = cljs.test.do_report.call(null,inst_94411);
var state_94544__$1 = state_94544;
var statearr_94565_94818 = state_94544__$1;
(statearr_94565_94818[(2)] = inst_94412);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94544__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (12))){
var inst_94462 = (state_94544[(16)]);
var inst_94472 = (state_94544[(13)]);
var inst_94473 = (state_94544[(11)]);
var inst_94471 = (state_94544[(2)]);
var inst_94472__$1 = cljs.core._conj.call(null,inst_94462,inst_94471);
var inst_94473__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_94472__$1);
var state_94544__$1 = (function (){var statearr_94566 = state_94544;
(statearr_94566[(13)] = inst_94472__$1);

(statearr_94566[(11)] = inst_94473__$1);

return statearr_94566;
})();
if(cljs.core.truth_(inst_94473__$1)){
var statearr_94567_94819 = state_94544__$1;
(statearr_94567_94819[(1)] = (13));

} else {
var statearr_94568_94820 = state_94544__$1;
(statearr_94568_94820[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (2))){
var inst_94451 = (state_94544[(2)]);
var state_94544__$1 = (function (){var statearr_94569 = state_94544;
(statearr_94569[(17)] = inst_94451);

return statearr_94569;
})();
var statearr_94570_94821 = state_94544__$1;
(statearr_94570_94821[(2)] = null);

(statearr_94570_94821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (19))){
var inst_94517 = (state_94544[(8)]);
var inst_94518 = (state_94544[(14)]);
var inst_94507 = (state_94544[(18)]);
var inst_94516 = (state_94544[(2)]);
var inst_94517__$1 = cljs.core._conj.call(null,inst_94507,inst_94516);
var inst_94518__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_94517__$1);
var state_94544__$1 = (function (){var statearr_94571 = state_94544;
(statearr_94571[(8)] = inst_94517__$1);

(statearr_94571[(14)] = inst_94518__$1);

return statearr_94571;
})();
if(cljs.core.truth_(inst_94518__$1)){
var statearr_94572_94822 = state_94544__$1;
(statearr_94572_94822[(1)] = (20));

} else {
var statearr_94573_94823 = state_94544__$1;
(statearr_94573_94823[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94544,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_94461 = cljs.core.List.EMPTY;
var inst_94462 = cljs.core._conj.call(null,inst_94461,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_94466 = cljs.core.async.chan.call(null,(1));
var inst_94467 = (function (){var c__9318__auto____$1 = inst_94466;
return ((function (c__9318__auto____$1,_,inst_94461,inst_94462,inst_94466,state_val_94545,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_94461,inst_94462,inst_94466,state_val_94545,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_94464){
var state_val_94465 = (state_94464[(1)]);
if((state_val_94465 === (1))){
var state_94464__$1 = state_94464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94464__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_94461,inst_94462,inst_94466,state_val_94545,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_94461,inst_94462,inst_94466,state_val_94545,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94577 = [null,null,null,null,null,null,null];
(statearr_94577[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94577[(1)] = (1));

return statearr_94577;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94464){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94578){if((e94578 instanceof Object)){
var ex__9301__auto__ = e94578;
var statearr_94579_94824 = state_94464;
(statearr_94579_94824[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94825 = state_94464;
state_94464 = G__94825;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94464){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_94461,inst_94462,inst_94466,state_val_94545,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_94580 = f__9319__auto__.call(null);
(statearr_94580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_94580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_94461,inst_94462,inst_94466,state_val_94545,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_94468 = cljs.core.async.impl.dispatch.run.call(null,inst_94467);
var inst_94469 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_94466);
var state_94544__$1 = (function (){var statearr_94581 = state_94544;
(statearr_94581[(19)] = inst_94468);

(statearr_94581[(16)] = inst_94462);

return statearr_94581;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94544__$1,(12),inst_94469);
} else {
if((state_val_94545 === (9))){
var inst_94496 = (state_94544[(2)]);
var state_94544__$1 = (function (){var statearr_94582 = state_94544;
(statearr_94582[(20)] = inst_94496);

return statearr_94582;
})();
var statearr_94583_94826 = state_94544__$1;
(statearr_94583_94826[(2)] = null);

(statearr_94583_94826[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (5))){
var inst_94417 = (state_94544[(9)]);
var inst_94427 = (state_94544[(7)]);
var inst_94428 = (state_94544[(21)]);
var inst_94426 = (state_94544[(2)]);
var inst_94427__$1 = cljs.core._conj.call(null,inst_94417,inst_94426);
var inst_94428__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_94427__$1);
var state_94544__$1 = (function (){var statearr_94584 = state_94544;
(statearr_94584[(7)] = inst_94427__$1);

(statearr_94584[(21)] = inst_94428__$1);

return statearr_94584;
})();
if(cljs.core.truth_(inst_94428__$1)){
var statearr_94585_94827 = state_94544__$1;
(statearr_94585_94827[(1)] = (6));

} else {
var statearr_94586_94828 = state_94544__$1;
(statearr_94586_94828[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (14))){
var inst_94472 = (state_94544[(13)]);
var inst_94482 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94483 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_94484 = cljs.core.List.EMPTY;
var inst_94485 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_94486 = cljs.core.cons.call(null,inst_94485,inst_94472);
var inst_94487 = cljs.core._conj.call(null,inst_94484,inst_94486);
var inst_94488 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_94489 = cljs.core._conj.call(null,inst_94487,inst_94488);
var inst_94490 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_94483,inst_94489,null];
var inst_94491 = cljs.core.PersistentHashMap.fromArrays(inst_94482,inst_94490);
var inst_94492 = cljs.test.do_report.call(null,inst_94491);
var state_94544__$1 = state_94544;
var statearr_94587_94829 = state_94544__$1;
(statearr_94587_94829[(2)] = inst_94492);

(statearr_94587_94829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (16))){
var inst_94541 = (state_94544[(2)]);
var inst_94542 = done.call(null);
var state_94544__$1 = (function (){var statearr_94588 = state_94544;
(statearr_94588[(22)] = inst_94541);

return statearr_94588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94544__$1,inst_94542);
} else {
if((state_val_94545 === (10))){
var inst_94452 = (state_94544[(2)]);
var inst_94453 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94454 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_94455 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_94454,inst_94452,null];
var inst_94456 = cljs.core.PersistentHashMap.fromArrays(inst_94453,inst_94455);
var inst_94457 = cljs.test.do_report.call(null,inst_94456);
var state_94544__$1 = state_94544;
var statearr_94589_94830 = state_94544__$1;
(statearr_94589_94830[(2)] = inst_94457);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94544__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94545 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94544,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_94506 = cljs.core.List.EMPTY;
var inst_94507 = cljs.core._conj.call(null,inst_94506,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_94511 = cljs.core.async.chan.call(null,(1));
var inst_94512 = (function (){var c__9318__auto____$1 = inst_94511;
return ((function (c__9318__auto____$1,_,inst_94506,inst_94507,inst_94511,state_val_94545,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_94506,inst_94507,inst_94511,state_val_94545,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_94509){
var state_val_94510 = (state_94509[(1)]);
if((state_val_94510 === (1))){
var state_94509__$1 = state_94509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94509__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_94506,inst_94507,inst_94511,state_val_94545,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_94506,inst_94507,inst_94511,state_val_94545,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94593 = [null,null,null,null,null,null,null];
(statearr_94593[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94593[(1)] = (1));

return statearr_94593;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94509){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94594){if((e94594 instanceof Object)){
var ex__9301__auto__ = e94594;
var statearr_94595_94831 = state_94509;
(statearr_94595_94831[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94832 = state_94509;
state_94509 = G__94832;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94509){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_94506,inst_94507,inst_94511,state_val_94545,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_94596 = f__9319__auto__.call(null);
(statearr_94596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_94596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_94506,inst_94507,inst_94511,state_val_94545,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_94513 = cljs.core.async.impl.dispatch.run.call(null,inst_94512);
var inst_94514 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_94511);
var state_94544__$1 = (function (){var statearr_94597 = state_94544;
(statearr_94597[(23)] = inst_94513);

(statearr_94597[(18)] = inst_94507);

return statearr_94597;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94544__$1,(19),inst_94514);
} else {
if((state_val_94545 === (8))){
var inst_94428 = (state_94544[(21)]);
var inst_94449 = (state_94544[(2)]);
var state_94544__$1 = (function (){var statearr_94598 = state_94544;
(statearr_94598[(24)] = inst_94449);

return statearr_94598;
})();
var statearr_94599_94833 = state_94544__$1;
(statearr_94599_94833[(2)] = inst_94428);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94544__$1);

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
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_94603[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94603[(1)] = (1));

return statearr_94603;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94544){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94604){if((e94604 instanceof Object)){
var ex__9301__auto__ = e94604;
var statearr_94605_94834 = state_94544;
(statearr_94605_94834[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94835 = state_94544;
state_94544 = G__94835;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94544){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_94606 = f__9319__auto__.call(null);
(statearr_94606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_94606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test94403.prototype.apply = (function (self__,args94406){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args94406)));
});

drop_dot.core_test.t_drop_dot$core_test94403.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_94744){
var state_val_94745 = (state_94744[(1)]);
if((state_val_94745 === (7))){
var inst_94627 = (state_94744[(7)]);
var inst_94637 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94638 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_94639 = cljs.core.List.EMPTY;
var inst_94640 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_94641 = cljs.core.cons.call(null,inst_94640,inst_94627);
var inst_94642 = cljs.core._conj.call(null,inst_94639,inst_94641);
var inst_94643 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_94644 = cljs.core._conj.call(null,inst_94642,inst_94643);
var inst_94645 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_94638,inst_94644,null];
var inst_94646 = cljs.core.PersistentHashMap.fromArrays(inst_94637,inst_94645);
var inst_94647 = cljs.test.do_report.call(null,inst_94646);
var state_94744__$1 = state_94744;
var statearr_94746_94836 = state_94744__$1;
(statearr_94746_94836[(2)] = inst_94647);

(statearr_94746_94836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (20))){
var inst_94717 = (state_94744[(8)]);
var inst_94720 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94721 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_94722 = cljs.core.cons.call(null,cljs.core._EQ_,inst_94717);
var inst_94723 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_94721,inst_94722,null];
var inst_94724 = cljs.core.PersistentHashMap.fromArrays(inst_94720,inst_94723);
var inst_94725 = cljs.test.do_report.call(null,inst_94724);
var state_94744__$1 = state_94744;
var statearr_94747_94837 = state_94744__$1;
(statearr_94747_94837[(2)] = inst_94725);

(statearr_94747_94837[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (1))){
var state_94744__$1 = state_94744;
var statearr_94748_94838 = state_94744__$1;
(statearr_94748_94838[(2)] = null);

(statearr_94748_94838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94744,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_94616 = cljs.core.List.EMPTY;
var inst_94617 = cljs.core._conj.call(null,inst_94616,"NOTICE: ");
var inst_94621 = cljs.core.async.chan.call(null,(1));
var inst_94622 = (function (){var c__9318__auto____$1 = inst_94621;
return ((function (c__9318__auto____$1,_,inst_94616,inst_94617,inst_94621,state_val_94745,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_94616,inst_94617,inst_94621,state_val_94745,c__9318__auto__,___10644__auto__){
return (function (state_94619){
var state_val_94620 = (state_94619[(1)]);
if((state_val_94620 === (1))){
var state_94619__$1 = state_94619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94619__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_94616,inst_94617,inst_94621,state_val_94745,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_94616,inst_94617,inst_94621,state_val_94745,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94752 = [null,null,null,null,null,null,null];
(statearr_94752[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94752[(1)] = (1));

return statearr_94752;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94619){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94753){if((e94753 instanceof Object)){
var ex__9301__auto__ = e94753;
var statearr_94754_94839 = state_94619;
(statearr_94754_94839[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94840 = state_94619;
state_94619 = G__94840;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94619){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_94616,inst_94617,inst_94621,state_val_94745,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_94755 = f__9319__auto__.call(null);
(statearr_94755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_94755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_94616,inst_94617,inst_94621,state_val_94745,c__9318__auto__,___10644__auto__))
})();
var inst_94623 = cljs.core.async.impl.dispatch.run.call(null,inst_94622);
var inst_94624 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_94621);
var state_94744__$1 = (function (){var statearr_94756 = state_94744;
(statearr_94756[(9)] = inst_94617);

(statearr_94756[(10)] = inst_94623);

return statearr_94756;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94744__$1,(5),inst_94624);
} else {
if((state_val_94745 === (15))){
var inst_94673 = (state_94744[(11)]);
var inst_94694 = (state_94744[(2)]);
var state_94744__$1 = (function (){var statearr_94757 = state_94744;
(statearr_94757[(12)] = inst_94694);

return statearr_94757;
})();
var statearr_94758_94841 = state_94744__$1;
(statearr_94758_94841[(2)] = inst_94673);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94744__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (21))){
var inst_94717 = (state_94744[(8)]);
var inst_94727 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94728 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_94729 = cljs.core.List.EMPTY;
var inst_94730 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_94731 = cljs.core.cons.call(null,inst_94730,inst_94717);
var inst_94732 = cljs.core._conj.call(null,inst_94729,inst_94731);
var inst_94733 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_94734 = cljs.core._conj.call(null,inst_94732,inst_94733);
var inst_94735 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_94728,inst_94734,null];
var inst_94736 = cljs.core.PersistentHashMap.fromArrays(inst_94727,inst_94735);
var inst_94737 = cljs.test.do_report.call(null,inst_94736);
var state_94744__$1 = state_94744;
var statearr_94759_94842 = state_94744__$1;
(statearr_94759_94842[(2)] = inst_94737);

(statearr_94759_94842[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (13))){
var inst_94672 = (state_94744[(13)]);
var inst_94675 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94676 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_94677 = cljs.core.cons.call(null,cljs.core._EQ_,inst_94672);
var inst_94678 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_94676,inst_94677,null];
var inst_94679 = cljs.core.PersistentHashMap.fromArrays(inst_94675,inst_94678);
var inst_94680 = cljs.test.do_report.call(null,inst_94679);
var state_94744__$1 = state_94744;
var statearr_94760_94843 = state_94744__$1;
(statearr_94760_94843[(2)] = inst_94680);

(statearr_94760_94843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (22))){
var inst_94718 = (state_94744[(14)]);
var inst_94739 = (state_94744[(2)]);
var state_94744__$1 = (function (){var statearr_94761 = state_94744;
(statearr_94761[(15)] = inst_94739);

return statearr_94761;
})();
var statearr_94762_94844 = state_94744__$1;
(statearr_94762_94844[(2)] = inst_94718);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94744__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (6))){
var inst_94627 = (state_94744[(7)]);
var inst_94630 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94631 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_94632 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_94627);
var inst_94633 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_94631,inst_94632,null];
var inst_94634 = cljs.core.PersistentHashMap.fromArrays(inst_94630,inst_94633);
var inst_94635 = cljs.test.do_report.call(null,inst_94634);
var state_94744__$1 = state_94744;
var statearr_94763_94845 = state_94744__$1;
(statearr_94763_94845[(2)] = inst_94635);

(statearr_94763_94845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (17))){
var inst_94697 = (state_94744[(2)]);
var inst_94698 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94699 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_94700 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_94699,inst_94697,null];
var inst_94701 = cljs.core.PersistentHashMap.fromArrays(inst_94698,inst_94700);
var inst_94702 = cljs.test.do_report.call(null,inst_94701);
var state_94744__$1 = state_94744;
var statearr_94764_94846 = state_94744__$1;
(statearr_94764_94846[(2)] = inst_94702);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94744__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (3))){
var inst_94607 = (state_94744[(2)]);
var inst_94608 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94609 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_94610 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_94609,inst_94607,null];
var inst_94611 = cljs.core.PersistentHashMap.fromArrays(inst_94608,inst_94610);
var inst_94612 = cljs.test.do_report.call(null,inst_94611);
var state_94744__$1 = state_94744;
var statearr_94765_94847 = state_94744__$1;
(statearr_94765_94847[(2)] = inst_94612);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94744__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (12))){
var inst_94672 = (state_94744[(13)]);
var inst_94673 = (state_94744[(11)]);
var inst_94662 = (state_94744[(16)]);
var inst_94671 = (state_94744[(2)]);
var inst_94672__$1 = cljs.core._conj.call(null,inst_94662,inst_94671);
var inst_94673__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_94672__$1);
var state_94744__$1 = (function (){var statearr_94766 = state_94744;
(statearr_94766[(13)] = inst_94672__$1);

(statearr_94766[(11)] = inst_94673__$1);

return statearr_94766;
})();
if(cljs.core.truth_(inst_94673__$1)){
var statearr_94767_94848 = state_94744__$1;
(statearr_94767_94848[(1)] = (13));

} else {
var statearr_94768_94849 = state_94744__$1;
(statearr_94768_94849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (2))){
var inst_94651 = (state_94744[(2)]);
var state_94744__$1 = (function (){var statearr_94769 = state_94744;
(statearr_94769[(17)] = inst_94651);

return statearr_94769;
})();
var statearr_94770_94850 = state_94744__$1;
(statearr_94770_94850[(2)] = null);

(statearr_94770_94850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (19))){
var inst_94707 = (state_94744[(18)]);
var inst_94717 = (state_94744[(8)]);
var inst_94718 = (state_94744[(14)]);
var inst_94716 = (state_94744[(2)]);
var inst_94717__$1 = cljs.core._conj.call(null,inst_94707,inst_94716);
var inst_94718__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_94717__$1);
var state_94744__$1 = (function (){var statearr_94771 = state_94744;
(statearr_94771[(8)] = inst_94717__$1);

(statearr_94771[(14)] = inst_94718__$1);

return statearr_94771;
})();
if(cljs.core.truth_(inst_94718__$1)){
var statearr_94772_94851 = state_94744__$1;
(statearr_94772_94851[(1)] = (20));

} else {
var statearr_94773_94852 = state_94744__$1;
(statearr_94773_94852[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94744,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_94661 = cljs.core.List.EMPTY;
var inst_94662 = cljs.core._conj.call(null,inst_94661,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_94666 = cljs.core.async.chan.call(null,(1));
var inst_94667 = (function (){var c__9318__auto____$1 = inst_94666;
return ((function (c__9318__auto____$1,_,inst_94661,inst_94662,inst_94666,state_val_94745,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_94661,inst_94662,inst_94666,state_val_94745,c__9318__auto__,___10644__auto__){
return (function (state_94664){
var state_val_94665 = (state_94664[(1)]);
if((state_val_94665 === (1))){
var state_94664__$1 = state_94664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94664__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_94661,inst_94662,inst_94666,state_val_94745,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_94661,inst_94662,inst_94666,state_val_94745,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94777 = [null,null,null,null,null,null,null];
(statearr_94777[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94777[(1)] = (1));

return statearr_94777;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94664){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94778){if((e94778 instanceof Object)){
var ex__9301__auto__ = e94778;
var statearr_94779_94853 = state_94664;
(statearr_94779_94853[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94854 = state_94664;
state_94664 = G__94854;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94664){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_94661,inst_94662,inst_94666,state_val_94745,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_94780 = f__9319__auto__.call(null);
(statearr_94780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_94780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_94661,inst_94662,inst_94666,state_val_94745,c__9318__auto__,___10644__auto__))
})();
var inst_94668 = cljs.core.async.impl.dispatch.run.call(null,inst_94667);
var inst_94669 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_94666);
var state_94744__$1 = (function (){var statearr_94781 = state_94744;
(statearr_94781[(16)] = inst_94662);

(statearr_94781[(19)] = inst_94668);

return statearr_94781;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94744__$1,(12),inst_94669);
} else {
if((state_val_94745 === (9))){
var inst_94696 = (state_94744[(2)]);
var state_94744__$1 = (function (){var statearr_94782 = state_94744;
(statearr_94782[(20)] = inst_94696);

return statearr_94782;
})();
var statearr_94783_94855 = state_94744__$1;
(statearr_94783_94855[(2)] = null);

(statearr_94783_94855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (5))){
var inst_94617 = (state_94744[(9)]);
var inst_94628 = (state_94744[(21)]);
var inst_94627 = (state_94744[(7)]);
var inst_94626 = (state_94744[(2)]);
var inst_94627__$1 = cljs.core._conj.call(null,inst_94617,inst_94626);
var inst_94628__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_94627__$1);
var state_94744__$1 = (function (){var statearr_94784 = state_94744;
(statearr_94784[(21)] = inst_94628__$1);

(statearr_94784[(7)] = inst_94627__$1);

return statearr_94784;
})();
if(cljs.core.truth_(inst_94628__$1)){
var statearr_94785_94856 = state_94744__$1;
(statearr_94785_94856[(1)] = (6));

} else {
var statearr_94786_94857 = state_94744__$1;
(statearr_94786_94857[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (14))){
var inst_94672 = (state_94744[(13)]);
var inst_94682 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94683 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_94684 = cljs.core.List.EMPTY;
var inst_94685 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_94686 = cljs.core.cons.call(null,inst_94685,inst_94672);
var inst_94687 = cljs.core._conj.call(null,inst_94684,inst_94686);
var inst_94688 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_94689 = cljs.core._conj.call(null,inst_94687,inst_94688);
var inst_94690 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_94683,inst_94689,null];
var inst_94691 = cljs.core.PersistentHashMap.fromArrays(inst_94682,inst_94690);
var inst_94692 = cljs.test.do_report.call(null,inst_94691);
var state_94744__$1 = state_94744;
var statearr_94787_94858 = state_94744__$1;
(statearr_94787_94858[(2)] = inst_94692);

(statearr_94787_94858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (16))){
var inst_94741 = (state_94744[(2)]);
var inst_94742 = done.call(null);
var state_94744__$1 = (function (){var statearr_94788 = state_94744;
(statearr_94788[(22)] = inst_94741);

return statearr_94788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94744__$1,inst_94742);
} else {
if((state_val_94745 === (10))){
var inst_94652 = (state_94744[(2)]);
var inst_94653 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94654 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_94655 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_94654,inst_94652,null];
var inst_94656 = cljs.core.PersistentHashMap.fromArrays(inst_94653,inst_94655);
var inst_94657 = cljs.test.do_report.call(null,inst_94656);
var state_94744__$1 = state_94744;
var statearr_94789_94859 = state_94744__$1;
(statearr_94789_94859[(2)] = inst_94657);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94744__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94745 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94744,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_94706 = cljs.core.List.EMPTY;
var inst_94707 = cljs.core._conj.call(null,inst_94706,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_94711 = cljs.core.async.chan.call(null,(1));
var inst_94712 = (function (){var c__9318__auto____$1 = inst_94711;
return ((function (c__9318__auto____$1,_,inst_94706,inst_94707,inst_94711,state_val_94745,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_94706,inst_94707,inst_94711,state_val_94745,c__9318__auto__,___10644__auto__){
return (function (state_94709){
var state_val_94710 = (state_94709[(1)]);
if((state_val_94710 === (1))){
var state_94709__$1 = state_94709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94709__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_94706,inst_94707,inst_94711,state_val_94745,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_94706,inst_94707,inst_94711,state_val_94745,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94793 = [null,null,null,null,null,null,null];
(statearr_94793[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94793[(1)] = (1));

return statearr_94793;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94709){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94794){if((e94794 instanceof Object)){
var ex__9301__auto__ = e94794;
var statearr_94795_94860 = state_94709;
(statearr_94795_94860[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94861 = state_94709;
state_94709 = G__94861;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94709){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_94706,inst_94707,inst_94711,state_val_94745,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_94796 = f__9319__auto__.call(null);
(statearr_94796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_94796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_94706,inst_94707,inst_94711,state_val_94745,c__9318__auto__,___10644__auto__))
})();
var inst_94713 = cljs.core.async.impl.dispatch.run.call(null,inst_94712);
var inst_94714 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_94711);
var state_94744__$1 = (function (){var statearr_94797 = state_94744;
(statearr_94797[(18)] = inst_94707);

(statearr_94797[(23)] = inst_94713);

return statearr_94797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94744__$1,(19),inst_94714);
} else {
if((state_val_94745 === (8))){
var inst_94628 = (state_94744[(21)]);
var inst_94649 = (state_94744[(2)]);
var state_94744__$1 = (function (){var statearr_94798 = state_94744;
(statearr_94798[(24)] = inst_94649);

return statearr_94798;
})();
var statearr_94799_94862 = state_94744__$1;
(statearr_94799_94862[(2)] = inst_94628);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94744__$1);

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
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_94803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_94803[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_94803[(1)] = (1));

return statearr_94803;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94744){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e94804){if((e94804 instanceof Object)){
var ex__9301__auto__ = e94804;
var statearr_94805_94863 = state_94744;
(statearr_94805_94863[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94864 = state_94744;
state_94744 = G__94864;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94744){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_94806 = f__9319__auto__.call(null);
(statearr_94806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_94806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test94403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta94404","meta94404",-792646807,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test94403.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test94403.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test94403";

drop_dot.core_test.t_drop_dot$core_test94403.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test94403");
});

drop_dot.core_test.__GT_t_drop_dot$core_test94403 = (function drop_dot$core_test$__GT_t_drop_dot$core_test94403(meta94404){
return (new drop_dot.core_test.t_drop_dot$core_test94403(meta94404));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test94403(null));
});

drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path->chan-linkable-path-that-wants-linking-TEST","drop-dot.core-test/chan-linkable-path->chan-linkable-path-that-wants-linking-TEST",2043608325,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path->chan-linkable-path-that-wants-linking-TEST","chan-linkable-path->chan-linkable-path-that-wants-linking-TEST",2088597056,null),"test/drop_dot/core_test.cljs",72,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST)?drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.line__GT_chan_linkable_path_TEST = (function drop_dot$core_test$line__GT_chan_linkable_path_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$line__GT_chan_linkable_path_TEST.cljs$lang$var);
});
drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test94865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test94865 = (function (meta94866){
this.meta94866 = meta94866;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test94865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_94867,meta94866__$1){
var self__ = this;
var _94867__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test94865(meta94866__$1));
});

drop_dot.core_test.t_drop_dot$core_test94865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_94867){
var self__ = this;
var _94867__$1 = this;
return self__.meta94866;
});

drop_dot.core_test.t_drop_dot$core_test94865.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test94865.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_94989){
var state_val_94990 = (state_94989[(1)]);
if((state_val_94990 === (7))){
var inst_94884 = (state_94989[(7)]);
var inst_94894 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94895 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_94896 = cljs.core.List.EMPTY;
var inst_94897 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_94898 = cljs.core.cons.call(null,inst_94897,inst_94884);
var inst_94899 = cljs.core._conj.call(null,inst_94896,inst_94898);
var inst_94900 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_94901 = cljs.core._conj.call(null,inst_94899,inst_94900);
var inst_94902 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_94895,inst_94901,null];
var inst_94903 = cljs.core.PersistentHashMap.fromArrays(inst_94894,inst_94902);
var inst_94904 = cljs.test.do_report.call(null,inst_94903);
var state_94989__$1 = state_94989;
var statearr_94991_95195 = state_94989__$1;
(statearr_94991_95195[(2)] = inst_94904);

(statearr_94991_95195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (20))){
var inst_94962 = (state_94989[(8)]);
var inst_94965 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94966 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_94967 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_94962);
var inst_94968 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_94966,inst_94967,null];
var inst_94969 = cljs.core.PersistentHashMap.fromArrays(inst_94965,inst_94968);
var inst_94970 = cljs.test.do_report.call(null,inst_94969);
var state_94989__$1 = state_94989;
var statearr_94992_95196 = state_94989__$1;
(statearr_94992_95196[(2)] = inst_94970);

(statearr_94992_95196[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (1))){
var inst_94869 = cljs.core.async.chan.call(null,(1));
var state_94989__$1 = (function (){var statearr_94993 = state_94989;
(statearr_94993[(9)] = inst_94869);

return statearr_94993;
})();
var statearr_94994_95197 = state_94989__$1;
(statearr_94994_95197[(2)] = null);

(statearr_94994_95197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94989,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_94879 = cljs.core.List.EMPTY;
var inst_94880 = cljs.core._conj.call(null,inst_94879,"~/.TDD-this-file-in-dot-drop-dot");
var inst_94881 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_94989__$1 = (function (){var statearr_94995 = state_94989;
(statearr_94995[(10)] = inst_94880);

return statearr_94995;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94989__$1,(5),inst_94881);
} else {
if((state_val_94990 === (15))){
var inst_94924 = (state_94989[(11)]);
var inst_94945 = (state_94989[(2)]);
var state_94989__$1 = (function (){var statearr_94996 = state_94989;
(statearr_94996[(12)] = inst_94945);

return statearr_94996;
})();
var statearr_94997_95198 = state_94989__$1;
(statearr_94997_95198[(2)] = inst_94924);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (21))){
var inst_94962 = (state_94989[(8)]);
var inst_94972 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94973 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_94974 = cljs.core.List.EMPTY;
var inst_94975 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_94976 = cljs.core.cons.call(null,inst_94975,inst_94962);
var inst_94977 = cljs.core._conj.call(null,inst_94974,inst_94976);
var inst_94978 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_94979 = cljs.core._conj.call(null,inst_94977,inst_94978);
var inst_94980 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_94973,inst_94979,null];
var inst_94981 = cljs.core.PersistentHashMap.fromArrays(inst_94972,inst_94980);
var inst_94982 = cljs.test.do_report.call(null,inst_94981);
var state_94989__$1 = state_94989;
var statearr_94998_95199 = state_94989__$1;
(statearr_94998_95199[(2)] = inst_94982);

(statearr_94998_95199[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (13))){
var inst_94923 = (state_94989[(13)]);
var inst_94926 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94927 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_94928 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_94923);
var inst_94929 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_94927,inst_94928,null];
var inst_94930 = cljs.core.PersistentHashMap.fromArrays(inst_94926,inst_94929);
var inst_94931 = cljs.test.do_report.call(null,inst_94930);
var state_94989__$1 = state_94989;
var statearr_94999_95200 = state_94989__$1;
(statearr_94999_95200[(2)] = inst_94931);

(statearr_94999_95200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (22))){
var inst_94963 = (state_94989[(14)]);
var inst_94984 = (state_94989[(2)]);
var state_94989__$1 = (function (){var statearr_95000 = state_94989;
(statearr_95000[(15)] = inst_94984);

return statearr_95000;
})();
var statearr_95001_95201 = state_94989__$1;
(statearr_95001_95201[(2)] = inst_94963);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (6))){
var inst_94884 = (state_94989[(7)]);
var inst_94887 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94888 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_94889 = cljs.core.cons.call(null,cljs.core._EQ_,inst_94884);
var inst_94890 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_94888,inst_94889,null];
var inst_94891 = cljs.core.PersistentHashMap.fromArrays(inst_94887,inst_94890);
var inst_94892 = cljs.test.do_report.call(null,inst_94891);
var state_94989__$1 = state_94989;
var statearr_95002_95202 = state_94989__$1;
(statearr_95002_95202[(2)] = inst_94892);

(statearr_95002_95202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (17))){
var inst_94948 = (state_94989[(2)]);
var inst_94949 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94950 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_94951 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_94950,inst_94948,null];
var inst_94952 = cljs.core.PersistentHashMap.fromArrays(inst_94949,inst_94951);
var inst_94953 = cljs.test.do_report.call(null,inst_94952);
var state_94989__$1 = state_94989;
var statearr_95003_95203 = state_94989__$1;
(statearr_95003_95203[(2)] = inst_94953);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (3))){
var inst_94870 = (state_94989[(2)]);
var inst_94871 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94872 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_94873 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_94872,inst_94870,null];
var inst_94874 = cljs.core.PersistentHashMap.fromArrays(inst_94871,inst_94873);
var inst_94875 = cljs.test.do_report.call(null,inst_94874);
var state_94989__$1 = state_94989;
var statearr_95004_95204 = state_94989__$1;
(statearr_95004_95204[(2)] = inst_94875);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (12))){
var inst_94919 = (state_94989[(16)]);
var inst_94923 = (state_94989[(13)]);
var inst_94924 = (state_94989[(11)]);
var inst_94922 = (state_94989[(2)]);
var inst_94923__$1 = cljs.core._conj.call(null,inst_94919,inst_94922);
var inst_94924__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_94923__$1);
var state_94989__$1 = (function (){var statearr_95005 = state_94989;
(statearr_95005[(13)] = inst_94923__$1);

(statearr_95005[(11)] = inst_94924__$1);

return statearr_95005;
})();
if(cljs.core.truth_(inst_94924__$1)){
var statearr_95006_95205 = state_94989__$1;
(statearr_95006_95205[(1)] = (13));

} else {
var statearr_95007_95206 = state_94989__$1;
(statearr_95007_95206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (2))){
var inst_94908 = (state_94989[(2)]);
var state_94989__$1 = (function (){var statearr_95008 = state_94989;
(statearr_95008[(17)] = inst_94908);

return statearr_95008;
})();
var statearr_95009_95207 = state_94989__$1;
(statearr_95009_95207[(2)] = null);

(statearr_95009_95207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (19))){
var inst_94958 = (state_94989[(18)]);
var inst_94962 = (state_94989[(8)]);
var inst_94963 = (state_94989[(14)]);
var inst_94961 = (state_94989[(2)]);
var inst_94962__$1 = cljs.core._conj.call(null,inst_94958,inst_94961);
var inst_94963__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_94962__$1);
var state_94989__$1 = (function (){var statearr_95010 = state_94989;
(statearr_95010[(8)] = inst_94962__$1);

(statearr_95010[(14)] = inst_94963__$1);

return statearr_95010;
})();
if(cljs.core.truth_(inst_94963__$1)){
var statearr_95011_95208 = state_94989__$1;
(statearr_95011_95208[(1)] = (20));

} else {
var statearr_95012_95209 = state_94989__$1;
(statearr_95012_95209[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94989,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_94918 = cljs.core.List.EMPTY;
var inst_94919 = cljs.core._conj.call(null,inst_94918,"ERROR: ");
var inst_94920 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_94989__$1 = (function (){var statearr_95013 = state_94989;
(statearr_95013[(16)] = inst_94919);

return statearr_95013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94989__$1,(12),inst_94920);
} else {
if((state_val_94990 === (9))){
var inst_94947 = (state_94989[(2)]);
var state_94989__$1 = (function (){var statearr_95014 = state_94989;
(statearr_95014[(19)] = inst_94947);

return statearr_95014;
})();
var statearr_95015_95210 = state_94989__$1;
(statearr_95015_95210[(2)] = null);

(statearr_95015_95210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (5))){
var inst_94884 = (state_94989[(7)]);
var inst_94880 = (state_94989[(10)]);
var inst_94885 = (state_94989[(20)]);
var inst_94883 = (state_94989[(2)]);
var inst_94884__$1 = cljs.core._conj.call(null,inst_94880,inst_94883);
var inst_94885__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_94884__$1);
var state_94989__$1 = (function (){var statearr_95016 = state_94989;
(statearr_95016[(7)] = inst_94884__$1);

(statearr_95016[(20)] = inst_94885__$1);

return statearr_95016;
})();
if(cljs.core.truth_(inst_94885__$1)){
var statearr_95017_95211 = state_94989__$1;
(statearr_95017_95211[(1)] = (6));

} else {
var statearr_95018_95212 = state_94989__$1;
(statearr_95018_95212[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (14))){
var inst_94923 = (state_94989[(13)]);
var inst_94933 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94934 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_94935 = cljs.core.List.EMPTY;
var inst_94936 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_94937 = cljs.core.cons.call(null,inst_94936,inst_94923);
var inst_94938 = cljs.core._conj.call(null,inst_94935,inst_94937);
var inst_94939 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_94940 = cljs.core._conj.call(null,inst_94938,inst_94939);
var inst_94941 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_94934,inst_94940,null];
var inst_94942 = cljs.core.PersistentHashMap.fromArrays(inst_94933,inst_94941);
var inst_94943 = cljs.test.do_report.call(null,inst_94942);
var state_94989__$1 = state_94989;
var statearr_95019_95213 = state_94989__$1;
(statearr_95019_95213[(2)] = inst_94943);

(statearr_95019_95213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (16))){
var inst_94986 = (state_94989[(2)]);
var inst_94987 = done.call(null);
var state_94989__$1 = (function (){var statearr_95020 = state_94989;
(statearr_95020[(21)] = inst_94986);

return statearr_95020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94989__$1,inst_94987);
} else {
if((state_val_94990 === (10))){
var inst_94909 = (state_94989[(2)]);
var inst_94910 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_94911 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_94912 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_94911,inst_94909,null];
var inst_94913 = cljs.core.PersistentHashMap.fromArrays(inst_94910,inst_94912);
var inst_94914 = cljs.test.do_report.call(null,inst_94913);
var state_94989__$1 = state_94989;
var statearr_95021_95214 = state_94989__$1;
(statearr_95021_95214[(2)] = inst_94914);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94990 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_94989,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_94957 = cljs.core.List.EMPTY;
var inst_94958 = cljs.core._conj.call(null,inst_94957,"ERROR: ");
var inst_94959 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_94989__$1 = (function (){var statearr_95022 = state_94989;
(statearr_95022[(18)] = inst_94958);

return statearr_95022;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94989__$1,(19),inst_94959);
} else {
if((state_val_94990 === (8))){
var inst_94885 = (state_94989[(20)]);
var inst_94906 = (state_94989[(2)]);
var state_94989__$1 = (function (){var statearr_95023 = state_94989;
(statearr_95023[(22)] = inst_94906);

return statearr_95023;
})();
var statearr_95024_95215 = state_94989__$1;
(statearr_95024_95215[(2)] = inst_94885);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94989__$1);

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
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_95028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_95028[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_95028[(1)] = (1));

return statearr_95028;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_94989){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_94989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e95029){if((e95029 instanceof Object)){
var ex__9301__auto__ = e95029;
var statearr_95030_95216 = state_94989;
(statearr_95030_95216[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e95029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95217 = state_94989;
state_94989 = G__95217;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_94989){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_94989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_95031 = f__9319__auto__.call(null);
(statearr_95031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_95031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test94865.prototype.apply = (function (self__,args94868){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args94868)));
});

drop_dot.core_test.t_drop_dot$core_test94865.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_95152){
var state_val_95153 = (state_95152[(1)]);
if((state_val_95153 === (7))){
var inst_95047 = (state_95152[(7)]);
var inst_95057 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95058 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_95059 = cljs.core.List.EMPTY;
var inst_95060 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_95061 = cljs.core.cons.call(null,inst_95060,inst_95047);
var inst_95062 = cljs.core._conj.call(null,inst_95059,inst_95061);
var inst_95063 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_95064 = cljs.core._conj.call(null,inst_95062,inst_95063);
var inst_95065 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_95058,inst_95064,null];
var inst_95066 = cljs.core.PersistentHashMap.fromArrays(inst_95057,inst_95065);
var inst_95067 = cljs.test.do_report.call(null,inst_95066);
var state_95152__$1 = state_95152;
var statearr_95154_95218 = state_95152__$1;
(statearr_95154_95218[(2)] = inst_95067);

(statearr_95154_95218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (20))){
var inst_95125 = (state_95152[(8)]);
var inst_95128 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95129 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_95130 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_95125);
var inst_95131 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_95129,inst_95130,null];
var inst_95132 = cljs.core.PersistentHashMap.fromArrays(inst_95128,inst_95131);
var inst_95133 = cljs.test.do_report.call(null,inst_95132);
var state_95152__$1 = state_95152;
var statearr_95155_95219 = state_95152__$1;
(statearr_95155_95219[(2)] = inst_95133);

(statearr_95155_95219[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (1))){
var inst_95032 = cljs.core.async.chan.call(null,(1));
var state_95152__$1 = (function (){var statearr_95156 = state_95152;
(statearr_95156[(9)] = inst_95032);

return statearr_95156;
})();
var statearr_95157_95220 = state_95152__$1;
(statearr_95157_95220[(2)] = null);

(statearr_95157_95220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_95152,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_95042 = cljs.core.List.EMPTY;
var inst_95043 = cljs.core._conj.call(null,inst_95042,"~/.TDD-this-file-in-dot-drop-dot");
var inst_95044 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_95152__$1 = (function (){var statearr_95158 = state_95152;
(statearr_95158[(10)] = inst_95043);

return statearr_95158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_95152__$1,(5),inst_95044);
} else {
if((state_val_95153 === (15))){
var inst_95087 = (state_95152[(11)]);
var inst_95108 = (state_95152[(2)]);
var state_95152__$1 = (function (){var statearr_95159 = state_95152;
(statearr_95159[(12)] = inst_95108);

return statearr_95159;
})();
var statearr_95160_95221 = state_95152__$1;
(statearr_95160_95221[(2)] = inst_95087);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95152__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (21))){
var inst_95125 = (state_95152[(8)]);
var inst_95135 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95136 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_95137 = cljs.core.List.EMPTY;
var inst_95138 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_95139 = cljs.core.cons.call(null,inst_95138,inst_95125);
var inst_95140 = cljs.core._conj.call(null,inst_95137,inst_95139);
var inst_95141 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_95142 = cljs.core._conj.call(null,inst_95140,inst_95141);
var inst_95143 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_95136,inst_95142,null];
var inst_95144 = cljs.core.PersistentHashMap.fromArrays(inst_95135,inst_95143);
var inst_95145 = cljs.test.do_report.call(null,inst_95144);
var state_95152__$1 = state_95152;
var statearr_95161_95222 = state_95152__$1;
(statearr_95161_95222[(2)] = inst_95145);

(statearr_95161_95222[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (13))){
var inst_95086 = (state_95152[(13)]);
var inst_95089 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95090 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_95091 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_95086);
var inst_95092 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_95090,inst_95091,null];
var inst_95093 = cljs.core.PersistentHashMap.fromArrays(inst_95089,inst_95092);
var inst_95094 = cljs.test.do_report.call(null,inst_95093);
var state_95152__$1 = state_95152;
var statearr_95162_95223 = state_95152__$1;
(statearr_95162_95223[(2)] = inst_95094);

(statearr_95162_95223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (22))){
var inst_95126 = (state_95152[(14)]);
var inst_95147 = (state_95152[(2)]);
var state_95152__$1 = (function (){var statearr_95163 = state_95152;
(statearr_95163[(15)] = inst_95147);

return statearr_95163;
})();
var statearr_95164_95224 = state_95152__$1;
(statearr_95164_95224[(2)] = inst_95126);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95152__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (6))){
var inst_95047 = (state_95152[(7)]);
var inst_95050 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95051 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_95052 = cljs.core.cons.call(null,cljs.core._EQ_,inst_95047);
var inst_95053 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_95051,inst_95052,null];
var inst_95054 = cljs.core.PersistentHashMap.fromArrays(inst_95050,inst_95053);
var inst_95055 = cljs.test.do_report.call(null,inst_95054);
var state_95152__$1 = state_95152;
var statearr_95165_95225 = state_95152__$1;
(statearr_95165_95225[(2)] = inst_95055);

(statearr_95165_95225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (17))){
var inst_95111 = (state_95152[(2)]);
var inst_95112 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95113 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_95114 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_95113,inst_95111,null];
var inst_95115 = cljs.core.PersistentHashMap.fromArrays(inst_95112,inst_95114);
var inst_95116 = cljs.test.do_report.call(null,inst_95115);
var state_95152__$1 = state_95152;
var statearr_95166_95226 = state_95152__$1;
(statearr_95166_95226[(2)] = inst_95116);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95152__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (3))){
var inst_95033 = (state_95152[(2)]);
var inst_95034 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95035 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_95036 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_95035,inst_95033,null];
var inst_95037 = cljs.core.PersistentHashMap.fromArrays(inst_95034,inst_95036);
var inst_95038 = cljs.test.do_report.call(null,inst_95037);
var state_95152__$1 = state_95152;
var statearr_95167_95227 = state_95152__$1;
(statearr_95167_95227[(2)] = inst_95038);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95152__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (12))){
var inst_95082 = (state_95152[(16)]);
var inst_95087 = (state_95152[(11)]);
var inst_95086 = (state_95152[(13)]);
var inst_95085 = (state_95152[(2)]);
var inst_95086__$1 = cljs.core._conj.call(null,inst_95082,inst_95085);
var inst_95087__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_95086__$1);
var state_95152__$1 = (function (){var statearr_95168 = state_95152;
(statearr_95168[(11)] = inst_95087__$1);

(statearr_95168[(13)] = inst_95086__$1);

return statearr_95168;
})();
if(cljs.core.truth_(inst_95087__$1)){
var statearr_95169_95228 = state_95152__$1;
(statearr_95169_95228[(1)] = (13));

} else {
var statearr_95170_95229 = state_95152__$1;
(statearr_95170_95229[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (2))){
var inst_95071 = (state_95152[(2)]);
var state_95152__$1 = (function (){var statearr_95171 = state_95152;
(statearr_95171[(17)] = inst_95071);

return statearr_95171;
})();
var statearr_95172_95230 = state_95152__$1;
(statearr_95172_95230[(2)] = null);

(statearr_95172_95230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (19))){
var inst_95125 = (state_95152[(8)]);
var inst_95126 = (state_95152[(14)]);
var inst_95121 = (state_95152[(18)]);
var inst_95124 = (state_95152[(2)]);
var inst_95125__$1 = cljs.core._conj.call(null,inst_95121,inst_95124);
var inst_95126__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_95125__$1);
var state_95152__$1 = (function (){var statearr_95173 = state_95152;
(statearr_95173[(8)] = inst_95125__$1);

(statearr_95173[(14)] = inst_95126__$1);

return statearr_95173;
})();
if(cljs.core.truth_(inst_95126__$1)){
var statearr_95174_95231 = state_95152__$1;
(statearr_95174_95231[(1)] = (20));

} else {
var statearr_95175_95232 = state_95152__$1;
(statearr_95175_95232[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_95152,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_95081 = cljs.core.List.EMPTY;
var inst_95082 = cljs.core._conj.call(null,inst_95081,"ERROR: ");
var inst_95083 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_95152__$1 = (function (){var statearr_95176 = state_95152;
(statearr_95176[(16)] = inst_95082);

return statearr_95176;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_95152__$1,(12),inst_95083);
} else {
if((state_val_95153 === (9))){
var inst_95110 = (state_95152[(2)]);
var state_95152__$1 = (function (){var statearr_95177 = state_95152;
(statearr_95177[(19)] = inst_95110);

return statearr_95177;
})();
var statearr_95178_95233 = state_95152__$1;
(statearr_95178_95233[(2)] = null);

(statearr_95178_95233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (5))){
var inst_95043 = (state_95152[(10)]);
var inst_95048 = (state_95152[(20)]);
var inst_95047 = (state_95152[(7)]);
var inst_95046 = (state_95152[(2)]);
var inst_95047__$1 = cljs.core._conj.call(null,inst_95043,inst_95046);
var inst_95048__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_95047__$1);
var state_95152__$1 = (function (){var statearr_95179 = state_95152;
(statearr_95179[(20)] = inst_95048__$1);

(statearr_95179[(7)] = inst_95047__$1);

return statearr_95179;
})();
if(cljs.core.truth_(inst_95048__$1)){
var statearr_95180_95234 = state_95152__$1;
(statearr_95180_95234[(1)] = (6));

} else {
var statearr_95181_95235 = state_95152__$1;
(statearr_95181_95235[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (14))){
var inst_95086 = (state_95152[(13)]);
var inst_95096 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95097 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_95098 = cljs.core.List.EMPTY;
var inst_95099 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_95100 = cljs.core.cons.call(null,inst_95099,inst_95086);
var inst_95101 = cljs.core._conj.call(null,inst_95098,inst_95100);
var inst_95102 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_95103 = cljs.core._conj.call(null,inst_95101,inst_95102);
var inst_95104 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_95097,inst_95103,null];
var inst_95105 = cljs.core.PersistentHashMap.fromArrays(inst_95096,inst_95104);
var inst_95106 = cljs.test.do_report.call(null,inst_95105);
var state_95152__$1 = state_95152;
var statearr_95182_95236 = state_95152__$1;
(statearr_95182_95236[(2)] = inst_95106);

(statearr_95182_95236[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (16))){
var inst_95149 = (state_95152[(2)]);
var inst_95150 = done.call(null);
var state_95152__$1 = (function (){var statearr_95183 = state_95152;
(statearr_95183[(21)] = inst_95149);

return statearr_95183;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_95152__$1,inst_95150);
} else {
if((state_val_95153 === (10))){
var inst_95072 = (state_95152[(2)]);
var inst_95073 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95074 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_95075 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_95074,inst_95072,null];
var inst_95076 = cljs.core.PersistentHashMap.fromArrays(inst_95073,inst_95075);
var inst_95077 = cljs.test.do_report.call(null,inst_95076);
var state_95152__$1 = state_95152;
var statearr_95184_95237 = state_95152__$1;
(statearr_95184_95237[(2)] = inst_95077);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95152__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95153 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_95152,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_95120 = cljs.core.List.EMPTY;
var inst_95121 = cljs.core._conj.call(null,inst_95120,"ERROR: ");
var inst_95122 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_95152__$1 = (function (){var statearr_95185 = state_95152;
(statearr_95185[(18)] = inst_95121);

return statearr_95185;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_95152__$1,(19),inst_95122);
} else {
if((state_val_95153 === (8))){
var inst_95048 = (state_95152[(20)]);
var inst_95069 = (state_95152[(2)]);
var state_95152__$1 = (function (){var statearr_95186 = state_95152;
(statearr_95186[(22)] = inst_95069);

return statearr_95186;
})();
var statearr_95187_95238 = state_95152__$1;
(statearr_95187_95238[(2)] = inst_95048);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95152__$1);

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
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_95191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_95191[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_95191[(1)] = (1));

return statearr_95191;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_95152){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_95152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e95192){if((e95192 instanceof Object)){
var ex__9301__auto__ = e95192;
var statearr_95193_95239 = state_95152;
(statearr_95193_95239[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e95192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95240 = state_95152;
state_95152 = G__95240;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_95152){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_95152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_95194 = f__9319__auto__.call(null);
(statearr_95194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_95194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test94865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta94866","meta94866",-1307846386,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test94865.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test94865.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test94865";

drop_dot.core_test.t_drop_dot$core_test94865.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test94865");
});

drop_dot.core_test.__GT_t_drop_dot$core_test94865 = (function drop_dot$core_test$__GT_t_drop_dot$core_test94865(meta94866){
return (new drop_dot.core_test.t_drop_dot$core_test94865(meta94866));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test94865(null));
});

drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.line__GT_chan_linkable_path_TEST;},new cljs.core.Symbol("drop-dot.core-test","line->chan-linkable-path-TEST","drop-dot.core-test/line->chan-linkable-path-TEST",-1336484385,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"line->chan-linkable-path-TEST","line->chan-linkable-path-TEST",-1260168422,null),"test/drop_dot/core_test.cljs",39,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.line__GT_chan_linkable_path_TEST)?drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test:null)]));
drop_dot.core_test.core_tests = (function drop_dot$core_test$core_tests(){
return cljs.test.test_var.call(null,drop_dot$core_test$core_tests.cljs$lang$var);
});
drop_dot.core_test.core_tests.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test95241 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test95241 = (function (meta95242){
this.meta95242 = meta95242;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test95241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_95243,meta95242__$1){
var self__ = this;
var _95243__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test95241(meta95242__$1));
});

drop_dot.core_test.t_drop_dot$core_test95241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_95243){
var self__ = this;
var _95243__$1 = this;
return self__.meta95242;
});

drop_dot.core_test.t_drop_dot$core_test95241.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test95241.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_95286){
var state_val_95287 = (state_95286[(1)]);
if((state_val_95287 === (1))){
var state_95286__$1 = state_95286;
var statearr_95288_95367 = state_95286__$1;
(statearr_95288_95367[(2)] = null);

(statearr_95288_95367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95287 === (2))){
var inst_95283 = (state_95286[(2)]);
var inst_95284 = done.call(null);
var state_95286__$1 = (function (){var statearr_95289 = state_95286;
(statearr_95289[(7)] = inst_95283);

return statearr_95289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_95286__$1,inst_95284);
} else {
if((state_val_95287 === (3))){
var inst_95245 = (state_95286[(2)]);
var inst_95246 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95247 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_95248 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_95247,inst_95245,null];
var inst_95249 = cljs.core.PersistentHashMap.fromArrays(inst_95246,inst_95248);
var inst_95250 = cljs.test.do_report.call(null,inst_95249);
var state_95286__$1 = state_95286;
var statearr_95290_95368 = state_95286__$1;
(statearr_95290_95368[(2)] = inst_95250);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95286__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95287 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_95286,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_95254 = cljs.core.List.EMPTY;
var inst_95255 = cljs.core._conj.call(null,inst_95254,true);
var inst_95256 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_95286__$1 = (function (){var statearr_95291 = state_95286;
(statearr_95291[(8)] = inst_95255);

return statearr_95291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_95286__$1,(5),inst_95256);
} else {
if((state_val_95287 === (5))){
var inst_95260 = (state_95286[(9)]);
var inst_95255 = (state_95286[(8)]);
var inst_95259 = (state_95286[(10)]);
var inst_95258 = (state_95286[(2)]);
var inst_95259__$1 = cljs.core._conj.call(null,inst_95255,inst_95258);
var inst_95260__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_95259__$1);
var state_95286__$1 = (function (){var statearr_95292 = state_95286;
(statearr_95292[(9)] = inst_95260__$1);

(statearr_95292[(10)] = inst_95259__$1);

return statearr_95292;
})();
if(cljs.core.truth_(inst_95260__$1)){
var statearr_95293_95369 = state_95286__$1;
(statearr_95293_95369[(1)] = (6));

} else {
var statearr_95294_95370 = state_95286__$1;
(statearr_95294_95370[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95287 === (6))){
var inst_95259 = (state_95286[(10)]);
var inst_95262 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95263 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_95264 = cljs.core.cons.call(null,cljs.core._EQ_,inst_95259);
var inst_95265 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_95263,inst_95264,null];
var inst_95266 = cljs.core.PersistentHashMap.fromArrays(inst_95262,inst_95265);
var inst_95267 = cljs.test.do_report.call(null,inst_95266);
var state_95286__$1 = state_95286;
var statearr_95295_95371 = state_95286__$1;
(statearr_95295_95371[(2)] = inst_95267);

(statearr_95295_95371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95287 === (7))){
var inst_95259 = (state_95286[(10)]);
var inst_95269 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95270 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_95271 = cljs.core.List.EMPTY;
var inst_95272 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_95273 = cljs.core.cons.call(null,inst_95272,inst_95259);
var inst_95274 = cljs.core._conj.call(null,inst_95271,inst_95273);
var inst_95275 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_95276 = cljs.core._conj.call(null,inst_95274,inst_95275);
var inst_95277 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_95270,inst_95276,null];
var inst_95278 = cljs.core.PersistentHashMap.fromArrays(inst_95269,inst_95277);
var inst_95279 = cljs.test.do_report.call(null,inst_95278);
var state_95286__$1 = state_95286;
var statearr_95296_95372 = state_95286__$1;
(statearr_95296_95372[(2)] = inst_95279);

(statearr_95296_95372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95287 === (8))){
var inst_95260 = (state_95286[(9)]);
var inst_95281 = (state_95286[(2)]);
var state_95286__$1 = (function (){var statearr_95297 = state_95286;
(statearr_95297[(11)] = inst_95281);

return statearr_95297;
})();
var statearr_95298_95373 = state_95286__$1;
(statearr_95298_95373[(2)] = inst_95260);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95286__$1);

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
});})(c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_95302 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_95302[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_95302[(1)] = (1));

return statearr_95302;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_95286){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_95286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e95303){if((e95303 instanceof Object)){
var ex__9301__auto__ = e95303;
var statearr_95304_95374 = state_95286;
(statearr_95304_95374[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e95303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95375 = state_95286;
state_95286 = G__95375;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_95286){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_95286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_95305 = f__9319__auto__.call(null);
(statearr_95305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_95305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test95241.prototype.apply = (function (self__,args95244){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args95244)));
});

drop_dot.core_test.t_drop_dot$core_test95241.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_95347){
var state_val_95348 = (state_95347[(1)]);
if((state_val_95348 === (1))){
var state_95347__$1 = state_95347;
var statearr_95349_95376 = state_95347__$1;
(statearr_95349_95376[(2)] = null);

(statearr_95349_95376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95348 === (2))){
var inst_95344 = (state_95347[(2)]);
var inst_95345 = done.call(null);
var state_95347__$1 = (function (){var statearr_95350 = state_95347;
(statearr_95350[(7)] = inst_95344);

return statearr_95350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_95347__$1,inst_95345);
} else {
if((state_val_95348 === (3))){
var inst_95306 = (state_95347[(2)]);
var inst_95307 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95308 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_95309 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_95308,inst_95306,null];
var inst_95310 = cljs.core.PersistentHashMap.fromArrays(inst_95307,inst_95309);
var inst_95311 = cljs.test.do_report.call(null,inst_95310);
var state_95347__$1 = state_95347;
var statearr_95351_95377 = state_95347__$1;
(statearr_95351_95377[(2)] = inst_95311);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95347__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95348 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_95347,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_95315 = cljs.core.List.EMPTY;
var inst_95316 = cljs.core._conj.call(null,inst_95315,true);
var inst_95317 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_95347__$1 = (function (){var statearr_95352 = state_95347;
(statearr_95352[(8)] = inst_95316);

return statearr_95352;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_95347__$1,(5),inst_95317);
} else {
if((state_val_95348 === (5))){
var inst_95320 = (state_95347[(9)]);
var inst_95316 = (state_95347[(8)]);
var inst_95321 = (state_95347[(10)]);
var inst_95319 = (state_95347[(2)]);
var inst_95320__$1 = cljs.core._conj.call(null,inst_95316,inst_95319);
var inst_95321__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_95320__$1);
var state_95347__$1 = (function (){var statearr_95353 = state_95347;
(statearr_95353[(9)] = inst_95320__$1);

(statearr_95353[(10)] = inst_95321__$1);

return statearr_95353;
})();
if(cljs.core.truth_(inst_95321__$1)){
var statearr_95354_95378 = state_95347__$1;
(statearr_95354_95378[(1)] = (6));

} else {
var statearr_95355_95379 = state_95347__$1;
(statearr_95355_95379[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95348 === (6))){
var inst_95320 = (state_95347[(9)]);
var inst_95323 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95324 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_95325 = cljs.core.cons.call(null,cljs.core._EQ_,inst_95320);
var inst_95326 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_95324,inst_95325,null];
var inst_95327 = cljs.core.PersistentHashMap.fromArrays(inst_95323,inst_95326);
var inst_95328 = cljs.test.do_report.call(null,inst_95327);
var state_95347__$1 = state_95347;
var statearr_95356_95380 = state_95347__$1;
(statearr_95356_95380[(2)] = inst_95328);

(statearr_95356_95380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95348 === (7))){
var inst_95320 = (state_95347[(9)]);
var inst_95330 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_95331 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_95332 = cljs.core.List.EMPTY;
var inst_95333 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_95334 = cljs.core.cons.call(null,inst_95333,inst_95320);
var inst_95335 = cljs.core._conj.call(null,inst_95332,inst_95334);
var inst_95336 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_95337 = cljs.core._conj.call(null,inst_95335,inst_95336);
var inst_95338 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_95331,inst_95337,null];
var inst_95339 = cljs.core.PersistentHashMap.fromArrays(inst_95330,inst_95338);
var inst_95340 = cljs.test.do_report.call(null,inst_95339);
var state_95347__$1 = state_95347;
var statearr_95357_95381 = state_95347__$1;
(statearr_95357_95381[(2)] = inst_95340);

(statearr_95357_95381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95348 === (8))){
var inst_95321 = (state_95347[(10)]);
var inst_95342 = (state_95347[(2)]);
var state_95347__$1 = (function (){var statearr_95358 = state_95347;
(statearr_95358[(11)] = inst_95342);

return statearr_95358;
})();
var statearr_95359_95382 = state_95347__$1;
(statearr_95359_95382[(2)] = inst_95321);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95347__$1);

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
});})(c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_95363 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_95363[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_95363[(1)] = (1));

return statearr_95363;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_95347){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_95347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e95364){if((e95364 instanceof Object)){
var ex__9301__auto__ = e95364;
var statearr_95365_95383 = state_95347;
(statearr_95365_95383[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_95347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e95364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95384 = state_95347;
state_95347 = G__95384;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_95347){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_95347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_95366 = f__9319__auto__.call(null);
(statearr_95366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_95366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test95241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta95242","meta95242",-1764022691,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test95241.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test95241.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test95241";

drop_dot.core_test.t_drop_dot$core_test95241.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test95241");
});

drop_dot.core_test.__GT_t_drop_dot$core_test95241 = (function drop_dot$core_test$__GT_t_drop_dot$core_test95241(meta95242){
return (new drop_dot.core_test.t_drop_dot$core_test95241(meta95242));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test95241(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"test/drop_dot/core_test.cljs",20,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));
drop_dot.core_test.support_functions = (function drop_dot$core_test$support_functions(){
return cljs.test.test_var.call(null,drop_dot$core_test$support_functions.cljs$lang$var);
});
drop_dot.core_test.support_functions.cljs$lang$test = (function (){
try{var values__10576__auto___95388 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.dropbox_installed_QMARK_.call(null));
var result__10577__auto___95389 = cljs.core.apply.call(null,cljs.core._EQ_,values__10576__auto___95388);
if(cljs.core.truth_(result__10577__auto___95389)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10576__auto___95388),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10576__auto___95388)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e95385){var t__10614__auto___95390 = e95385;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10614__auto___95390,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10576__auto___95391 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.unix_OS_QMARK_.call(null));
var result__10577__auto___95392 = cljs.core.apply.call(null,cljs.core._EQ_,values__10576__auto___95391);
if(cljs.core.truth_(result__10577__auto___95392)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10576__auto___95391),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10576__auto___95391)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e95386){var t__10614__auto___95393 = e95386;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10614__auto___95393,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10576__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.dropdot_folder_exists_QMARK_.call(null));
var result__10577__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__10576__auto__);
if(cljs.core.truth_(result__10577__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10576__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10576__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__10577__auto__;
}catch (e95387){var t__10614__auto__ = e95387;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10614__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

drop_dot.core_test.support_functions.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.support_functions;},new cljs.core.Symbol("drop-dot.core-test","support-functions","drop-dot.core-test/support-functions",182588706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"support-functions","support-functions",124821089,null),"test/drop_dot/core_test.cljs",27,1,56,56,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.support_functions)?drop_dot.core_test.support_functions.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map