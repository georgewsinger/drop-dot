// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core_test');
goog.require('cljs.core');
goog.require('drop_dot.core');
goog.require('cljs.test');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
drop_dot.core_test.line__GT_chan_linkable_path_TEST = (function drop_dot$core_test$line__GT_chan_linkable_path_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$line__GT_chan_linkable_path_TEST.cljs$lang$var);
});
drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test41920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test41920 = (function (meta41921){
this.meta41921 = meta41921;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test41920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41922,meta41921__$1){
var self__ = this;
var _41922__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test41920(meta41921__$1));
});

drop_dot.core_test.t_drop_dot$core_test41920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41922){
var self__ = this;
var _41922__$1 = this;
return self__.meta41921;
});

drop_dot.core_test.t_drop_dot$core_test41920.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test41920.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9223__auto__ = self____$1;
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___9223__auto__,self____$1){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___9223__auto__,self____$1){
return (function (state_42044){
var state_val_42045 = (state_42044[(1)]);
if((state_val_42045 === (7))){
var inst_41939 = (state_42044[(7)]);
var inst_41949 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41950 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_41951 = cljs.core.List.EMPTY;
var inst_41952 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41953 = cljs.core.cons.call(null,inst_41952,inst_41939);
var inst_41954 = cljs.core._conj.call(null,inst_41951,inst_41953);
var inst_41955 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41956 = cljs.core._conj.call(null,inst_41954,inst_41955);
var inst_41957 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41950,inst_41956,null];
var inst_41958 = cljs.core.PersistentHashMap.fromArrays(inst_41949,inst_41957);
var inst_41959 = cljs.test.do_report.call(null,inst_41958);
var state_42044__$1 = state_42044;
var statearr_42046_42250 = state_42044__$1;
(statearr_42046_42250[(2)] = inst_41959);

(statearr_42046_42250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (20))){
var inst_42017 = (state_42044[(8)]);
var inst_42020 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42021 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_42022 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_42017);
var inst_42023 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42021,inst_42022,null];
var inst_42024 = cljs.core.PersistentHashMap.fromArrays(inst_42020,inst_42023);
var inst_42025 = cljs.test.do_report.call(null,inst_42024);
var state_42044__$1 = state_42044;
var statearr_42047_42251 = state_42044__$1;
(statearr_42047_42251[(2)] = inst_42025);

(statearr_42047_42251[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (1))){
var inst_41924 = cljs.core.async.chan.call(null,(1));
var state_42044__$1 = (function (){var statearr_42048 = state_42044;
(statearr_42048[(9)] = inst_41924);

return statearr_42048;
})();
var statearr_42049_42252 = state_42044__$1;
(statearr_42049_42252[(2)] = null);

(statearr_42049_42252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42044,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_41934 = cljs.core.List.EMPTY;
var inst_41935 = cljs.core._conj.call(null,inst_41934,"~/.TDD-this-file-in-dot-drop-dot");
var inst_41936 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_42044__$1 = (function (){var statearr_42050 = state_42044;
(statearr_42050[(10)] = inst_41935);

return statearr_42050;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42044__$1,(5),inst_41936);
} else {
if((state_val_42045 === (15))){
var inst_41979 = (state_42044[(11)]);
var inst_42000 = (state_42044[(2)]);
var state_42044__$1 = (function (){var statearr_42051 = state_42044;
(statearr_42051[(12)] = inst_42000);

return statearr_42051;
})();
var statearr_42052_42253 = state_42044__$1;
(statearr_42052_42253[(2)] = inst_41979);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42044__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (21))){
var inst_42017 = (state_42044[(8)]);
var inst_42027 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42028 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_42029 = cljs.core.List.EMPTY;
var inst_42030 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_42031 = cljs.core.cons.call(null,inst_42030,inst_42017);
var inst_42032 = cljs.core._conj.call(null,inst_42029,inst_42031);
var inst_42033 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42034 = cljs.core._conj.call(null,inst_42032,inst_42033);
var inst_42035 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42028,inst_42034,null];
var inst_42036 = cljs.core.PersistentHashMap.fromArrays(inst_42027,inst_42035);
var inst_42037 = cljs.test.do_report.call(null,inst_42036);
var state_42044__$1 = state_42044;
var statearr_42053_42254 = state_42044__$1;
(statearr_42053_42254[(2)] = inst_42037);

(statearr_42053_42254[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (13))){
var inst_41978 = (state_42044[(13)]);
var inst_41981 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41982 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_41983 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_41978);
var inst_41984 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41982,inst_41983,null];
var inst_41985 = cljs.core.PersistentHashMap.fromArrays(inst_41981,inst_41984);
var inst_41986 = cljs.test.do_report.call(null,inst_41985);
var state_42044__$1 = state_42044;
var statearr_42054_42255 = state_42044__$1;
(statearr_42054_42255[(2)] = inst_41986);

(statearr_42054_42255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (22))){
var inst_42018 = (state_42044[(14)]);
var inst_42039 = (state_42044[(2)]);
var state_42044__$1 = (function (){var statearr_42055 = state_42044;
(statearr_42055[(15)] = inst_42039);

return statearr_42055;
})();
var statearr_42056_42256 = state_42044__$1;
(statearr_42056_42256[(2)] = inst_42018);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42044__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (6))){
var inst_41939 = (state_42044[(7)]);
var inst_41942 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41943 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_41944 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41939);
var inst_41945 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41943,inst_41944,null];
var inst_41946 = cljs.core.PersistentHashMap.fromArrays(inst_41942,inst_41945);
var inst_41947 = cljs.test.do_report.call(null,inst_41946);
var state_42044__$1 = state_42044;
var statearr_42057_42257 = state_42044__$1;
(statearr_42057_42257[(2)] = inst_41947);

