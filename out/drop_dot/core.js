// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
drop_dot.core.chan_config__GT_exec_drop_dot = (function drop_dot$core$chan_config__GT_exec_drop_dot(chan_config,cmd){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__){
return (function (state_30501){
var state_val_30502 = (state_30501[(1)]);
if((state_val_30502 === (7))){
var inst_30496 = (state_30501[(2)]);
var inst_30497 = cljs.core.println.call(null,"done");
var state_30501__$1 = (function (){var statearr_30504 = state_30501;
(statearr_30504[(7)] = inst_30496);

return statearr_30504;
})();
var statearr_30505_30530 = state_30501__$1;
(statearr_30505_30530[(2)] = inst_30497);

(statearr_30505_30530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (1))){
var inst_30476 = chan_config;
var state_30501__$1 = (function (){var statearr_30506 = state_30501;
(statearr_30506[(8)] = inst_30476);

return statearr_30506;
})();
var statearr_30507_30531 = state_30501__$1;
(statearr_30507_30531[(2)] = null);

(statearr_30507_30531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (4))){
var inst_30479 = (state_30501[(9)]);
var inst_30479__$1 = (state_30501[(2)]);
var state_30501__$1 = (function (){var statearr_30508 = state_30501;
(statearr_30508[(9)] = inst_30479__$1);

return statearr_30508;
})();
if(cljs.core.truth_(inst_30479__$1)){
var statearr_30509_30532 = state_30501__$1;
(statearr_30509_30532[(1)] = (5));

} else {
var statearr_30510_30533 = state_30501__$1;
(statearr_30510_30533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (13))){
var inst_30476 = (state_30501[(8)]);
var inst_30492 = (state_30501[(2)]);
var tmp30503 = inst_30476;
var inst_30476__$1 = tmp30503;
var state_30501__$1 = (function (){var statearr_30511 = state_30501;
(statearr_30511[(8)] = inst_30476__$1);

(statearr_30511[(10)] = inst_30492);

return statearr_30511;
})();
var statearr_30512_30534 = state_30501__$1;
(statearr_30512_30534[(2)] = null);

(statearr_30512_30534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (6))){
var state_30501__$1 = state_30501;
var statearr_30513_30535 = state_30501__$1;
(statearr_30513_30535[(2)] = null);

(statearr_30513_30535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (3))){
var inst_30499 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30501__$1,inst_30499);
} else {
if((state_val_30502 === (12))){
var state_30501__$1 = state_30501;
var statearr_30514_30536 = state_30501__$1;
(statearr_30514_30536[(2)] = null);

(statearr_30514_30536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (2))){
var inst_30476 = (state_30501[(8)]);
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30501__$1,(4),inst_30476);
} else {
if((state_val_30502 === (11))){
var inst_30479 = (state_30501[(9)]);
var inst_30489 = drop_dot.core.link_line.call(null,inst_30479);
var state_30501__$1 = state_30501;
var statearr_30515_30537 = state_30501__$1;
(statearr_30515_30537[(2)] = inst_30489);

(statearr_30515_30537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (9))){
var state_30501__$1 = state_30501;
var statearr_30516_30538 = state_30501__$1;
(statearr_30516_30538[(2)] = null);

(statearr_30516_30538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (5))){
var inst_30481 = cljs.core._EQ_.call(null,cmd,"drop");
var state_30501__$1 = state_30501;
if(inst_30481){
var statearr_30517_30539 = state_30501__$1;
(statearr_30517_30539[(1)] = (8));

} else {
var statearr_30518_30540 = state_30501__$1;
(statearr_30518_30540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (10))){
var inst_30486 = (state_30501[(2)]);
var inst_30487 = cljs.core._EQ_.call(null,cmd,"link");
var state_30501__$1 = (function (){var statearr_30519 = state_30501;
(statearr_30519[(11)] = inst_30486);

return statearr_30519;
})();
if(inst_30487){
var statearr_30520_30541 = state_30501__$1;
(statearr_30520_30541[(1)] = (11));

} else {
var statearr_30521_30542 = state_30501__$1;
(statearr_30521_30542[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (8))){
var inst_30479 = (state_30501[(9)]);
var inst_30483 = drop_dot.core.drop_line.call(null,inst_30479);
var state_30501__$1 = state_30501;
var statearr_30522_30543 = state_30501__$1;
(statearr_30522_30543[(2)] = inst_30483);

(statearr_30522_30543[(1)] = (10));


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
var statearr_30526 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30526[(0)] = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__);

(statearr_30526[(1)] = (1));

return statearr_30526;
});
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____1 = (function (state_30501){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_30501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e30527){if((e30527 instanceof Object)){
var ex__10431__auto__ = e30527;
var statearr_30528_30544 = state_30501;
(statearr_30528_30544[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30545 = state_30501;
state_30501 = G__30545;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__ = function(state_30501){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____1.call(this,state_30501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____0;
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_30529 = f__10449__auto__.call(null);
(statearr_30529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_30529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
drop_dot.core.path_exists_QMARK_ = (function drop_dot$core$path_exists_QMARK_(path){
return null;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10448__auto___30642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___30642,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___30642,c){
return (function (state_30606){
var state_val_30607 = (state_30606[(1)]);
if((state_val_30607 === (1))){
var inst_30596 = (state_30606[(7)]);
var inst_30594 = (state_30606[(8)]);
var inst_30595 = (state_30606[(9)]);
var inst_30594__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_30595__$1 = cljs.core.async.chan.call(null,(1));
var inst_30596__$1 = (function (){var res = inst_30594__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_30595__$1;
return ((function (res,config_path,wcc,inst_30596,inst_30594,inst_30595,inst_30594__$1,inst_30595__$1,state_val_30607,c__10448__auto___30642,c){
return (function (error,res__$1){
var c__10448__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto____$1,res,config_path,wcc,inst_30596,inst_30594,inst_30595,inst_30594__$1,inst_30595__$1,state_val_30607,c__10448__auto___30642,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto____$1,res,config_path,wcc,inst_30596,inst_30594,inst_30595,inst_30594__$1,inst_30595__$1,state_val_30607,c__10448__auto___30642,c){
return (function (state_30611){
var state_val_30612 = (state_30611[(1)]);
if((state_val_30612 === (1))){
var state_30611__$1 = state_30611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30611__$1,(2),wcc,res__$1);
} else {
if((state_val_30612 === (2))){
var inst_30609 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30611__$1,inst_30609);
} else {
return null;
}
}
});})(c__10448__auto____$1,res,config_path,wcc,inst_30596,inst_30594,inst_30595,inst_30594__$1,inst_30595__$1,state_val_30607,c__10448__auto___30642,c))
;
return ((function (switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,inst_30596,inst_30594,inst_30595,inst_30594__$1,inst_30595__$1,state_val_30607,c__10448__auto___30642,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0 = (function (){
var statearr_30616 = [null,null,null,null,null,null,null];
(statearr_30616[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10428__auto__);

(statearr_30616[(1)] = (1));

return statearr_30616;
});
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1 = (function (state_30611){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_30611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e30617){if((e30617 instanceof Object)){
var ex__10431__auto__ = e30617;
var statearr_30618_30643 = state_30611;
(statearr_30618_30643[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30644 = state_30611;
state_30611 = G__30644;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = function(state_30611){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1.call(this,state_30611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,inst_30596,inst_30594,inst_30595,inst_30594__$1,inst_30595__$1,state_val_30607,c__10448__auto___30642,c))
})();
var state__10450__auto__ = (function (){var statearr_30619 = f__10449__auto__.call(null);
(statearr_30619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto____$1);

return statearr_30619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto____$1,res,config_path,wcc,inst_30596,inst_30594,inst_30595,inst_30594__$1,inst_30595__$1,state_val_30607,c__10448__auto___30642,c))
);

return c__10448__auto____$1;
});
;})(res,config_path,wcc,inst_30596,inst_30594,inst_30595,inst_30594__$1,inst_30595__$1,state_val_30607,c__10448__auto___30642,c))
})();
var inst_30597 = inst_30594__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_30596__$1);
var state_30606__$1 = (function (){var statearr_30620 = state_30606;
(statearr_30620[(7)] = inst_30596__$1);

(statearr_30620[(10)] = inst_30597);

(statearr_30620[(8)] = inst_30594__$1);

(statearr_30620[(9)] = inst_30595__$1);

return statearr_30620;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30606__$1,(2),inst_30595__$1);
} else {
if((state_val_30607 === (2))){
var inst_30596 = (state_30606[(7)]);
var inst_30597 = (state_30606[(10)]);
var inst_30594 = (state_30606[(8)]);
var inst_30595 = (state_30606[(9)]);
var inst_30599 = (state_30606[(2)]);
var inst_30600 = [cljs.core.str(inst_30599)].join('');
var inst_30601 = parseInt(inst_30600);
var inst_30602 = (function (){var res = inst_30594;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_30595;
var wcc_jammer = inst_30596;
var get_wc = inst_30597;
var lines = inst_30601;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_30596,inst_30597,inst_30594,inst_30595,inst_30599,inst_30600,inst_30601,state_val_30607,c__10448__auto___30642,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_30596,inst_30597,inst_30594,inst_30595,inst_30599,inst_30600,inst_30601,state_val_30607,c__10448__auto___30642,c))
})();
var inst_30603 = (function (){var res = inst_30594;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_30595;
var wcc_jammer = inst_30596;
var get_wc = inst_30597;
var lines = inst_30601;
var close_if_done = inst_30602;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_30596,inst_30597,inst_30594,inst_30595,inst_30599,inst_30600,inst_30601,inst_30602,state_val_30607,c__10448__auto___30642,c){
return (function (res__$1){
var c__10448__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_30596,inst_30597,inst_30594,inst_30595,inst_30599,inst_30600,inst_30601,inst_30602,state_val_30607,c__10448__auto___30642,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_30596,inst_30597,inst_30594,inst_30595,inst_30599,inst_30600,inst_30601,inst_30602,state_val_30607,c__10448__auto___30642,c){
return (function (state_30625){
var state_val_30626 = (state_30625[(1)]);
if((state_val_30626 === (1))){
var state_30625__$1 = state_30625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30625__$1,(2),c,res__$1);
} else {
if((state_val_30626 === (2))){
var inst_30622 = (state_30625[(2)]);
var inst_30623 = close_if_done.call(null);
var state_30625__$1 = (function (){var statearr_30627 = state_30625;
(statearr_30627[(7)] = inst_30622);

return statearr_30627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30625__$1,inst_30623);
} else {
return null;
}
}
});})(c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_30596,inst_30597,inst_30594,inst_30595,inst_30599,inst_30600,inst_30601,inst_30602,state_val_30607,c__10448__auto___30642,c))
;
return ((function (switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_30596,inst_30597,inst_30594,inst_30595,inst_30599,inst_30600,inst_30601,inst_30602,state_val_30607,c__10448__auto___30642,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0 = (function (){
var statearr_30631 = [null,null,null,null,null,null,null,null];
(statearr_30631[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10428__auto__);

(statearr_30631[(1)] = (1));

return statearr_30631;
});
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1 = (function (state_30625){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_30625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e30632){if((e30632 instanceof Object)){
var ex__10431__auto__ = e30632;
var statearr_30633_30645 = state_30625;
(statearr_30633_30645[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30646 = state_30625;
state_30625 = G__30646;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = function(state_30625){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1.call(this,state_30625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_30596,inst_30597,inst_30594,inst_30595,inst_30599,inst_30600,inst_30601,inst_30602,state_val_30607,c__10448__auto___30642,c))
})();
var state__10450__auto__ = (function (){var statearr_30634 = f__10449__auto__.call(null);
(statearr_30634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto____$1);

return statearr_30634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_30596,inst_30597,inst_30594,inst_30595,inst_30599,inst_30600,inst_30601,inst_30602,state_val_30607,c__10448__auto___30642,c))
);

return c__10448__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_30596,inst_30597,inst_30594,inst_30595,inst_30599,inst_30600,inst_30601,inst_30602,state_val_30607,c__10448__auto___30642,c))
})();
var inst_30604 = inst_30594.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_30603);
var state_30606__$1 = state_30606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30606__$1,inst_30604);
} else {
return null;
}
}
});})(c__10448__auto___30642,c))
;
return ((function (switch__10427__auto__,c__10448__auto___30642,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0 = (function (){
var statearr_30638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30638[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10428__auto__);

(statearr_30638[(1)] = (1));

return statearr_30638;
});
var drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1 = (function (state_30606){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_30606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e30639){if((e30639 instanceof Object)){
var ex__10431__auto__ = e30639;
var statearr_30640_30647 = state_30606;
(statearr_30640_30647[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30648 = state_30606;
state_30606 = G__30648;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__ = function(state_30606){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1.call(this,state_30606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___30642,c))
})();
var state__10450__auto__ = (function (){var statearr_30641 = f__10449__auto__.call(null);
(statearr_30641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___30642);

return statearr_30641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___30642,c))
);


return c;
});
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__9165__auto__ = [];
var len__9158__auto___30650 = arguments.length;
var i__9159__auto___30651 = (0);
while(true){
if((i__9159__auto___30651 < len__9158__auto___30650)){
args__9165__auto__.push((arguments[i__9159__auto___30651]));

var G__30652 = (i__9159__auto___30651 + (1));
i__9159__auto___30651 = G__30652;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq30649){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30649));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map