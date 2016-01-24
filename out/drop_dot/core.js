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
return (function (state_64741){
var state_val_64742 = (state_64741[(1)]);
if((state_val_64742 === (1))){
var state_64741__$1 = state_64741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64741__$1,(2),c,arg);
} else {
if((state_val_64742 === (2))){
var inst_64739 = (state_64741[(2)]);
var state_64741__$1 = state_64741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64741__$1,inst_64739);
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
var statearr_64746 = [null,null,null,null,null,null,null];
(statearr_64746[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__);

(statearr_64746[(1)] = (1));

return statearr_64746;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1 = (function (state_64741){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_64741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e64747){if((e64747 instanceof Object)){
var ex__10431__auto__ = e64747;
var statearr_64748_64750 = state_64741;
(statearr_64748_64750[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64751 = state_64741;
state_64741 = G__64751;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__ = function(state_64741){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1.call(this,state_64741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_64749 = f__10449__auto__.call(null);
(statearr_64749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_64749;
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
return (function (state_64767){
var state_val_64768 = (state_64767[(1)]);
if((state_val_64768 === (1))){
var state_64767__$1 = state_64767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64767__$1,(2),c,arg);
} else {
if((state_val_64768 === (2))){
var inst_64765 = (state_64767[(2)]);
var state_64767__$1 = state_64767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64767__$1,inst_64765);
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
var statearr_64772 = [null,null,null,null,null,null,null];
(statearr_64772[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__);

(statearr_64772[(1)] = (1));

return statearr_64772;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1 = (function (state_64767){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_64767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e64773){if((e64773 instanceof Object)){
var ex__10431__auto__ = e64773;
var statearr_64774_64776 = state_64767;
(statearr_64774_64776[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64777 = state_64767;
state_64767 = G__64777;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__ = function(state_64767){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1.call(this,state_64767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_64775 = f__10449__auto__.call(null);
(statearr_64775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_64775;
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
return (function (state_64793){
var state_val_64794 = (state_64793[(1)]);
if((state_val_64794 === (1))){
var state_64793__$1 = state_64793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64793__$1,(2),d,res__$1);
} else {
if((state_val_64794 === (2))){
var inst_64791 = (state_64793[(2)]);
var state_64793__$1 = state_64793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64793__$1,inst_64791);
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
var statearr_64798 = [null,null,null,null,null,null,null];
(statearr_64798[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__);

(statearr_64798[(1)] = (1));

return statearr_64798;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1 = (function (state_64793){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_64793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e64799){if((e64799 instanceof Object)){
var ex__10431__auto__ = e64799;
var statearr_64800_64802 = state_64793;
(statearr_64800_64802[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64803 = state_64793;
state_64793 = G__64803;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__ = function(state_64793){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1.call(this,state_64793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__,res,d))
})();
var state__10450__auto__ = (function (){var statearr_64801 = f__10449__auto__.call(null);
(statearr_64801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_64801;
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
return (function (state_64831){
var state_val_64832 = (state_64831[(1)]);
if((state_val_64832 === (1))){
var inst_64824 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_64831__$1 = state_64831;
if(cljs.core.truth_(inst_64824)){
var statearr_64833_64844 = state_64831__$1;
(statearr_64833_64844[(1)] = (2));

} else {
var statearr_64834_64845 = state_64831__$1;
(statearr_64834_64845[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64832 === (2))){
var state_64831__$1 = state_64831;
var statearr_64835_64846 = state_64831__$1;
(statearr_64835_64846[(2)] = line);

(statearr_64835_64846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64832 === (3))){
var inst_64827 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_64831__$1 = state_64831;
var statearr_64836_64847 = state_64831__$1;
(statearr_64836_64847[(2)] = inst_64827);

(statearr_64836_64847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64832 === (4))){
var inst_64829 = (state_64831[(2)]);
var state_64831__$1 = state_64831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64831__$1,inst_64829);
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
var statearr_64840 = [null,null,null,null,null,null,null];
(statearr_64840[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__);

(statearr_64840[(1)] = (1));

return statearr_64840;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1 = (function (state_64831){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_64831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e64841){if((e64841 instanceof Object)){
var ex__10431__auto__ = e64841;
var statearr_64842_64848 = state_64831;
(statearr_64842_64848[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64849 = state_64831;
state_64831 = G__64849;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__ = function(state_64831){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1.call(this,state_64831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_64843 = f__10449__auto__.call(null);
(statearr_64843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_64843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
drop_dot.core.protocol_msg_QMARK_ = (function drop_dot$core$protocol_msg_QMARK_(arg){
return (clojure.string.includes_QMARK_.call(null,arg,"ERROR: ")) || (clojure.string.includes_QMARK_.call(null,arg,"NOTICE: "));
});