(statearr_42057_42257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (17))){
var inst_42003 = (state_42044[(2)]);
var inst_42004 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42005 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_42006 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42005,inst_42003,null];
var inst_42007 = cljs.core.PersistentHashMap.fromArrays(inst_42004,inst_42006);
var inst_42008 = cljs.test.do_report.call(null,inst_42007);
var state_42044__$1 = state_42044;
var statearr_42058_42258 = state_42044__$1;
(statearr_42058_42258[(2)] = inst_42008);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42044__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (3))){
var inst_41925 = (state_42044[(2)]);
var inst_41926 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41927 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_41928 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41927,inst_41925,null];
var inst_41929 = cljs.core.PersistentHashMap.fromArrays(inst_41926,inst_41928);
var inst_41930 = cljs.test.do_report.call(null,inst_41929);
var state_42044__$1 = state_42044;
var statearr_42059_42259 = state_42044__$1;
(statearr_42059_42259[(2)] = inst_41930);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42044__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (12))){
var inst_41974 = (state_42044[(16)]);
var inst_41979 = (state_42044[(11)]);
var inst_41978 = (state_42044[(13)]);
var inst_41977 = (state_42044[(2)]);
var inst_41978__$1 = cljs.core._conj.call(null,inst_41974,inst_41977);
var inst_41979__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_41978__$1);
var state_42044__$1 = (function (){var statearr_42060 = state_42044;
(statearr_42060[(11)] = inst_41979__$1);

(statearr_42060[(13)] = inst_41978__$1);

return statearr_42060;
})();
if(cljs.core.truth_(inst_41979__$1)){
var statearr_42061_42260 = state_42044__$1;
(statearr_42061_42260[(1)] = (13));

} else {
var statearr_42062_42261 = state_42044__$1;
(statearr_42062_42261[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (2))){
var inst_41963 = (state_42044[(2)]);
var state_42044__$1 = (function (){var statearr_42063 = state_42044;
(statearr_42063[(17)] = inst_41963);

return statearr_42063;
})();
var statearr_42064_42262 = state_42044__$1;
(statearr_42064_42262[(2)] = null);

(statearr_42064_42262[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (19))){
var inst_42013 = (state_42044[(18)]);
var inst_42018 = (state_42044[(14)]);
var inst_42017 = (state_42044[(8)]);
var inst_42016 = (state_42044[(2)]);
var inst_42017__$1 = cljs.core._conj.call(null,inst_42013,inst_42016);
var inst_42018__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_42017__$1);
var state_42044__$1 = (function (){var statearr_42065 = state_42044;
(statearr_42065[(14)] = inst_42018__$1);

(statearr_42065[(8)] = inst_42017__$1);

return statearr_42065;
})();
if(cljs.core.truth_(inst_42018__$1)){
var statearr_42066_42263 = state_42044__$1;
(statearr_42066_42263[(1)] = (20));

} else {
var statearr_42067_42264 = state_42044__$1;
(statearr_42067_42264[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42044,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_41973 = cljs.core.List.EMPTY;
var inst_41974 = cljs.core._conj.call(null,inst_41973,"ERROR: ");
var inst_41975 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_42044__$1 = (function (){var statearr_42068 = state_42044;
(statearr_42068[(16)] = inst_41974);

return statearr_42068;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42044__$1,(12),inst_41975);
} else {
if((state_val_42045 === (9))){
var inst_42002 = (state_42044[(2)]);
var state_42044__$1 = (function (){var statearr_42069 = state_42044;
(statearr_42069[(19)] = inst_42002);

return statearr_42069;
})();
var statearr_42070_42265 = state_42044__$1;
(statearr_42070_42265[(2)] = null);

(statearr_42070_42265[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (5))){
var inst_41935 = (state_42044[(10)]);
var inst_41940 = (state_42044[(20)]);
var inst_41939 = (state_42044[(7)]);
var inst_41938 = (state_42044[(2)]);
var inst_41939__$1 = cljs.core._conj.call(null,inst_41935,inst_41938);
var inst_41940__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41939__$1);
var state_42044__$1 = (function (){var statearr_42071 = state_42044;
(statearr_42071[(20)] = inst_41940__$1);

(statearr_42071[(7)] = inst_41939__$1);

return statearr_42071;
})();
if(cljs.core.truth_(inst_41940__$1)){
var statearr_42072_42266 = state_42044__$1;
(statearr_42072_42266[(1)] = (6));

} else {
var statearr_42073_42267 = state_42044__$1;
(statearr_42073_42267[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (14))){
var inst_41978 = (state_42044[(13)]);
var inst_41988 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41989 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_41990 = cljs.core.List.EMPTY;
var inst_41991 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_41992 = cljs.core.cons.call(null,inst_41991,inst_41978);
var inst_41993 = cljs.core._conj.call(null,inst_41990,inst_41992);
var inst_41994 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41995 = cljs.core._conj.call(null,inst_41993,inst_41994);
var inst_41996 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41989,inst_41995,null];
var inst_41997 = cljs.core.PersistentHashMap.fromArrays(inst_41988,inst_41996);
var inst_41998 = cljs.test.do_report.call(null,inst_41997);
var state_42044__$1 = state_42044;
var statearr_42074_42268 = state_42044__$1;
(statearr_42074_42268[(2)] = inst_41998);

(statearr_42074_42268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (16))){
var inst_42041 = (state_42044[(2)]);
var inst_42042 = done.call(null);
var state_42044__$1 = (function (){var statearr_42075 = state_42044;
(statearr_42075[(21)] = inst_42041);

return statearr_42075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42044__$1,inst_42042);
} else {
if((state_val_42045 === (10))){
var inst_41964 = (state_42044[(2)]);
var inst_41965 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41966 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_41967 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41966,inst_41964,null];
var inst_41968 = cljs.core.PersistentHashMap.fromArrays(inst_41965,inst_41967);
var inst_41969 = cljs.test.do_report.call(null,inst_41968);
var state_42044__$1 = state_42044;
var statearr_42076_42269 = state_42044__$1;
(statearr_42076_42269[(2)] = inst_41969);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42044__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42044,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_42012 = cljs.core.List.EMPTY;
var inst_42013 = cljs.core._conj.call(null,inst_42012,"ERROR: ");
var inst_42014 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_42044__$1 = (function (){var statearr_42077 = state_42044;
(statearr_42077[(18)] = inst_42013);

return statearr_42077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42044__$1,(19),inst_42014);
} else {
if((state_val_42045 === (8))){
var inst_41940 = (state_42044[(20)]);
var inst_41961 = (state_42044[(2)]);
var state_42044__$1 = (function (){var statearr_42078 = state_42044;
(statearr_42078[(22)] = inst_41961);

return statearr_42078;
})();
var statearr_42079_42270 = state_42044__$1;
(statearr_42079_42270[(2)] = inst_41940);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42044__$1);

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
});})(c__8308__auto__,___9223__auto__,self____$1))
;
return ((function (switch__8287__auto__,c__8308__auto__,___9223__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__8288__auto__ = null;
var drop_dot$core_test$state_machine__8288__auto____0 = (function (){
var statearr_42083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42083[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_42083[(1)] = (1));

return statearr_42083;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_42044){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_42044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e42084){if((e42084 instanceof Object)){
var ex__8291__auto__ = e42084;
var statearr_42085_42271 = state_42044;
(statearr_42085_42271[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42272 = state_42044;
state_42044 = G__42272;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_42044){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_42044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___9223__auto__,self____$1))
})();
var state__8310__auto__ = (function (){var statearr_42086 = f__8309__auto__.call(null);
(statearr_42086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_42086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___9223__auto__,self____$1))
);

return c__8308__auto__;
});

drop_dot.core_test.t_drop_dot$core_test41920.prototype.apply = (function (self__,args41923){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args41923)));
});

drop_dot.core_test.t_drop_dot$core_test41920.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9223__auto__ = this;
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___9223__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___9223__auto__){
return (function (state_42207){
var state_val_42208 = (state_42207[(1)]);
if((state_val_42208 === (7))){
var inst_42102 = (state_42207[(7)]);
var inst_42112 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42113 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_42114 = cljs.core.List.EMPTY;
var inst_42115 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42116 = cljs.core.cons.call(null,inst_42115,inst_42102);
var inst_42117 = cljs.core._conj.call(null,inst_42114,inst_42116);
var inst_42118 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42119 = cljs.core._conj.call(null,inst_42117,inst_42118);
var inst_42120 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42113,inst_42119,null];
var inst_42121 = cljs.core.PersistentHashMap.fromArrays(inst_42112,inst_42120);
var inst_42122 = cljs.test.do_report.call(null,inst_42121);
var state_42207__$1 = state_42207;
var statearr_42209_42273 = state_42207__$1;
(statearr_42209_42273[(2)] = inst_42122);

(statearr_42209_42273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (20))){
var inst_42180 = (state_42207[(8)]);
var inst_42183 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42184 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_42185 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_42180);
var inst_42186 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42184,inst_42185,null];
var inst_42187 = cljs.core.PersistentHashMap.fromArrays(inst_42183,inst_42186);
var inst_42188 = cljs.test.do_report.call(null,inst_42187);
var state_42207__$1 = state_42207;
var statearr_42210_42274 = state_42207__$1;
(statearr_42210_42274[(2)] = inst_42188);

(statearr_42210_42274[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (1))){
var inst_42087 = cljs.core.async.chan.call(null,(1));
var state_42207__$1 = (function (){var statearr_42211 = state_42207;
(statearr_42211[(9)] = inst_42087);

return statearr_42211;
})();
var statearr_42212_42275 = state_42207__$1;
(statearr_42212_42275[(2)] = null);

(statearr_42212_42275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42207,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_42097 = cljs.core.List.EMPTY;
var inst_42098 = cljs.core._conj.call(null,inst_42097,"~/.TDD-this-file-in-dot-drop-dot");
var inst_42099 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_42207__$1 = (function (){var statearr_42213 = state_42207;
(statearr_42213[(10)] = inst_42098);

return statearr_42213;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42207__$1,(5),inst_42099);
} else {
if((state_val_42208 === (15))){
var inst_42142 = (state_42207[(11)]);
var inst_42163 = (state_42207[(2)]);
var state_42207__$1 = (function (){var statearr_42214 = state_42207;
(statearr_42214[(12)] = inst_42163);

return statearr_42214;
})();
var statearr_42215_42276 = state_42207__$1;
(statearr_42215_42276[(2)] = inst_42142);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42207__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (21))){
var inst_42180 = (state_42207[(8)]);
var inst_42190 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42191 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_42192 = cljs.core.List.EMPTY;
var inst_42193 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_42194 = cljs.core.cons.call(null,inst_42193,inst_42180);
var inst_42195 = cljs.core._conj.call(null,inst_42192,inst_42194);
var inst_42196 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42197 = cljs.core._conj.call(null,inst_42195,inst_42196);
var inst_42198 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42191,inst_42197,null];
var inst_42199 = cljs.core.PersistentHashMap.fromArrays(inst_42190,inst_42198);
var inst_42200 = cljs.test.do_report.call(null,inst_42199);
var state_42207__$1 = state_42207;
var statearr_42216_42277 = state_42207__$1;
(statearr_42216_42277[(2)] = inst_42200);

(statearr_42216_42277[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (13))){
var inst_42141 = (state_42207[(13)]);
var inst_42144 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42145 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_42146 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_42141);
var inst_42147 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42145,inst_42146,null];
var inst_42148 = cljs.core.PersistentHashMap.fromArrays(inst_42144,inst_42147);
var inst_42149 = cljs.test.do_report.call(null,inst_42148);
var state_42207__$1 = state_42207;
var statearr_42217_42278 = state_42207__$1;
(statearr_42217_42278[(2)] = inst_42149);

(statearr_42217_42278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (22))){
var inst_42181 = (state_42207[(14)]);
var inst_42202 = (state_42207[(2)]);
var state_42207__$1 = (function (){var statearr_42218 = state_42207;
(statearr_42218[(15)] = inst_42202);

return statearr_42218;
})();
var statearr_42219_42279 = state_42207__$1;
(statearr_42219_42279[(2)] = inst_42181);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42207__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (6))){
var inst_42102 = (state_42207[(7)]);
var inst_42105 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42106 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_42107 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42102);
var inst_42108 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42106,inst_42107,null];
var inst_42109 = cljs.core.PersistentHashMap.fromArrays(inst_42105,inst_42108);
var inst_42110 = cljs.test.do_report.call(null,inst_42109);
var state_42207__$1 = state_42207;
var statearr_42220_42280 = state_42207__$1;
(statearr_42220_42280[(2)] = inst_42110);

(statearr_42220_42280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (17))){
var inst_42166 = (state_42207[(2)]);
var inst_42167 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42168 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_42169 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42168,inst_42166,null];
var inst_42170 = cljs.core.PersistentHashMap.fromArrays(inst_42167,inst_42169);
var inst_42171 = cljs.test.do_report.call(null,inst_42170);
var state_42207__$1 = state_42207;
var statearr_42221_42281 = state_42207__$1;
(statearr_42221_42281[(2)] = inst_42171);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42207__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (3))){
var inst_42088 = (state_42207[(2)]);
var inst_42089 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42090 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_42091 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42090,inst_42088,null];
var inst_42092 = cljs.core.PersistentHashMap.fromArrays(inst_42089,inst_42091);
var inst_42093 = cljs.test.do_report.call(null,inst_42092);
var state_42207__$1 = state_42207;
var statearr_42222_42282 = state_42207__$1;
(statearr_42222_42282[(2)] = inst_42093);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42207__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (12))){
var inst_42137 = (state_42207[(16)]);
var inst_42142 = (state_42207[(11)]);
var inst_42141 = (state_42207[(13)]);
var inst_42140 = (state_42207[(2)]);
var inst_42141__$1 = cljs.core._conj.call(null,inst_42137,inst_42140);
var inst_42142__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_42141__$1);
var state_42207__$1 = (function (){var statearr_42223 = state_42207;
(statearr_42223[(11)] = inst_42142__$1);

(statearr_42223[(13)] = inst_42141__$1);

return statearr_42223;
})();
if(cljs.core.truth_(inst_42142__$1)){
var statearr_42224_42283 = state_42207__$1;
(statearr_42224_42283[(1)] = (13));

} else {
var statearr_42225_42284 = state_42207__$1;
(statearr_42225_42284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (2))){
var inst_42126 = (state_42207[(2)]);
var state_42207__$1 = (function (){var statearr_42226 = state_42207;
(statearr_42226[(17)] = inst_42126);

return statearr_42226;
})();
var statearr_42227_42285 = state_42207__$1;
(statearr_42227_42285[(2)] = null);

(statearr_42227_42285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (19))){
var inst_42180 = (state_42207[(8)]);
var inst_42176 = (state_42207[(18)]);
var inst_42181 = (state_42207[(14)]);
var inst_42179 = (state_42207[(2)]);
var inst_42180__$1 = cljs.core._conj.call(null,inst_42176,inst_42179);
var inst_42181__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_42180__$1);
var state_42207__$1 = (function (){var statearr_42228 = state_42207;
(statearr_42228[(8)] = inst_42180__$1);

(statearr_42228[(14)] = inst_42181__$1);

return statearr_42228;
})();
if(cljs.core.truth_(inst_42181__$1)){
var statearr_42229_42286 = state_42207__$1;
(statearr_42229_42286[(1)] = (20));

} else {
var statearr_42230_42287 = state_42207__$1;
(statearr_42230_42287[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42207,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_42136 = cljs.core.List.EMPTY;
var inst_42137 = cljs.core._conj.call(null,inst_42136,"ERROR: ");
var inst_42138 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_42207__$1 = (function (){var statearr_42231 = state_42207;
(statearr_42231[(16)] = inst_42137);

return statearr_42231;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42207__$1,(12),inst_42138);
} else {
if((state_val_42208 === (9))){
var inst_42165 = (state_42207[(2)]);
var state_42207__$1 = (function (){var statearr_42232 = state_42207;
(statearr_42232[(19)] = inst_42165);

return statearr_42232;
})();
var statearr_42233_42288 = state_42207__$1;
(statearr_42233_42288[(2)] = null);

(statearr_42233_42288[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (5))){
var inst_42103 = (state_42207[(20)]);
var inst_42098 = (state_42207[(10)]);
var inst_42102 = (state_42207[(7)]);
var inst_42101 = (state_42207[(2)]);
var inst_42102__$1 = cljs.core._conj.call(null,inst_42098,inst_42101);
var inst_42103__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42102__$1);
var state_42207__$1 = (function (){var statearr_42234 = state_42207;
(statearr_42234[(20)] = inst_42103__$1);

(statearr_42234[(7)] = inst_42102__$1);

return statearr_42234;
})();
if(cljs.core.truth_(inst_42103__$1)){
var statearr_42235_42289 = state_42207__$1;
(statearr_42235_42289[(1)] = (6));

} else {
var statearr_42236_42290 = state_42207__$1;
(statearr_42236_42290[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (14))){
var inst_42141 = (state_42207[(13)]);
var inst_42151 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42152 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_42153 = cljs.core.List.EMPTY;
var inst_42154 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_42155 = cljs.core.cons.call(null,inst_42154,inst_42141);
var inst_42156 = cljs.core._conj.call(null,inst_42153,inst_42155);
var inst_42157 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42158 = cljs.core._conj.call(null,inst_42156,inst_42157);
var inst_42159 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42152,inst_42158,null];
var inst_42160 = cljs.core.PersistentHashMap.fromArrays(inst_42151,inst_42159);
var inst_42161 = cljs.test.do_report.call(null,inst_42160);
var state_42207__$1 = state_42207;
var statearr_42237_42291 = state_42207__$1;
(statearr_42237_42291[(2)] = inst_42161);

(statearr_42237_42291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (16))){
var inst_42204 = (state_42207[(2)]);
var inst_42205 = done.call(null);
var state_42207__$1 = (function (){var statearr_42238 = state_42207;
(statearr_42238[(21)] = inst_42204);

return statearr_42238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42207__$1,inst_42205);
} else {
if((state_val_42208 === (10))){
var inst_42127 = (state_42207[(2)]);
var inst_42128 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42129 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_42130 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42129,inst_42127,null];
var inst_42131 = cljs.core.PersistentHashMap.fromArrays(inst_42128,inst_42130);
var inst_42132 = cljs.test.do_report.call(null,inst_42131);
var state_42207__$1 = state_42207;
var statearr_42239_42292 = state_42207__$1;
(statearr_42239_42292[(2)] = inst_42132);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42207__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42208 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42207,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_42175 = cljs.core.List.EMPTY;
var inst_42176 = cljs.core._conj.call(null,inst_42175,"ERROR: ");
var inst_42177 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_42207__$1 = (function (){var statearr_42240 = state_42207;
(statearr_42240[(18)] = inst_42176);

return statearr_42240;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42207__$1,(19),inst_42177);
} else {
if((state_val_42208 === (8))){
var inst_42103 = (state_42207[(20)]);
var inst_42124 = (state_42207[(2)]);
var state_42207__$1 = (function (){var statearr_42241 = state_42207;
(statearr_42241[(22)] = inst_42124);

return statearr_42241;
})();
var statearr_42242_42293 = state_42207__$1;
(statearr_42242_42293[(2)] = inst_42103);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42207__$1);

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
});})(c__8308__auto__,___9223__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__,___9223__auto__){
return (function() {
var drop_dot$core_test$state_machine__8288__auto__ = null;
var drop_dot$core_test$state_machine__8288__auto____0 = (function (){
var statearr_42246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42246[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_42246[(1)] = (1));

return statearr_42246;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_42207){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_42207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e42247){if((e42247 instanceof Object)){
var ex__8291__auto__ = e42247;
var statearr_42248_42294 = state_42207;
(statearr_42248_42294[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42295 = state_42207;
state_42207 = G__42295;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_42207){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_42207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___9223__auto__))
})();
var state__8310__auto__ = (function (){var statearr_42249 = f__8309__auto__.call(null);
(statearr_42249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_42249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___9223__auto__))
);

return c__8308__auto__;
});

drop_dot.core_test.t_drop_dot$core_test41920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41921","meta41921",1214830842,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test41920.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test41920.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test41920";

drop_dot.core_test.t_drop_dot$core_test41920.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test41920");
});

drop_dot.core_test.__GT_t_drop_dot$core_test41920 = (function drop_dot$core_test$__GT_t_drop_dot$core_test41920(meta41921){
return (new drop_dot.core_test.t_drop_dot$core_test41920(meta41921));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test41920(null));
});

drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.line__GT_chan_linkable_path_TEST;},new cljs.core.Symbol("drop-dot.core-test","line->chan-linkable-path-TEST","drop-dot.core-test/line->chan-linkable-path-TEST",-1336484385,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"line->chan-linkable-path-TEST","line->chan-linkable-path-TEST",-1260168422,null),"test/drop_dot/core_test.cljs",39,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.line__GT_chan_linkable_path_TEST)?drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test:null)]));
drop_dot.core_test.async_test = (function drop_dot$core_test$async_test(){
return cljs.test.test_var.call(null,drop_dot$core_test$async_test.cljs$lang$var);
});
drop_dot.core_test.async_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing some core.async functionality.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test42296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test42296 = (function (meta42297){
this.meta42297 = meta42297;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test42296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42298,meta42297__$1){
var self__ = this;
var _42298__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test42296(meta42297__$1));
});

