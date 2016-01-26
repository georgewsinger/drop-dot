// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core_test');
goog.require('cljs.core');
goog.require('drop_dot.core');
goog.require('cljs.test');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
drop_dot.core_test.async_test = (function drop_dot$core_test$async_test(){
return cljs.test.test_var.call(null,drop_dot$core_test$async_test.cljs$lang$var);
});
drop_dot.core_test.async_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing some core.async functionality.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test11134 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test11134 = (function (meta11135){
this.meta11135 = meta11135;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test11134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11136,meta11135__$1){
var self__ = this;
var _11136__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test11134(meta11135__$1));
});

drop_dot.core_test.t_drop_dot$core_test11134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11136){
var self__ = this;
var _11136__$1 = this;
return self__.meta11135;
});

drop_dot.core_test.t_drop_dot$core_test11134.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test11134.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9223__auto__ = self____$1;
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___9223__auto__,self____$1){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___9223__auto__,self____$1){
return (function (state_11184){
var state_val_11185 = (state_11184[(1)]);
if((state_val_11185 === (1))){
var state_11184__$1 = state_11184;
var statearr_11186_11284 = state_11184__$1;
(statearr_11186_11284[(2)] = null);

(statearr_11186_11284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (2))){
var inst_11181 = (state_11184[(2)]);
var inst_11182 = done.call(null);
var state_11184__$1 = (function (){var statearr_11187 = state_11184;
(statearr_11187[(7)] = inst_11181);

return statearr_11187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11184__$1,inst_11182);
} else {
if((state_val_11185 === (3))){
var inst_11138 = (state_11184[(2)]);
var inst_11139 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11140 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_11141 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_11140,inst_11138,null];
var inst_11142 = cljs.core.PersistentHashMap.fromArrays(inst_11139,inst_11141);
var inst_11143 = cljs.test.do_report.call(null,inst_11142);
var state_11184__$1 = state_11184;
var statearr_11188_11285 = state_11184__$1;
(statearr_11188_11285[(2)] = inst_11143);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11184__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11184,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_11147 = cljs.core.List.EMPTY;
var inst_11148 = cljs.core._conj.call(null,inst_11147,"val1");
var inst_11152 = cljs.core.async.chan.call(null,(1));
var inst_11153 = (function (){var c__8308__auto____$1 = inst_11152;
return ((function (c__8308__auto____$1,_,inst_11147,inst_11148,inst_11152,state_val_11185,c__8308__auto__,___9223__auto__,self____$1){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto____$1,_,inst_11147,inst_11148,inst_11152,state_val_11185,c__8308__auto__,___9223__auto__,self____$1){
return (function (state_11150){
var state_val_11151 = (state_11150[(1)]);
if((state_val_11151 === (1))){
var state_11150__$1 = state_11150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11150__$1,"val1");
} else {
return null;
}
});})(c__8308__auto____$1,_,inst_11147,inst_11148,inst_11152,state_val_11185,c__8308__auto__,___9223__auto__,self____$1))
;
return ((function (switch__8287__auto__,c__8308__auto____$1,_,inst_11147,inst_11148,inst_11152,state_val_11185,c__8308__auto__,___9223__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__8288__auto__ = null;
var drop_dot$core_test$state_machine__8288__auto____0 = (function (){
var statearr_11192 = [null,null,null,null,null,null,null];
(statearr_11192[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_11192[(1)] = (1));

return statearr_11192;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_11150){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_11150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e11193){if((e11193 instanceof Object)){
var ex__8291__auto__ = e11193;
var statearr_11194_11286 = state_11150;
(statearr_11194_11286[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11287 = state_11150;
state_11150 = G__11287;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_11150){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_11150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto____$1,_,inst_11147,inst_11148,inst_11152,state_val_11185,c__8308__auto__,___9223__auto__,self____$1))
})();
var state__8310__auto__ = (function (){var statearr_11195 = f__8309__auto__.call(null);
(statearr_11195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto____$1);

return statearr_11195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});
;})(c__8308__auto____$1,_,inst_11147,inst_11148,inst_11152,state_val_11185,c__8308__auto__,___9223__auto__,self____$1))
})();
var inst_11154 = cljs.core.async.impl.dispatch.run.call(null,inst_11153);
var state_11184__$1 = (function (){var statearr_11196 = state_11184;
(statearr_11196[(8)] = inst_11154);

(statearr_11196[(9)] = inst_11148);

return statearr_11196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11184__$1,(5),inst_11152);
} else {
if((state_val_11185 === (5))){
var inst_11157 = (state_11184[(10)]);
var inst_11148 = (state_11184[(9)]);
var inst_11158 = (state_11184[(11)]);
var inst_11156 = (state_11184[(2)]);
var inst_11157__$1 = cljs.core._conj.call(null,inst_11148,inst_11156);
var inst_11158__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_11157__$1);
var state_11184__$1 = (function (){var statearr_11197 = state_11184;
(statearr_11197[(10)] = inst_11157__$1);

(statearr_11197[(11)] = inst_11158__$1);

return statearr_11197;
})();
if(cljs.core.truth_(inst_11158__$1)){
var statearr_11198_11288 = state_11184__$1;
(statearr_11198_11288[(1)] = (6));

} else {
var statearr_11199_11289 = state_11184__$1;
(statearr_11199_11289[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (6))){
var inst_11157 = (state_11184[(10)]);
var inst_11160 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11161 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_11162 = cljs.core.cons.call(null,cljs.core._EQ_,inst_11157);
var inst_11163 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_11161,inst_11162,null];
var inst_11164 = cljs.core.PersistentHashMap.fromArrays(inst_11160,inst_11163);
var inst_11165 = cljs.test.do_report.call(null,inst_11164);
var state_11184__$1 = state_11184;
var statearr_11200_11290 = state_11184__$1;
(statearr_11200_11290[(2)] = inst_11165);

(statearr_11200_11290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (7))){
var inst_11157 = (state_11184[(10)]);
var inst_11167 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11168 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_11169 = cljs.core.List.EMPTY;
var inst_11170 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_11171 = cljs.core.cons.call(null,inst_11170,inst_11157);
var inst_11172 = cljs.core._conj.call(null,inst_11169,inst_11171);
var inst_11173 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_11174 = cljs.core._conj.call(null,inst_11172,inst_11173);
var inst_11175 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_11168,inst_11174,null];
var inst_11176 = cljs.core.PersistentHashMap.fromArrays(inst_11167,inst_11175);
var inst_11177 = cljs.test.do_report.call(null,inst_11176);
var state_11184__$1 = state_11184;
var statearr_11201_11291 = state_11184__$1;
(statearr_11201_11291[(2)] = inst_11177);

(statearr_11201_11291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11185 === (8))){
var inst_11158 = (state_11184[(11)]);
var inst_11179 = (state_11184[(2)]);
var state_11184__$1 = (function (){var statearr_11202 = state_11184;
(statearr_11202[(12)] = inst_11179);

return statearr_11202;
})();
var statearr_11203_11292 = state_11184__$1;
(statearr_11203_11292[(2)] = inst_11158);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11184__$1);

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
var statearr_11207 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11207[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_11207[(1)] = (1));

return statearr_11207;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_11184){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_11184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e11208){if((e11208 instanceof Object)){
var ex__8291__auto__ = e11208;
var statearr_11209_11293 = state_11184;
(statearr_11209_11293[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11294 = state_11184;
state_11184 = G__11294;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_11184){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_11184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___9223__auto__,self____$1))
})();
var state__8310__auto__ = (function (){var statearr_11210 = f__8309__auto__.call(null);
(statearr_11210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_11210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___9223__auto__,self____$1))
);

return c__8308__auto__;
});

drop_dot.core_test.t_drop_dot$core_test11134.prototype.apply = (function (self__,args11137){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11137)));
});

