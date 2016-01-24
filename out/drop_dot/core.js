// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('cljs.test');
cljs.nodejs.enable_util_print_BANG_.call(null);
drop_dot.core.pure_js = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
drop_dot.core.jam_first_callback_arg_into_chan = (function drop_dot$core$jam_first_callback_arg_into_chan(c){
return (function (arg){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__){
return (function (state_64603){
var state_val_64604 = (state_64603[(1)]);
if((state_val_64604 === (1))){
var state_64603__$1 = state_64603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64603__$1,(2),c,arg);
} else {
if((state_val_64604 === (2))){
var inst_64601 = (state_64603[(2)]);
var state_64603__$1 = state_64603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64603__$1,inst_64601);
} else {
return null;
}
}
});})(c__10448__auto__))
;
return ((function (switch__10427__auto__,c__10448__auto__){
return (function() {
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__ = null;
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____0 = (function (){
var statearr_64608 = [null,null,null,null,null,null,null];
(statearr_64608[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__);

(statearr_64608[(1)] = (1));

return statearr_64608;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1 = (function (state_64603){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_64603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e64609){if((e64609 instanceof Object)){
var ex__10431__auto__ = e64609;
var statearr_64610_64612 = state_64603;
(statearr_64610_64612[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64613 = state_64603;
state_64603 = G__64613;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__ = function(state_64603){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1.call(this,state_64603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_64611 = f__10449__auto__.call(null);
(statearr_64611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_64611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
});
drop_dot.core.jam_second_callback_arg_into_chan = (function drop_dot$core$jam_second_callback_arg_into_chan(c){
return (function (arg){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__){
return (function (state_64629){
var state_val_64630 = (state_64629[(1)]);
if((state_val_64630 === (1))){
var state_64629__$1 = state_64629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64629__$1,(2),c,arg);
} else {
if((state_val_64630 === (2))){
var inst_64627 = (state_64629[(2)]);
var state_64629__$1 = state_64629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64629__$1,inst_64627);
} else {
return null;
}
}
});})(c__10448__auto__))
;
return ((function (switch__10427__auto__,c__10448__auto__){
return (function() {
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__ = null;
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____0 = (function (){
var statearr_64634 = [null,null,null,null,null,null,null];
(statearr_64634[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__);

(statearr_64634[(1)] = (1));

return statearr_64634;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1 = (function (state_64629){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_64629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e64635){if((e64635 instanceof Object)){
var ex__10431__auto__ = e64635;
var statearr_64636_64638 = state_64629;
(statearr_64636_64638[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64639 = state_64629;
state_64629 = G__64639;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__ = function(state_64629){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1.call(this,state_64629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_64637 = f__10449__auto__.call(null);
(statearr_64637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_64637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
});
drop_dot.core.chan_path_exists_QMARK_ = (function drop_dot$core$chan_path_exists_QMARK_(line){
var res = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var d = cljs.core.async.chan.call(null);
res.confirmPathExists(line,((function (res,d){
return (function (res__$1){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__,res,d){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__,res,d){
return (function (state_64655){
var state_val_64656 = (state_64655[(1)]);
if((state_val_64656 === (1))){
var state_64655__$1 = state_64655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64655__$1,(2),d,res__$1);
} else {
if((state_val_64656 === (2))){
var inst_64653 = (state_64655[(2)]);
var state_64655__$1 = state_64655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64655__$1,inst_64653);
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
var statearr_64660 = [null,null,null,null,null,null,null];
(statearr_64660[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__);

(statearr_64660[(1)] = (1));

return statearr_64660;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1 = (function (state_64655){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_64655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e64661){if((e64661 instanceof Object)){
var ex__10431__auto__ = e64661;
var statearr_64662_64664 = state_64655;
(statearr_64662_64664[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64665 = state_64655;
state_64655 = G__64665;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__ = function(state_64655){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1.call(this,state_64655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__,res,d))
})();
var state__10450__auto__ = (function (){var statearr_64663 = f__10449__auto__.call(null);
(statearr_64663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_64663;
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
return (function (state_64693){
var state_val_64694 = (state_64693[(1)]);
if((state_val_64694 === (1))){
var inst_64686 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_64693__$1 = state_64693;
if(cljs.core.truth_(inst_64686)){
var statearr_64695_64706 = state_64693__$1;
(statearr_64695_64706[(1)] = (2));

} else {
var statearr_64696_64707 = state_64693__$1;
(statearr_64696_64707[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64694 === (2))){
var state_64693__$1 = state_64693;
var statearr_64697_64708 = state_64693__$1;
(statearr_64697_64708[(2)] = line);

(statearr_64697_64708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64694 === (3))){
var inst_64689 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_64693__$1 = state_64693;
var statearr_64698_64709 = state_64693__$1;
(statearr_64698_64709[(2)] = inst_64689);

(statearr_64698_64709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64694 === (4))){
var inst_64691 = (state_64693[(2)]);
var state_64693__$1 = state_64693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64693__$1,inst_64691);
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
var statearr_64702 = [null,null,null,null,null,null,null];
(statearr_64702[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__);

(statearr_64702[(1)] = (1));

return statearr_64702;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1 = (function (state_64693){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_64693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e64703){if((e64703 instanceof Object)){
var ex__10431__auto__ = e64703;
var statearr_64704_64710 = state_64693;
(statearr_64704_64710[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64711 = state_64693;
state_64693 = G__64711;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__ = function(state_64693){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1.call(this,state_64693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_64705 = f__10449__auto__.call(null);
(statearr_64705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_64705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
drop_dot.core.protocol_msg_QMARK_ = (function drop_dot$core$protocol_msg_QMARK_(arg){
return (clojure.string.includes_QMARK_.call(null,arg,"ERROR: ")) || (clojure.string.includes_QMARK_.call(null,arg,"NOTICE: "));
});