drop_dot.core_test.t_drop_dot$core_test42296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42298){
var self__ = this;
var _42298__$1 = this;
return self__.meta42297;
});

drop_dot.core_test.t_drop_dot$core_test42296.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test42296.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9223__auto__ = self____$1;
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___9223__auto__,self____$1){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___9223__auto__,self____$1){
return (function (state_42346){
var state_val_42347 = (state_42346[(1)]);
if((state_val_42347 === (1))){
var state_42346__$1 = state_42346;
var statearr_42348_42446 = state_42346__$1;
(statearr_42348_42446[(2)] = null);

(statearr_42348_42446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42347 === (2))){
var inst_42343 = (state_42346[(2)]);
var inst_42344 = done.call(null);
var state_42346__$1 = (function (){var statearr_42349 = state_42346;
(statearr_42349[(7)] = inst_42343);

return statearr_42349;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42346__$1,inst_42344);
} else {
if((state_val_42347 === (3))){
var inst_42300 = (state_42346[(2)]);
var inst_42301 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42302 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_42303 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42302,inst_42300,null];
var inst_42304 = cljs.core.PersistentHashMap.fromArrays(inst_42301,inst_42303);
var inst_42305 = cljs.test.do_report.call(null,inst_42304);
var state_42346__$1 = state_42346;
var statearr_42350_42447 = state_42346__$1;
(statearr_42350_42447[(2)] = inst_42305);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42346__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42347 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42346,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_42309 = cljs.core.List.EMPTY;
var inst_42310 = cljs.core._conj.call(null,inst_42309,"val1");
var inst_42314 = cljs.core.async.chan.call(null,(1));
var inst_42315 = (function (){var c__8308__auto____$1 = inst_42314;
return ((function (c__8308__auto____$1,_,inst_42309,inst_42310,inst_42314,state_val_42347,c__8308__auto__,___9223__auto__,self____$1){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto____$1,_,inst_42309,inst_42310,inst_42314,state_val_42347,c__8308__auto__,___9223__auto__,self____$1){
return (function (state_42312){
var state_val_42313 = (state_42312[(1)]);
if((state_val_42313 === (1))){
var state_42312__$1 = state_42312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42312__$1,"val1");
} else {
return null;
}
});})(c__8308__auto____$1,_,inst_42309,inst_42310,inst_42314,state_val_42347,c__8308__auto__,___9223__auto__,self____$1))
;
return ((function (switch__8287__auto__,c__8308__auto____$1,_,inst_42309,inst_42310,inst_42314,state_val_42347,c__8308__auto__,___9223__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__8288__auto__ = null;
var drop_dot$core_test$state_machine__8288__auto____0 = (function (){
var statearr_42354 = [null,null,null,null,null,null,null];
(statearr_42354[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_42354[(1)] = (1));

return statearr_42354;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_42312){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_42312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e42355){if((e42355 instanceof Object)){
var ex__8291__auto__ = e42355;
var statearr_42356_42448 = state_42312;
(statearr_42356_42448[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42449 = state_42312;
state_42312 = G__42449;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_42312){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_42312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto____$1,_,inst_42309,inst_42310,inst_42314,state_val_42347,c__8308__auto__,___9223__auto__,self____$1))
})();
var state__8310__auto__ = (function (){var statearr_42357 = f__8309__auto__.call(null);
(statearr_42357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto____$1);

return statearr_42357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});
;})(c__8308__auto____$1,_,inst_42309,inst_42310,inst_42314,state_val_42347,c__8308__auto__,___9223__auto__,self____$1))
})();
var inst_42316 = cljs.core.async.impl.dispatch.run.call(null,inst_42315);
var state_42346__$1 = (function (){var statearr_42358 = state_42346;
(statearr_42358[(8)] = inst_42310);

(statearr_42358[(9)] = inst_42316);

return statearr_42358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42346__$1,(5),inst_42314);
} else {
if((state_val_42347 === (5))){
var inst_42320 = (state_42346[(10)]);
var inst_42319 = (state_42346[(11)]);
var inst_42310 = (state_42346[(8)]);
var inst_42318 = (state_42346[(2)]);
var inst_42319__$1 = cljs.core._conj.call(null,inst_42310,inst_42318);
var inst_42320__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42319__$1);
var state_42346__$1 = (function (){var statearr_42359 = state_42346;
(statearr_42359[(10)] = inst_42320__$1);

(statearr_42359[(11)] = inst_42319__$1);

return statearr_42359;
})();
if(cljs.core.truth_(inst_42320__$1)){
var statearr_42360_42450 = state_42346__$1;
(statearr_42360_42450[(1)] = (6));

} else {
var statearr_42361_42451 = state_42346__$1;
(statearr_42361_42451[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42347 === (6))){
var inst_42319 = (state_42346[(11)]);
var inst_42322 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42323 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_42324 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42319);
var inst_42325 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42323,inst_42324,null];
var inst_42326 = cljs.core.PersistentHashMap.fromArrays(inst_42322,inst_42325);
var inst_42327 = cljs.test.do_report.call(null,inst_42326);
var state_42346__$1 = state_42346;
var statearr_42362_42452 = state_42346__$1;
(statearr_42362_42452[(2)] = inst_42327);

(statearr_42362_42452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42347 === (7))){
var inst_42319 = (state_42346[(11)]);
var inst_42329 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42330 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_42331 = cljs.core.List.EMPTY;
var inst_42332 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42333 = cljs.core.cons.call(null,inst_42332,inst_42319);
var inst_42334 = cljs.core._conj.call(null,inst_42331,inst_42333);
var inst_42335 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42336 = cljs.core._conj.call(null,inst_42334,inst_42335);
var inst_42337 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42330,inst_42336,null];
var inst_42338 = cljs.core.PersistentHashMap.fromArrays(inst_42329,inst_42337);
var inst_42339 = cljs.test.do_report.call(null,inst_42338);
var state_42346__$1 = state_42346;
var statearr_42363_42453 = state_42346__$1;
(statearr_42363_42453[(2)] = inst_42339);

(statearr_42363_42453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42347 === (8))){
var inst_42320 = (state_42346[(10)]);
var inst_42341 = (state_42346[(2)]);
var state_42346__$1 = (function (){var statearr_42364 = state_42346;
(statearr_42364[(12)] = inst_42341);

return statearr_42364;
})();
var statearr_42365_42454 = state_42346__$1;
(statearr_42365_42454[(2)] = inst_42320);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42346__$1);

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
});})(c__8308__auto__,___9223__auto__,self____$1))
;
return ((function (switch__8287__auto__,c__8308__auto__,___9223__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__8288__auto__ = null;
var drop_dot$core_test$state_machine__8288__auto____0 = (function (){
var statearr_42369 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42369[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_42369[(1)] = (1));

return statearr_42369;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_42346){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_42346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e42370){if((e42370 instanceof Object)){
var ex__8291__auto__ = e42370;
var statearr_42371_42455 = state_42346;
(statearr_42371_42455[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42456 = state_42346;
state_42346 = G__42456;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_42346){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_42346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___9223__auto__,self____$1))
})();
var state__8310__auto__ = (function (){var statearr_42372 = f__8309__auto__.call(null);
(statearr_42372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_42372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___9223__auto__,self____$1))
);

return c__8308__auto__;
});

drop_dot.core_test.t_drop_dot$core_test42296.prototype.apply = (function (self__,args42299){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args42299)));
});