drop_dot.core_test.t_drop_dot$core_test11134.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9223__auto__ = this;
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___9223__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___9223__auto__){
return (function (state_11257){
var state_val_11258 = (state_11257[(1)]);
if((state_val_11258 === (1))){
var state_11257__$1 = state_11257;
var statearr_11259_11295 = state_11257__$1;
(statearr_11259_11295[(2)] = null);

(statearr_11259_11295[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (2))){
var inst_11254 = (state_11257[(2)]);
var inst_11255 = done.call(null);
var state_11257__$1 = (function (){var statearr_11260 = state_11257;
(statearr_11260[(7)] = inst_11254);

return statearr_11260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11257__$1,inst_11255);
} else {
if((state_val_11258 === (3))){
var inst_11211 = (state_11257[(2)]);
var inst_11212 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11213 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_11214 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_11213,inst_11211,null];
var inst_11215 = cljs.core.PersistentHashMap.fromArrays(inst_11212,inst_11214);
var inst_11216 = cljs.test.do_report.call(null,inst_11215);
var state_11257__$1 = state_11257;
var statearr_11261_11296 = state_11257__$1;
(statearr_11261_11296[(2)] = inst_11216);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11257__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11257,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_11220 = cljs.core.List.EMPTY;
var inst_11221 = cljs.core._conj.call(null,inst_11220,"val1");
var inst_11225 = cljs.core.async.chan.call(null,(1));
var inst_11226 = (function (){var c__8308__auto____$1 = inst_11225;
return ((function (c__8308__auto____$1,_,inst_11220,inst_11221,inst_11225,state_val_11258,c__8308__auto__,___9223__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto____$1,_,inst_11220,inst_11221,inst_11225,state_val_11258,c__8308__auto__,___9223__auto__){
return (function (state_11223){
var state_val_11224 = (state_11223[(1)]);
if((state_val_11224 === (1))){
var state_11223__$1 = state_11223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11223__$1,"val1");
} else {
return null;
}
});})(c__8308__auto____$1,_,inst_11220,inst_11221,inst_11225,state_val_11258,c__8308__auto__,___9223__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto____$1,_,inst_11220,inst_11221,inst_11225,state_val_11258,c__8308__auto__,___9223__auto__){
return (function() {
var drop_dot$core_test$state_machine__8288__auto__ = null;
var drop_dot$core_test$state_machine__8288__auto____0 = (function (){
var statearr_11265 = [null,null,null,null,null,null,null];
(statearr_11265[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_11265[(1)] = (1));

return statearr_11265;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_11223){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_11223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e11266){if((e11266 instanceof Object)){
var ex__8291__auto__ = e11266;
var statearr_11267_11297 = state_11223;
(statearr_11267_11297[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11298 = state_11223;
state_11223 = G__11298;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_11223){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_11223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto____$1,_,inst_11220,inst_11221,inst_11225,state_val_11258,c__8308__auto__,___9223__auto__))
})();
var state__8310__auto__ = (function (){var statearr_11268 = f__8309__auto__.call(null);
(statearr_11268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto____$1);

return statearr_11268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});
;})(c__8308__auto____$1,_,inst_11220,inst_11221,inst_11225,state_val_11258,c__8308__auto__,___9223__auto__))
})();
var inst_11227 = cljs.core.async.impl.dispatch.run.call(null,inst_11226);
var state_11257__$1 = (function (){var statearr_11269 = state_11257;
(statearr_11269[(8)] = inst_11227);

(statearr_11269[(9)] = inst_11221);

return statearr_11269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11257__$1,(5),inst_11225);
} else {
if((state_val_11258 === (5))){
var inst_11230 = (state_11257[(10)]);
var inst_11231 = (state_11257[(11)]);
var inst_11221 = (state_11257[(9)]);
var inst_11229 = (state_11257[(2)]);
var inst_11230__$1 = cljs.core._conj.call(null,inst_11221,inst_11229);
var inst_11231__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_11230__$1);
var state_11257__$1 = (function (){var statearr_11270 = state_11257;
(statearr_11270[(10)] = inst_11230__$1);

(statearr_11270[(11)] = inst_11231__$1);

return statearr_11270;
})();
if(cljs.core.truth_(inst_11231__$1)){
var statearr_11271_11299 = state_11257__$1;
(statearr_11271_11299[(1)] = (6));

} else {
var statearr_11272_11300 = state_11257__$1;
(statearr_11272_11300[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (6))){
var inst_11230 = (state_11257[(10)]);
var inst_11233 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11234 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_11235 = cljs.core.cons.call(null,cljs.core._EQ_,inst_11230);
var inst_11236 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_11234,inst_11235,null];
var inst_11237 = cljs.core.PersistentHashMap.fromArrays(inst_11233,inst_11236);
var inst_11238 = cljs.test.do_report.call(null,inst_11237);
var state_11257__$1 = state_11257;
var statearr_11273_11301 = state_11257__$1;
(statearr_11273_11301[(2)] = inst_11238);

(statearr_11273_11301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (7))){
var inst_11230 = (state_11257[(10)]);
var inst_11240 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11241 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_11242 = cljs.core.List.EMPTY;
var inst_11243 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_11244 = cljs.core.cons.call(null,inst_11243,inst_11230);
var inst_11245 = cljs.core._conj.call(null,inst_11242,inst_11244);
var inst_11246 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_11247 = cljs.core._conj.call(null,inst_11245,inst_11246);
var inst_11248 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_11241,inst_11247,null];
var inst_11249 = cljs.core.PersistentHashMap.fromArrays(inst_11240,inst_11248);
var inst_11250 = cljs.test.do_report.call(null,inst_11249);
var state_11257__$1 = state_11257;
var statearr_11274_11302 = state_11257__$1;
(statearr_11274_11302[(2)] = inst_11250);

(statearr_11274_11302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (8))){
var inst_11231 = (state_11257[(11)]);
var inst_11252 = (state_11257[(2)]);
var state_11257__$1 = (function (){var statearr_11275 = state_11257;
(statearr_11275[(12)] = inst_11252);

return statearr_11275;
})();
var statearr_11276_11303 = state_11257__$1;
(statearr_11276_11303[(2)] = inst_11231);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11257__$1);

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
var statearr_11280 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11280[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_11280[(1)] = (1));

return statearr_11280;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_11257){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_11257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e11281){if((e11281 instanceof Object)){
var ex__8291__auto__ = e11281;
var statearr_11282_11304 = state_11257;
(statearr_11282_11304[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11305 = state_11257;
state_11257 = G__11305;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_11257){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_11257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___9223__auto__))
})();
var state__8310__auto__ = (function (){var statearr_11283 = f__8309__auto__.call(null);
(statearr_11283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_11283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___9223__auto__))
);

return c__8308__auto__;
});

drop_dot.core_test.t_drop_dot$core_test11134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11135","meta11135",-1211129709,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test11134.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test11134.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test11134";

drop_dot.core_test.t_drop_dot$core_test11134.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test11134");
});

drop_dot.core_test.__GT_t_drop_dot$core_test11134 = (function drop_dot$core_test$__GT_t_drop_dot$core_test11134(meta11135){
return (new drop_dot.core_test.t_drop_dot$core_test11134(meta11135));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test11134(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.async_test.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.async_test;},new cljs.core.Symbol("drop-dot.core-test","async-test","drop-dot.core-test/async-test",32248164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"async-test","async-test",1048222369,null),"test/drop_dot/core_test.cljs",20,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.async_test)?drop_dot.core_test.async_test.cljs$lang$test:null)]));
drop_dot.core_test.drop_fns = (function drop_dot$core_test$drop_fns(){
return cljs.test.test_var.call(null,drop_dot$core_test$drop_fns.cljs$lang$var);
});
drop_dot.core_test.drop_fns.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing drop-dot drop functions.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test11306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test11306 = (function (meta11307){
this.meta11307 = meta11307;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test11306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11308,meta11307__$1){
var self__ = this;
var _11308__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test11306(meta11307__$1));
});

