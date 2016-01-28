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
return (function (state_90570){
var state_val_90571 = (state_90570[(1)]);
if((state_val_90571 === (1))){
var state_90570__$1 = state_90570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90570__$1,(2),input_chan);
} else {
if((state_val_90571 === (2))){
var inst_90549 = (state_90570[(2)]);
var inst_90550 = inst_90549;
var state_90570__$1 = (function (){var statearr_90572 = state_90570;
(statearr_90572[(7)] = inst_90550);

return statearr_90572;
})();
var statearr_90573_90600 = state_90570__$1;
(statearr_90573_90600[(2)] = null);

(statearr_90573_90600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90571 === (3))){
var inst_90550 = (state_90570[(7)]);
var inst_90552 = cljs.core.count.call(null,inst_90550);
var inst_90553 = cljs.core._EQ_.call(null,inst_90552,(0));
var state_90570__$1 = state_90570;
if(inst_90553){
var statearr_90574_90601 = state_90570__$1;
(statearr_90574_90601[(1)] = (5));

} else {
var statearr_90575_90602 = state_90570__$1;
(statearr_90575_90602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90571 === (4))){
var inst_90568 = (state_90570[(2)]);
var state_90570__$1 = state_90570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90570__$1,inst_90568);
} else {
if((state_val_90571 === (5))){
var state_90570__$1 = state_90570;
var statearr_90576_90603 = state_90570__$1;
(statearr_90576_90603[(2)] = null);

(statearr_90576_90603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90571 === (6))){
var inst_90550 = (state_90570[(7)]);
var inst_90556 = cljs.core.async.chan.call(null);
var inst_90557 = cljs.core.first.call(null,inst_90550);
var inst_90558 = (function (){var v = inst_90550;
var rc = inst_90556;
var cmd = inst_90557;
return ((function (v,rc,cmd,inst_90550,inst_90556,inst_90557,state_val_90571,c__9318__auto__){
return (function (res){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,v,rc,cmd,inst_90550,inst_90556,inst_90557,state_val_90571,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,v,rc,cmd,inst_90550,inst_90556,inst_90557,state_val_90571,c__9318__auto__){
return (function (state_90580){
var state_val_90581 = (state_90580[(1)]);
if((state_val_90581 === (1))){
var state_90580__$1 = state_90580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90580__$1,(2),rc,res);
} else {
if((state_val_90581 === (2))){
var inst_90578 = (state_90580[(2)]);
var state_90580__$1 = state_90580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90580__$1,inst_90578);
} else {
return null;
}
}
});})(c__9318__auto____$1,v,rc,cmd,inst_90550,inst_90556,inst_90557,state_val_90571,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_90550,inst_90556,inst_90557,state_val_90571,c__9318__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0 = (function (){
var statearr_90585 = [null,null,null,null,null,null,null];
(statearr_90585[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_90585[(1)] = (1));

return statearr_90585;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_90580){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90586){if((e90586 instanceof Object)){
var ex__9301__auto__ = e90586;
var statearr_90587_90604 = state_90580;
(statearr_90587_90604[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90605 = state_90580;
state_90580 = G__90605;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_90580){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_90580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_90550,inst_90556,inst_90557,state_val_90571,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90588 = f__9319__auto__.call(null);
(statearr_90588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_90588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,v,rc,cmd,inst_90550,inst_90556,inst_90557,state_val_90571,c__9318__auto__))
);

return c__9318__auto____$1;
});
;})(v,rc,cmd,inst_90550,inst_90556,inst_90557,state_val_90571,c__9318__auto__))
})();
var inst_90559 = drop_dot.core.pure_js.execAndPrint(inst_90557,inst_90558);
var state_90570__$1 = (function (){var statearr_90589 = state_90570;
(statearr_90589[(8)] = inst_90559);

return statearr_90589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90570__$1,(8),inst_90556);
} else {
if((state_val_90571 === (7))){
var inst_90566 = (state_90570[(2)]);
var state_90570__$1 = state_90570;
var statearr_90590_90606 = state_90570__$1;
(statearr_90590_90606[(2)] = inst_90566);

(statearr_90590_90606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90571 === (8))){
var inst_90550 = (state_90570[(7)]);
var inst_90561 = (state_90570[(2)]);
var inst_90562 = cljs.core.rest.call(null,inst_90550);
var inst_90563 = cljs.core.vec.call(null,inst_90562);
var inst_90550__$1 = inst_90563;
var state_90570__$1 = (function (){var statearr_90591 = state_90570;
(statearr_90591[(7)] = inst_90550__$1);

(statearr_90591[(9)] = inst_90561);

return statearr_90591;
})();
var statearr_90592_90607 = state_90570__$1;
(statearr_90592_90607[(2)] = null);

(statearr_90592_90607[(1)] = (3));


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
var statearr_90596 = [null,null,null,null,null,null,null,null,null,null];
(statearr_90596[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_90596[(1)] = (1));

return statearr_90596;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_90570){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90597){if((e90597 instanceof Object)){
var ex__9301__auto__ = e90597;
var statearr_90598_90608 = state_90570;
(statearr_90598_90608[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90609 = state_90570;
state_90570 = G__90609;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_90570){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_90570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90599 = f__9319__auto__.call(null);
(statearr_90599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90599;
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
return (function (state_90621){
var state_val_90622 = (state_90621[(1)]);
if((state_val_90622 === (1))){
var state_90621__$1 = state_90621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90621__$1,v);
} else {
return null;
}
});})(c__9318__auto__,c))
;
return ((function (switch__9297__auto__,c__9318__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0 = (function (){
var statearr_90626 = [null,null,null,null,null,null,null];
(statearr_90626[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__);

(statearr_90626[(1)] = (1));

return statearr_90626;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1 = (function (state_90621){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90627){if((e90627 instanceof Object)){
var ex__9301__auto__ = e90627;
var statearr_90628_90630 = state_90621;
(statearr_90628_90630[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90631 = state_90621;
state_90621 = G__90631;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = function(state_90621){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1.call(this,state_90621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,c))
})();
var state__9320__auto__ = (function (){var statearr_90629 = f__9319__auto__.call(null);
(statearr_90629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90629;
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
return (function (state_90647){
var state_val_90648 = (state_90647[(1)]);
if((state_val_90648 === (1))){
var state_90647__$1 = state_90647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90647__$1,(2),d,res__$1);
} else {
if((state_val_90648 === (2))){
var inst_90645 = (state_90647[(2)]);
var state_90647__$1 = state_90647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90647__$1,inst_90645);
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
var statearr_90652 = [null,null,null,null,null,null,null];
(statearr_90652[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__);

(statearr_90652[(1)] = (1));

return statearr_90652;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1 = (function (state_90647){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90653){if((e90653 instanceof Object)){
var ex__9301__auto__ = e90653;
var statearr_90654_90656 = state_90647;
(statearr_90654_90656[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90657 = state_90647;
state_90647 = G__90657;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__ = function(state_90647){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1.call(this,state_90647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,res,d))
})();
var state__9320__auto__ = (function (){var statearr_90655 = f__9319__auto__.call(null);
(statearr_90655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90655;
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
return (function (state_90689){
var state_val_90690 = (state_90689[(1)]);
if((state_val_90690 === (1))){
var inst_90680 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_90689__$1 = state_90689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90689__$1,(2),inst_90680);
} else {
if((state_val_90690 === (2))){
var inst_90682 = (state_90689[(2)]);
var state_90689__$1 = state_90689;
if(cljs.core.truth_(inst_90682)){
var statearr_90691_90702 = state_90689__$1;
(statearr_90691_90702[(1)] = (3));

} else {
var statearr_90692_90703 = state_90689__$1;
(statearr_90692_90703[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90690 === (3))){
var state_90689__$1 = state_90689;
var statearr_90693_90704 = state_90689__$1;
(statearr_90693_90704[(2)] = line);

(statearr_90693_90704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90690 === (4))){
var inst_90685 = [cljs.core.str("ERROR: "),cljs.core.str(line),cljs.core.str(" does not exist on this machine.")].join('');
var state_90689__$1 = state_90689;
var statearr_90694_90705 = state_90689__$1;
(statearr_90694_90705[(2)] = inst_90685);

(statearr_90694_90705[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90690 === (5))){
var inst_90687 = (state_90689[(2)]);
var state_90689__$1 = state_90689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90689__$1,inst_90687);
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
var statearr_90698 = [null,null,null,null,null,null,null];
(statearr_90698[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__);

(statearr_90698[(1)] = (1));

return statearr_90698;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1 = (function (state_90689){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90699){if((e90699 instanceof Object)){
var ex__9301__auto__ = e90699;
var statearr_90700_90706 = state_90689;
(statearr_90700_90706[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90707 = state_90689;
state_90689 = G__90707;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__ = function(state_90689){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1.call(this,state_90689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90701 = f__9319__auto__.call(null);
(statearr_90701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90701;
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
return (function (state_90778){
var state_val_90779 = (state_90778[(1)]);
if((state_val_90779 === (1))){
var state_90778__$1 = state_90778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90778__$1,(2),chan_verified_path);
} else {
if((state_val_90779 === (2))){
var inst_90764 = (state_90778[(7)]);
var inst_90765 = (state_90778[(8)]);
var inst_90764__$1 = (state_90778[(2)]);
var inst_90765__$1 = cljs.core.async.chan.call(null,(1));
var inst_90766 = (function (){var verified_path = inst_90764__$1;
var rc = inst_90765__$1;
return ((function (verified_path,rc,inst_90764,inst_90765,inst_90764__$1,inst_90765__$1,state_val_90779,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_90764,inst_90765,inst_90764__$1,inst_90765__$1,state_val_90779,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_90764,inst_90765,inst_90764__$1,inst_90765__$1,state_val_90779,c__9318__auto__){
return (function (state_90784){
var state_val_90785 = (state_90784[(1)]);
if((state_val_90785 === (1))){
var inst_90780 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced on this machine.")].join('');
var state_90784__$1 = state_90784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90784__$1,(2),rc,inst_90780);
} else {
if((state_val_90785 === (2))){
var inst_90782 = (state_90784[(2)]);
var state_90784__$1 = state_90784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90784__$1,inst_90782);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_90764,inst_90765,inst_90764__$1,inst_90765__$1,state_val_90779,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_90764,inst_90765,inst_90764__$1,inst_90765__$1,state_val_90779,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_90789 = [null,null,null,null,null,null,null];
(statearr_90789[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_90789[(1)] = (1));

return statearr_90789;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_90784){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90790){if((e90790 instanceof Object)){
var ex__9301__auto__ = e90790;
var statearr_90791_90818 = state_90784;
(statearr_90791_90818[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90819 = state_90784;
state_90784 = G__90819;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_90784){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_90784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_90764,inst_90765,inst_90764__$1,inst_90765__$1,state_val_90779,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90792 = f__9319__auto__.call(null);
(statearr_90792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_90792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_90764,inst_90765,inst_90764__$1,inst_90765__$1,state_val_90779,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_90764,inst_90765,inst_90764__$1,inst_90765__$1,state_val_90779,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_90764,inst_90765,inst_90764__$1,inst_90765__$1,state_val_90779,c__9318__auto__){
return (function (state_90796){
var state_val_90797 = (state_90796[(1)]);
if((state_val_90797 === (1))){
var state_90796__$1 = state_90796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90796__$1,(2),rc,verified_path);
} else {
if((state_val_90797 === (2))){
var inst_90794 = (state_90796[(2)]);
var state_90796__$1 = state_90796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90796__$1,inst_90794);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_90764,inst_90765,inst_90764__$1,inst_90765__$1,state_val_90779,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_90764,inst_90765,inst_90764__$1,inst_90765__$1,state_val_90779,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_90801 = [null,null,null,null,null,null,null];
(statearr_90801[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_90801[(1)] = (1));

return statearr_90801;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_90796){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90802){if((e90802 instanceof Object)){
var ex__9301__auto__ = e90802;
var statearr_90803_90820 = state_90796;
(statearr_90803_90820[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90821 = state_90796;
state_90796 = G__90821;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_90796){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_90796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_90764,inst_90765,inst_90764__$1,inst_90765__$1,state_val_90779,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90804 = f__9319__auto__.call(null);
(statearr_90804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_90804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_90764,inst_90765,inst_90764__$1,inst_90765__$1,state_val_90779,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(verified_path,rc,inst_90764,inst_90765,inst_90764__$1,inst_90765__$1,state_val_90779,c__9318__auto__))
})();
var inst_90767 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_90764__$1);
var state_90778__$1 = (function (){var statearr_90805 = state_90778;
(statearr_90805[(7)] = inst_90764__$1);

(statearr_90805[(9)] = inst_90766);

(statearr_90805[(8)] = inst_90765__$1);

return statearr_90805;
})();
if(cljs.core.truth_(inst_90767)){
var statearr_90806_90822 = state_90778__$1;
(statearr_90806_90822[(1)] = (3));

} else {
var statearr_90807_90823 = state_90778__$1;
(statearr_90807_90823[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90779 === (3))){
var inst_90764 = (state_90778[(7)]);
var inst_90765 = (state_90778[(8)]);
var state_90778__$1 = state_90778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90778__$1,(6),inst_90765,inst_90764);
} else {
if((state_val_90779 === (4))){
var inst_90764 = (state_90778[(7)]);
var inst_90766 = (state_90778[(9)]);
var inst_90772 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_90764,inst_90766);
var state_90778__$1 = state_90778;
var statearr_90808_90824 = state_90778__$1;
(statearr_90808_90824[(2)] = inst_90772);

(statearr_90808_90824[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90779 === (5))){
var inst_90765 = (state_90778[(8)]);
var inst_90774 = (state_90778[(2)]);
var state_90778__$1 = (function (){var statearr_90809 = state_90778;
(statearr_90809[(10)] = inst_90774);

return statearr_90809;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90778__$1,(7),inst_90765);
} else {
if((state_val_90779 === (6))){
var inst_90770 = (state_90778[(2)]);
var state_90778__$1 = state_90778;
var statearr_90810_90825 = state_90778__$1;
(statearr_90810_90825[(2)] = inst_90770);

(statearr_90810_90825[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90779 === (7))){
var inst_90776 = (state_90778[(2)]);
var state_90778__$1 = state_90778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90778__$1,inst_90776);
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
var statearr_90814 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_90814[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_90814[(1)] = (1));

return statearr_90814;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_90778){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90815){if((e90815 instanceof Object)){
var ex__9301__auto__ = e90815;
var statearr_90816_90826 = state_90778;
(statearr_90816_90826[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90827 = state_90778;
state_90778 = G__90827;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_90778){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_90778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90817 = f__9319__auto__.call(null);
(statearr_90817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90817;
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
return (function (state_90862){
var state_val_90863 = (state_90862[(1)]);
if((state_val_90863 === (1))){
var state_90862__$1 = state_90862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90862__$1,(2),c);
} else {
if((state_val_90863 === (2))){
var inst_90853 = (state_90862[(7)]);
var inst_90853__$1 = (state_90862[(2)]);
var inst_90854 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_90853__$1);
var state_90862__$1 = (function (){var statearr_90864 = state_90862;
(statearr_90864[(7)] = inst_90853__$1);

return statearr_90864;
})();
if(cljs.core.truth_(inst_90854)){
var statearr_90865_90876 = state_90862__$1;
(statearr_90865_90876[(1)] = (3));

} else {
var statearr_90866_90877 = state_90862__$1;
(statearr_90866_90877[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90863 === (3))){
var inst_90853 = (state_90862[(7)]);
var inst_90856 = cljs.core.println.call(null,inst_90853);
var state_90862__$1 = state_90862;
var statearr_90867_90878 = state_90862__$1;
(statearr_90867_90878[(2)] = inst_90856);

(statearr_90867_90878[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90863 === (4))){
var inst_90853 = (state_90862[(7)]);
var inst_90858 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_90853);
var state_90862__$1 = state_90862;
var statearr_90868_90879 = state_90862__$1;
(statearr_90868_90879[(2)] = inst_90858);

(statearr_90868_90879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90863 === (5))){
var inst_90860 = (state_90862[(2)]);
var state_90862__$1 = state_90862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90862__$1,inst_90860);
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
var statearr_90872 = [null,null,null,null,null,null,null,null];
(statearr_90872[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_90872[(1)] = (1));

return statearr_90872;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_90862){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90873){if((e90873 instanceof Object)){
var ex__9301__auto__ = e90873;
var statearr_90874_90880 = state_90862;
(statearr_90874_90880[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90881 = state_90862;
state_90862 = G__90881;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_90862){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_90862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90875 = f__9319__auto__.call(null);
(statearr_90875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90875;
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
return (function (state_90910){
var state_val_90911 = (state_90910[(1)]);
if((state_val_90911 === (1))){
var state_90910__$1 = state_90910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90910__$1,(2),rc,line);
} else {
if((state_val_90911 === (2))){
var inst_90908 = (state_90910[(2)]);
var state_90910__$1 = state_90910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90910__$1,inst_90908);
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
var statearr_90915 = [null,null,null,null,null,null,null];
(statearr_90915[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_90915[(1)] = (1));

return statearr_90915;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_90910){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90916){if((e90916 instanceof Object)){
var ex__9301__auto__ = e90916;
var statearr_90917_90932 = state_90910;
(statearr_90917_90932[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90933 = state_90910;
state_90910 = G__90933;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_90910){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_90910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_90918 = f__9319__auto__.call(null);
(statearr_90918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90918;
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
return (function (state_90923){
var state_val_90924 = (state_90923[(1)]);
if((state_val_90924 === (1))){
var inst_90919 = [cljs.core.str("ERROR: Invalid line: there is nothing to link "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_90923__$1 = state_90923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90923__$1,(2),rc,inst_90919);
} else {
if((state_val_90924 === (2))){
var inst_90921 = (state_90923[(2)]);
var state_90923__$1 = state_90923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90923__$1,inst_90921);
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
var statearr_90928 = [null,null,null,null,null,null,null];
(statearr_90928[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_90928[(1)] = (1));

return statearr_90928;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_90923){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90929){if((e90929 instanceof Object)){
var ex__9301__auto__ = e90929;
var statearr_90930_90934 = state_90923;
(statearr_90930_90934[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90935 = state_90923;
state_90923 = G__90935;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_90923){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_90923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_90931 = f__9319__auto__.call(null);
(statearr_90931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90931;
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
return (function (state_91006){
var state_val_91007 = (state_91006[(1)]);
if((state_val_91007 === (1))){
var state_91006__$1 = state_91006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91006__$1,(2),chan_linkable_path);
} else {
if((state_val_91007 === (2))){
var inst_90992 = (state_91006[(7)]);
var inst_90993 = (state_91006[(8)]);
var inst_90992__$1 = (state_91006[(2)]);
var inst_90993__$1 = cljs.core.async.chan.call(null,(1));
var inst_90994 = (function (){var linkable_path = inst_90992__$1;
var rc = inst_90993__$1;
return ((function (linkable_path,rc,inst_90992,inst_90993,inst_90992__$1,inst_90993__$1,state_val_91007,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_90992,inst_90993,inst_90992__$1,inst_90993__$1,state_val_91007,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_90992,inst_90993,inst_90992__$1,inst_90993__$1,state_val_91007,c__9318__auto__){
return (function (state_91012){
var state_val_91013 = (state_91012[(1)]);
if((state_val_91013 === (1))){
var inst_91008 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_91012__$1 = state_91012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91012__$1,(2),rc,inst_91008);
} else {
if((state_val_91013 === (2))){
var inst_91010 = (state_91012[(2)]);
var state_91012__$1 = state_91012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91012__$1,inst_91010);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_90992,inst_90993,inst_90992__$1,inst_90993__$1,state_val_91007,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_90992,inst_90993,inst_90992__$1,inst_90993__$1,state_val_91007,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_91017 = [null,null,null,null,null,null,null];
(statearr_91017[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_91017[(1)] = (1));

return statearr_91017;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_91012){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91018){if((e91018 instanceof Object)){
var ex__9301__auto__ = e91018;
var statearr_91019_91046 = state_91012;
(statearr_91019_91046[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91047 = state_91012;
state_91012 = G__91047;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_91012){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_91012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_90992,inst_90993,inst_90992__$1,inst_90993__$1,state_val_91007,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91020 = f__9319__auto__.call(null);
(statearr_91020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_90992,inst_90993,inst_90992__$1,inst_90993__$1,state_val_91007,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_90992,inst_90993,inst_90992__$1,inst_90993__$1,state_val_91007,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_90992,inst_90993,inst_90992__$1,inst_90993__$1,state_val_91007,c__9318__auto__){
return (function (state_91024){
var state_val_91025 = (state_91024[(1)]);
if((state_val_91025 === (1))){
var state_91024__$1 = state_91024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91024__$1,(2),rc,linkable_path);
} else {
if((state_val_91025 === (2))){
var inst_91022 = (state_91024[(2)]);
var state_91024__$1 = state_91024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91024__$1,inst_91022);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_90992,inst_90993,inst_90992__$1,inst_90993__$1,state_val_91007,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_90992,inst_90993,inst_90992__$1,inst_90993__$1,state_val_91007,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_91029 = [null,null,null,null,null,null,null];
(statearr_91029[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_91029[(1)] = (1));

return statearr_91029;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_91024){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91030){if((e91030 instanceof Object)){
var ex__9301__auto__ = e91030;
var statearr_91031_91048 = state_91024;
(statearr_91031_91048[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91049 = state_91024;
state_91024 = G__91049;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_91024){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_91024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_90992,inst_90993,inst_90992__$1,inst_90993__$1,state_val_91007,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91032 = f__9319__auto__.call(null);
(statearr_91032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_90992,inst_90993,inst_90992__$1,inst_90993__$1,state_val_91007,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_90992,inst_90993,inst_90992__$1,inst_90993__$1,state_val_91007,c__9318__auto__))
})();
var inst_90995 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_90992__$1);
var state_91006__$1 = (function (){var statearr_91033 = state_91006;
(statearr_91033[(7)] = inst_90992__$1);

(statearr_91033[(8)] = inst_90993__$1);

(statearr_91033[(9)] = inst_90994);

return statearr_91033;
})();
if(cljs.core.truth_(inst_90995)){
var statearr_91034_91050 = state_91006__$1;
(statearr_91034_91050[(1)] = (3));

} else {
var statearr_91035_91051 = state_91006__$1;
(statearr_91035_91051[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91007 === (3))){
var inst_90992 = (state_91006[(7)]);
var inst_90993 = (state_91006[(8)]);
var state_91006__$1 = state_91006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91006__$1,(6),inst_90993,inst_90992);
} else {
if((state_val_91007 === (4))){
var inst_90992 = (state_91006[(7)]);
var inst_90994 = (state_91006[(9)]);
var inst_91000 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_90992,inst_90994);
var state_91006__$1 = state_91006;
var statearr_91036_91052 = state_91006__$1;
(statearr_91036_91052[(2)] = inst_91000);

(statearr_91036_91052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91007 === (5))){
var inst_90993 = (state_91006[(8)]);
var inst_91002 = (state_91006[(2)]);
var state_91006__$1 = (function (){var statearr_91037 = state_91006;
(statearr_91037[(10)] = inst_91002);

return statearr_91037;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91006__$1,(7),inst_90993);
} else {
if((state_val_91007 === (6))){
var inst_90998 = (state_91006[(2)]);
var state_91006__$1 = state_91006;
var statearr_91038_91053 = state_91006__$1;
(statearr_91038_91053[(2)] = inst_90998);

(statearr_91038_91053[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91007 === (7))){
var inst_91004 = (state_91006[(2)]);
var state_91006__$1 = state_91006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91006__$1,inst_91004);
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
var statearr_91042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_91042[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_91042[(1)] = (1));

return statearr_91042;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_91006){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91043){if((e91043 instanceof Object)){
var ex__9301__auto__ = e91043;
var statearr_91044_91054 = state_91006;
(statearr_91044_91054[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91055 = state_91006;
state_91006 = G__91055;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_91006){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_91006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91045 = f__9319__auto__.call(null);
(statearr_91045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_91045;
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
return (function (state_91126){
var state_val_91127 = (state_91126[(1)]);
if((state_val_91127 === (1))){
var state_91126__$1 = state_91126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91126__$1,(2),chan_linkable_path_that_wants_linking);
} else {
if((state_val_91127 === (2))){
var inst_91113 = (state_91126[(7)]);
var inst_91112 = (state_91126[(8)]);
var inst_91112__$1 = (state_91126[(2)]);
var inst_91113__$1 = cljs.core.async.chan.call(null,(1));
var inst_91114 = (function (){var linkable_path = inst_91112__$1;
var rc = inst_91113__$1;
return ((function (linkable_path,rc,inst_91113,inst_91112,inst_91112__$1,inst_91113__$1,state_val_91127,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_91113,inst_91112,inst_91112__$1,inst_91113__$1,state_val_91127,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_91113,inst_91112,inst_91112__$1,inst_91113__$1,state_val_91127,c__9318__auto__){
return (function (state_91132){
var state_val_91133 = (state_91132[(1)]);
if((state_val_91133 === (1))){
var inst_91128 = [cljs.core.str("ERROR: "),cljs.core.str(linkable_path),cljs.core.str(" already has a version on this system; please remove this file and re-run this command.")].join('');
var state_91132__$1 = state_91132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91132__$1,(2),rc,inst_91128);
} else {
if((state_val_91133 === (2))){
var inst_91130 = (state_91132[(2)]);
var state_91132__$1 = state_91132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91132__$1,inst_91130);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_91113,inst_91112,inst_91112__$1,inst_91113__$1,state_val_91127,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_91113,inst_91112,inst_91112__$1,inst_91113__$1,state_val_91127,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_91137 = [null,null,null,null,null,null,null];
(statearr_91137[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_91137[(1)] = (1));

return statearr_91137;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_91132){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91138){if((e91138 instanceof Object)){
var ex__9301__auto__ = e91138;
var statearr_91139_91166 = state_91132;
(statearr_91139_91166[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91167 = state_91132;
state_91132 = G__91167;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_91132){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_91132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_91113,inst_91112,inst_91112__$1,inst_91113__$1,state_val_91127,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91140 = f__9319__auto__.call(null);
(statearr_91140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_91113,inst_91112,inst_91112__$1,inst_91113__$1,state_val_91127,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_91113,inst_91112,inst_91112__$1,inst_91113__$1,state_val_91127,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_91113,inst_91112,inst_91112__$1,inst_91113__$1,state_val_91127,c__9318__auto__){
return (function (state_91144){
var state_val_91145 = (state_91144[(1)]);
if((state_val_91145 === (1))){
var state_91144__$1 = state_91144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91144__$1,(2),rc,linkable_path);
} else {
if((state_val_91145 === (2))){
var inst_91142 = (state_91144[(2)]);
var state_91144__$1 = state_91144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91144__$1,inst_91142);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_91113,inst_91112,inst_91112__$1,inst_91113__$1,state_val_91127,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_91113,inst_91112,inst_91112__$1,inst_91113__$1,state_val_91127,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_91149 = [null,null,null,null,null,null,null];
(statearr_91149[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_91149[(1)] = (1));

return statearr_91149;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_91144){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91150){if((e91150 instanceof Object)){
var ex__9301__auto__ = e91150;
var statearr_91151_91168 = state_91144;
(statearr_91151_91168[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91169 = state_91144;
state_91144 = G__91169;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_91144){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_91144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_91113,inst_91112,inst_91112__$1,inst_91113__$1,state_val_91127,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91152 = f__9319__auto__.call(null);
(statearr_91152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_91113,inst_91112,inst_91112__$1,inst_91113__$1,state_val_91127,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_91113,inst_91112,inst_91112__$1,inst_91113__$1,state_val_91127,c__9318__auto__))
})();
var inst_91115 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_91112__$1);
var state_91126__$1 = (function (){var statearr_91153 = state_91126;
(statearr_91153[(7)] = inst_91113__$1);

(statearr_91153[(8)] = inst_91112__$1);

(statearr_91153[(9)] = inst_91114);

return statearr_91153;
})();
if(cljs.core.truth_(inst_91115)){
var statearr_91154_91170 = state_91126__$1;
(statearr_91154_91170[(1)] = (3));

} else {
var statearr_91155_91171 = state_91126__$1;
(statearr_91155_91171[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91127 === (3))){
var inst_91113 = (state_91126[(7)]);
var inst_91112 = (state_91126[(8)]);
var state_91126__$1 = state_91126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91126__$1,(6),inst_91113,inst_91112);
} else {
if((state_val_91127 === (4))){
var inst_91112 = (state_91126[(8)]);
var inst_91114 = (state_91126[(9)]);
var inst_91120 = drop_dot.core.pure_js.pathExists(inst_91112,inst_91114);
var state_91126__$1 = state_91126;
var statearr_91156_91172 = state_91126__$1;
(statearr_91156_91172[(2)] = inst_91120);

(statearr_91156_91172[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91127 === (5))){
var inst_91113 = (state_91126[(7)]);
var inst_91122 = (state_91126[(2)]);
var state_91126__$1 = (function (){var statearr_91157 = state_91126;
(statearr_91157[(10)] = inst_91122);

return statearr_91157;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91126__$1,(7),inst_91113);
} else {
if((state_val_91127 === (6))){
var inst_91118 = (state_91126[(2)]);
var state_91126__$1 = state_91126;
var statearr_91158_91173 = state_91126__$1;
(statearr_91158_91173[(2)] = inst_91118);

(statearr_91158_91173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91127 === (7))){
var inst_91124 = (state_91126[(2)]);
var state_91126__$1 = state_91126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91126__$1,inst_91124);
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
var statearr_91162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_91162[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_91162[(1)] = (1));

return statearr_91162;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_91126){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91163){if((e91163 instanceof Object)){
var ex__9301__auto__ = e91163;
var statearr_91164_91174 = state_91126;
(statearr_91164_91174[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91175 = state_91126;
state_91126 = G__91175;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_91126){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_91126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91165 = f__9319__auto__.call(null);
(statearr_91165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_91165;
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
return (function (state_91228){
var state_val_91229 = (state_91228[(1)]);
if((state_val_91229 === (1))){
var state_91228__$1 = state_91228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91228__$1,(2),c);
} else {
if((state_val_91229 === (2))){
var inst_91211 = (state_91228[(7)]);
var inst_91210 = (state_91228[(2)]);
var inst_91211__$1 = drop_dot.core.pure_js.localExpandHomeDir(inst_91210);
var inst_91212 = drop_dot.core.pure_js.getDirname(inst_91211__$1);
var inst_91213 = drop_dot.core.pure_js.getBasename(inst_91211__$1);
var inst_91214 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_91211__$1);
var state_91228__$1 = (function (){var statearr_91230 = state_91228;
(statearr_91230[(7)] = inst_91211__$1);

(statearr_91230[(8)] = inst_91213);

(statearr_91230[(9)] = inst_91212);

return statearr_91230;
})();
if(cljs.core.truth_(inst_91214)){
var statearr_91231_91242 = state_91228__$1;
(statearr_91231_91242[(1)] = (3));

} else {
var statearr_91232_91243 = state_91228__$1;
(statearr_91232_91243[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91229 === (3))){
var inst_91211 = (state_91228[(7)]);
var inst_91216 = [cljs.core.str(inst_91211)].join('');
var inst_91217 = cljs.core.println.call(null,inst_91216);
var state_91228__$1 = state_91228;
var statearr_91233_91244 = state_91228__$1;
(statearr_91233_91244[(2)] = inst_91217);

(statearr_91233_91244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91229 === (4))){
var inst_91211 = (state_91228[(7)]);
var inst_91213 = (state_91228[(8)]);
var inst_91212 = (state_91228[(9)]);
var inst_91219 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91220 = [cljs.core.str("mkdir -vp "),cljs.core.str(inst_91212)].join('');
var inst_91221 = [cljs.core.str("ln -sv ~/Dropbox/.drop-dot/"),cljs.core.str(inst_91213),cljs.core.str(" "),cljs.core.str(inst_91211)].join('');
var inst_91222 = [inst_91220,inst_91221];
var inst_91223 = (new cljs.core.PersistentVector(null,2,(5),inst_91219,inst_91222,null));
var inst_91224 = drop_dot.core.exec_vec_of_commands.call(null,inst_91223);
var state_91228__$1 = state_91228;
var statearr_91234_91245 = state_91228__$1;
(statearr_91234_91245[(2)] = inst_91224);

(statearr_91234_91245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91229 === (5))){
var inst_91226 = (state_91228[(2)]);
var state_91228__$1 = state_91228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91228__$1,inst_91226);
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
var statearr_91238 = [null,null,null,null,null,null,null,null,null,null];
(statearr_91238[(0)] = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__);

(statearr_91238[(1)] = (1));

return statearr_91238;
});
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_91228){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91239){if((e91239 instanceof Object)){
var ex__9301__auto__ = e91239;
var statearr_91240_91246 = state_91228;
(statearr_91240_91246[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91247 = state_91228;
state_91228 = G__91247;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__ = function(state_91228){
switch(arguments.length){
case 0:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_91228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91241 = f__9319__auto__.call(null);
(statearr_91241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_91241;
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
return (function (state_91324){
var state_val_91325 = (state_91324[(1)]);
if((state_val_91325 === (7))){
var inst_91320 = (state_91324[(2)]);
var state_91324__$1 = state_91324;
var statearr_91327_91352 = state_91324__$1;
(statearr_91327_91352[(2)] = inst_91320);

(statearr_91327_91352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91325 === (1))){
var inst_91300 = chan_config;
var state_91324__$1 = (function (){var statearr_91328 = state_91324;
(statearr_91328[(7)] = inst_91300);

return statearr_91328;
})();
var statearr_91329_91353 = state_91324__$1;
(statearr_91329_91353[(2)] = null);

(statearr_91329_91353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91325 === (4))){
var inst_91303 = (state_91324[(8)]);
var inst_91303__$1 = (state_91324[(2)]);
var state_91324__$1 = (function (){var statearr_91330 = state_91324;
(statearr_91330[(8)] = inst_91303__$1);

return statearr_91330;
})();
if(cljs.core.truth_(inst_91303__$1)){
var statearr_91331_91354 = state_91324__$1;
(statearr_91331_91354[(1)] = (5));

} else {
var statearr_91332_91355 = state_91324__$1;
(statearr_91332_91355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91325 === (13))){
var inst_91300 = (state_91324[(7)]);
var inst_91316 = (state_91324[(2)]);
var tmp91326 = inst_91300;
var inst_91300__$1 = tmp91326;
var state_91324__$1 = (function (){var statearr_91333 = state_91324;
(statearr_91333[(7)] = inst_91300__$1);

(statearr_91333[(9)] = inst_91316);

return statearr_91333;
})();
var statearr_91334_91356 = state_91324__$1;
(statearr_91334_91356[(2)] = null);

(statearr_91334_91356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91325 === (6))){
var state_91324__$1 = state_91324;
var statearr_91335_91357 = state_91324__$1;
(statearr_91335_91357[(2)] = null);

(statearr_91335_91357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91325 === (3))){
var inst_91322 = (state_91324[(2)]);
var state_91324__$1 = state_91324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91324__$1,inst_91322);
} else {
if((state_val_91325 === (12))){
var state_91324__$1 = state_91324;
var statearr_91336_91358 = state_91324__$1;
(statearr_91336_91358[(2)] = null);

(statearr_91336_91358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91325 === (2))){
var inst_91300 = (state_91324[(7)]);
var state_91324__$1 = state_91324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91324__$1,(4),inst_91300);
} else {
if((state_val_91325 === (11))){
var inst_91303 = (state_91324[(8)]);
var inst_91313 = drop_dot.core.link_line.call(null,inst_91303);
var state_91324__$1 = state_91324;
var statearr_91337_91359 = state_91324__$1;
(statearr_91337_91359[(2)] = inst_91313);

(statearr_91337_91359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91325 === (9))){
var state_91324__$1 = state_91324;
var statearr_91338_91360 = state_91324__$1;
(statearr_91338_91360[(2)] = null);

(statearr_91338_91360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91325 === (5))){
var inst_91305 = cljs.core._EQ_.call(null,cmd,"drop");
var state_91324__$1 = state_91324;
if(inst_91305){
var statearr_91339_91361 = state_91324__$1;
(statearr_91339_91361[(1)] = (8));

} else {
var statearr_91340_91362 = state_91324__$1;
(statearr_91340_91362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91325 === (10))){
var inst_91310 = (state_91324[(2)]);
var inst_91311 = cljs.core._EQ_.call(null,cmd,"link");
var state_91324__$1 = (function (){var statearr_91341 = state_91324;
(statearr_91341[(10)] = inst_91310);

return statearr_91341;
})();
if(inst_91311){
var statearr_91342_91363 = state_91324__$1;
(statearr_91342_91363[(1)] = (11));

} else {
var statearr_91343_91364 = state_91324__$1;
(statearr_91343_91364[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91325 === (8))){
var inst_91303 = (state_91324[(8)]);
var inst_91307 = drop_dot.core.drop_line.call(null,inst_91303);
var state_91324__$1 = state_91324;
var statearr_91344_91365 = state_91324__$1;
(statearr_91344_91365[(2)] = inst_91307);

(statearr_91344_91365[(1)] = (10));


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
var statearr_91348 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_91348[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__);

(statearr_91348[(1)] = (1));

return statearr_91348;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1 = (function (state_91324){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91349){if((e91349 instanceof Object)){
var ex__9301__auto__ = e91349;
var statearr_91350_91366 = state_91324;
(statearr_91350_91366[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91367 = state_91324;
state_91324 = G__91367;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__ = function(state_91324){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1.call(this,state_91324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91351 = f__9319__auto__.call(null);
(statearr_91351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_91351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__9318__auto___91464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto___91464,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto___91464,c){
return (function (state_91428){
var state_val_91429 = (state_91428[(1)]);
if((state_val_91429 === (1))){
var inst_91418 = (state_91428[(7)]);
var inst_91417 = (state_91428[(8)]);
var inst_91416 = (state_91428[(9)]);
var inst_91416__$1 = cljs.nodejs.require.call(null,"../js/pure-js.js");
var inst_91417__$1 = cljs.core.async.chan.call(null,(1));
var inst_91418__$1 = (function (){var res = inst_91416__$1;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_91417__$1;
return ((function (res,config_path,wcc,inst_91418,inst_91417,inst_91416,inst_91416__$1,inst_91417__$1,state_val_91429,c__9318__auto___91464,c){
return (function (error,res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,inst_91418,inst_91417,inst_91416,inst_91416__$1,inst_91417__$1,state_val_91429,c__9318__auto___91464,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,inst_91418,inst_91417,inst_91416,inst_91416__$1,inst_91417__$1,state_val_91429,c__9318__auto___91464,c){
return (function (state_91433){
var state_val_91434 = (state_91433[(1)]);
if((state_val_91434 === (1))){
var state_91433__$1 = state_91433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91433__$1,(2),wcc,res__$1);
} else {
if((state_val_91434 === (2))){
var inst_91431 = (state_91433[(2)]);
var state_91433__$1 = state_91433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91433__$1,inst_91431);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,inst_91418,inst_91417,inst_91416,inst_91416__$1,inst_91417__$1,state_val_91429,c__9318__auto___91464,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_91418,inst_91417,inst_91416,inst_91416__$1,inst_91417__$1,state_val_91429,c__9318__auto___91464,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_91438 = [null,null,null,null,null,null,null];
(statearr_91438[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_91438[(1)] = (1));

return statearr_91438;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_91433){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91439){if((e91439 instanceof Object)){
var ex__9301__auto__ = e91439;
var statearr_91440_91465 = state_91433;
(statearr_91440_91465[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91466 = state_91433;
state_91433 = G__91466;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_91433){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_91433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_91418,inst_91417,inst_91416,inst_91416__$1,inst_91417__$1,state_val_91429,c__9318__auto___91464,c))
})();
var state__9320__auto__ = (function (){var statearr_91441 = f__9319__auto__.call(null);
(statearr_91441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,inst_91418,inst_91417,inst_91416,inst_91416__$1,inst_91417__$1,state_val_91429,c__9318__auto___91464,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,inst_91418,inst_91417,inst_91416,inst_91416__$1,inst_91417__$1,state_val_91429,c__9318__auto___91464,c))
})();
var inst_91419 = inst_91416__$1.getFileLineCount("~/Dropbox/.drop-dot/.drop-dot",inst_91418__$1);
var state_91428__$1 = (function (){var statearr_91442 = state_91428;
(statearr_91442[(10)] = inst_91419);

(statearr_91442[(7)] = inst_91418__$1);

(statearr_91442[(8)] = inst_91417__$1);

(statearr_91442[(9)] = inst_91416__$1);

return statearr_91442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91428__$1,(2),inst_91417__$1);
} else {
if((state_val_91429 === (2))){
var inst_91419 = (state_91428[(10)]);
var inst_91418 = (state_91428[(7)]);
var inst_91417 = (state_91428[(8)]);
var inst_91416 = (state_91428[(9)]);
var inst_91421 = (state_91428[(2)]);
var inst_91422 = [cljs.core.str(inst_91421)].join('');
var inst_91423 = parseInt(inst_91422);
var inst_91424 = (function (){var res = inst_91416;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_91417;
var wcc_jammer = inst_91418;
var get_wc = inst_91419;
var lines = inst_91423;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_91419,inst_91418,inst_91417,inst_91416,inst_91421,inst_91422,inst_91423,state_val_91429,c__9318__auto___91464,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_91419,inst_91418,inst_91417,inst_91416,inst_91421,inst_91422,inst_91423,state_val_91429,c__9318__auto___91464,c))
})();
var inst_91425 = (function (){var res = inst_91416;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_91417;
var wcc_jammer = inst_91418;
var get_wc = inst_91419;
var lines = inst_91423;
var close_if_done = inst_91424;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91419,inst_91418,inst_91417,inst_91416,inst_91421,inst_91422,inst_91423,inst_91424,state_val_91429,c__9318__auto___91464,c){
return (function (res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91419,inst_91418,inst_91417,inst_91416,inst_91421,inst_91422,inst_91423,inst_91424,state_val_91429,c__9318__auto___91464,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91419,inst_91418,inst_91417,inst_91416,inst_91421,inst_91422,inst_91423,inst_91424,state_val_91429,c__9318__auto___91464,c){
return (function (state_91447){
var state_val_91448 = (state_91447[(1)]);
if((state_val_91448 === (1))){
var state_91447__$1 = state_91447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91447__$1,(2),c,res__$1);
} else {
if((state_val_91448 === (2))){
var inst_91444 = (state_91447[(2)]);
var inst_91445 = close_if_done.call(null);
var state_91447__$1 = (function (){var statearr_91449 = state_91447;
(statearr_91449[(7)] = inst_91444);

return statearr_91449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91447__$1,inst_91445);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91419,inst_91418,inst_91417,inst_91416,inst_91421,inst_91422,inst_91423,inst_91424,state_val_91429,c__9318__auto___91464,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91419,inst_91418,inst_91417,inst_91416,inst_91421,inst_91422,inst_91423,inst_91424,state_val_91429,c__9318__auto___91464,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_91453 = [null,null,null,null,null,null,null,null];
(statearr_91453[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_91453[(1)] = (1));

return statearr_91453;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_91447){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91454){if((e91454 instanceof Object)){
var ex__9301__auto__ = e91454;
var statearr_91455_91467 = state_91447;
(statearr_91455_91467[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91468 = state_91447;
state_91447 = G__91468;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_91447){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_91447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91419,inst_91418,inst_91417,inst_91416,inst_91421,inst_91422,inst_91423,inst_91424,state_val_91429,c__9318__auto___91464,c))
})();
var state__9320__auto__ = (function (){var statearr_91456 = f__9319__auto__.call(null);
(statearr_91456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91419,inst_91418,inst_91417,inst_91416,inst_91421,inst_91422,inst_91423,inst_91424,state_val_91429,c__9318__auto___91464,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91419,inst_91418,inst_91417,inst_91416,inst_91421,inst_91422,inst_91423,inst_91424,state_val_91429,c__9318__auto___91464,c))
})();
var inst_91426 = inst_91416.getLinesFromFile("~/Dropbox/.drop-dot/.drop-dot",inst_91425);
var state_91428__$1 = state_91428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91428__$1,inst_91426);
} else {
return null;
}
}
});})(c__9318__auto___91464,c))
;
return ((function (switch__9297__auto__,c__9318__auto___91464,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_91460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_91460[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_91460[(1)] = (1));

return statearr_91460;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_91428){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91461){if((e91461 instanceof Object)){
var ex__9301__auto__ = e91461;
var statearr_91462_91469 = state_91428;
(statearr_91462_91469[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91470 = state_91428;
state_91428 = G__91470;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_91428){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_91428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto___91464,c))
})();
var state__9320__auto__ = (function (){var statearr_91463 = f__9319__auto__.call(null);
(statearr_91463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto___91464);

return statearr_91463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto___91464,c))
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
var len__7018__auto___91472 = arguments.length;
var i__7019__auto___91473 = (0);
while(true){
if((i__7019__auto___91473 < len__7018__auto___91472)){
args__7025__auto__.push((arguments[i__7019__auto___91473]));

var G__91474 = (i__7019__auto___91473 + (1));
i__7019__auto___91473 = G__91474;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq91471){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq91471));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map