drop_dot.core_test.t_drop_dot$core_test42296.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9223__auto__ = this;
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___9223__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___9223__auto__){
return (function (state_42419){
var state_val_42420 = (state_42419[(1)]);
if((state_val_42420 === (1))){
var state_42419__$1 = state_42419;
var statearr_42421_42457 = state_42419__$1;
(statearr_42421_42457[(2)] = null);

(statearr_42421_42457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42420 === (2))){
var inst_42416 = (state_42419[(2)]);
var inst_42417 = done.call(null);
var state_42419__$1 = (function (){var statearr_42422 = state_42419;
(statearr_42422[(7)] = inst_42416);

return statearr_42422;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42419__$1,inst_42417);
} else {
if((state_val_42420 === (3))){
var inst_42373 = (state_42419[(2)]);
var inst_42374 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42375 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_42376 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42375,inst_42373,null];
var inst_42377 = cljs.core.PersistentHashMap.fromArrays(inst_42374,inst_42376);
var inst_42378 = cljs.test.do_report.call(null,inst_42377);
var state_42419__$1 = state_42419;
var statearr_42423_42458 = state_42419__$1;
(statearr_42423_42458[(2)] = inst_42378);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42419__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42420 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42419,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_42382 = cljs.core.List.EMPTY;
var inst_42383 = cljs.core._conj.call(null,inst_42382,"val1");
var inst_42387 = cljs.core.async.chan.call(null,(1));
var inst_42388 = (function (){var c__8308__auto____$1 = inst_42387;
return ((function (c__8308__auto____$1,_,inst_42382,inst_42383,inst_42387,state_val_42420,c__8308__auto__,___9223__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto____$1,_,inst_42382,inst_42383,inst_42387,state_val_42420,c__8308__auto__,___9223__auto__){
return (function (state_42385){
var state_val_42386 = (state_42385[(1)]);
if((state_val_42386 === (1))){
var state_42385__$1 = state_42385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42385__$1,"val1");
} else {
return null;
}
});})(c__8308__auto____$1,_,inst_42382,inst_42383,inst_42387,state_val_42420,c__8308__auto__,___9223__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto____$1,_,inst_42382,inst_42383,inst_42387,state_val_42420,c__8308__auto__,___9223__auto__){
return (function() {
var drop_dot$core_test$state_machine__8288__auto__ = null;
var drop_dot$core_test$state_machine__8288__auto____0 = (function (){
var statearr_42427 = [null,null,null,null,null,null,null];
(statearr_42427[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_42427[(1)] = (1));

return statearr_42427;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_42385){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_42385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e42428){if((e42428 instanceof Object)){
var ex__8291__auto__ = e42428;
var statearr_42429_42459 = state_42385;
(statearr_42429_42459[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42460 = state_42385;
state_42385 = G__42460;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_42385){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_42385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto____$1,_,inst_42382,inst_42383,inst_42387,state_val_42420,c__8308__auto__,___9223__auto__))
})();
var state__8310__auto__ = (function (){var statearr_42430 = f__8309__auto__.call(null);
(statearr_42430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto____$1);

return statearr_42430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});
;})(c__8308__auto____$1,_,inst_42382,inst_42383,inst_42387,state_val_42420,c__8308__auto__,___9223__auto__))
})();
var inst_42389 = cljs.core.async.impl.dispatch.run.call(null,inst_42388);
var state_42419__$1 = (function (){var statearr_42431 = state_42419;
(statearr_42431[(8)] = inst_42389);

(statearr_42431[(9)] = inst_42383);

return statearr_42431;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42419__$1,(5),inst_42387);
} else {
if((state_val_42420 === (5))){
var inst_42393 = (state_42419[(10)]);
var inst_42383 = (state_42419[(9)]);
var inst_42392 = (state_42419[(11)]);
var inst_42391 = (state_42419[(2)]);
var inst_42392__$1 = cljs.core._conj.call(null,inst_42383,inst_42391);
var inst_42393__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42392__$1);
var state_42419__$1 = (function (){var statearr_42432 = state_42419;
(statearr_42432[(10)] = inst_42393__$1);

(statearr_42432[(11)] = inst_42392__$1);

return statearr_42432;
})();
if(cljs.core.truth_(inst_42393__$1)){
var statearr_42433_42461 = state_42419__$1;
(statearr_42433_42461[(1)] = (6));

} else {
var statearr_42434_42462 = state_42419__$1;
(statearr_42434_42462[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42420 === (6))){
var inst_42392 = (state_42419[(11)]);
var inst_42395 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42396 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_42397 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42392);
var inst_42398 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42396,inst_42397,null];
var inst_42399 = cljs.core.PersistentHashMap.fromArrays(inst_42395,inst_42398);
var inst_42400 = cljs.test.do_report.call(null,inst_42399);
var state_42419__$1 = state_42419;
var statearr_42435_42463 = state_42419__$1;
(statearr_42435_42463[(2)] = inst_42400);

(statearr_42435_42463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42420 === (7))){
var inst_42392 = (state_42419[(11)]);
var inst_42402 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42403 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_42404 = cljs.core.List.EMPTY;
var inst_42405 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42406 = cljs.core.cons.call(null,inst_42405,inst_42392);
var inst_42407 = cljs.core._conj.call(null,inst_42404,inst_42406);
var inst_42408 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42409 = cljs.core._conj.call(null,inst_42407,inst_42408);
var inst_42410 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42403,inst_42409,null];
var inst_42411 = cljs.core.PersistentHashMap.fromArrays(inst_42402,inst_42410);
var inst_42412 = cljs.test.do_report.call(null,inst_42411);
var state_42419__$1 = state_42419;
var statearr_42436_42464 = state_42419__$1;
(statearr_42436_42464[(2)] = inst_42412);

(statearr_42436_42464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42420 === (8))){
var inst_42393 = (state_42419[(10)]);
var inst_42414 = (state_42419[(2)]);
var state_42419__$1 = (function (){var statearr_42437 = state_42419;
(statearr_42437[(12)] = inst_42414);

return statearr_42437;
})();
var statearr_42438_42465 = state_42419__$1;
(statearr_42438_42465[(2)] = inst_42393);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42419__$1);

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
});})(c__8308__auto__,___9223__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__,___9223__auto__){
return (function() {
var drop_dot$core_test$state_machine__8288__auto__ = null;
var drop_dot$core_test$state_machine__8288__auto____0 = (function (){
var statearr_42442 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42442[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_42442[(1)] = (1));

return statearr_42442;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_42419){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_42419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e42443){if((e42443 instanceof Object)){
var ex__8291__auto__ = e42443;
var statearr_42444_42466 = state_42419;
(statearr_42444_42466[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42467 = state_42419;
state_42419 = G__42467;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_42419){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_42419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___9223__auto__))
})();
var state__8310__auto__ = (function (){var statearr_42445 = f__8309__auto__.call(null);
(statearr_42445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_42445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___9223__auto__))
);

return c__8308__auto__;
});

drop_dot.core_test.t_drop_dot$core_test42296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42297","meta42297",-2107419179,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test42296.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test42296.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test42296";

drop_dot.core_test.t_drop_dot$core_test42296.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test42296");
});

drop_dot.core_test.__GT_t_drop_dot$core_test42296 = (function drop_dot$core_test$__GT_t_drop_dot$core_test42296(meta42297){
return (new drop_dot.core_test.t_drop_dot$core_test42296(meta42297));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test42296(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.async_test.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.async_test;},new cljs.core.Symbol("drop-dot.core-test","async-test","drop-dot.core-test/async-test",32248164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"async-test","async-test",1048222369,null),"test/drop_dot/core_test.cljs",20,1,21,21,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.async_test)?drop_dot.core_test.async_test.cljs$lang$test:null)]));
drop_dot.core_test.drop_fns = (function drop_dot$core_test$drop_fns(){
return cljs.test.test_var.call(null,drop_dot$core_test$drop_fns.cljs$lang$var);
});
drop_dot.core_test.drop_fns.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing drop-dot drop functions.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test42468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test42468 = (function (meta42469){
this.meta42469 = meta42469;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test42468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42470,meta42469__$1){
var self__ = this;
var _42470__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test42468(meta42469__$1));
});