drop_dot.core_test.t_drop_dot$core_test11306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11308){
var self__ = this;
var _11308__$1 = this;
return self__.meta11307;
});

drop_dot.core_test.t_drop_dot$core_test11306.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test11306.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9223__auto__ = self____$1;
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___9223__auto__,self____$1){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___9223__auto__,self____$1){
return (function (state_11313){
var state_val_11314 = (state_11313[(1)]);
if((state_val_11314 === (1))){
var inst_11310 = cljs.core.async.chan.call(null);
var inst_11311 = done.call(null);
var state_11313__$1 = (function (){var statearr_11315 = state_11313;
(statearr_11315[(7)] = inst_11310);

return statearr_11315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11313__$1,inst_11311);
} else {
return null;
}
});})(c__8308__auto__,___9223__auto__,self____$1))
;
return ((function (switch__8287__auto__,c__8308__auto__,___9223__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__8288__auto__ = null;
var drop_dot$core_test$state_machine__8288__auto____0 = (function (){
var statearr_11319 = [null,null,null,null,null,null,null,null];
(statearr_11319[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_11319[(1)] = (1));

return statearr_11319;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_11313){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_11313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e11320){if((e11320 instanceof Object)){
var ex__8291__auto__ = e11320;
var statearr_11321_11336 = state_11313;
(statearr_11321_11336[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11337 = state_11313;
state_11313 = G__11337;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_11313){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_11313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___9223__auto__,self____$1))
})();
var state__8310__auto__ = (function (){var statearr_11322 = f__8309__auto__.call(null);
(statearr_11322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_11322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___9223__auto__,self____$1))
);

return c__8308__auto__;
});

drop_dot.core_test.t_drop_dot$core_test11306.prototype.apply = (function (self__,args11309){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11309)));
});

