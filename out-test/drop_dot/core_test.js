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
if(typeof drop_dot.core_test.t_drop_dot$core_test182891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test182891 = (function (meta182892){
this.meta182892 = meta182892;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test182891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_182893,meta182892__$1){
var self__ = this;
var _182893__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test182891(meta182892__$1));
});

drop_dot.core_test.t_drop_dot$core_test182891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_182893){
var self__ = this;
var _182893__$1 = this;
return self__.meta182892;
});

drop_dot.core_test.t_drop_dot$core_test182891.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test182891.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_183032){
var state_val_183033 = (state_183032[(1)]);
if((state_val_183033 === (7))){
var inst_182915 = (state_183032[(7)]);
var inst_182925 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_182926 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_182927 = cljs.core.List.EMPTY;
var inst_182928 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_182929 = cljs.core.cons.call(null,inst_182928,inst_182915);
var inst_182930 = cljs.core._conj.call(null,inst_182927,inst_182929);
var inst_182931 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_182932 = cljs.core._conj.call(null,inst_182930,inst_182931);
var inst_182933 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_182926,inst_182932,null];
var inst_182934 = cljs.core.PersistentHashMap.fromArrays(inst_182925,inst_182933);
var inst_182935 = cljs.test.do_report.call(null,inst_182934);
var state_183032__$1 = state_183032;
var statearr_183034_183295 = state_183032__$1;
(statearr_183034_183295[(2)] = inst_182935);

(statearr_183034_183295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (20))){
var inst_183005 = (state_183032[(8)]);
var inst_183008 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183009 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_183010 = cljs.core.cons.call(null,cljs.core._EQ_,inst_183005);
var inst_183011 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_183009,inst_183010,null];
var inst_183012 = cljs.core.PersistentHashMap.fromArrays(inst_183008,inst_183011);
var inst_183013 = cljs.test.do_report.call(null,inst_183012);
var state_183032__$1 = state_183032;
var statearr_183035_183296 = state_183032__$1;
(statearr_183035_183296[(2)] = inst_183013);