drop_dot.core_test.t_drop_dot$core_test42468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42470){
var self__ = this;
var _42470__$1 = this;
return self__.meta42469;
});

drop_dot.core_test.t_drop_dot$core_test42468.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test42468.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9223__auto__ = self____$1;
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___9223__auto__,self____$1){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___9223__auto__,self____$1){
return (function (state_42475){
var state_val_42476 = (state_42475[(1)]);
if((state_val_42476 === (1))){
var inst_42472 = cljs.core.async.chan.call(null);
var inst_42473 = done.call(null);
var state_42475__$1 = (function (){var statearr_42477 = state_42475;
(statearr_42477[(7)] = inst_42472);

return statearr_42477;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42475__$1,inst_42473);
} else {
return null;
}
});})(c__8308__auto__,___9223__auto__,self____$1))
;
return ((function (switch__8287__auto__,c__8308__auto__,___9223__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__8288__auto__ = null;
var drop_dot$core_test$state_machine__8288__auto____0 = (function (){
var statearr_42481 = [null,null,null,null,null,null,null,null];
(statearr_42481[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_42481[(1)] = (1));

return statearr_42481;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_42475){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_42475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e42482){if((e42482 instanceof Object)){
var ex__8291__auto__ = e42482;
var statearr_42483_42498 = state_42475;
(statearr_42483_42498[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42499 = state_42475;
state_42475 = G__42499;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_42475){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_42475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___9223__auto__,self____$1))
})();
var state__8310__auto__ = (function (){var statearr_42484 = f__8309__auto__.call(null);
(statearr_42484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_42484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___9223__auto__,self____$1))
);

return c__8308__auto__;
});

drop_dot.core_test.t_drop_dot$core_test42468.prototype.apply = (function (self__,args42471){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args42471)));
});