drop_dot.core_test.t_drop_dot$core_test11306.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9223__auto__ = this;
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___9223__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___9223__auto__){
return (function (state_11326){
var state_val_11327 = (state_11326[(1)]);
if((state_val_11327 === (1))){
var inst_11323 = cljs.core.async.chan.call(null);
var inst_11324 = done.call(null);
var state_11326__$1 = (function (){var statearr_11328 = state_11326;
(statearr_11328[(7)] = inst_11323);

return statearr_11328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11326__$1,inst_11324);
} else {
return null;
}
});})(c__8308__auto__,___9223__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__,___9223__auto__){
return (function() {
var drop_dot$core_test$state_machine__8288__auto__ = null;
var drop_dot$core_test$state_machine__8288__auto____0 = (function (){
var statearr_11332 = [null,null,null,null,null,null,null,null];
(statearr_11332[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_11332[(1)] = (1));

return statearr_11332;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_11326){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_11326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e11333){if((e11333 instanceof Object)){
var ex__8291__auto__ = e11333;
var statearr_11334_11338 = state_11326;
(statearr_11334_11338[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11339 = state_11326;
state_11326 = G__11339;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_11326){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_11326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___9223__auto__))
})();
var state__8310__auto__ = (function (){var statearr_11335 = f__8309__auto__.call(null);
(statearr_11335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_11335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___9223__auto__))
);

return c__8308__auto__;
});

drop_dot.core_test.t_drop_dot$core_test11306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11307","meta11307",-1765592194,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test11306.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test11306.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test11306";

drop_dot.core_test.t_drop_dot$core_test11306.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test11306");
});

drop_dot.core_test.__GT_t_drop_dot$core_test11306 = (function drop_dot$core_test$__GT_t_drop_dot$core_test11306(meta11307){
return (new drop_dot.core_test.t_drop_dot$core_test11306(meta11307));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test11306(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.drop_fns.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.drop_fns;},new cljs.core.Symbol("drop-dot.core-test","drop-fns","drop-dot.core-test/drop-fns",-274950926,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"drop-fns","drop-fns",-351659585,null),"test/drop_dot/core_test.cljs",18,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.drop_fns)?drop_dot.core_test.drop_fns.cljs$lang$test:null)]));
drop_dot.core_test.core_tests = (function drop_dot$core_test$core_tests(){
return cljs.test.test_var.call(null,drop_dot$core_test$core_tests.cljs$lang$var);
});
drop_dot.core_test.core_tests.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test11340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test11340 = (function (meta11341){
this.meta11341 = meta11341;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test11340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11342,meta11341__$1){
var self__ = this;
var _11342__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test11340(meta11341__$1));
});