(statearr_183035_183296[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (1))){
var state_183032__$1 = state_183032;
var statearr_183036_183297 = state_183032__$1;
(statearr_183036_183297[(2)] = null);

(statearr_183036_183297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183032,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_182904 = cljs.core.List.EMPTY;
var inst_182905 = cljs.core._conj.call(null,inst_182904,"ERROR:");
var inst_182909 = cljs.core.async.chan.call(null,(1));
var inst_182910 = (function (){var c__9318__auto____$1 = inst_182909;
return ((function (c__9318__auto____$1,_,inst_182904,inst_182905,inst_182909,state_val_183033,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_182904,inst_182905,inst_182909,state_val_183033,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_182907){
var state_val_182908 = (state_182907[(1)]);
if((state_val_182908 === (1))){
var state_182907__$1 = state_182907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182907__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_182904,inst_182905,inst_182909,state_val_183033,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_182904,inst_182905,inst_182909,state_val_183033,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183040 = [null,null,null,null,null,null,null];
(statearr_183040[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183040[(1)] = (1));

return statearr_183040;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_182907){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183041){if((e183041 instanceof Object)){
var ex__9301__auto__ = e183041;
var statearr_183042_183298 = state_182907;
(statearr_183042_183298[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183299 = state_182907;
state_182907 = G__183299;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_182907){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_182907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_182904,inst_182905,inst_182909,state_val_183033,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_183043 = f__9319__auto__.call(null);
(statearr_183043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_183043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_182904,inst_182905,inst_182909,state_val_183033,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_182911 = cljs.core.async.impl.dispatch.run.call(null,inst_182910);
var inst_182912 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_182909);
var state_183032__$1 = (function (){var statearr_183044 = state_183032;
(statearr_183044[(9)] = inst_182911);

(statearr_183044[(10)] = inst_182905);

return statearr_183044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183032__$1,(5),inst_182912);
} else {
if((state_val_183033 === (15))){
var inst_182961 = (state_183032[(11)]);
var inst_182982 = (state_183032[(2)]);
var state_183032__$1 = (function (){var statearr_183045 = state_183032;
(statearr_183045[(12)] = inst_182982);

return statearr_183045;
})();
var statearr_183046_183300 = state_183032__$1;
(statearr_183046_183300[(2)] = inst_182961);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183032__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (21))){
var inst_183005 = (state_183032[(8)]);
var inst_183015 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183016 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_183017 = cljs.core.List.EMPTY;
var inst_183018 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_183019 = cljs.core.cons.call(null,inst_183018,inst_183005);
var inst_183020 = cljs.core._conj.call(null,inst_183017,inst_183019);
var inst_183021 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_183022 = cljs.core._conj.call(null,inst_183020,inst_183021);
var inst_183023 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_183016,inst_183022,null];
var inst_183024 = cljs.core.PersistentHashMap.fromArrays(inst_183015,inst_183023);
var inst_183025 = cljs.test.do_report.call(null,inst_183024);
var state_183032__$1 = state_183032;
var statearr_183047_183301 = state_183032__$1;
(statearr_183047_183301[(2)] = inst_183025);

(statearr_183047_183301[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (13))){
var inst_182960 = (state_183032[(13)]);
var inst_182963 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_182964 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_182965 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_182960);
var inst_182966 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_182964,inst_182965,null];
var inst_182967 = cljs.core.PersistentHashMap.fromArrays(inst_182963,inst_182966);
var inst_182968 = cljs.test.do_report.call(null,inst_182967);
var state_183032__$1 = state_183032;
var statearr_183048_183302 = state_183032__$1;
(statearr_183048_183302[(2)] = inst_182968);

(statearr_183048_183302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (22))){
var inst_183006 = (state_183032[(14)]);
var inst_183027 = (state_183032[(2)]);
var state_183032__$1 = (function (){var statearr_183049 = state_183032;
(statearr_183049[(15)] = inst_183027);

return statearr_183049;
})();
var statearr_183050_183303 = state_183032__$1;
(statearr_183050_183303[(2)] = inst_183006);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183032__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (6))){
var inst_182915 = (state_183032[(7)]);
var inst_182918 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_182919 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_182920 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_182915);
var inst_182921 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_182919,inst_182920,null];
var inst_182922 = cljs.core.PersistentHashMap.fromArrays(inst_182918,inst_182921);
var inst_182923 = cljs.test.do_report.call(null,inst_182922);
var state_183032__$1 = state_183032;
var statearr_183051_183304 = state_183032__$1;
(statearr_183051_183304[(2)] = inst_182923);

(statearr_183051_183304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (17))){
var inst_182985 = (state_183032[(2)]);
var inst_182986 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_182987 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_182988 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_182987,inst_182985,null];
var inst_182989 = cljs.core.PersistentHashMap.fromArrays(inst_182986,inst_182988);
var inst_182990 = cljs.test.do_report.call(null,inst_182989);
var state_183032__$1 = state_183032;
var statearr_183052_183305 = state_183032__$1;
(statearr_183052_183305[(2)] = inst_182990);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183032__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (3))){
var inst_182895 = (state_183032[(2)]);
var inst_182896 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_182897 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_182898 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_182897,inst_182895,null];
var inst_182899 = cljs.core.PersistentHashMap.fromArrays(inst_182896,inst_182898);
var inst_182900 = cljs.test.do_report.call(null,inst_182899);
var state_183032__$1 = state_183032;
var statearr_183053_183306 = state_183032__$1;
(statearr_183053_183306[(2)] = inst_182900);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183032__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (12))){
var inst_182960 = (state_183032[(13)]);
var inst_182950 = (state_183032[(16)]);
var inst_182961 = (state_183032[(11)]);
var inst_182959 = (state_183032[(2)]);
var inst_182960__$1 = cljs.core._conj.call(null,inst_182950,inst_182959);
var inst_182961__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_182960__$1);
var state_183032__$1 = (function (){var statearr_183054 = state_183032;
(statearr_183054[(13)] = inst_182960__$1);

(statearr_183054[(11)] = inst_182961__$1);

return statearr_183054;
})();
if(cljs.core.truth_(inst_182961__$1)){
var statearr_183055_183307 = state_183032__$1;
(statearr_183055_183307[(1)] = (13));

} else {
var statearr_183056_183308 = state_183032__$1;
(statearr_183056_183308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (2))){
var inst_182939 = (state_183032[(2)]);
var state_183032__$1 = (function (){var statearr_183057 = state_183032;
(statearr_183057[(17)] = inst_182939);

return statearr_183057;
})();
var statearr_183058_183309 = state_183032__$1;
(statearr_183058_183309[(2)] = null);

(statearr_183058_183309[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (19))){
var inst_183005 = (state_183032[(8)]);
var inst_182995 = (state_183032[(18)]);
var inst_183006 = (state_183032[(14)]);
var inst_183004 = (state_183032[(2)]);
var inst_183005__$1 = cljs.core._conj.call(null,inst_182995,inst_183004);
var inst_183006__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_183005__$1);
var state_183032__$1 = (function (){var statearr_183059 = state_183032;
(statearr_183059[(8)] = inst_183005__$1);

(statearr_183059[(14)] = inst_183006__$1);

return statearr_183059;
})();
if(cljs.core.truth_(inst_183006__$1)){
var statearr_183060_183310 = state_183032__$1;
(statearr_183060_183310[(1)] = (20));

} else {
var statearr_183061_183311 = state_183032__$1;
(statearr_183061_183311[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183032,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_182949 = cljs.core.List.EMPTY;
var inst_182950 = cljs.core._conj.call(null,inst_182949,"ERROR: ");
var inst_182954 = cljs.core.async.chan.call(null,(1));
var inst_182955 = (function (){var c__9318__auto____$1 = inst_182954;
return ((function (c__9318__auto____$1,_,inst_182949,inst_182950,inst_182954,state_val_183033,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_182949,inst_182950,inst_182954,state_val_183033,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_182952){
var state_val_182953 = (state_182952[(1)]);
if((state_val_182953 === (1))){
var state_182952__$1 = state_182952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182952__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_182949,inst_182950,inst_182954,state_val_183033,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_182949,inst_182950,inst_182954,state_val_183033,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183065 = [null,null,null,null,null,null,null];
(statearr_183065[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183065[(1)] = (1));

return statearr_183065;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_182952){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183066){if((e183066 instanceof Object)){
var ex__9301__auto__ = e183066;
var statearr_183067_183312 = state_182952;
(statearr_183067_183312[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183313 = state_182952;
state_182952 = G__183313;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_182952){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_182952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_182949,inst_182950,inst_182954,state_val_183033,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_183068 = f__9319__auto__.call(null);
(statearr_183068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_183068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_182949,inst_182950,inst_182954,state_val_183033,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_182956 = cljs.core.async.impl.dispatch.run.call(null,inst_182955);
var inst_182957 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_182954);
var state_183032__$1 = (function (){var statearr_183069 = state_183032;
(statearr_183069[(16)] = inst_182950);

(statearr_183069[(19)] = inst_182956);

return statearr_183069;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183032__$1,(12),inst_182957);
} else {
if((state_val_183033 === (9))){
var inst_182984 = (state_183032[(2)]);
var state_183032__$1 = (function (){var statearr_183070 = state_183032;
(statearr_183070[(20)] = inst_182984);

return statearr_183070;
})();
var statearr_183071_183314 = state_183032__$1;
(statearr_183071_183314[(2)] = null);

(statearr_183071_183314[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (5))){
var inst_182915 = (state_183032[(7)]);
var inst_182916 = (state_183032[(21)]);
var inst_182905 = (state_183032[(10)]);
var inst_182914 = (state_183032[(2)]);
var inst_182915__$1 = cljs.core._conj.call(null,inst_182905,inst_182914);
var inst_182916__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_182915__$1);
var state_183032__$1 = (function (){var statearr_183072 = state_183032;
(statearr_183072[(7)] = inst_182915__$1);

(statearr_183072[(21)] = inst_182916__$1);

return statearr_183072;
})();
if(cljs.core.truth_(inst_182916__$1)){
var statearr_183073_183315 = state_183032__$1;
(statearr_183073_183315[(1)] = (6));

} else {
var statearr_183074_183316 = state_183032__$1;
(statearr_183074_183316[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (14))){
var inst_182960 = (state_183032[(13)]);
var inst_182970 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_182971 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_182972 = cljs.core.List.EMPTY;
var inst_182973 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_182974 = cljs.core.cons.call(null,inst_182973,inst_182960);
var inst_182975 = cljs.core._conj.call(null,inst_182972,inst_182974);
var inst_182976 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_182977 = cljs.core._conj.call(null,inst_182975,inst_182976);
var inst_182978 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_182971,inst_182977,null];
var inst_182979 = cljs.core.PersistentHashMap.fromArrays(inst_182970,inst_182978);
var inst_182980 = cljs.test.do_report.call(null,inst_182979);
var state_183032__$1 = state_183032;
var statearr_183075_183317 = state_183032__$1;
(statearr_183075_183317[(2)] = inst_182980);

(statearr_183075_183317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (16))){
var inst_183029 = (state_183032[(2)]);
var inst_183030 = done.call(null);
var state_183032__$1 = (function (){var statearr_183076 = state_183032;
(statearr_183076[(22)] = inst_183029);

return statearr_183076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183032__$1,inst_183030);
} else {
if((state_val_183033 === (10))){
var inst_182940 = (state_183032[(2)]);
var inst_182941 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_182942 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_182943 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_182942,inst_182940,null];
var inst_182944 = cljs.core.PersistentHashMap.fromArrays(inst_182941,inst_182943);
var inst_182945 = cljs.test.do_report.call(null,inst_182944);
var state_183032__$1 = state_183032;
var statearr_183077_183318 = state_183032__$1;
(statearr_183077_183318[(2)] = inst_182945);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183032__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183033 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183032,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_182994 = cljs.core.List.EMPTY;
var inst_182995 = cljs.core._conj.call(null,inst_182994,"~/.in-drop-dot-only");
var inst_182999 = cljs.core.async.chan.call(null,(1));
var inst_183000 = (function (){var c__9318__auto____$1 = inst_182999;
return ((function (c__9318__auto____$1,_,inst_182994,inst_182995,inst_182999,state_val_183033,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_182994,inst_182995,inst_182999,state_val_183033,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_182997){
var state_val_182998 = (state_182997[(1)]);
if((state_val_182998 === (1))){
var state_182997__$1 = state_182997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182997__$1,"~/.in-drop-dot-only");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_182994,inst_182995,inst_182999,state_val_183033,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_182994,inst_182995,inst_182999,state_val_183033,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183081 = [null,null,null,null,null,null,null];
(statearr_183081[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183081[(1)] = (1));

return statearr_183081;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_182997){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183082){if((e183082 instanceof Object)){
var ex__9301__auto__ = e183082;
var statearr_183083_183319 = state_182997;
(statearr_183083_183319[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183320 = state_182997;
state_182997 = G__183320;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_182997){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_182997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_182994,inst_182995,inst_182999,state_val_183033,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_183084 = f__9319__auto__.call(null);
(statearr_183084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_183084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_182994,inst_182995,inst_182999,state_val_183033,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_183001 = cljs.core.async.impl.dispatch.run.call(null,inst_183000);
var inst_183002 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_182999);
var state_183032__$1 = (function (){var statearr_183085 = state_183032;
(statearr_183085[(18)] = inst_182995);

(statearr_183085[(23)] = inst_183001);

return statearr_183085;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183032__$1,(19),inst_183002);
} else {
if((state_val_183033 === (8))){
var inst_182916 = (state_183032[(21)]);
var inst_182937 = (state_183032[(2)]);
var state_183032__$1 = (function (){var statearr_183086 = state_183032;
(statearr_183086[(24)] = inst_182937);

return statearr_183086;
})();
var statearr_183087_183321 = state_183032__$1;
(statearr_183087_183321[(2)] = inst_182916);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183032__$1);

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
});})(c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_183091[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183091[(1)] = (1));

return statearr_183091;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_183032){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_183032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183092){if((e183092 instanceof Object)){
var ex__9301__auto__ = e183092;
var statearr_183093_183322 = state_183032;
(statearr_183093_183322[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183323 = state_183032;
state_183032 = G__183323;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_183032){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_183032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_183094 = f__9319__auto__.call(null);
(statearr_183094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_183094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test182891.prototype.apply = (function (self__,args182894){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args182894)));
});

drop_dot.core_test.t_drop_dot$core_test182891.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_183232){
var state_val_183233 = (state_183232[(1)]);
if((state_val_183233 === (7))){
var inst_183115 = (state_183232[(7)]);
var inst_183125 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183126 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_183127 = cljs.core.List.EMPTY;
var inst_183128 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_183129 = cljs.core.cons.call(null,inst_183128,inst_183115);
var inst_183130 = cljs.core._conj.call(null,inst_183127,inst_183129);
var inst_183131 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_183132 = cljs.core._conj.call(null,inst_183130,inst_183131);
var inst_183133 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_183126,inst_183132,null];
var inst_183134 = cljs.core.PersistentHashMap.fromArrays(inst_183125,inst_183133);
var inst_183135 = cljs.test.do_report.call(null,inst_183134);
var state_183232__$1 = state_183232;
var statearr_183234_183324 = state_183232__$1;
(statearr_183234_183324[(2)] = inst_183135);

(statearr_183234_183324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (20))){
var inst_183205 = (state_183232[(8)]);
var inst_183208 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183209 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_183210 = cljs.core.cons.call(null,cljs.core._EQ_,inst_183205);
var inst_183211 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_183209,inst_183210,null];
var inst_183212 = cljs.core.PersistentHashMap.fromArrays(inst_183208,inst_183211);
var inst_183213 = cljs.test.do_report.call(null,inst_183212);
var state_183232__$1 = state_183232;
var statearr_183235_183325 = state_183232__$1;
(statearr_183235_183325[(2)] = inst_183213);

(statearr_183235_183325[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (1))){
var state_183232__$1 = state_183232;
var statearr_183236_183326 = state_183232__$1;
(statearr_183236_183326[(2)] = null);

(statearr_183236_183326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183232,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_183104 = cljs.core.List.EMPTY;
var inst_183105 = cljs.core._conj.call(null,inst_183104,"ERROR:");
var inst_183109 = cljs.core.async.chan.call(null,(1));
var inst_183110 = (function (){var c__9318__auto____$1 = inst_183109;
return ((function (c__9318__auto____$1,_,inst_183104,inst_183105,inst_183109,state_val_183233,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_183104,inst_183105,inst_183109,state_val_183233,c__9318__auto__,___10407__auto__){
return (function (state_183107){
var state_val_183108 = (state_183107[(1)]);
if((state_val_183108 === (1))){
var state_183107__$1 = state_183107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183107__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_183104,inst_183105,inst_183109,state_val_183233,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_183104,inst_183105,inst_183109,state_val_183233,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183240 = [null,null,null,null,null,null,null];
(statearr_183240[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183240[(1)] = (1));

return statearr_183240;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_183107){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_183107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183241){if((e183241 instanceof Object)){
var ex__9301__auto__ = e183241;
var statearr_183242_183327 = state_183107;
(statearr_183242_183327[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183328 = state_183107;
state_183107 = G__183328;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_183107){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_183107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_183104,inst_183105,inst_183109,state_val_183233,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_183243 = f__9319__auto__.call(null);
(statearr_183243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_183243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_183104,inst_183105,inst_183109,state_val_183233,c__9318__auto__,___10407__auto__))
})();
var inst_183111 = cljs.core.async.impl.dispatch.run.call(null,inst_183110);
var inst_183112 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_183109);
var state_183232__$1 = (function (){var statearr_183244 = state_183232;
(statearr_183244[(9)] = inst_183105);

(statearr_183244[(10)] = inst_183111);

return statearr_183244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183232__$1,(5),inst_183112);
} else {
if((state_val_183233 === (15))){
var inst_183161 = (state_183232[(11)]);
var inst_183182 = (state_183232[(2)]);
var state_183232__$1 = (function (){var statearr_183245 = state_183232;
(statearr_183245[(12)] = inst_183182);

return statearr_183245;
})();
var statearr_183246_183329 = state_183232__$1;
(statearr_183246_183329[(2)] = inst_183161);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183232__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (21))){
var inst_183205 = (state_183232[(8)]);
var inst_183215 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183216 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_183217 = cljs.core.List.EMPTY;
var inst_183218 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_183219 = cljs.core.cons.call(null,inst_183218,inst_183205);
var inst_183220 = cljs.core._conj.call(null,inst_183217,inst_183219);
var inst_183221 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_183222 = cljs.core._conj.call(null,inst_183220,inst_183221);
var inst_183223 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_183216,inst_183222,null];
var inst_183224 = cljs.core.PersistentHashMap.fromArrays(inst_183215,inst_183223);
var inst_183225 = cljs.test.do_report.call(null,inst_183224);
var state_183232__$1 = state_183232;
var statearr_183247_183330 = state_183232__$1;
(statearr_183247_183330[(2)] = inst_183225);

(statearr_183247_183330[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (13))){
var inst_183160 = (state_183232[(13)]);
var inst_183163 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183164 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_183165 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_183160);
var inst_183166 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_183164,inst_183165,null];
var inst_183167 = cljs.core.PersistentHashMap.fromArrays(inst_183163,inst_183166);
var inst_183168 = cljs.test.do_report.call(null,inst_183167);
var state_183232__$1 = state_183232;
var statearr_183248_183331 = state_183232__$1;
(statearr_183248_183331[(2)] = inst_183168);

(statearr_183248_183331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (22))){
var inst_183206 = (state_183232[(14)]);
var inst_183227 = (state_183232[(2)]);
var state_183232__$1 = (function (){var statearr_183249 = state_183232;
(statearr_183249[(15)] = inst_183227);

return statearr_183249;
})();
var statearr_183250_183332 = state_183232__$1;
(statearr_183250_183332[(2)] = inst_183206);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183232__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (6))){
var inst_183115 = (state_183232[(7)]);
var inst_183118 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183119 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_183120 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_183115);
var inst_183121 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_183119,inst_183120,null];
var inst_183122 = cljs.core.PersistentHashMap.fromArrays(inst_183118,inst_183121);
var inst_183123 = cljs.test.do_report.call(null,inst_183122);
var state_183232__$1 = state_183232;
var statearr_183251_183333 = state_183232__$1;
(statearr_183251_183333[(2)] = inst_183123);

(statearr_183251_183333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (17))){
var inst_183185 = (state_183232[(2)]);
var inst_183186 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183187 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_183188 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_183187,inst_183185,null];
var inst_183189 = cljs.core.PersistentHashMap.fromArrays(inst_183186,inst_183188);
var inst_183190 = cljs.test.do_report.call(null,inst_183189);
var state_183232__$1 = state_183232;
var statearr_183252_183334 = state_183232__$1;
(statearr_183252_183334[(2)] = inst_183190);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183232__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (3))){
var inst_183095 = (state_183232[(2)]);
var inst_183096 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183097 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_183098 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_183097,inst_183095,null];
var inst_183099 = cljs.core.PersistentHashMap.fromArrays(inst_183096,inst_183098);
var inst_183100 = cljs.test.do_report.call(null,inst_183099);
var state_183232__$1 = state_183232;
var statearr_183253_183335 = state_183232__$1;
(statearr_183253_183335[(2)] = inst_183100);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183232__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (12))){
var inst_183161 = (state_183232[(11)]);
var inst_183150 = (state_183232[(16)]);
var inst_183160 = (state_183232[(13)]);
var inst_183159 = (state_183232[(2)]);
var inst_183160__$1 = cljs.core._conj.call(null,inst_183150,inst_183159);
var inst_183161__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_183160__$1);
var state_183232__$1 = (function (){var statearr_183254 = state_183232;
(statearr_183254[(11)] = inst_183161__$1);

(statearr_183254[(13)] = inst_183160__$1);

return statearr_183254;
})();
if(cljs.core.truth_(inst_183161__$1)){
var statearr_183255_183336 = state_183232__$1;
(statearr_183255_183336[(1)] = (13));

} else {
var statearr_183256_183337 = state_183232__$1;
(statearr_183256_183337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (2))){
var inst_183139 = (state_183232[(2)]);
var state_183232__$1 = (function (){var statearr_183257 = state_183232;
(statearr_183257[(17)] = inst_183139);

return statearr_183257;
})();
var statearr_183258_183338 = state_183232__$1;
(statearr_183258_183338[(2)] = null);

(statearr_183258_183338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (19))){
var inst_183206 = (state_183232[(14)]);
var inst_183205 = (state_183232[(8)]);
var inst_183195 = (state_183232[(18)]);
var inst_183204 = (state_183232[(2)]);
var inst_183205__$1 = cljs.core._conj.call(null,inst_183195,inst_183204);
var inst_183206__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_183205__$1);
var state_183232__$1 = (function (){var statearr_183259 = state_183232;
(statearr_183259[(14)] = inst_183206__$1);

(statearr_183259[(8)] = inst_183205__$1);

return statearr_183259;
})();
if(cljs.core.truth_(inst_183206__$1)){
var statearr_183260_183339 = state_183232__$1;
(statearr_183260_183339[(1)] = (20));

} else {
var statearr_183261_183340 = state_183232__$1;
(statearr_183261_183340[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183232,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_183149 = cljs.core.List.EMPTY;
var inst_183150 = cljs.core._conj.call(null,inst_183149,"ERROR: ");
var inst_183154 = cljs.core.async.chan.call(null,(1));
var inst_183155 = (function (){var c__9318__auto____$1 = inst_183154;
return ((function (c__9318__auto____$1,_,inst_183149,inst_183150,inst_183154,state_val_183233,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_183149,inst_183150,inst_183154,state_val_183233,c__9318__auto__,___10407__auto__){
return (function (state_183152){
var state_val_183153 = (state_183152[(1)]);
if((state_val_183153 === (1))){
var state_183152__$1 = state_183152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183152__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_183149,inst_183150,inst_183154,state_val_183233,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_183149,inst_183150,inst_183154,state_val_183233,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183265 = [null,null,null,null,null,null,null];
(statearr_183265[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183265[(1)] = (1));

return statearr_183265;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_183152){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_183152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183266){if((e183266 instanceof Object)){
var ex__9301__auto__ = e183266;
var statearr_183267_183341 = state_183152;
(statearr_183267_183341[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183342 = state_183152;
state_183152 = G__183342;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_183152){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_183152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_183149,inst_183150,inst_183154,state_val_183233,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_183268 = f__9319__auto__.call(null);
(statearr_183268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_183268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_183149,inst_183150,inst_183154,state_val_183233,c__9318__auto__,___10407__auto__))
})();
var inst_183156 = cljs.core.async.impl.dispatch.run.call(null,inst_183155);
var inst_183157 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_183154);
var state_183232__$1 = (function (){var statearr_183269 = state_183232;
(statearr_183269[(16)] = inst_183150);

(statearr_183269[(19)] = inst_183156);

return statearr_183269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183232__$1,(12),inst_183157);
} else {
if((state_val_183233 === (9))){
var inst_183184 = (state_183232[(2)]);
var state_183232__$1 = (function (){var statearr_183270 = state_183232;
(statearr_183270[(20)] = inst_183184);

return statearr_183270;
})();
var statearr_183271_183343 = state_183232__$1;
(statearr_183271_183343[(2)] = null);

(statearr_183271_183343[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (5))){
var inst_183116 = (state_183232[(21)]);
var inst_183115 = (state_183232[(7)]);
var inst_183105 = (state_183232[(9)]);
var inst_183114 = (state_183232[(2)]);
var inst_183115__$1 = cljs.core._conj.call(null,inst_183105,inst_183114);
var inst_183116__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_183115__$1);
var state_183232__$1 = (function (){var statearr_183272 = state_183232;
(statearr_183272[(21)] = inst_183116__$1);

(statearr_183272[(7)] = inst_183115__$1);

return statearr_183272;
})();
if(cljs.core.truth_(inst_183116__$1)){
var statearr_183273_183344 = state_183232__$1;
(statearr_183273_183344[(1)] = (6));

} else {
var statearr_183274_183345 = state_183232__$1;
(statearr_183274_183345[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (14))){
var inst_183160 = (state_183232[(13)]);
var inst_183170 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183171 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_183172 = cljs.core.List.EMPTY;
var inst_183173 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_183174 = cljs.core.cons.call(null,inst_183173,inst_183160);
var inst_183175 = cljs.core._conj.call(null,inst_183172,inst_183174);
var inst_183176 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_183177 = cljs.core._conj.call(null,inst_183175,inst_183176);
var inst_183178 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_183171,inst_183177,null];
var inst_183179 = cljs.core.PersistentHashMap.fromArrays(inst_183170,inst_183178);
var inst_183180 = cljs.test.do_report.call(null,inst_183179);
var state_183232__$1 = state_183232;
var statearr_183275_183346 = state_183232__$1;
(statearr_183275_183346[(2)] = inst_183180);

(statearr_183275_183346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (16))){
var inst_183229 = (state_183232[(2)]);
var inst_183230 = done.call(null);
var state_183232__$1 = (function (){var statearr_183276 = state_183232;
(statearr_183276[(22)] = inst_183229);

return statearr_183276;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183232__$1,inst_183230);
} else {
if((state_val_183233 === (10))){
var inst_183140 = (state_183232[(2)]);
var inst_183141 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183142 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_183143 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_183142,inst_183140,null];
var inst_183144 = cljs.core.PersistentHashMap.fromArrays(inst_183141,inst_183143);
var inst_183145 = cljs.test.do_report.call(null,inst_183144);
var state_183232__$1 = state_183232;
var statearr_183277_183347 = state_183232__$1;
(statearr_183277_183347[(2)] = inst_183145);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183232__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183233 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183232,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_183194 = cljs.core.List.EMPTY;
var inst_183195 = cljs.core._conj.call(null,inst_183194,"~/.in-drop-dot-only");
var inst_183199 = cljs.core.async.chan.call(null,(1));
var inst_183200 = (function (){var c__9318__auto____$1 = inst_183199;
return ((function (c__9318__auto____$1,_,inst_183194,inst_183195,inst_183199,state_val_183233,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_183194,inst_183195,inst_183199,state_val_183233,c__9318__auto__,___10407__auto__){
return (function (state_183197){
var state_val_183198 = (state_183197[(1)]);
if((state_val_183198 === (1))){
var state_183197__$1 = state_183197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183197__$1,"~/.in-drop-dot-only");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_183194,inst_183195,inst_183199,state_val_183233,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_183194,inst_183195,inst_183199,state_val_183233,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183281 = [null,null,null,null,null,null,null];
(statearr_183281[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183281[(1)] = (1));

return statearr_183281;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_183197){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_183197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183282){if((e183282 instanceof Object)){
var ex__9301__auto__ = e183282;
var statearr_183283_183348 = state_183197;
(statearr_183283_183348[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183349 = state_183197;
state_183197 = G__183349;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_183197){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_183197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_183194,inst_183195,inst_183199,state_val_183233,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_183284 = f__9319__auto__.call(null);
(statearr_183284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_183284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_183194,inst_183195,inst_183199,state_val_183233,c__9318__auto__,___10407__auto__))
})();
var inst_183201 = cljs.core.async.impl.dispatch.run.call(null,inst_183200);
var inst_183202 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_183199);
var state_183232__$1 = (function (){var statearr_183285 = state_183232;
(statearr_183285[(18)] = inst_183195);

(statearr_183285[(23)] = inst_183201);

return statearr_183285;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183232__$1,(19),inst_183202);
} else {
if((state_val_183233 === (8))){
var inst_183116 = (state_183232[(21)]);
var inst_183137 = (state_183232[(2)]);
var state_183232__$1 = (function (){var statearr_183286 = state_183232;
(statearr_183286[(24)] = inst_183137);

return statearr_183286;
})();
var statearr_183287_183350 = state_183232__$1;
(statearr_183287_183350[(2)] = inst_183116);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183232__$1);

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
});})(c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_183291[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183291[(1)] = (1));

return statearr_183291;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_183232){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_183232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183292){if((e183292 instanceof Object)){
var ex__9301__auto__ = e183292;
var statearr_183293_183351 = state_183232;
(statearr_183293_183351[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183352 = state_183232;
state_183232 = G__183352;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_183232){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_183232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_183294 = f__9319__auto__.call(null);
(statearr_183294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_183294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test182891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta182892","meta182892",-848409280,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test182891.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test182891.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test182891";

drop_dot.core_test.t_drop_dot$core_test182891.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test182891");
});

drop_dot.core_test.__GT_t_drop_dot$core_test182891 = (function drop_dot$core_test$__GT_t_drop_dot$core_test182891(meta182892){
return (new drop_dot.core_test.t_drop_dot$core_test182891(meta182892));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test182891(null));
});

drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST","drop-dot.core-test/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST",1225581940,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST",1291546161,null),"test/drop_dot/core_test.cljs",108,1,21,21,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST)?drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST = (function drop_dot$core_test$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$var);
});
drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test183353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test183353 = (function (meta183354){
this.meta183354 = meta183354;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test183353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_183355,meta183354__$1){
var self__ = this;
var _183355__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test183353(meta183354__$1));
});

drop_dot.core_test.t_drop_dot$core_test183353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_183355){
var self__ = this;
var _183355__$1 = this;
return self__.meta183354;
});

drop_dot.core_test.t_drop_dot$core_test183353.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test183353.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_183494){
var state_val_183495 = (state_183494[(1)]);
if((state_val_183495 === (7))){
var inst_183377 = (state_183494[(7)]);
var inst_183387 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183388 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_183389 = cljs.core.List.EMPTY;
var inst_183390 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_183391 = cljs.core.cons.call(null,inst_183390,inst_183377);
var inst_183392 = cljs.core._conj.call(null,inst_183389,inst_183391);
var inst_183393 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_183394 = cljs.core._conj.call(null,inst_183392,inst_183393);
var inst_183395 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_183388,inst_183394,null];
var inst_183396 = cljs.core.PersistentHashMap.fromArrays(inst_183387,inst_183395);
var inst_183397 = cljs.test.do_report.call(null,inst_183396);
var state_183494__$1 = state_183494;
var statearr_183496_183757 = state_183494__$1;
(statearr_183496_183757[(2)] = inst_183397);

(statearr_183496_183757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (20))){
var inst_183467 = (state_183494[(8)]);
var inst_183470 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183471 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_183472 = cljs.core.cons.call(null,cljs.core._EQ_,inst_183467);
var inst_183473 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_183471,inst_183472,null];
var inst_183474 = cljs.core.PersistentHashMap.fromArrays(inst_183470,inst_183473);
var inst_183475 = cljs.test.do_report.call(null,inst_183474);
var state_183494__$1 = state_183494;
var statearr_183497_183758 = state_183494__$1;
(statearr_183497_183758[(2)] = inst_183475);

(statearr_183497_183758[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (1))){
var state_183494__$1 = state_183494;
var statearr_183498_183759 = state_183494__$1;
(statearr_183498_183759[(2)] = null);

(statearr_183498_183759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183494,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_183366 = cljs.core.List.EMPTY;
var inst_183367 = cljs.core._conj.call(null,inst_183366,"NOTICE: ");
var inst_183371 = cljs.core.async.chan.call(null,(1));
var inst_183372 = (function (){var c__9318__auto____$1 = inst_183371;
return ((function (c__9318__auto____$1,_,inst_183366,inst_183367,inst_183371,state_val_183495,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_183366,inst_183367,inst_183371,state_val_183495,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_183369){
var state_val_183370 = (state_183369[(1)]);
if((state_val_183370 === (1))){
var state_183369__$1 = state_183369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183369__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_183366,inst_183367,inst_183371,state_val_183495,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_183366,inst_183367,inst_183371,state_val_183495,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183502 = [null,null,null,null,null,null,null];
(statearr_183502[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183502[(1)] = (1));

return statearr_183502;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_183369){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_183369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183503){if((e183503 instanceof Object)){
var ex__9301__auto__ = e183503;
var statearr_183504_183760 = state_183369;
(statearr_183504_183760[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183761 = state_183369;
state_183369 = G__183761;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_183369){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_183369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_183366,inst_183367,inst_183371,state_val_183495,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_183505 = f__9319__auto__.call(null);
(statearr_183505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_183505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_183366,inst_183367,inst_183371,state_val_183495,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_183373 = cljs.core.async.impl.dispatch.run.call(null,inst_183372);
var inst_183374 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_183371);
var state_183494__$1 = (function (){var statearr_183506 = state_183494;
(statearr_183506[(9)] = inst_183373);

(statearr_183506[(10)] = inst_183367);

return statearr_183506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183494__$1,(5),inst_183374);
} else {
if((state_val_183495 === (15))){
var inst_183423 = (state_183494[(11)]);
var inst_183444 = (state_183494[(2)]);
var state_183494__$1 = (function (){var statearr_183507 = state_183494;
(statearr_183507[(12)] = inst_183444);

return statearr_183507;
})();
var statearr_183508_183762 = state_183494__$1;
(statearr_183508_183762[(2)] = inst_183423);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (21))){
var inst_183467 = (state_183494[(8)]);
var inst_183477 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183478 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_183479 = cljs.core.List.EMPTY;
var inst_183480 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_183481 = cljs.core.cons.call(null,inst_183480,inst_183467);
var inst_183482 = cljs.core._conj.call(null,inst_183479,inst_183481);
var inst_183483 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_183484 = cljs.core._conj.call(null,inst_183482,inst_183483);
var inst_183485 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_183478,inst_183484,null];
var inst_183486 = cljs.core.PersistentHashMap.fromArrays(inst_183477,inst_183485);
var inst_183487 = cljs.test.do_report.call(null,inst_183486);
var state_183494__$1 = state_183494;
var statearr_183509_183763 = state_183494__$1;
(statearr_183509_183763[(2)] = inst_183487);

(statearr_183509_183763[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (13))){
var inst_183422 = (state_183494[(13)]);
var inst_183425 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183426 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_183427 = cljs.core.cons.call(null,cljs.core._EQ_,inst_183422);
var inst_183428 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_183426,inst_183427,null];
var inst_183429 = cljs.core.PersistentHashMap.fromArrays(inst_183425,inst_183428);
var inst_183430 = cljs.test.do_report.call(null,inst_183429);
var state_183494__$1 = state_183494;
var statearr_183510_183764 = state_183494__$1;
(statearr_183510_183764[(2)] = inst_183430);

(statearr_183510_183764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (22))){
var inst_183468 = (state_183494[(14)]);
var inst_183489 = (state_183494[(2)]);
var state_183494__$1 = (function (){var statearr_183511 = state_183494;
(statearr_183511[(15)] = inst_183489);

return statearr_183511;
})();
var statearr_183512_183765 = state_183494__$1;
(statearr_183512_183765[(2)] = inst_183468);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (6))){
var inst_183377 = (state_183494[(7)]);
var inst_183380 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183381 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_183382 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_183377);
var inst_183383 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_183381,inst_183382,null];
var inst_183384 = cljs.core.PersistentHashMap.fromArrays(inst_183380,inst_183383);
var inst_183385 = cljs.test.do_report.call(null,inst_183384);
var state_183494__$1 = state_183494;
var statearr_183513_183766 = state_183494__$1;
(statearr_183513_183766[(2)] = inst_183385);

(statearr_183513_183766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (17))){
var inst_183447 = (state_183494[(2)]);
var inst_183448 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183449 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_183450 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_183449,inst_183447,null];
var inst_183451 = cljs.core.PersistentHashMap.fromArrays(inst_183448,inst_183450);
var inst_183452 = cljs.test.do_report.call(null,inst_183451);
var state_183494__$1 = state_183494;
var statearr_183514_183767 = state_183494__$1;
(statearr_183514_183767[(2)] = inst_183452);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (3))){
var inst_183357 = (state_183494[(2)]);
var inst_183358 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183359 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_183360 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_183359,inst_183357,null];
var inst_183361 = cljs.core.PersistentHashMap.fromArrays(inst_183358,inst_183360);
var inst_183362 = cljs.test.do_report.call(null,inst_183361);
var state_183494__$1 = state_183494;
var statearr_183515_183768 = state_183494__$1;
(statearr_183515_183768[(2)] = inst_183362);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (12))){
var inst_183412 = (state_183494[(16)]);
var inst_183422 = (state_183494[(13)]);
var inst_183423 = (state_183494[(11)]);
var inst_183421 = (state_183494[(2)]);
var inst_183422__$1 = cljs.core._conj.call(null,inst_183412,inst_183421);
var inst_183423__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_183422__$1);
var state_183494__$1 = (function (){var statearr_183516 = state_183494;
(statearr_183516[(13)] = inst_183422__$1);

(statearr_183516[(11)] = inst_183423__$1);

return statearr_183516;
})();
if(cljs.core.truth_(inst_183423__$1)){
var statearr_183517_183769 = state_183494__$1;
(statearr_183517_183769[(1)] = (13));

} else {
var statearr_183518_183770 = state_183494__$1;
(statearr_183518_183770[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (2))){
var inst_183401 = (state_183494[(2)]);
var state_183494__$1 = (function (){var statearr_183519 = state_183494;
(statearr_183519[(17)] = inst_183401);

return statearr_183519;
})();
var statearr_183520_183771 = state_183494__$1;
(statearr_183520_183771[(2)] = null);

(statearr_183520_183771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (19))){
var inst_183468 = (state_183494[(14)]);
var inst_183467 = (state_183494[(8)]);
var inst_183457 = (state_183494[(18)]);
var inst_183466 = (state_183494[(2)]);
var inst_183467__$1 = cljs.core._conj.call(null,inst_183457,inst_183466);
var inst_183468__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_183467__$1);
var state_183494__$1 = (function (){var statearr_183521 = state_183494;
(statearr_183521[(14)] = inst_183468__$1);

(statearr_183521[(8)] = inst_183467__$1);

return statearr_183521;
})();
if(cljs.core.truth_(inst_183468__$1)){
var statearr_183522_183772 = state_183494__$1;
(statearr_183522_183772[(1)] = (20));

} else {
var statearr_183523_183773 = state_183494__$1;
(statearr_183523_183773[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183494,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_183411 = cljs.core.List.EMPTY;
var inst_183412 = cljs.core._conj.call(null,inst_183411,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_183416 = cljs.core.async.chan.call(null,(1));
var inst_183417 = (function (){var c__9318__auto____$1 = inst_183416;
return ((function (c__9318__auto____$1,_,inst_183411,inst_183412,inst_183416,state_val_183495,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_183411,inst_183412,inst_183416,state_val_183495,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_183414){
var state_val_183415 = (state_183414[(1)]);
if((state_val_183415 === (1))){
var state_183414__$1 = state_183414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183414__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_183411,inst_183412,inst_183416,state_val_183495,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_183411,inst_183412,inst_183416,state_val_183495,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183527 = [null,null,null,null,null,null,null];
(statearr_183527[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183527[(1)] = (1));

return statearr_183527;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_183414){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_183414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183528){if((e183528 instanceof Object)){
var ex__9301__auto__ = e183528;
var statearr_183529_183774 = state_183414;
(statearr_183529_183774[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183775 = state_183414;
state_183414 = G__183775;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_183414){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_183414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_183411,inst_183412,inst_183416,state_val_183495,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_183530 = f__9319__auto__.call(null);
(statearr_183530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_183530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_183411,inst_183412,inst_183416,state_val_183495,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_183418 = cljs.core.async.impl.dispatch.run.call(null,inst_183417);
var inst_183419 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_183416);
var state_183494__$1 = (function (){var statearr_183531 = state_183494;
(statearr_183531[(19)] = inst_183418);

(statearr_183531[(16)] = inst_183412);

return statearr_183531;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183494__$1,(12),inst_183419);
} else {
if((state_val_183495 === (9))){
var inst_183446 = (state_183494[(2)]);
var state_183494__$1 = (function (){var statearr_183532 = state_183494;
(statearr_183532[(20)] = inst_183446);

return statearr_183532;
})();
var statearr_183533_183776 = state_183494__$1;
(statearr_183533_183776[(2)] = null);

(statearr_183533_183776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (5))){
var inst_183377 = (state_183494[(7)]);
var inst_183378 = (state_183494[(21)]);
var inst_183367 = (state_183494[(10)]);
var inst_183376 = (state_183494[(2)]);
var inst_183377__$1 = cljs.core._conj.call(null,inst_183367,inst_183376);
var inst_183378__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_183377__$1);
var state_183494__$1 = (function (){var statearr_183534 = state_183494;
(statearr_183534[(7)] = inst_183377__$1);

(statearr_183534[(21)] = inst_183378__$1);

return statearr_183534;
})();
if(cljs.core.truth_(inst_183378__$1)){
var statearr_183535_183777 = state_183494__$1;
(statearr_183535_183777[(1)] = (6));

} else {
var statearr_183536_183778 = state_183494__$1;
(statearr_183536_183778[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (14))){
var inst_183422 = (state_183494[(13)]);
var inst_183432 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183433 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_183434 = cljs.core.List.EMPTY;
var inst_183435 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_183436 = cljs.core.cons.call(null,inst_183435,inst_183422);
var inst_183437 = cljs.core._conj.call(null,inst_183434,inst_183436);
var inst_183438 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_183439 = cljs.core._conj.call(null,inst_183437,inst_183438);
var inst_183440 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_183433,inst_183439,null];
var inst_183441 = cljs.core.PersistentHashMap.fromArrays(inst_183432,inst_183440);
var inst_183442 = cljs.test.do_report.call(null,inst_183441);
var state_183494__$1 = state_183494;
var statearr_183537_183779 = state_183494__$1;
(statearr_183537_183779[(2)] = inst_183442);

(statearr_183537_183779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (16))){
var inst_183491 = (state_183494[(2)]);
var inst_183492 = done.call(null);
var state_183494__$1 = (function (){var statearr_183538 = state_183494;
(statearr_183538[(22)] = inst_183491);

return statearr_183538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183494__$1,inst_183492);
} else {
if((state_val_183495 === (10))){
var inst_183402 = (state_183494[(2)]);
var inst_183403 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183404 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_183405 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_183404,inst_183402,null];
var inst_183406 = cljs.core.PersistentHashMap.fromArrays(inst_183403,inst_183405);
var inst_183407 = cljs.test.do_report.call(null,inst_183406);
var state_183494__$1 = state_183494;
var statearr_183539_183780 = state_183494__$1;
(statearr_183539_183780[(2)] = inst_183407);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183494__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183495 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183494,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_183456 = cljs.core.List.EMPTY;
var inst_183457 = cljs.core._conj.call(null,inst_183456,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_183461 = cljs.core.async.chan.call(null,(1));
var inst_183462 = (function (){var c__9318__auto____$1 = inst_183461;
return ((function (c__9318__auto____$1,_,inst_183456,inst_183457,inst_183461,state_val_183495,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_183456,inst_183457,inst_183461,state_val_183495,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_183459){
var state_val_183460 = (state_183459[(1)]);
if((state_val_183460 === (1))){
var state_183459__$1 = state_183459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183459__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_183456,inst_183457,inst_183461,state_val_183495,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_183456,inst_183457,inst_183461,state_val_183495,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183543 = [null,null,null,null,null,null,null];
(statearr_183543[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183543[(1)] = (1));

return statearr_183543;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_183459){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_183459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183544){if((e183544 instanceof Object)){
var ex__9301__auto__ = e183544;
var statearr_183545_183781 = state_183459;
(statearr_183545_183781[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183782 = state_183459;
state_183459 = G__183782;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_183459){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_183459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_183456,inst_183457,inst_183461,state_val_183495,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_183546 = f__9319__auto__.call(null);
(statearr_183546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_183546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_183456,inst_183457,inst_183461,state_val_183495,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_183463 = cljs.core.async.impl.dispatch.run.call(null,inst_183462);
var inst_183464 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_183461);
var state_183494__$1 = (function (){var statearr_183547 = state_183494;
(statearr_183547[(18)] = inst_183457);

(statearr_183547[(23)] = inst_183463);

return statearr_183547;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183494__$1,(19),inst_183464);
} else {
if((state_val_183495 === (8))){
var inst_183378 = (state_183494[(21)]);
var inst_183399 = (state_183494[(2)]);
var state_183494__$1 = (function (){var statearr_183548 = state_183494;
(statearr_183548[(24)] = inst_183399);

return statearr_183548;
})();
var statearr_183549_183783 = state_183494__$1;
(statearr_183549_183783[(2)] = inst_183378);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183494__$1);

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
});})(c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_183553[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183553[(1)] = (1));

return statearr_183553;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_183494){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_183494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183554){if((e183554 instanceof Object)){
var ex__9301__auto__ = e183554;
var statearr_183555_183784 = state_183494;
(statearr_183555_183784[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183785 = state_183494;
state_183494 = G__183785;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_183494){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_183494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_183556 = f__9319__auto__.call(null);
(statearr_183556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_183556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test183353.prototype.apply = (function (self__,args183356){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args183356)));
});

drop_dot.core_test.t_drop_dot$core_test183353.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_183694){
var state_val_183695 = (state_183694[(1)]);
if((state_val_183695 === (7))){
var inst_183577 = (state_183694[(7)]);
var inst_183587 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183588 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_183589 = cljs.core.List.EMPTY;
var inst_183590 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_183591 = cljs.core.cons.call(null,inst_183590,inst_183577);
var inst_183592 = cljs.core._conj.call(null,inst_183589,inst_183591);
var inst_183593 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_183594 = cljs.core._conj.call(null,inst_183592,inst_183593);
var inst_183595 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_183588,inst_183594,null];
var inst_183596 = cljs.core.PersistentHashMap.fromArrays(inst_183587,inst_183595);
var inst_183597 = cljs.test.do_report.call(null,inst_183596);
var state_183694__$1 = state_183694;
var statearr_183696_183786 = state_183694__$1;
(statearr_183696_183786[(2)] = inst_183597);

(statearr_183696_183786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (20))){
var inst_183667 = (state_183694[(8)]);
var inst_183670 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183671 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_183672 = cljs.core.cons.call(null,cljs.core._EQ_,inst_183667);
var inst_183673 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_183671,inst_183672,null];
var inst_183674 = cljs.core.PersistentHashMap.fromArrays(inst_183670,inst_183673);
var inst_183675 = cljs.test.do_report.call(null,inst_183674);
var state_183694__$1 = state_183694;
var statearr_183697_183787 = state_183694__$1;
(statearr_183697_183787[(2)] = inst_183675);

(statearr_183697_183787[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (1))){
var state_183694__$1 = state_183694;
var statearr_183698_183788 = state_183694__$1;
(statearr_183698_183788[(2)] = null);

(statearr_183698_183788[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183694,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_183566 = cljs.core.List.EMPTY;
var inst_183567 = cljs.core._conj.call(null,inst_183566,"NOTICE: ");
var inst_183571 = cljs.core.async.chan.call(null,(1));
var inst_183572 = (function (){var c__9318__auto____$1 = inst_183571;
return ((function (c__9318__auto____$1,_,inst_183566,inst_183567,inst_183571,state_val_183695,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_183566,inst_183567,inst_183571,state_val_183695,c__9318__auto__,___10407__auto__){
return (function (state_183569){
var state_val_183570 = (state_183569[(1)]);
if((state_val_183570 === (1))){
var state_183569__$1 = state_183569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183569__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_183566,inst_183567,inst_183571,state_val_183695,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_183566,inst_183567,inst_183571,state_val_183695,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183702 = [null,null,null,null,null,null,null];
(statearr_183702[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183702[(1)] = (1));

return statearr_183702;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_183569){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_183569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183703){if((e183703 instanceof Object)){
var ex__9301__auto__ = e183703;
var statearr_183704_183789 = state_183569;
(statearr_183704_183789[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183790 = state_183569;
state_183569 = G__183790;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_183569){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_183569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_183566,inst_183567,inst_183571,state_val_183695,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_183705 = f__9319__auto__.call(null);
(statearr_183705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_183705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_183566,inst_183567,inst_183571,state_val_183695,c__9318__auto__,___10407__auto__))
})();
var inst_183573 = cljs.core.async.impl.dispatch.run.call(null,inst_183572);
var inst_183574 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_183571);
var state_183694__$1 = (function (){var statearr_183706 = state_183694;
(statearr_183706[(9)] = inst_183573);

(statearr_183706[(10)] = inst_183567);

return statearr_183706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183694__$1,(5),inst_183574);
} else {
if((state_val_183695 === (15))){
var inst_183623 = (state_183694[(11)]);
var inst_183644 = (state_183694[(2)]);
var state_183694__$1 = (function (){var statearr_183707 = state_183694;
(statearr_183707[(12)] = inst_183644);

return statearr_183707;
})();
var statearr_183708_183791 = state_183694__$1;
(statearr_183708_183791[(2)] = inst_183623);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183694__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (21))){
var inst_183667 = (state_183694[(8)]);
var inst_183677 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183678 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_183679 = cljs.core.List.EMPTY;
var inst_183680 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_183681 = cljs.core.cons.call(null,inst_183680,inst_183667);
var inst_183682 = cljs.core._conj.call(null,inst_183679,inst_183681);
var inst_183683 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_183684 = cljs.core._conj.call(null,inst_183682,inst_183683);
var inst_183685 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_183678,inst_183684,null];
var inst_183686 = cljs.core.PersistentHashMap.fromArrays(inst_183677,inst_183685);
var inst_183687 = cljs.test.do_report.call(null,inst_183686);
var state_183694__$1 = state_183694;
var statearr_183709_183792 = state_183694__$1;
(statearr_183709_183792[(2)] = inst_183687);

(statearr_183709_183792[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (13))){
var inst_183622 = (state_183694[(13)]);
var inst_183625 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183626 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_183627 = cljs.core.cons.call(null,cljs.core._EQ_,inst_183622);
var inst_183628 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_183626,inst_183627,null];
var inst_183629 = cljs.core.PersistentHashMap.fromArrays(inst_183625,inst_183628);
var inst_183630 = cljs.test.do_report.call(null,inst_183629);
var state_183694__$1 = state_183694;
var statearr_183710_183793 = state_183694__$1;
(statearr_183710_183793[(2)] = inst_183630);

(statearr_183710_183793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (22))){
var inst_183668 = (state_183694[(14)]);
var inst_183689 = (state_183694[(2)]);
var state_183694__$1 = (function (){var statearr_183711 = state_183694;
(statearr_183711[(15)] = inst_183689);

return statearr_183711;
})();
var statearr_183712_183794 = state_183694__$1;
(statearr_183712_183794[(2)] = inst_183668);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183694__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (6))){
var inst_183577 = (state_183694[(7)]);
var inst_183580 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183581 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_183582 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_183577);
var inst_183583 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_183581,inst_183582,null];
var inst_183584 = cljs.core.PersistentHashMap.fromArrays(inst_183580,inst_183583);
var inst_183585 = cljs.test.do_report.call(null,inst_183584);
var state_183694__$1 = state_183694;
var statearr_183713_183795 = state_183694__$1;
(statearr_183713_183795[(2)] = inst_183585);

(statearr_183713_183795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (17))){
var inst_183647 = (state_183694[(2)]);
var inst_183648 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183649 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_183650 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_183649,inst_183647,null];
var inst_183651 = cljs.core.PersistentHashMap.fromArrays(inst_183648,inst_183650);
var inst_183652 = cljs.test.do_report.call(null,inst_183651);
var state_183694__$1 = state_183694;
var statearr_183714_183796 = state_183694__$1;
(statearr_183714_183796[(2)] = inst_183652);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183694__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (3))){
var inst_183557 = (state_183694[(2)]);
var inst_183558 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183559 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_183560 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_183559,inst_183557,null];
var inst_183561 = cljs.core.PersistentHashMap.fromArrays(inst_183558,inst_183560);
var inst_183562 = cljs.test.do_report.call(null,inst_183561);
var state_183694__$1 = state_183694;
var statearr_183715_183797 = state_183694__$1;
(statearr_183715_183797[(2)] = inst_183562);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183694__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (12))){
var inst_183612 = (state_183694[(16)]);
var inst_183622 = (state_183694[(13)]);
var inst_183623 = (state_183694[(11)]);
var inst_183621 = (state_183694[(2)]);
var inst_183622__$1 = cljs.core._conj.call(null,inst_183612,inst_183621);
var inst_183623__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_183622__$1);
var state_183694__$1 = (function (){var statearr_183716 = state_183694;
(statearr_183716[(13)] = inst_183622__$1);

(statearr_183716[(11)] = inst_183623__$1);

return statearr_183716;
})();
if(cljs.core.truth_(inst_183623__$1)){
var statearr_183717_183798 = state_183694__$1;
(statearr_183717_183798[(1)] = (13));

} else {
var statearr_183718_183799 = state_183694__$1;
(statearr_183718_183799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (2))){
var inst_183601 = (state_183694[(2)]);
var state_183694__$1 = (function (){var statearr_183719 = state_183694;
(statearr_183719[(17)] = inst_183601);

return statearr_183719;
})();
var statearr_183720_183800 = state_183694__$1;
(statearr_183720_183800[(2)] = null);

(statearr_183720_183800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (19))){
var inst_183668 = (state_183694[(14)]);
var inst_183667 = (state_183694[(8)]);
var inst_183657 = (state_183694[(18)]);
var inst_183666 = (state_183694[(2)]);
var inst_183667__$1 = cljs.core._conj.call(null,inst_183657,inst_183666);
var inst_183668__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_183667__$1);
var state_183694__$1 = (function (){var statearr_183721 = state_183694;
(statearr_183721[(14)] = inst_183668__$1);

(statearr_183721[(8)] = inst_183667__$1);

return statearr_183721;
})();
if(cljs.core.truth_(inst_183668__$1)){
var statearr_183722_183801 = state_183694__$1;
(statearr_183722_183801[(1)] = (20));

} else {
var statearr_183723_183802 = state_183694__$1;
(statearr_183723_183802[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183694,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_183611 = cljs.core.List.EMPTY;
var inst_183612 = cljs.core._conj.call(null,inst_183611,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_183616 = cljs.core.async.chan.call(null,(1));
var inst_183617 = (function (){var c__9318__auto____$1 = inst_183616;
return ((function (c__9318__auto____$1,_,inst_183611,inst_183612,inst_183616,state_val_183695,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_183611,inst_183612,inst_183616,state_val_183695,c__9318__auto__,___10407__auto__){
return (function (state_183614){
var state_val_183615 = (state_183614[(1)]);
if((state_val_183615 === (1))){
var state_183614__$1 = state_183614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183614__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_183611,inst_183612,inst_183616,state_val_183695,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_183611,inst_183612,inst_183616,state_val_183695,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183727 = [null,null,null,null,null,null,null];
(statearr_183727[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183727[(1)] = (1));

return statearr_183727;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_183614){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_183614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183728){if((e183728 instanceof Object)){
var ex__9301__auto__ = e183728;
var statearr_183729_183803 = state_183614;
(statearr_183729_183803[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183804 = state_183614;
state_183614 = G__183804;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_183614){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_183614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_183611,inst_183612,inst_183616,state_val_183695,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_183730 = f__9319__auto__.call(null);
(statearr_183730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_183730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_183611,inst_183612,inst_183616,state_val_183695,c__9318__auto__,___10407__auto__))
})();
var inst_183618 = cljs.core.async.impl.dispatch.run.call(null,inst_183617);
var inst_183619 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_183616);
var state_183694__$1 = (function (){var statearr_183731 = state_183694;
(statearr_183731[(16)] = inst_183612);

(statearr_183731[(19)] = inst_183618);

return statearr_183731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183694__$1,(12),inst_183619);
} else {
if((state_val_183695 === (9))){
var inst_183646 = (state_183694[(2)]);
var state_183694__$1 = (function (){var statearr_183732 = state_183694;
(statearr_183732[(20)] = inst_183646);

return statearr_183732;
})();
var statearr_183733_183805 = state_183694__$1;
(statearr_183733_183805[(2)] = null);

(statearr_183733_183805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (5))){
var inst_183577 = (state_183694[(7)]);
var inst_183578 = (state_183694[(21)]);
var inst_183567 = (state_183694[(10)]);
var inst_183576 = (state_183694[(2)]);
var inst_183577__$1 = cljs.core._conj.call(null,inst_183567,inst_183576);
var inst_183578__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_183577__$1);
var state_183694__$1 = (function (){var statearr_183734 = state_183694;
(statearr_183734[(7)] = inst_183577__$1);

(statearr_183734[(21)] = inst_183578__$1);

return statearr_183734;
})();
if(cljs.core.truth_(inst_183578__$1)){
var statearr_183735_183806 = state_183694__$1;
(statearr_183735_183806[(1)] = (6));

} else {
var statearr_183736_183807 = state_183694__$1;
(statearr_183736_183807[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (14))){
var inst_183622 = (state_183694[(13)]);
var inst_183632 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183633 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_183634 = cljs.core.List.EMPTY;
var inst_183635 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_183636 = cljs.core.cons.call(null,inst_183635,inst_183622);
var inst_183637 = cljs.core._conj.call(null,inst_183634,inst_183636);
var inst_183638 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_183639 = cljs.core._conj.call(null,inst_183637,inst_183638);
var inst_183640 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_183633,inst_183639,null];
var inst_183641 = cljs.core.PersistentHashMap.fromArrays(inst_183632,inst_183640);
var inst_183642 = cljs.test.do_report.call(null,inst_183641);
var state_183694__$1 = state_183694;
var statearr_183737_183808 = state_183694__$1;
(statearr_183737_183808[(2)] = inst_183642);

(statearr_183737_183808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (16))){
var inst_183691 = (state_183694[(2)]);
var inst_183692 = done.call(null);
var state_183694__$1 = (function (){var statearr_183738 = state_183694;
(statearr_183738[(22)] = inst_183691);

return statearr_183738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183694__$1,inst_183692);
} else {
if((state_val_183695 === (10))){
var inst_183602 = (state_183694[(2)]);
var inst_183603 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183604 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_183605 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_183604,inst_183602,null];
var inst_183606 = cljs.core.PersistentHashMap.fromArrays(inst_183603,inst_183605);
var inst_183607 = cljs.test.do_report.call(null,inst_183606);
var state_183694__$1 = state_183694;
var statearr_183739_183809 = state_183694__$1;
(statearr_183739_183809[(2)] = inst_183607);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183694__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183695 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183694,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_183656 = cljs.core.List.EMPTY;
var inst_183657 = cljs.core._conj.call(null,inst_183656,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_183661 = cljs.core.async.chan.call(null,(1));
var inst_183662 = (function (){var c__9318__auto____$1 = inst_183661;
return ((function (c__9318__auto____$1,_,inst_183656,inst_183657,inst_183661,state_val_183695,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_183656,inst_183657,inst_183661,state_val_183695,c__9318__auto__,___10407__auto__){
return (function (state_183659){
var state_val_183660 = (state_183659[(1)]);
if((state_val_183660 === (1))){
var state_183659__$1 = state_183659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183659__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_183656,inst_183657,inst_183661,state_val_183695,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_183656,inst_183657,inst_183661,state_val_183695,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183743 = [null,null,null,null,null,null,null];
(statearr_183743[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183743[(1)] = (1));

return statearr_183743;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_183659){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_183659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183744){if((e183744 instanceof Object)){
var ex__9301__auto__ = e183744;
var statearr_183745_183810 = state_183659;
(statearr_183745_183810[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183811 = state_183659;
state_183659 = G__183811;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_183659){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_183659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_183656,inst_183657,inst_183661,state_val_183695,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_183746 = f__9319__auto__.call(null);
(statearr_183746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_183746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_183656,inst_183657,inst_183661,state_val_183695,c__9318__auto__,___10407__auto__))
})();
var inst_183663 = cljs.core.async.impl.dispatch.run.call(null,inst_183662);
var inst_183664 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_183661);
var state_183694__$1 = (function (){var statearr_183747 = state_183694;
(statearr_183747[(23)] = inst_183663);

(statearr_183747[(18)] = inst_183657);

return statearr_183747;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183694__$1,(19),inst_183664);
} else {
if((state_val_183695 === (8))){
var inst_183578 = (state_183694[(21)]);
var inst_183599 = (state_183694[(2)]);
var state_183694__$1 = (function (){var statearr_183748 = state_183694;
(statearr_183748[(24)] = inst_183599);

return statearr_183748;
})();
var statearr_183749_183812 = state_183694__$1;
(statearr_183749_183812[(2)] = inst_183578);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183694__$1);

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
});})(c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_183753[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183753[(1)] = (1));

return statearr_183753;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_183694){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_183694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183754){if((e183754 instanceof Object)){
var ex__9301__auto__ = e183754;
var statearr_183755_183813 = state_183694;
(statearr_183755_183813[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183814 = state_183694;
state_183694 = G__183814;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_183694){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_183694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_183756 = f__9319__auto__.call(null);
(statearr_183756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_183756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test183353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta183354","meta183354",181369844,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test183353.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test183353.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test183353";

drop_dot.core_test.t_drop_dot$core_test183353.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test183353");
});

drop_dot.core_test.__GT_t_drop_dot$core_test183353 = (function drop_dot$core_test$__GT_t_drop_dot$core_test183353(meta183354){
return (new drop_dot.core_test.t_drop_dot$core_test183353(meta183354));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test183353(null));
});

drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path->chan-linkable-path-that-wants-linking-TEST","drop-dot.core-test/chan-linkable-path->chan-linkable-path-that-wants-linking-TEST",2043608325,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path->chan-linkable-path-that-wants-linking-TEST","chan-linkable-path->chan-linkable-path-that-wants-linking-TEST",2088597056,null),"test/drop_dot/core_test.cljs",72,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST)?drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.line__GT_chan_linkable_path_TEST = (function drop_dot$core_test$line__GT_chan_linkable_path_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$line__GT_chan_linkable_path_TEST.cljs$lang$var);
});
drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test183815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test183815 = (function (meta183816){
this.meta183816 = meta183816;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test183815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_183817,meta183816__$1){
var self__ = this;
var _183817__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test183815(meta183816__$1));
});

drop_dot.core_test.t_drop_dot$core_test183815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_183817){
var self__ = this;
var _183817__$1 = this;
return self__.meta183816;
});

drop_dot.core_test.t_drop_dot$core_test183815.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test183815.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_183939){
var state_val_183940 = (state_183939[(1)]);
if((state_val_183940 === (7))){
var inst_183834 = (state_183939[(7)]);
var inst_183844 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183845 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_183846 = cljs.core.List.EMPTY;
var inst_183847 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_183848 = cljs.core.cons.call(null,inst_183847,inst_183834);
var inst_183849 = cljs.core._conj.call(null,inst_183846,inst_183848);
var inst_183850 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_183851 = cljs.core._conj.call(null,inst_183849,inst_183850);
var inst_183852 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_183845,inst_183851,null];
var inst_183853 = cljs.core.PersistentHashMap.fromArrays(inst_183844,inst_183852);
var inst_183854 = cljs.test.do_report.call(null,inst_183853);
var state_183939__$1 = state_183939;
var statearr_183941_184145 = state_183939__$1;
(statearr_183941_184145[(2)] = inst_183854);

(statearr_183941_184145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (20))){
var inst_183912 = (state_183939[(8)]);
var inst_183915 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183916 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_183917 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_183912);
var inst_183918 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_183916,inst_183917,null];
var inst_183919 = cljs.core.PersistentHashMap.fromArrays(inst_183915,inst_183918);
var inst_183920 = cljs.test.do_report.call(null,inst_183919);
var state_183939__$1 = state_183939;
var statearr_183942_184146 = state_183939__$1;
(statearr_183942_184146[(2)] = inst_183920);

(statearr_183942_184146[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (1))){
var inst_183819 = cljs.core.async.chan.call(null,(1));
var state_183939__$1 = (function (){var statearr_183943 = state_183939;
(statearr_183943[(9)] = inst_183819);

return statearr_183943;
})();
var statearr_183944_184147 = state_183939__$1;
(statearr_183944_184147[(2)] = null);

(statearr_183944_184147[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183939,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_183829 = cljs.core.List.EMPTY;
var inst_183830 = cljs.core._conj.call(null,inst_183829,"~/.TDD-this-file-in-dot-drop-dot");
var inst_183831 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_183939__$1 = (function (){var statearr_183945 = state_183939;
(statearr_183945[(10)] = inst_183830);

return statearr_183945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183939__$1,(5),inst_183831);
} else {
if((state_val_183940 === (15))){
var inst_183874 = (state_183939[(11)]);
var inst_183895 = (state_183939[(2)]);
var state_183939__$1 = (function (){var statearr_183946 = state_183939;
(statearr_183946[(12)] = inst_183895);

return statearr_183946;
})();
var statearr_183947_184148 = state_183939__$1;
(statearr_183947_184148[(2)] = inst_183874);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183939__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (21))){
var inst_183912 = (state_183939[(8)]);
var inst_183922 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183923 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_183924 = cljs.core.List.EMPTY;
var inst_183925 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_183926 = cljs.core.cons.call(null,inst_183925,inst_183912);
var inst_183927 = cljs.core._conj.call(null,inst_183924,inst_183926);
var inst_183928 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_183929 = cljs.core._conj.call(null,inst_183927,inst_183928);
var inst_183930 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_183923,inst_183929,null];
var inst_183931 = cljs.core.PersistentHashMap.fromArrays(inst_183922,inst_183930);
var inst_183932 = cljs.test.do_report.call(null,inst_183931);
var state_183939__$1 = state_183939;
var statearr_183948_184149 = state_183939__$1;
(statearr_183948_184149[(2)] = inst_183932);

(statearr_183948_184149[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (13))){
var inst_183873 = (state_183939[(13)]);
var inst_183876 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183877 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_183878 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_183873);
var inst_183879 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_183877,inst_183878,null];
var inst_183880 = cljs.core.PersistentHashMap.fromArrays(inst_183876,inst_183879);
var inst_183881 = cljs.test.do_report.call(null,inst_183880);
var state_183939__$1 = state_183939;
var statearr_183949_184150 = state_183939__$1;
(statearr_183949_184150[(2)] = inst_183881);

(statearr_183949_184150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (22))){
var inst_183913 = (state_183939[(14)]);
var inst_183934 = (state_183939[(2)]);
var state_183939__$1 = (function (){var statearr_183950 = state_183939;
(statearr_183950[(15)] = inst_183934);

return statearr_183950;
})();
var statearr_183951_184151 = state_183939__$1;
(statearr_183951_184151[(2)] = inst_183913);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183939__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (6))){
var inst_183834 = (state_183939[(7)]);
var inst_183837 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183838 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_183839 = cljs.core.cons.call(null,cljs.core._EQ_,inst_183834);
var inst_183840 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_183838,inst_183839,null];
var inst_183841 = cljs.core.PersistentHashMap.fromArrays(inst_183837,inst_183840);
var inst_183842 = cljs.test.do_report.call(null,inst_183841);
var state_183939__$1 = state_183939;
var statearr_183952_184152 = state_183939__$1;
(statearr_183952_184152[(2)] = inst_183842);

(statearr_183952_184152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (17))){
var inst_183898 = (state_183939[(2)]);
var inst_183899 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183900 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_183901 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_183900,inst_183898,null];
var inst_183902 = cljs.core.PersistentHashMap.fromArrays(inst_183899,inst_183901);
var inst_183903 = cljs.test.do_report.call(null,inst_183902);
var state_183939__$1 = state_183939;
var statearr_183953_184153 = state_183939__$1;
(statearr_183953_184153[(2)] = inst_183903);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183939__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (3))){
var inst_183820 = (state_183939[(2)]);
var inst_183821 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183822 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_183823 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_183822,inst_183820,null];
var inst_183824 = cljs.core.PersistentHashMap.fromArrays(inst_183821,inst_183823);
var inst_183825 = cljs.test.do_report.call(null,inst_183824);
var state_183939__$1 = state_183939;
var statearr_183954_184154 = state_183939__$1;
(statearr_183954_184154[(2)] = inst_183825);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183939__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (12))){
var inst_183873 = (state_183939[(13)]);
var inst_183874 = (state_183939[(11)]);
var inst_183869 = (state_183939[(16)]);
var inst_183872 = (state_183939[(2)]);
var inst_183873__$1 = cljs.core._conj.call(null,inst_183869,inst_183872);
var inst_183874__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_183873__$1);
var state_183939__$1 = (function (){var statearr_183955 = state_183939;
(statearr_183955[(13)] = inst_183873__$1);

(statearr_183955[(11)] = inst_183874__$1);

return statearr_183955;
})();
if(cljs.core.truth_(inst_183874__$1)){
var statearr_183956_184155 = state_183939__$1;
(statearr_183956_184155[(1)] = (13));

} else {
var statearr_183957_184156 = state_183939__$1;
(statearr_183957_184156[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (2))){
var inst_183858 = (state_183939[(2)]);
var state_183939__$1 = (function (){var statearr_183958 = state_183939;
(statearr_183958[(17)] = inst_183858);

return statearr_183958;
})();
var statearr_183959_184157 = state_183939__$1;
(statearr_183959_184157[(2)] = null);

(statearr_183959_184157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (19))){
var inst_183913 = (state_183939[(14)]);
var inst_183912 = (state_183939[(8)]);
var inst_183908 = (state_183939[(18)]);
var inst_183911 = (state_183939[(2)]);
var inst_183912__$1 = cljs.core._conj.call(null,inst_183908,inst_183911);
var inst_183913__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_183912__$1);
var state_183939__$1 = (function (){var statearr_183960 = state_183939;
(statearr_183960[(14)] = inst_183913__$1);

(statearr_183960[(8)] = inst_183912__$1);

return statearr_183960;
})();
if(cljs.core.truth_(inst_183913__$1)){
var statearr_183961_184158 = state_183939__$1;
(statearr_183961_184158[(1)] = (20));

} else {
var statearr_183962_184159 = state_183939__$1;
(statearr_183962_184159[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183939,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_183868 = cljs.core.List.EMPTY;
var inst_183869 = cljs.core._conj.call(null,inst_183868,"ERROR: ");
var inst_183870 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_183939__$1 = (function (){var statearr_183963 = state_183939;
(statearr_183963[(16)] = inst_183869);

return statearr_183963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183939__$1,(12),inst_183870);
} else {
if((state_val_183940 === (9))){
var inst_183897 = (state_183939[(2)]);
var state_183939__$1 = (function (){var statearr_183964 = state_183939;
(statearr_183964[(19)] = inst_183897);

return statearr_183964;
})();
var statearr_183965_184160 = state_183939__$1;
(statearr_183965_184160[(2)] = null);

(statearr_183965_184160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (5))){
var inst_183835 = (state_183939[(20)]);
var inst_183830 = (state_183939[(10)]);
var inst_183834 = (state_183939[(7)]);
var inst_183833 = (state_183939[(2)]);
var inst_183834__$1 = cljs.core._conj.call(null,inst_183830,inst_183833);
var inst_183835__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_183834__$1);
var state_183939__$1 = (function (){var statearr_183966 = state_183939;
(statearr_183966[(20)] = inst_183835__$1);

(statearr_183966[(7)] = inst_183834__$1);

return statearr_183966;
})();
if(cljs.core.truth_(inst_183835__$1)){
var statearr_183967_184161 = state_183939__$1;
(statearr_183967_184161[(1)] = (6));

} else {
var statearr_183968_184162 = state_183939__$1;
(statearr_183968_184162[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (14))){
var inst_183873 = (state_183939[(13)]);
var inst_183883 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183884 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_183885 = cljs.core.List.EMPTY;
var inst_183886 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_183887 = cljs.core.cons.call(null,inst_183886,inst_183873);
var inst_183888 = cljs.core._conj.call(null,inst_183885,inst_183887);
var inst_183889 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_183890 = cljs.core._conj.call(null,inst_183888,inst_183889);
var inst_183891 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_183884,inst_183890,null];
var inst_183892 = cljs.core.PersistentHashMap.fromArrays(inst_183883,inst_183891);
var inst_183893 = cljs.test.do_report.call(null,inst_183892);
var state_183939__$1 = state_183939;
var statearr_183969_184163 = state_183939__$1;
(statearr_183969_184163[(2)] = inst_183893);

(statearr_183969_184163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (16))){
var inst_183936 = (state_183939[(2)]);
var inst_183937 = done.call(null);
var state_183939__$1 = (function (){var statearr_183970 = state_183939;
(statearr_183970[(21)] = inst_183936);

return statearr_183970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183939__$1,inst_183937);
} else {
if((state_val_183940 === (10))){
var inst_183859 = (state_183939[(2)]);
var inst_183860 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183861 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_183862 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_183861,inst_183859,null];
var inst_183863 = cljs.core.PersistentHashMap.fromArrays(inst_183860,inst_183862);
var inst_183864 = cljs.test.do_report.call(null,inst_183863);
var state_183939__$1 = state_183939;
var statearr_183971_184164 = state_183939__$1;
(statearr_183971_184164[(2)] = inst_183864);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183939__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183940 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_183939,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_183907 = cljs.core.List.EMPTY;
var inst_183908 = cljs.core._conj.call(null,inst_183907,"ERROR: ");
var inst_183909 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_183939__$1 = (function (){var statearr_183972 = state_183939;
(statearr_183972[(18)] = inst_183908);

return statearr_183972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183939__$1,(19),inst_183909);
} else {
if((state_val_183940 === (8))){
var inst_183835 = (state_183939[(20)]);
var inst_183856 = (state_183939[(2)]);
var state_183939__$1 = (function (){var statearr_183973 = state_183939;
(statearr_183973[(22)] = inst_183856);

return statearr_183973;
})();
var statearr_183974_184165 = state_183939__$1;
(statearr_183974_184165[(2)] = inst_183835);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183939__$1);

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
});})(c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_183978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_183978[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_183978[(1)] = (1));

return statearr_183978;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_183939){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_183939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e183979){if((e183979 instanceof Object)){
var ex__9301__auto__ = e183979;
var statearr_183980_184166 = state_183939;
(statearr_183980_184166[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__184167 = state_183939;
state_183939 = G__184167;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_183939){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_183939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_183981 = f__9319__auto__.call(null);
(statearr_183981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_183981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test183815.prototype.apply = (function (self__,args183818){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args183818)));
});

drop_dot.core_test.t_drop_dot$core_test183815.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_184102){
var state_val_184103 = (state_184102[(1)]);
if((state_val_184103 === (7))){
var inst_183997 = (state_184102[(7)]);
var inst_184007 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184008 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_184009 = cljs.core.List.EMPTY;
var inst_184010 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_184011 = cljs.core.cons.call(null,inst_184010,inst_183997);
var inst_184012 = cljs.core._conj.call(null,inst_184009,inst_184011);
var inst_184013 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_184014 = cljs.core._conj.call(null,inst_184012,inst_184013);
var inst_184015 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_184008,inst_184014,null];
var inst_184016 = cljs.core.PersistentHashMap.fromArrays(inst_184007,inst_184015);
var inst_184017 = cljs.test.do_report.call(null,inst_184016);
var state_184102__$1 = state_184102;
var statearr_184104_184168 = state_184102__$1;
(statearr_184104_184168[(2)] = inst_184017);

(statearr_184104_184168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (20))){
var inst_184075 = (state_184102[(8)]);
var inst_184078 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184079 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_184080 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_184075);
var inst_184081 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_184079,inst_184080,null];
var inst_184082 = cljs.core.PersistentHashMap.fromArrays(inst_184078,inst_184081);
var inst_184083 = cljs.test.do_report.call(null,inst_184082);
var state_184102__$1 = state_184102;
var statearr_184105_184169 = state_184102__$1;
(statearr_184105_184169[(2)] = inst_184083);

(statearr_184105_184169[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (1))){
var inst_183982 = cljs.core.async.chan.call(null,(1));
var state_184102__$1 = (function (){var statearr_184106 = state_184102;
(statearr_184106[(9)] = inst_183982);

return statearr_184106;
})();
var statearr_184107_184170 = state_184102__$1;
(statearr_184107_184170[(2)] = null);

(statearr_184107_184170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_184102,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_183992 = cljs.core.List.EMPTY;
var inst_183993 = cljs.core._conj.call(null,inst_183992,"~/.TDD-this-file-in-dot-drop-dot");
var inst_183994 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_184102__$1 = (function (){var statearr_184108 = state_184102;
(statearr_184108[(10)] = inst_183993);

return statearr_184108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_184102__$1,(5),inst_183994);
} else {
if((state_val_184103 === (15))){
var inst_184037 = (state_184102[(11)]);
var inst_184058 = (state_184102[(2)]);
var state_184102__$1 = (function (){var statearr_184109 = state_184102;
(statearr_184109[(12)] = inst_184058);

return statearr_184109;
})();
var statearr_184110_184171 = state_184102__$1;
(statearr_184110_184171[(2)] = inst_184037);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (21))){
var inst_184075 = (state_184102[(8)]);
var inst_184085 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184086 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_184087 = cljs.core.List.EMPTY;
var inst_184088 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_184089 = cljs.core.cons.call(null,inst_184088,inst_184075);
var inst_184090 = cljs.core._conj.call(null,inst_184087,inst_184089);
var inst_184091 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_184092 = cljs.core._conj.call(null,inst_184090,inst_184091);
var inst_184093 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_184086,inst_184092,null];
var inst_184094 = cljs.core.PersistentHashMap.fromArrays(inst_184085,inst_184093);
var inst_184095 = cljs.test.do_report.call(null,inst_184094);
var state_184102__$1 = state_184102;
var statearr_184111_184172 = state_184102__$1;
(statearr_184111_184172[(2)] = inst_184095);

(statearr_184111_184172[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (13))){
var inst_184036 = (state_184102[(13)]);
var inst_184039 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184040 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_184041 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_184036);
var inst_184042 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_184040,inst_184041,null];
var inst_184043 = cljs.core.PersistentHashMap.fromArrays(inst_184039,inst_184042);
var inst_184044 = cljs.test.do_report.call(null,inst_184043);
var state_184102__$1 = state_184102;
var statearr_184112_184173 = state_184102__$1;
(statearr_184112_184173[(2)] = inst_184044);

(statearr_184112_184173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (22))){
var inst_184076 = (state_184102[(14)]);
var inst_184097 = (state_184102[(2)]);
var state_184102__$1 = (function (){var statearr_184113 = state_184102;
(statearr_184113[(15)] = inst_184097);

return statearr_184113;
})();
var statearr_184114_184174 = state_184102__$1;
(statearr_184114_184174[(2)] = inst_184076);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (6))){
var inst_183997 = (state_184102[(7)]);
var inst_184000 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184001 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_184002 = cljs.core.cons.call(null,cljs.core._EQ_,inst_183997);
var inst_184003 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_184001,inst_184002,null];
var inst_184004 = cljs.core.PersistentHashMap.fromArrays(inst_184000,inst_184003);
var inst_184005 = cljs.test.do_report.call(null,inst_184004);
var state_184102__$1 = state_184102;
var statearr_184115_184175 = state_184102__$1;
(statearr_184115_184175[(2)] = inst_184005);

(statearr_184115_184175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (17))){
var inst_184061 = (state_184102[(2)]);
var inst_184062 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184063 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_184064 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_184063,inst_184061,null];
var inst_184065 = cljs.core.PersistentHashMap.fromArrays(inst_184062,inst_184064);
var inst_184066 = cljs.test.do_report.call(null,inst_184065);
var state_184102__$1 = state_184102;
var statearr_184116_184176 = state_184102__$1;
(statearr_184116_184176[(2)] = inst_184066);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (3))){
var inst_183983 = (state_184102[(2)]);
var inst_183984 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_183985 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_183986 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_183985,inst_183983,null];
var inst_183987 = cljs.core.PersistentHashMap.fromArrays(inst_183984,inst_183986);
var inst_183988 = cljs.test.do_report.call(null,inst_183987);
var state_184102__$1 = state_184102;
var statearr_184117_184177 = state_184102__$1;
(statearr_184117_184177[(2)] = inst_183988);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (12))){
var inst_184037 = (state_184102[(11)]);
var inst_184036 = (state_184102[(13)]);
var inst_184032 = (state_184102[(16)]);
var inst_184035 = (state_184102[(2)]);
var inst_184036__$1 = cljs.core._conj.call(null,inst_184032,inst_184035);
var inst_184037__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_184036__$1);
var state_184102__$1 = (function (){var statearr_184118 = state_184102;
(statearr_184118[(11)] = inst_184037__$1);

(statearr_184118[(13)] = inst_184036__$1);

return statearr_184118;
})();
if(cljs.core.truth_(inst_184037__$1)){
var statearr_184119_184178 = state_184102__$1;
(statearr_184119_184178[(1)] = (13));

} else {
var statearr_184120_184179 = state_184102__$1;
(statearr_184120_184179[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (2))){
var inst_184021 = (state_184102[(2)]);
var state_184102__$1 = (function (){var statearr_184121 = state_184102;
(statearr_184121[(17)] = inst_184021);

return statearr_184121;
})();
var statearr_184122_184180 = state_184102__$1;
(statearr_184122_184180[(2)] = null);

(statearr_184122_184180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (19))){
var inst_184076 = (state_184102[(14)]);
var inst_184075 = (state_184102[(8)]);
var inst_184071 = (state_184102[(18)]);
var inst_184074 = (state_184102[(2)]);
var inst_184075__$1 = cljs.core._conj.call(null,inst_184071,inst_184074);
var inst_184076__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_184075__$1);
var state_184102__$1 = (function (){var statearr_184123 = state_184102;
(statearr_184123[(14)] = inst_184076__$1);

(statearr_184123[(8)] = inst_184075__$1);

return statearr_184123;
})();
if(cljs.core.truth_(inst_184076__$1)){
var statearr_184124_184181 = state_184102__$1;
(statearr_184124_184181[(1)] = (20));

} else {
var statearr_184125_184182 = state_184102__$1;
(statearr_184125_184182[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_184102,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_184031 = cljs.core.List.EMPTY;
var inst_184032 = cljs.core._conj.call(null,inst_184031,"ERROR: ");
var inst_184033 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_184102__$1 = (function (){var statearr_184126 = state_184102;
(statearr_184126[(16)] = inst_184032);

return statearr_184126;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_184102__$1,(12),inst_184033);
} else {
if((state_val_184103 === (9))){
var inst_184060 = (state_184102[(2)]);
var state_184102__$1 = (function (){var statearr_184127 = state_184102;
(statearr_184127[(19)] = inst_184060);

return statearr_184127;
})();
var statearr_184128_184183 = state_184102__$1;
(statearr_184128_184183[(2)] = null);

(statearr_184128_184183[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (5))){
var inst_183993 = (state_184102[(10)]);
var inst_183998 = (state_184102[(20)]);
var inst_183997 = (state_184102[(7)]);
var inst_183996 = (state_184102[(2)]);
var inst_183997__$1 = cljs.core._conj.call(null,inst_183993,inst_183996);
var inst_183998__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_183997__$1);
var state_184102__$1 = (function (){var statearr_184129 = state_184102;
(statearr_184129[(20)] = inst_183998__$1);

(statearr_184129[(7)] = inst_183997__$1);

return statearr_184129;
})();
if(cljs.core.truth_(inst_183998__$1)){
var statearr_184130_184184 = state_184102__$1;
(statearr_184130_184184[(1)] = (6));

} else {
var statearr_184131_184185 = state_184102__$1;
(statearr_184131_184185[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (14))){
var inst_184036 = (state_184102[(13)]);
var inst_184046 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184047 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_184048 = cljs.core.List.EMPTY;
var inst_184049 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_184050 = cljs.core.cons.call(null,inst_184049,inst_184036);
var inst_184051 = cljs.core._conj.call(null,inst_184048,inst_184050);
var inst_184052 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_184053 = cljs.core._conj.call(null,inst_184051,inst_184052);
var inst_184054 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_184047,inst_184053,null];
var inst_184055 = cljs.core.PersistentHashMap.fromArrays(inst_184046,inst_184054);
var inst_184056 = cljs.test.do_report.call(null,inst_184055);
var state_184102__$1 = state_184102;
var statearr_184132_184186 = state_184102__$1;
(statearr_184132_184186[(2)] = inst_184056);

(statearr_184132_184186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (16))){
var inst_184099 = (state_184102[(2)]);
var inst_184100 = done.call(null);
var state_184102__$1 = (function (){var statearr_184133 = state_184102;
(statearr_184133[(21)] = inst_184099);

return statearr_184133;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_184102__$1,inst_184100);
} else {
if((state_val_184103 === (10))){
var inst_184022 = (state_184102[(2)]);
var inst_184023 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184024 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_184025 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_184024,inst_184022,null];
var inst_184026 = cljs.core.PersistentHashMap.fromArrays(inst_184023,inst_184025);
var inst_184027 = cljs.test.do_report.call(null,inst_184026);
var state_184102__$1 = state_184102;
var statearr_184134_184187 = state_184102__$1;
(statearr_184134_184187[(2)] = inst_184027);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184103 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_184102,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_184070 = cljs.core.List.EMPTY;
var inst_184071 = cljs.core._conj.call(null,inst_184070,"ERROR: ");
var inst_184072 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_184102__$1 = (function (){var statearr_184135 = state_184102;
(statearr_184135[(18)] = inst_184071);

return statearr_184135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_184102__$1,(19),inst_184072);
} else {
if((state_val_184103 === (8))){
var inst_183998 = (state_184102[(20)]);
var inst_184019 = (state_184102[(2)]);
var state_184102__$1 = (function (){var statearr_184136 = state_184102;
(statearr_184136[(22)] = inst_184019);

return statearr_184136;
})();
var statearr_184137_184188 = state_184102__$1;
(statearr_184137_184188[(2)] = inst_183998);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184102__$1);

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
});})(c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_184141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_184141[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_184141[(1)] = (1));

return statearr_184141;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_184102){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_184102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e184142){if((e184142 instanceof Object)){
var ex__9301__auto__ = e184142;
var statearr_184143_184189 = state_184102;
(statearr_184143_184189[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e184142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__184190 = state_184102;
state_184102 = G__184190;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_184102){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_184102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_184144 = f__9319__auto__.call(null);
(statearr_184144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_184144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test183815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta183816","meta183816",-1364833162,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test183815.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test183815.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test183815";

drop_dot.core_test.t_drop_dot$core_test183815.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test183815");
});

drop_dot.core_test.__GT_t_drop_dot$core_test183815 = (function drop_dot$core_test$__GT_t_drop_dot$core_test183815(meta183816){
return (new drop_dot.core_test.t_drop_dot$core_test183815(meta183816));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test183815(null));
});

drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.line__GT_chan_linkable_path_TEST;},new cljs.core.Symbol("drop-dot.core-test","line->chan-linkable-path-TEST","drop-dot.core-test/line->chan-linkable-path-TEST",-1336484385,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"line->chan-linkable-path-TEST","line->chan-linkable-path-TEST",-1260168422,null),"test/drop_dot/core_test.cljs",39,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.line__GT_chan_linkable_path_TEST)?drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test:null)]));
drop_dot.core_test.async_test = (function drop_dot$core_test$async_test(){
return cljs.test.test_var.call(null,drop_dot$core_test$async_test.cljs$lang$var);
});
drop_dot.core_test.async_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing some core.async functionality.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test184191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test184191 = (function (meta184192){
this.meta184192 = meta184192;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test184191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_184193,meta184192__$1){
var self__ = this;
var _184193__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test184191(meta184192__$1));
});

drop_dot.core_test.t_drop_dot$core_test184191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_184193){
var self__ = this;
var _184193__$1 = this;
return self__.meta184192;
});

drop_dot.core_test.t_drop_dot$core_test184191.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test184191.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_184241){
var state_val_184242 = (state_184241[(1)]);
if((state_val_184242 === (1))){
var state_184241__$1 = state_184241;
var statearr_184243_184341 = state_184241__$1;
(statearr_184243_184341[(2)] = null);

(statearr_184243_184341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184242 === (2))){
var inst_184238 = (state_184241[(2)]);
var inst_184239 = done.call(null);
var state_184241__$1 = (function (){var statearr_184244 = state_184241;
(statearr_184244[(7)] = inst_184238);

return statearr_184244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_184241__$1,inst_184239);
} else {
if((state_val_184242 === (3))){
var inst_184195 = (state_184241[(2)]);
var inst_184196 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184197 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_184198 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_184197,inst_184195,null];
var inst_184199 = cljs.core.PersistentHashMap.fromArrays(inst_184196,inst_184198);
var inst_184200 = cljs.test.do_report.call(null,inst_184199);
var state_184241__$1 = state_184241;
var statearr_184245_184342 = state_184241__$1;
(statearr_184245_184342[(2)] = inst_184200);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184241__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184242 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_184241,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_184204 = cljs.core.List.EMPTY;
var inst_184205 = cljs.core._conj.call(null,inst_184204,"val1");
var inst_184209 = cljs.core.async.chan.call(null,(1));
var inst_184210 = (function (){var c__9318__auto____$1 = inst_184209;
return ((function (c__9318__auto____$1,_,inst_184204,inst_184205,inst_184209,state_val_184242,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_184204,inst_184205,inst_184209,state_val_184242,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_184207){
var state_val_184208 = (state_184207[(1)]);
if((state_val_184208 === (1))){
var state_184207__$1 = state_184207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_184207__$1,"val1");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_184204,inst_184205,inst_184209,state_val_184242,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_184204,inst_184205,inst_184209,state_val_184242,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_184249 = [null,null,null,null,null,null,null];
(statearr_184249[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_184249[(1)] = (1));

return statearr_184249;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_184207){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_184207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e184250){if((e184250 instanceof Object)){
var ex__9301__auto__ = e184250;
var statearr_184251_184343 = state_184207;
(statearr_184251_184343[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e184250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__184344 = state_184207;
state_184207 = G__184344;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_184207){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_184207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_184204,inst_184205,inst_184209,state_val_184242,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_184252 = f__9319__auto__.call(null);
(statearr_184252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_184252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_184204,inst_184205,inst_184209,state_val_184242,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_184211 = cljs.core.async.impl.dispatch.run.call(null,inst_184210);
var state_184241__$1 = (function (){var statearr_184253 = state_184241;
(statearr_184253[(8)] = inst_184205);

(statearr_184253[(9)] = inst_184211);

return statearr_184253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_184241__$1,(5),inst_184209);
} else {
if((state_val_184242 === (5))){
var inst_184215 = (state_184241[(10)]);
var inst_184214 = (state_184241[(11)]);
var inst_184205 = (state_184241[(8)]);
var inst_184213 = (state_184241[(2)]);
var inst_184214__$1 = cljs.core._conj.call(null,inst_184205,inst_184213);
var inst_184215__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_184214__$1);
var state_184241__$1 = (function (){var statearr_184254 = state_184241;
(statearr_184254[(10)] = inst_184215__$1);

(statearr_184254[(11)] = inst_184214__$1);

return statearr_184254;
})();
if(cljs.core.truth_(inst_184215__$1)){
var statearr_184255_184345 = state_184241__$1;
(statearr_184255_184345[(1)] = (6));

} else {
var statearr_184256_184346 = state_184241__$1;
(statearr_184256_184346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184242 === (6))){
var inst_184214 = (state_184241[(11)]);
var inst_184217 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184218 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_184219 = cljs.core.cons.call(null,cljs.core._EQ_,inst_184214);
var inst_184220 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_184218,inst_184219,null];
var inst_184221 = cljs.core.PersistentHashMap.fromArrays(inst_184217,inst_184220);
var inst_184222 = cljs.test.do_report.call(null,inst_184221);
var state_184241__$1 = state_184241;
var statearr_184257_184347 = state_184241__$1;
(statearr_184257_184347[(2)] = inst_184222);

(statearr_184257_184347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184242 === (7))){
var inst_184214 = (state_184241[(11)]);
var inst_184224 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184225 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_184226 = cljs.core.List.EMPTY;
var inst_184227 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_184228 = cljs.core.cons.call(null,inst_184227,inst_184214);
var inst_184229 = cljs.core._conj.call(null,inst_184226,inst_184228);
var inst_184230 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_184231 = cljs.core._conj.call(null,inst_184229,inst_184230);
var inst_184232 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_184225,inst_184231,null];
var inst_184233 = cljs.core.PersistentHashMap.fromArrays(inst_184224,inst_184232);
var inst_184234 = cljs.test.do_report.call(null,inst_184233);
var state_184241__$1 = state_184241;
var statearr_184258_184348 = state_184241__$1;
(statearr_184258_184348[(2)] = inst_184234);

(statearr_184258_184348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184242 === (8))){
var inst_184215 = (state_184241[(10)]);
var inst_184236 = (state_184241[(2)]);
var state_184241__$1 = (function (){var statearr_184259 = state_184241;
(statearr_184259[(12)] = inst_184236);

return statearr_184259;
})();
var statearr_184260_184349 = state_184241__$1;
(statearr_184260_184349[(2)] = inst_184215);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184241__$1);

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
});})(c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_184264 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_184264[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_184264[(1)] = (1));

return statearr_184264;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_184241){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_184241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e184265){if((e184265 instanceof Object)){
var ex__9301__auto__ = e184265;
var statearr_184266_184350 = state_184241;
(statearr_184266_184350[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e184265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__184351 = state_184241;
state_184241 = G__184351;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_184241){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_184241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_184267 = f__9319__auto__.call(null);
(statearr_184267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_184267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test184191.prototype.apply = (function (self__,args184194){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args184194)));
});

drop_dot.core_test.t_drop_dot$core_test184191.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_184314){
var state_val_184315 = (state_184314[(1)]);
if((state_val_184315 === (1))){
var state_184314__$1 = state_184314;
var statearr_184316_184352 = state_184314__$1;
(statearr_184316_184352[(2)] = null);

(statearr_184316_184352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184315 === (2))){
var inst_184311 = (state_184314[(2)]);
var inst_184312 = done.call(null);
var state_184314__$1 = (function (){var statearr_184317 = state_184314;
(statearr_184317[(7)] = inst_184311);

return statearr_184317;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_184314__$1,inst_184312);
} else {
if((state_val_184315 === (3))){
var inst_184268 = (state_184314[(2)]);
var inst_184269 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184270 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_184271 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_184270,inst_184268,null];
var inst_184272 = cljs.core.PersistentHashMap.fromArrays(inst_184269,inst_184271);
var inst_184273 = cljs.test.do_report.call(null,inst_184272);
var state_184314__$1 = state_184314;
var statearr_184318_184353 = state_184314__$1;
(statearr_184318_184353[(2)] = inst_184273);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184314__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184315 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_184314,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_184277 = cljs.core.List.EMPTY;
var inst_184278 = cljs.core._conj.call(null,inst_184277,"val1");
var inst_184282 = cljs.core.async.chan.call(null,(1));
var inst_184283 = (function (){var c__9318__auto____$1 = inst_184282;
return ((function (c__9318__auto____$1,_,inst_184277,inst_184278,inst_184282,state_val_184315,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_184277,inst_184278,inst_184282,state_val_184315,c__9318__auto__,___10407__auto__){
return (function (state_184280){
var state_val_184281 = (state_184280[(1)]);
if((state_val_184281 === (1))){
var state_184280__$1 = state_184280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_184280__$1,"val1");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_184277,inst_184278,inst_184282,state_val_184315,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_184277,inst_184278,inst_184282,state_val_184315,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_184322 = [null,null,null,null,null,null,null];
(statearr_184322[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_184322[(1)] = (1));

return statearr_184322;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_184280){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_184280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e184323){if((e184323 instanceof Object)){
var ex__9301__auto__ = e184323;
var statearr_184324_184354 = state_184280;
(statearr_184324_184354[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e184323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__184355 = state_184280;
state_184280 = G__184355;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_184280){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_184280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_184277,inst_184278,inst_184282,state_val_184315,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_184325 = f__9319__auto__.call(null);
(statearr_184325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_184325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_184277,inst_184278,inst_184282,state_val_184315,c__9318__auto__,___10407__auto__))
})();
var inst_184284 = cljs.core.async.impl.dispatch.run.call(null,inst_184283);
var state_184314__$1 = (function (){var statearr_184326 = state_184314;
(statearr_184326[(8)] = inst_184284);

(statearr_184326[(9)] = inst_184278);

return statearr_184326;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_184314__$1,(5),inst_184282);
} else {
if((state_val_184315 === (5))){
var inst_184287 = (state_184314[(10)]);
var inst_184288 = (state_184314[(11)]);
var inst_184278 = (state_184314[(9)]);
var inst_184286 = (state_184314[(2)]);
var inst_184287__$1 = cljs.core._conj.call(null,inst_184278,inst_184286);
var inst_184288__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_184287__$1);
var state_184314__$1 = (function (){var statearr_184327 = state_184314;
(statearr_184327[(10)] = inst_184287__$1);

(statearr_184327[(11)] = inst_184288__$1);

return statearr_184327;
})();
if(cljs.core.truth_(inst_184288__$1)){
var statearr_184328_184356 = state_184314__$1;
(statearr_184328_184356[(1)] = (6));

} else {
var statearr_184329_184357 = state_184314__$1;
(statearr_184329_184357[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184315 === (6))){
var inst_184287 = (state_184314[(10)]);
var inst_184290 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184291 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_184292 = cljs.core.cons.call(null,cljs.core._EQ_,inst_184287);
var inst_184293 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_184291,inst_184292,null];
var inst_184294 = cljs.core.PersistentHashMap.fromArrays(inst_184290,inst_184293);
var inst_184295 = cljs.test.do_report.call(null,inst_184294);
var state_184314__$1 = state_184314;
var statearr_184330_184358 = state_184314__$1;
(statearr_184330_184358[(2)] = inst_184295);

(statearr_184330_184358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184315 === (7))){
var inst_184287 = (state_184314[(10)]);
var inst_184297 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184298 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_184299 = cljs.core.List.EMPTY;
var inst_184300 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_184301 = cljs.core.cons.call(null,inst_184300,inst_184287);
var inst_184302 = cljs.core._conj.call(null,inst_184299,inst_184301);
var inst_184303 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_184304 = cljs.core._conj.call(null,inst_184302,inst_184303);
var inst_184305 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_184298,inst_184304,null];
var inst_184306 = cljs.core.PersistentHashMap.fromArrays(inst_184297,inst_184305);
var inst_184307 = cljs.test.do_report.call(null,inst_184306);
var state_184314__$1 = state_184314;
var statearr_184331_184359 = state_184314__$1;
(statearr_184331_184359[(2)] = inst_184307);

(statearr_184331_184359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184315 === (8))){
var inst_184288 = (state_184314[(11)]);
var inst_184309 = (state_184314[(2)]);
var state_184314__$1 = (function (){var statearr_184332 = state_184314;
(statearr_184332[(12)] = inst_184309);

return statearr_184332;
})();
var statearr_184333_184360 = state_184314__$1;
(statearr_184333_184360[(2)] = inst_184288);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184314__$1);

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
});})(c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_184337 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_184337[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_184337[(1)] = (1));

return statearr_184337;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_184314){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_184314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e184338){if((e184338 instanceof Object)){
var ex__9301__auto__ = e184338;
var statearr_184339_184361 = state_184314;
(statearr_184339_184361[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e184338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__184362 = state_184314;
state_184314 = G__184362;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_184314){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_184314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_184340 = f__9319__auto__.call(null);
(statearr_184340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_184340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test184191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta184192","meta184192",-1227350101,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test184191.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test184191.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test184191";

drop_dot.core_test.t_drop_dot$core_test184191.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test184191");
});

drop_dot.core_test.__GT_t_drop_dot$core_test184191 = (function drop_dot$core_test$__GT_t_drop_dot$core_test184191(meta184192){
return (new drop_dot.core_test.t_drop_dot$core_test184191(meta184192));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test184191(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.async_test.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.async_test;},new cljs.core.Symbol("drop-dot.core-test","async-test","drop-dot.core-test/async-test",32248164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"async-test","async-test",1048222369,null),"test/drop_dot/core_test.cljs",20,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.async_test)?drop_dot.core_test.async_test.cljs$lang$test:null)]));
drop_dot.core_test.drop_fns = (function drop_dot$core_test$drop_fns(){
return cljs.test.test_var.call(null,drop_dot$core_test$drop_fns.cljs$lang$var);
});
drop_dot.core_test.drop_fns.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing drop-dot drop functions.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test184363 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test184363 = (function (meta184364){
this.meta184364 = meta184364;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test184363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_184365,meta184364__$1){
var self__ = this;
var _184365__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test184363(meta184364__$1));
});

drop_dot.core_test.t_drop_dot$core_test184363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_184365){
var self__ = this;
var _184365__$1 = this;
return self__.meta184364;
});

drop_dot.core_test.t_drop_dot$core_test184363.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test184363.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_184370){
var state_val_184371 = (state_184370[(1)]);
if((state_val_184371 === (1))){
var inst_184367 = cljs.core.async.chan.call(null);
var inst_184368 = done.call(null);
var state_184370__$1 = (function (){var statearr_184372 = state_184370;
(statearr_184372[(7)] = inst_184367);

return statearr_184372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_184370__$1,inst_184368);
} else {
return null;
}
});})(c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_184376 = [null,null,null,null,null,null,null,null];
(statearr_184376[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_184376[(1)] = (1));

return statearr_184376;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_184370){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_184370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e184377){if((e184377 instanceof Object)){
var ex__9301__auto__ = e184377;
var statearr_184378_184393 = state_184370;
(statearr_184378_184393[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e184377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__184394 = state_184370;
state_184370 = G__184394;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_184370){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_184370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_184379 = f__9319__auto__.call(null);
(statearr_184379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_184379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test184363.prototype.apply = (function (self__,args184366){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args184366)));
});

drop_dot.core_test.t_drop_dot$core_test184363.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_184383){
var state_val_184384 = (state_184383[(1)]);
if((state_val_184384 === (1))){
var inst_184380 = cljs.core.async.chan.call(null);
var inst_184381 = done.call(null);
var state_184383__$1 = (function (){var statearr_184385 = state_184383;
(statearr_184385[(7)] = inst_184380);

return statearr_184385;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_184383__$1,inst_184381);
} else {
return null;
}
});})(c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_184389 = [null,null,null,null,null,null,null,null];
(statearr_184389[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_184389[(1)] = (1));

return statearr_184389;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_184383){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_184383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e184390){if((e184390 instanceof Object)){
var ex__9301__auto__ = e184390;
var statearr_184391_184395 = state_184383;
(statearr_184391_184395[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e184390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__184396 = state_184383;
state_184383 = G__184396;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_184383){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_184383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_184392 = f__9319__auto__.call(null);
(statearr_184392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_184392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test184363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta184364","meta184364",-818939188,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test184363.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test184363.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test184363";

drop_dot.core_test.t_drop_dot$core_test184363.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test184363");
});

drop_dot.core_test.__GT_t_drop_dot$core_test184363 = (function drop_dot$core_test$__GT_t_drop_dot$core_test184363(meta184364){
return (new drop_dot.core_test.t_drop_dot$core_test184363(meta184364));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test184363(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.drop_fns.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.drop_fns;},new cljs.core.Symbol("drop-dot.core-test","drop-fns","drop-dot.core-test/drop-fns",-274950926,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"drop-fns","drop-fns",-351659585,null),"test/drop_dot/core_test.cljs",18,1,66,66,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.drop_fns)?drop_dot.core_test.drop_fns.cljs$lang$test:null)]));
drop_dot.core_test.core_tests = (function drop_dot$core_test$core_tests(){
return cljs.test.test_var.call(null,drop_dot$core_test$core_tests.cljs$lang$var);
});
drop_dot.core_test.core_tests.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test184397 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test184397 = (function (meta184398){
this.meta184398 = meta184398;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test184397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_184399,meta184398__$1){
var self__ = this;
var _184399__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test184397(meta184398__$1));
});

drop_dot.core_test.t_drop_dot$core_test184397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_184399){
var self__ = this;
var _184399__$1 = this;
return self__.meta184398;
});

drop_dot.core_test.t_drop_dot$core_test184397.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test184397.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_184442){
var state_val_184443 = (state_184442[(1)]);
if((state_val_184443 === (1))){
var state_184442__$1 = state_184442;
var statearr_184444_184523 = state_184442__$1;
(statearr_184444_184523[(2)] = null);

(statearr_184444_184523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184443 === (2))){
var inst_184439 = (state_184442[(2)]);
var inst_184440 = done.call(null);
var state_184442__$1 = (function (){var statearr_184445 = state_184442;
(statearr_184445[(7)] = inst_184439);

return statearr_184445;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_184442__$1,inst_184440);
} else {
if((state_val_184443 === (3))){
var inst_184401 = (state_184442[(2)]);
var inst_184402 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184403 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_184404 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_184403,inst_184401,null];
var inst_184405 = cljs.core.PersistentHashMap.fromArrays(inst_184402,inst_184404);
var inst_184406 = cljs.test.do_report.call(null,inst_184405);
var state_184442__$1 = state_184442;
var statearr_184446_184524 = state_184442__$1;
(statearr_184446_184524[(2)] = inst_184406);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184442__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184443 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_184442,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_184410 = cljs.core.List.EMPTY;
var inst_184411 = cljs.core._conj.call(null,inst_184410,true);
var inst_184412 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_184442__$1 = (function (){var statearr_184447 = state_184442;
(statearr_184447[(8)] = inst_184411);

return statearr_184447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_184442__$1,(5),inst_184412);
} else {
if((state_val_184443 === (5))){
var inst_184416 = (state_184442[(9)]);
var inst_184411 = (state_184442[(8)]);
var inst_184415 = (state_184442[(10)]);
var inst_184414 = (state_184442[(2)]);
var inst_184415__$1 = cljs.core._conj.call(null,inst_184411,inst_184414);
var inst_184416__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_184415__$1);
var state_184442__$1 = (function (){var statearr_184448 = state_184442;
(statearr_184448[(9)] = inst_184416__$1);

(statearr_184448[(10)] = inst_184415__$1);

return statearr_184448;
})();
if(cljs.core.truth_(inst_184416__$1)){
var statearr_184449_184525 = state_184442__$1;
(statearr_184449_184525[(1)] = (6));

} else {
var statearr_184450_184526 = state_184442__$1;
(statearr_184450_184526[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184443 === (6))){
var inst_184415 = (state_184442[(10)]);
var inst_184418 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184419 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_184420 = cljs.core.cons.call(null,cljs.core._EQ_,inst_184415);
var inst_184421 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_184419,inst_184420,null];
var inst_184422 = cljs.core.PersistentHashMap.fromArrays(inst_184418,inst_184421);
var inst_184423 = cljs.test.do_report.call(null,inst_184422);
var state_184442__$1 = state_184442;
var statearr_184451_184527 = state_184442__$1;
(statearr_184451_184527[(2)] = inst_184423);

(statearr_184451_184527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184443 === (7))){
var inst_184415 = (state_184442[(10)]);
var inst_184425 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184426 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_184427 = cljs.core.List.EMPTY;
var inst_184428 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_184429 = cljs.core.cons.call(null,inst_184428,inst_184415);
var inst_184430 = cljs.core._conj.call(null,inst_184427,inst_184429);
var inst_184431 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_184432 = cljs.core._conj.call(null,inst_184430,inst_184431);
var inst_184433 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_184426,inst_184432,null];
var inst_184434 = cljs.core.PersistentHashMap.fromArrays(inst_184425,inst_184433);
var inst_184435 = cljs.test.do_report.call(null,inst_184434);
var state_184442__$1 = state_184442;
var statearr_184452_184528 = state_184442__$1;
(statearr_184452_184528[(2)] = inst_184435);

(statearr_184452_184528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184443 === (8))){
var inst_184416 = (state_184442[(9)]);
var inst_184437 = (state_184442[(2)]);
var state_184442__$1 = (function (){var statearr_184453 = state_184442;
(statearr_184453[(11)] = inst_184437);

return statearr_184453;
})();
var statearr_184454_184529 = state_184442__$1;
(statearr_184454_184529[(2)] = inst_184416);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184442__$1);

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
});})(c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_184458 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_184458[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_184458[(1)] = (1));

return statearr_184458;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_184442){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_184442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e184459){if((e184459 instanceof Object)){
var ex__9301__auto__ = e184459;
var statearr_184460_184530 = state_184442;
(statearr_184460_184530[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e184459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__184531 = state_184442;
state_184442 = G__184531;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_184442){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_184442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_184461 = f__9319__auto__.call(null);
(statearr_184461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_184461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test184397.prototype.apply = (function (self__,args184400){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args184400)));
});

drop_dot.core_test.t_drop_dot$core_test184397.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_184503){
var state_val_184504 = (state_184503[(1)]);
if((state_val_184504 === (1))){
var state_184503__$1 = state_184503;
var statearr_184505_184532 = state_184503__$1;
(statearr_184505_184532[(2)] = null);

(statearr_184505_184532[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184504 === (2))){
var inst_184500 = (state_184503[(2)]);
var inst_184501 = done.call(null);
var state_184503__$1 = (function (){var statearr_184506 = state_184503;
(statearr_184506[(7)] = inst_184500);

return statearr_184506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_184503__$1,inst_184501);
} else {
if((state_val_184504 === (3))){
var inst_184462 = (state_184503[(2)]);
var inst_184463 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184464 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_184465 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_184464,inst_184462,null];
var inst_184466 = cljs.core.PersistentHashMap.fromArrays(inst_184463,inst_184465);
var inst_184467 = cljs.test.do_report.call(null,inst_184466);
var state_184503__$1 = state_184503;
var statearr_184507_184533 = state_184503__$1;
(statearr_184507_184533[(2)] = inst_184467);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184503__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184504 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_184503,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_184471 = cljs.core.List.EMPTY;
var inst_184472 = cljs.core._conj.call(null,inst_184471,true);
var inst_184473 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_184503__$1 = (function (){var statearr_184508 = state_184503;
(statearr_184508[(8)] = inst_184472);

return statearr_184508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_184503__$1,(5),inst_184473);
} else {
if((state_val_184504 === (5))){
var inst_184476 = (state_184503[(9)]);
var inst_184477 = (state_184503[(10)]);
var inst_184472 = (state_184503[(8)]);
var inst_184475 = (state_184503[(2)]);
var inst_184476__$1 = cljs.core._conj.call(null,inst_184472,inst_184475);
var inst_184477__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_184476__$1);
var state_184503__$1 = (function (){var statearr_184509 = state_184503;
(statearr_184509[(9)] = inst_184476__$1);

(statearr_184509[(10)] = inst_184477__$1);

return statearr_184509;
})();
if(cljs.core.truth_(inst_184477__$1)){
var statearr_184510_184534 = state_184503__$1;
(statearr_184510_184534[(1)] = (6));

} else {
var statearr_184511_184535 = state_184503__$1;
(statearr_184511_184535[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184504 === (6))){
var inst_184476 = (state_184503[(9)]);
var inst_184479 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184480 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_184481 = cljs.core.cons.call(null,cljs.core._EQ_,inst_184476);
var inst_184482 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_184480,inst_184481,null];
var inst_184483 = cljs.core.PersistentHashMap.fromArrays(inst_184479,inst_184482);
var inst_184484 = cljs.test.do_report.call(null,inst_184483);
var state_184503__$1 = state_184503;
var statearr_184512_184536 = state_184503__$1;
(statearr_184512_184536[(2)] = inst_184484);

(statearr_184512_184536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184504 === (7))){
var inst_184476 = (state_184503[(9)]);
var inst_184486 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_184487 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_184488 = cljs.core.List.EMPTY;
var inst_184489 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_184490 = cljs.core.cons.call(null,inst_184489,inst_184476);
var inst_184491 = cljs.core._conj.call(null,inst_184488,inst_184490);
var inst_184492 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_184493 = cljs.core._conj.call(null,inst_184491,inst_184492);
var inst_184494 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_184487,inst_184493,null];
var inst_184495 = cljs.core.PersistentHashMap.fromArrays(inst_184486,inst_184494);
var inst_184496 = cljs.test.do_report.call(null,inst_184495);
var state_184503__$1 = state_184503;
var statearr_184513_184537 = state_184503__$1;
(statearr_184513_184537[(2)] = inst_184496);

(statearr_184513_184537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184504 === (8))){
var inst_184477 = (state_184503[(10)]);
var inst_184498 = (state_184503[(2)]);
var state_184503__$1 = (function (){var statearr_184514 = state_184503;
(statearr_184514[(11)] = inst_184498);

return statearr_184514;
})();
var statearr_184515_184538 = state_184503__$1;
(statearr_184515_184538[(2)] = inst_184477);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184503__$1);

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
});})(c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_184519 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_184519[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_184519[(1)] = (1));

return statearr_184519;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_184503){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_184503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e184520){if((e184520 instanceof Object)){
var ex__9301__auto__ = e184520;
var statearr_184521_184539 = state_184503;
(statearr_184521_184539[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e184520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__184540 = state_184503;
state_184503 = G__184540;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_184503){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_184503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_184522 = f__9319__auto__.call(null);
(statearr_184522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_184522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test184397.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta184398","meta184398",-1796768506,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test184397.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test184397.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test184397";

drop_dot.core_test.t_drop_dot$core_test184397.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test184397");
});

drop_dot.core_test.__GT_t_drop_dot$core_test184397 = (function drop_dot$core_test$__GT_t_drop_dot$core_test184397(meta184398){
return (new drop_dot.core_test.t_drop_dot$core_test184397(meta184398));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test184397(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"test/drop_dot/core_test.cljs",20,1,86,86,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map