drop_dot.core_test.t_drop_dot$core_test42468.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9223__auto__ = this;
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___9223__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___9223__auto__){
return (function (state_42488){
var state_val_42489 = (state_42488[(1)]);
if((state_val_42489 === (1))){
var inst_42485 = cljs.core.async.chan.call(null);
var inst_42486 = done.call(null);
var state_42488__$1 = (function (){var statearr_42490 = state_42488;
(statearr_42490[(7)] = inst_42485);

return statearr_42490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42488__$1,inst_42486);
} else {
return null;
}
});})(c__8308__auto__,___9223__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__,___9223__auto__){
return (function() {
var drop_dot$core_test$state_machine__8288__auto__ = null;
var drop_dot$core_test$state_machine__8288__auto____0 = (function (){
var statearr_42494 = [null,null,null,null,null,null,null,null];
(statearr_42494[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_42494[(1)] = (1));

return statearr_42494;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_42488){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_42488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e42495){if((e42495 instanceof Object)){
var ex__8291__auto__ = e42495;
var statearr_42496_42500 = state_42488;
(statearr_42496_42500[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42501 = state_42488;
state_42488 = G__42501;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_42488){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_42488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___9223__auto__))
})();
var state__8310__auto__ = (function (){var statearr_42497 = f__8309__auto__.call(null);
(statearr_42497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_42497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___9223__auto__))
);

return c__8308__auto__;
});

drop_dot.core_test.t_drop_dot$core_test42468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42469","meta42469",-699240161,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test42468.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test42468.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test42468";

drop_dot.core_test.t_drop_dot$core_test42468.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test42468");
});

drop_dot.core_test.__GT_t_drop_dot$core_test42468 = (function drop_dot$core_test$__GT_t_drop_dot$core_test42468(meta42469){
return (new drop_dot.core_test.t_drop_dot$core_test42468(meta42469));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test42468(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.drop_fns.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.drop_fns;},new cljs.core.Symbol("drop-dot.core-test","drop-fns","drop-dot.core-test/drop-fns",-274950926,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"drop-fns","drop-fns",-351659585,null),"test/drop_dot/core_test.cljs",18,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.drop_fns)?drop_dot.core_test.drop_fns.cljs$lang$test:null)]));
drop_dot.core_test.core_tests = (function drop_dot$core_test$core_tests(){
return cljs.test.test_var.call(null,drop_dot$core_test$core_tests.cljs$lang$var);
});
drop_dot.core_test.core_tests.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test42502 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test42502 = (function (meta42503){
this.meta42503 = meta42503;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test42502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42504,meta42503__$1){
var self__ = this;
var _42504__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test42502(meta42503__$1));
});