drop_dot.core_test.t_drop_dot$core_test11340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11342){
var self__ = this;
var _11342__$1 = this;
return self__.meta11341;
});

drop_dot.core_test.t_drop_dot$core_test11340.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test11340.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9223__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___9223__auto__,self____$1){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___9223__auto__,self____$1){
return (function (state_11385){
var state_val_11386 = (state_11385[(1)]);
if((state_val_11386 === (1))){
var state_11385__$1 = state_11385;
var statearr_11387_11466 = state_11385__$1;
(statearr_11387_11466[(2)] = null);

(statearr_11387_11466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (2))){
var inst_11382 = (state_11385[(2)]);
var inst_11383 = done.call(null);
var state_11385__$1 = (function (){var statearr_11388 = state_11385;
(statearr_11388[(7)] = inst_11382);

return statearr_11388;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11385__$1,inst_11383);
} else {
if((state_val_11386 === (3))){
var inst_11344 = (state_11385[(2)]);
var inst_11345 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11346 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_11347 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_11346,inst_11344,null];
var inst_11348 = cljs.core.PersistentHashMap.fromArrays(inst_11345,inst_11347);
var inst_11349 = cljs.test.do_report.call(null,inst_11348);
var state_11385__$1 = state_11385;
var statearr_11389_11467 = state_11385__$1;
(statearr_11389_11467[(2)] = inst_11349);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11385__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11385,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_11353 = cljs.core.List.EMPTY;
var inst_11354 = cljs.core._conj.call(null,inst_11353,true);
var inst_11355 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_11385__$1 = (function (){var statearr_11390 = state_11385;
(statearr_11390[(8)] = inst_11354);

return statearr_11390;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11385__$1,(5),inst_11355);
} else {
if((state_val_11386 === (5))){
var inst_11359 = (state_11385[(9)]);
var inst_11358 = (state_11385[(10)]);
var inst_11354 = (state_11385[(8)]);
var inst_11357 = (state_11385[(2)]);
var inst_11358__$1 = cljs.core._conj.call(null,inst_11354,inst_11357);
var inst_11359__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_11358__$1);
var state_11385__$1 = (function (){var statearr_11391 = state_11385;
(statearr_11391[(9)] = inst_11359__$1);

(statearr_11391[(10)] = inst_11358__$1);

return statearr_11391;
})();
if(cljs.core.truth_(inst_11359__$1)){
var statearr_11392_11468 = state_11385__$1;
(statearr_11392_11468[(1)] = (6));

} else {
var statearr_11393_11469 = state_11385__$1;
(statearr_11393_11469[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (6))){
var inst_11358 = (state_11385[(10)]);
var inst_11361 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11362 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_11363 = cljs.core.cons.call(null,cljs.core._EQ_,inst_11358);
var inst_11364 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_11362,inst_11363,null];
var inst_11365 = cljs.core.PersistentHashMap.fromArrays(inst_11361,inst_11364);
var inst_11366 = cljs.test.do_report.call(null,inst_11365);
var state_11385__$1 = state_11385;
var statearr_11394_11470 = state_11385__$1;
(statearr_11394_11470[(2)] = inst_11366);

(statearr_11394_11470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (7))){
var inst_11358 = (state_11385[(10)]);
var inst_11368 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11369 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_11370 = cljs.core.List.EMPTY;
var inst_11371 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_11372 = cljs.core.cons.call(null,inst_11371,inst_11358);
var inst_11373 = cljs.core._conj.call(null,inst_11370,inst_11372);
var inst_11374 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_11375 = cljs.core._conj.call(null,inst_11373,inst_11374);
var inst_11376 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_11369,inst_11375,null];
var inst_11377 = cljs.core.PersistentHashMap.fromArrays(inst_11368,inst_11376);
var inst_11378 = cljs.test.do_report.call(null,inst_11377);
var state_11385__$1 = state_11385;
var statearr_11395_11471 = state_11385__$1;
(statearr_11395_11471[(2)] = inst_11378);

(statearr_11395_11471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11386 === (8))){
var inst_11359 = (state_11385[(9)]);
var inst_11380 = (state_11385[(2)]);
var state_11385__$1 = (function (){var statearr_11396 = state_11385;
(statearr_11396[(11)] = inst_11380);

return statearr_11396;
})();
var statearr_11397_11472 = state_11385__$1;
(statearr_11397_11472[(2)] = inst_11359);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11385__$1);

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
var statearr_11401 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11401[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_11401[(1)] = (1));

return statearr_11401;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_11385){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_11385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e11402){if((e11402 instanceof Object)){
var ex__8291__auto__ = e11402;
var statearr_11403_11473 = state_11385;
(statearr_11403_11473[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11474 = state_11385;
state_11385 = G__11474;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_11385){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_11385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___9223__auto__,self____$1))
})();
var state__8310__auto__ = (function (){var statearr_11404 = f__8309__auto__.call(null);
(statearr_11404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_11404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___9223__auto__,self____$1))
);

return c__8308__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test11340.prototype.apply = (function (self__,args11343){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11343)));
});

drop_dot.core_test.t_drop_dot$core_test11340.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9223__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___9223__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___9223__auto__){
return (function (state_11446){
var state_val_11447 = (state_11446[(1)]);
if((state_val_11447 === (1))){
var state_11446__$1 = state_11446;
var statearr_11448_11475 = state_11446__$1;
(statearr_11448_11475[(2)] = null);

(statearr_11448_11475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (2))){
var inst_11443 = (state_11446[(2)]);
var inst_11444 = done.call(null);
var state_11446__$1 = (function (){var statearr_11449 = state_11446;
(statearr_11449[(7)] = inst_11443);

return statearr_11449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11446__$1,inst_11444);
} else {
if((state_val_11447 === (3))){
var inst_11405 = (state_11446[(2)]);
var inst_11406 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11407 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_11408 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_11407,inst_11405,null];
var inst_11409 = cljs.core.PersistentHashMap.fromArrays(inst_11406,inst_11408);
var inst_11410 = cljs.test.do_report.call(null,inst_11409);
var state_11446__$1 = state_11446;
var statearr_11450_11476 = state_11446__$1;
(statearr_11450_11476[(2)] = inst_11410);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11446__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11446,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_11414 = cljs.core.List.EMPTY;
var inst_11415 = cljs.core._conj.call(null,inst_11414,true);
var inst_11416 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_11446__$1 = (function (){var statearr_11451 = state_11446;
(statearr_11451[(8)] = inst_11415);

return statearr_11451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11446__$1,(5),inst_11416);
} else {
if((state_val_11447 === (5))){
var inst_11419 = (state_11446[(9)]);
var inst_11415 = (state_11446[(8)]);
var inst_11420 = (state_11446[(10)]);
var inst_11418 = (state_11446[(2)]);
var inst_11419__$1 = cljs.core._conj.call(null,inst_11415,inst_11418);
var inst_11420__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_11419__$1);
var state_11446__$1 = (function (){var statearr_11452 = state_11446;
(statearr_11452[(9)] = inst_11419__$1);

(statearr_11452[(10)] = inst_11420__$1);

return statearr_11452;
})();
if(cljs.core.truth_(inst_11420__$1)){
var statearr_11453_11477 = state_11446__$1;
(statearr_11453_11477[(1)] = (6));

} else {
var statearr_11454_11478 = state_11446__$1;
(statearr_11454_11478[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (6))){
var inst_11419 = (state_11446[(9)]);
var inst_11422 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11423 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_11424 = cljs.core.cons.call(null,cljs.core._EQ_,inst_11419);
var inst_11425 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_11423,inst_11424,null];
var inst_11426 = cljs.core.PersistentHashMap.fromArrays(inst_11422,inst_11425);
var inst_11427 = cljs.test.do_report.call(null,inst_11426);
var state_11446__$1 = state_11446;
var statearr_11455_11479 = state_11446__$1;
(statearr_11455_11479[(2)] = inst_11427);

(statearr_11455_11479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (7))){
var inst_11419 = (state_11446[(9)]);
var inst_11429 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11430 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_11431 = cljs.core.List.EMPTY;
var inst_11432 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_11433 = cljs.core.cons.call(null,inst_11432,inst_11419);
var inst_11434 = cljs.core._conj.call(null,inst_11431,inst_11433);
var inst_11435 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_11436 = cljs.core._conj.call(null,inst_11434,inst_11435);
var inst_11437 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_11430,inst_11436,null];
var inst_11438 = cljs.core.PersistentHashMap.fromArrays(inst_11429,inst_11437);
var inst_11439 = cljs.test.do_report.call(null,inst_11438);
var state_11446__$1 = state_11446;
var statearr_11456_11480 = state_11446__$1;
(statearr_11456_11480[(2)] = inst_11439);

(statearr_11456_11480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (8))){
var inst_11420 = (state_11446[(10)]);
var inst_11441 = (state_11446[(2)]);
var state_11446__$1 = (function (){var statearr_11457 = state_11446;
(statearr_11457[(11)] = inst_11441);

return statearr_11457;
})();
var statearr_11458_11481 = state_11446__$1;
(statearr_11458_11481[(2)] = inst_11420);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11446__$1);

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
var statearr_11462 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11462[(0)] = drop_dot$core_test$state_machine__8288__auto__);

(statearr_11462[(1)] = (1));

return statearr_11462;
});
var drop_dot$core_test$state_machine__8288__auto____1 = (function (state_11446){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_11446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e11463){if((e11463 instanceof Object)){
var ex__8291__auto__ = e11463;
var statearr_11464_11482 = state_11446;
(statearr_11464_11482[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11483 = state_11446;
state_11446 = G__11483;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8288__auto__ = function(state_11446){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8288__auto____1.call(this,state_11446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8288__auto____0;
drop_dot$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8288__auto____1;
return drop_dot$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___9223__auto__))
})();
var state__8310__auto__ = (function (){var statearr_11465 = f__8309__auto__.call(null);
(statearr_11465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_11465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___9223__auto__))
);

return c__8308__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test11340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11341","meta11341",580202545,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test11340.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test11340.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test11340";

drop_dot.core_test.t_drop_dot$core_test11340.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test11340");
});

drop_dot.core_test.__GT_t_drop_dot$core_test11340 = (function drop_dot$core_test$__GT_t_drop_dot$core_test11340(meta11341){
return (new drop_dot.core_test.t_drop_dot$core_test11340(meta11341));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test11340(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"test/drop_dot/core_test.cljs",20,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map