drop_dot.core_test.t_drop_dot$core_test42502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42504){
var self__ = this;
var _42504__$1 = this;
return self__.meta42503;
});

drop_dot.core_test.t_drop_dot$core_test42502.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test42502.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9223__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___9223__auto__,self____$1){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___9223__auto__,self____$1){
return (function (state_42547){
var state_val_42548 = (state_42547[(1)]);
if((state_val_42548 === (1))){
var state_42547__$1 = state_42547;
var statearr_42549_42628 = state_42547__$1;
(statearr_42549_42628[(2)] = null);

(statearr_42549_42628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42548 === (2))){
var inst_42544 = (state_42547[(2)]);
var inst_42545 = done.call(null);
var state_42547__$1 = (function (){var statearr_42550 = state_42547;
(statearr_42550[(7)] = inst_42544);

return statearr_42550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42547__$1,inst_42545);
} else {
if((state_val_42548 === (3))){
var inst_42506 = (state_42547[(2)]);
var inst_42507 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42508 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_42509 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42508,inst_42506,null];
var inst_42510 = cljs.core.PersistentHashMap.fromArrays(inst_42507,inst_42509);
var inst_42511 = cljs.test.do_report.call(null,inst_42510);
var state_42547__$1 = state_42547;
var statearr_42551_42629 = state_42547__$1;
(statearr_42551_42629[(2)] = inst_42511);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42547__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42548 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42547,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_42515 = cljs.core.List.EMPTY;
var inst_42516 = cljs.core._conj.call(null,inst_42515,true);
var inst_42517 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_42547__$1 = (function (){var statearr_42552 = state_42547;
(statearr_42552[(8)] = inst_42516);

return statearr_42552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42547__$1,(5),inst_42517);
} else {
if((state_val_42548 === (5))){
var inst_42521 = (state_42547[(9)]);
var inst_42520 = (state_42547[(10)]);
var inst_42516 = (state_42547[(8)]);
var inst_42519 = (state_42547[(2)]);
var inst_42520__$1 = cljs.core._conj.call(null,inst_42516,inst_42519);
var inst_42521__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42520__$1);
var state_42547__$1 = (function (){var statearr_42553 = state_42547;
(statearr_42553[(9)] = inst_42521__$1);

(statearr_42553[(10)] = inst_42520__$1);

return statearr_42553;
})();
if(cljs.core.truth_(inst_42521__$1)){
var statearr_42554_42630 = state_42547__$1;
(statearr_42554_42630[(1)] = (6));

} else {
var statearr_42555_42631 = state_42547__$1;
(statearr_42555_42631[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42548 === (6))){
var inst_42520 = (state_42547[(10)]);
var inst_42523 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42524 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_42525 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42520);
var inst_42526 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42524,inst_42525,null];
var inst_42527 = cljs.core.PersistentHashMap.fromArrays(inst_42523,inst_42526);
var inst_42528 = cljs.test.do_report.call(null,inst_42527);
var state_42547__$1 = state_42547;
var statearr_42556_42632 = state_42547__$1;
(statearr_42556_42632[(2)] = inst_42528);

(statearr_42556_42632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42548 === (7))){
var inst_42520 = (state_42547[(10)]);
var inst_42530 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42531 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_42532 = cljs.core.List.EMPTY;
var inst_42533 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42534 = cljs.core.cons.call(null,inst_42533,inst_42520);
var inst_42535 = cljs.core._conj.call(null,inst_42532,inst_42534);
var inst_42536 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42537 = cljs.core._conj.call(null,inst_42535,inst_42536);
var inst_42538 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42531,inst_42537,null];
var inst_42539 = cljs.core.PersistentHashMap.fromArrays(inst_42530,inst_42538);
var inst_42540 = cljs.test.do_report.call(null,inst_42539);
var state_42547__$1 = state_42547;
var statearr_42557_42633 = state_42547__$1;
(statearr_42557_42633[(2)] = inst_42540);

(statearr_42557_42633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42548 === (8))){
var inst_42521 = (state_42547[(9)]);
var inst_42542 = (state_42547[(2)]);
var state_42547__$1 = (function (){var statearr_42558 = state_42547;
(statearr_42558[(11)] = inst_42542);

return statearr_42558;
})();
var statearr_42559_42634 = state_42547__$1;
(statearr_42559_42634[(2)] = inst_42521);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42547__$1);

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
});})(c__8308__auto__,___9223__auto__,self____$1))
;
return ((function (switch__8287__auto__,c__8308__auto__,___9223__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__8288__auto__ = null;
var drop_dot$core_test$state_machine__8288__auto____0 = (function (){
var statearr_42563 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42563[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_42563[(1)] = (1));

return statearr_42563;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_42547){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_42547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e42564){if((e42564 instanceof Object)){
var ex__8291__auto__ = e42564;
var statearr_42565_42635 = state_42547;
(statearr_42565_42635[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42636 = state_42547;
state_42547 = G__42636;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_42547){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_42547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___9223__auto__,self____$1))
})();
var state__8310__auto__ = (function (){var statearr_42566 = f__8309__auto__.call(null);
(statearr_42566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_42566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___9223__auto__,self____$1))
);

return c__8308__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test42502.prototype.apply = (function (self__,args42505){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args42505)));
});

drop_dot.core_test.t_drop_dot$core_test42502.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9223__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___9223__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___9223__auto__){
return (function (state_42608){
var state_val_42609 = (state_42608[(1)]);
if((state_val_42609 === (1))){
var state_42608__$1 = state_42608;
var statearr_42610_42637 = state_42608__$1;
(statearr_42610_42637[(2)] = null);

(statearr_42610_42637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42609 === (2))){
var inst_42605 = (state_42608[(2)]);
var inst_42606 = done.call(null);
var state_42608__$1 = (function (){var statearr_42611 = state_42608;
(statearr_42611[(7)] = inst_42605);

return statearr_42611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42608__$1,inst_42606);
} else {
if((state_val_42609 === (3))){
var inst_42567 = (state_42608[(2)]);
var inst_42568 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42569 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_42570 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42569,inst_42567,null];
var inst_42571 = cljs.core.PersistentHashMap.fromArrays(inst_42568,inst_42570);
var inst_42572 = cljs.test.do_report.call(null,inst_42571);
var state_42608__$1 = state_42608;
var statearr_42612_42638 = state_42608__$1;
(statearr_42612_42638[(2)] = inst_42572);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42608__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42609 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42608,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_42576 = cljs.core.List.EMPTY;
var inst_42577 = cljs.core._conj.call(null,inst_42576,true);
var inst_42578 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_42608__$1 = (function (){var statearr_42613 = state_42608;
(statearr_42613[(8)] = inst_42577);

return statearr_42613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42608__$1,(5),inst_42578);
} else {
if((state_val_42609 === (5))){
var inst_42581 = (state_42608[(9)]);
var inst_42577 = (state_42608[(8)]);
var inst_42582 = (state_42608[(10)]);
var inst_42580 = (state_42608[(2)]);
var inst_42581__$1 = cljs.core._conj.call(null,inst_42577,inst_42580);
var inst_42582__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42581__$1);
var state_42608__$1 = (function (){var statearr_42614 = state_42608;
(statearr_42614[(9)] = inst_42581__$1);

(statearr_42614[(10)] = inst_42582__$1);

return statearr_42614;
})();
if(cljs.core.truth_(inst_42582__$1)){
var statearr_42615_42639 = state_42608__$1;
(statearr_42615_42639[(1)] = (6));

} else {
var statearr_42616_42640 = state_42608__$1;
(statearr_42616_42640[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42609 === (6))){
var inst_42581 = (state_42608[(9)]);
var inst_42584 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42585 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_42586 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42581);
var inst_42587 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42585,inst_42586,null];
var inst_42588 = cljs.core.PersistentHashMap.fromArrays(inst_42584,inst_42587);
var inst_42589 = cljs.test.do_report.call(null,inst_42588);
var state_42608__$1 = state_42608;
var statearr_42617_42641 = state_42608__$1;
(statearr_42617_42641[(2)] = inst_42589);

(statearr_42617_42641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42609 === (7))){
var inst_42581 = (state_42608[(9)]);
var inst_42591 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42592 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_42593 = cljs.core.List.EMPTY;
var inst_42594 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42595 = cljs.core.cons.call(null,inst_42594,inst_42581);
var inst_42596 = cljs.core._conj.call(null,inst_42593,inst_42595);
var inst_42597 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42598 = cljs.core._conj.call(null,inst_42596,inst_42597);
var inst_42599 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42592,inst_42598,null];
var inst_42600 = cljs.core.PersistentHashMap.fromArrays(inst_42591,inst_42599);
var inst_42601 = cljs.test.do_report.call(null,inst_42600);
var state_42608__$1 = state_42608;
var statearr_42618_42642 = state_42608__$1;
(statearr_42618_42642[(2)] = inst_42601);

(statearr_42618_42642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42609 === (8))){
var inst_42582 = (state_42608[(10)]);
var inst_42603 = (state_42608[(2)]);
var state_42608__$1 = (function (){var statearr_42619 = state_42608;
(statearr_42619[(11)] = inst_42603);

return statearr_42619;
})();
var statearr_42620_42643 = state_42608__$1;
(statearr_42620_42643[(2)] = inst_42582);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42608__$1);

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
});})(c__8308__auto__,___9223__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__,___9223__auto__){
return (function() {
var drop_dot$core_test$state_machine__8288__auto__ = null;
var drop_dot$core_test$state_machine__8288__auto____0 = (function (){
var statearr_42624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42624[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_42624[(1)] = (1));

return statearr_42624;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_42608){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_42608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e42625){if((e42625 instanceof Object)){
var ex__8291__auto__ = e42625;
var statearr_42626_42644 = state_42608;
(statearr_42626_42644[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42645 = state_42608;
state_42608 = G__42645;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_42608){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_42608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___9223__auto__))
})();
var state__8310__auto__ = (function (){var statearr_42627 = f__8309__auto__.call(null);
(statearr_42627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_42627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___9223__auto__))
);

return c__8308__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test42502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42503","meta42503",895628741,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test42502.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test42502.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test42502";

drop_dot.core_test.t_drop_dot$core_test42502.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test42502");
});

drop_dot.core_test.__GT_t_drop_dot$core_test42502 = (function drop_dot$core_test$__GT_t_drop_dot$core_test42502(meta42503){
return (new drop_dot.core_test.t_drop_dot$core_test42502(meta42503));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test42502(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"test/drop_dot/core_test.cljs",20,1,48,48,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map