// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs.nodejs.enable_util_print_BANG_.call(null);
drop_dot.core.pure_js = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
drop_dot.core.jam_first_callback_arg_into_chan = (function drop_dot$core$jam_first_callback_arg_into_chan(c){
return (function (arg){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_48759){
var state_val_48760 = (state_48759[(1)]);
if((state_val_48760 === (1))){
var state_48759__$1 = state_48759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48759__$1,(2),c,arg);
} else {
if((state_val_48760 === (2))){
var inst_48757 = (state_48759[(2)]);
var state_48759__$1 = state_48759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48759__$1,inst_48757);
} else {
return null;
}
}
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__ = null;
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0 = (function (){
var statearr_48764 = [null,null,null,null,null,null,null];
(statearr_48764[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_48764[(1)] = (1));

return statearr_48764;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_48759){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48765){if((e48765 instanceof Object)){
var ex__9301__auto__ = e48765;
var statearr_48766_48768 = state_48759;
(statearr_48766_48768[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48769 = state_48759;
state_48759 = G__48769;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_48759){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_48759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_48767 = f__9319__auto__.call(null);
(statearr_48767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_48767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
});
drop_dot.core.jam_second_callback_arg_into_chan = (function drop_dot$core$jam_second_callback_arg_into_chan(c){
return (function (arg){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_48785){
var state_val_48786 = (state_48785[(1)]);
if((state_val_48786 === (1))){
var state_48785__$1 = state_48785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48785__$1,(2),c,arg);
} else {
if((state_val_48786 === (2))){
var inst_48783 = (state_48785[(2)]);
var state_48785__$1 = state_48785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48785__$1,inst_48783);
} else {
return null;
}
}
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__ = null;
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0 = (function (){
var statearr_48790 = [null,null,null,null,null,null,null];
(statearr_48790[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_48790[(1)] = (1));

return statearr_48790;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_48785){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48791){if((e48791 instanceof Object)){
var ex__9301__auto__ = e48791;
var statearr_48792_48794 = state_48785;
(statearr_48792_48794[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48795 = state_48785;
state_48785 = G__48795;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_48785){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_48785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_48793 = f__9319__auto__.call(null);
(statearr_48793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_48793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
});
drop_dot.core.chan_vec_cmd__GT_exec = (function drop_dot$core$chan_vec_cmd__GT_exec(input_chan){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_48872){
var state_val_48873 = (state_48872[(1)]);
if((state_val_48873 === (1))){
var state_48872__$1 = state_48872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48872__$1,(2),input_chan);
} else {
if((state_val_48873 === (2))){
var inst_48850 = (state_48872[(2)]);
var inst_48851 = inst_48850;
var state_48872__$1 = (function (){var statearr_48874 = state_48872;
(statearr_48874[(7)] = inst_48851);

return statearr_48874;
})();
var statearr_48875_48902 = state_48872__$1;
(statearr_48875_48902[(2)] = null);

(statearr_48875_48902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48873 === (3))){
var inst_48851 = (state_48872[(7)]);
var inst_48853 = cljs.core.count.call(null,inst_48851);
var inst_48854 = cljs.core._EQ_.call(null,inst_48853,(0));
var state_48872__$1 = state_48872;
if(inst_48854){
var statearr_48876_48903 = state_48872__$1;
(statearr_48876_48903[(1)] = (5));

} else {
var statearr_48877_48904 = state_48872__$1;
(statearr_48877_48904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48873 === (4))){
var inst_48870 = (state_48872[(2)]);
var state_48872__$1 = state_48872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48872__$1,inst_48870);
} else {
if((state_val_48873 === (5))){
var inst_48856 = cljs.core.println.call(null,"done");
var state_48872__$1 = state_48872;
var statearr_48878_48905 = state_48872__$1;
(statearr_48878_48905[(2)] = inst_48856);

(statearr_48878_48905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48873 === (6))){
var inst_48851 = (state_48872[(7)]);
var inst_48858 = cljs.core.async.chan.call(null);
var inst_48859 = cljs.core.first.call(null,inst_48851);
var inst_48860 = (function (){var v = inst_48851;
var rc = inst_48858;
var cmd = inst_48859;
return ((function (v,rc,cmd,inst_48851,inst_48858,inst_48859,state_val_48873,c__9318__auto__){
return (function (res){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,v,rc,cmd,inst_48851,inst_48858,inst_48859,state_val_48873,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,v,rc,cmd,inst_48851,inst_48858,inst_48859,state_val_48873,c__9318__auto__){
return (function (state_48882){
var state_val_48883 = (state_48882[(1)]);
if((state_val_48883 === (1))){
var state_48882__$1 = state_48882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48882__$1,(2),rc,res);
} else {
if((state_val_48883 === (2))){
var inst_48880 = (state_48882[(2)]);
var state_48882__$1 = state_48882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48882__$1,inst_48880);
} else {
return null;
}
}
});})(c__9318__auto____$1,v,rc,cmd,inst_48851,inst_48858,inst_48859,state_val_48873,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_48851,inst_48858,inst_48859,state_val_48873,c__9318__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0 = (function (){
var statearr_48887 = [null,null,null,null,null,null,null];
(statearr_48887[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_48887[(1)] = (1));

return statearr_48887;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_48882){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48888){if((e48888 instanceof Object)){
var ex__9301__auto__ = e48888;
var statearr_48889_48906 = state_48882;
(statearr_48889_48906[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48907 = state_48882;
state_48882 = G__48907;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_48882){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_48882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_48851,inst_48858,inst_48859,state_val_48873,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_48890 = f__9319__auto__.call(null);
(statearr_48890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_48890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,v,rc,cmd,inst_48851,inst_48858,inst_48859,state_val_48873,c__9318__auto__))
);

return c__9318__auto____$1;
});
;})(v,rc,cmd,inst_48851,inst_48858,inst_48859,state_val_48873,c__9318__auto__))
})();
var inst_48861 = drop_dot.core.pure_js.execAndPrint(inst_48859,inst_48860);
var state_48872__$1 = (function (){var statearr_48891 = state_48872;
(statearr_48891[(8)] = inst_48861);

return statearr_48891;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48872__$1,(8),inst_48858);
} else {
if((state_val_48873 === (7))){
var inst_48868 = (state_48872[(2)]);
var state_48872__$1 = state_48872;
var statearr_48892_48908 = state_48872__$1;
(statearr_48892_48908[(2)] = inst_48868);

(statearr_48892_48908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48873 === (8))){
var inst_48851 = (state_48872[(7)]);
var inst_48863 = (state_48872[(2)]);
var inst_48864 = cljs.core.rest.call(null,inst_48851);
var inst_48865 = cljs.core.vec.call(null,inst_48864);
var inst_48851__$1 = inst_48865;
var state_48872__$1 = (function (){var statearr_48893 = state_48872;
(statearr_48893[(9)] = inst_48863);

(statearr_48893[(7)] = inst_48851__$1);

return statearr_48893;
})();
var statearr_48894_48909 = state_48872__$1;
(statearr_48894_48909[(2)] = null);

(statearr_48894_48909[(1)] = (3));


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
var statearr_48898 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48898[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_48898[(1)] = (1));

return statearr_48898;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_48872){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48899){if((e48899 instanceof Object)){
var ex__9301__auto__ = e48899;
var statearr_48900_48910 = state_48872;
(statearr_48900_48910[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48911 = state_48872;
state_48872 = G__48911;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_48872){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_48872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_48901 = f__9319__auto__.call(null);
(statearr_48901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_48901;
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
return (function (state_48923){
var state_val_48924 = (state_48923[(1)]);
if((state_val_48924 === (1))){
var state_48923__$1 = state_48923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48923__$1,v);
} else {
return null;
}
});})(c__9318__auto__,c))
;
return ((function (switch__9297__auto__,c__9318__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0 = (function (){
var statearr_48928 = [null,null,null,null,null,null,null];
(statearr_48928[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__);

(statearr_48928[(1)] = (1));

return statearr_48928;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1 = (function (state_48923){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48929){if((e48929 instanceof Object)){
var ex__9301__auto__ = e48929;
var statearr_48930_48932 = state_48923;
(statearr_48930_48932[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48933 = state_48923;
state_48923 = G__48933;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = function(state_48923){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1.call(this,state_48923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,c))
})();
var state__9320__auto__ = (function (){var statearr_48931 = f__9319__auto__.call(null);
(statearr_48931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_48931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,c))
);

return c__9318__auto__;
})());
});
drop_dot.core.dropdot_folder_exists_QMARK_ = (function drop_dot$core$dropdot_folder_exists_QMARK_(){
return drop_dot.core.pure_js.pathExists("~/Dropbox/.drop-dot");
});
drop_dot.core.dropbox_installed_QMARK_ = (function drop_dot$core$dropbox_installed_QMARK_(){
return drop_dot.core.pure_js.pathExists("~/Dropbox");
});
drop_dot.core.unix_OS_QMARK_ = (function drop_dot$core$unix_OS_QMARK_(){
return (cljs.core._EQ_.call(null,(cljs.nodejs.process["platform"]),"linux")) || (cljs.core._EQ_.call(null,(cljs.nodejs.process["platform"]),"darwin"));
});
drop_dot.core.chan_path_exists_QMARK_ = (function drop_dot$core$chan_path_exists_QMARK_(line){
var res = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var d = cljs.core.async.chan.call(null);
res.confirmPathExists(line,((function (res,d){
return (function (res__$1){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,res,d){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,res,d){
return (function (state_48949){
var state_val_48950 = (state_48949[(1)]);
if((state_val_48950 === (1))){
var state_48949__$1 = state_48949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48949__$1,(2),d,res__$1);
} else {
if((state_val_48950 === (2))){
var inst_48947 = (state_48949[(2)]);
var state_48949__$1 = state_48949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48949__$1,inst_48947);
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
var statearr_48954 = [null,null,null,null,null,null,null];
(statearr_48954[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__);

(statearr_48954[(1)] = (1));

return statearr_48954;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1 = (function (state_48949){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48955){if((e48955 instanceof Object)){
var ex__9301__auto__ = e48955;
var statearr_48956_48958 = state_48949;
(statearr_48956_48958[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48959 = state_48949;
state_48949 = G__48959;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__ = function(state_48949){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1.call(this,state_48949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,res,d))
})();
var state__9320__auto__ = (function (){var statearr_48957 = f__9319__auto__.call(null);
(statearr_48957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_48957;
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
return (function (state_48991){
var state_val_48992 = (state_48991[(1)]);
if((state_val_48992 === (1))){
var inst_48982 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_48991__$1 = state_48991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48991__$1,(2),inst_48982);
} else {
if((state_val_48992 === (2))){
var inst_48984 = (state_48991[(2)]);
var state_48991__$1 = state_48991;
if(cljs.core.truth_(inst_48984)){
var statearr_48993_49004 = state_48991__$1;
(statearr_48993_49004[(1)] = (3));

} else {
var statearr_48994_49005 = state_48991__$1;
(statearr_48994_49005[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (3))){
var state_48991__$1 = state_48991;
var statearr_48995_49006 = state_48991__$1;
(statearr_48995_49006[(2)] = line);

(statearr_48995_49006[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (4))){
var inst_48987 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_48991__$1 = state_48991;
var statearr_48996_49007 = state_48991__$1;
(statearr_48996_49007[(2)] = inst_48987);

(statearr_48996_49007[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (5))){
var inst_48989 = (state_48991[(2)]);
var state_48991__$1 = state_48991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48991__$1,inst_48989);
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
var statearr_49000 = [null,null,null,null,null,null,null];
(statearr_49000[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__);

(statearr_49000[(1)] = (1));

return statearr_49000;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1 = (function (state_48991){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49001){if((e49001 instanceof Object)){
var ex__9301__auto__ = e49001;
var statearr_49002_49008 = state_48991;
(statearr_49002_49008[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49009 = state_48991;
state_48991 = G__49009;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__ = function(state_48991){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1.call(this,state_48991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_49003 = f__9319__auto__.call(null);
(statearr_49003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_49003;
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
return (function (state_49070){
var state_val_49071 = (state_49070[(1)]);
if((state_val_49071 === (1))){
var state_49070__$1 = state_49070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49070__$1,(2),chan_verified_path);
} else {
if((state_val_49071 === (2))){
var inst_49050 = (state_49070[(7)]);
var inst_49050__$1 = (state_49070[(2)]);
var inst_49051 = cljs.core.async.chan.call(null);
var inst_49052 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_49050__$1);
var state_49070__$1 = (function (){var statearr_49072 = state_49070;
(statearr_49072[(8)] = inst_49051);

(statearr_49072[(7)] = inst_49050__$1);

return statearr_49072;
})();
if(cljs.core.truth_(inst_49052)){
var statearr_49073_49088 = state_49070__$1;
(statearr_49073_49088[(1)] = (3));

} else {
var statearr_49074_49089 = state_49070__$1;
(statearr_49074_49089[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (3))){
var inst_49054 = cljs.core.println.call(null,"1");
var state_49070__$1 = state_49070;
var statearr_49075_49090 = state_49070__$1;
(statearr_49075_49090[(2)] = inst_49054);

(statearr_49075_49090[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (4))){
var inst_49051 = (state_49070[(8)]);
var inst_49050 = (state_49070[(7)]);
var inst_49056 = cljs.core.println.call(null,inst_49050);
var state_49070__$1 = (function (){var statearr_49076 = state_49070;
(statearr_49076[(9)] = inst_49056);

return statearr_49076;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49070__$1,(6),inst_49051,inst_49050);
} else {
if((state_val_49071 === (5))){
var inst_49051 = (state_49070[(8)]);
var inst_49063 = (state_49070[(2)]);
var state_49070__$1 = (function (){var statearr_49077 = state_49070;
(statearr_49077[(10)] = inst_49063);

return statearr_49077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49070__$1,(8),inst_49051);
} else {
if((state_val_49071 === (6))){
var inst_49051 = (state_49070[(8)]);
var inst_49058 = (state_49070[(2)]);
var state_49070__$1 = (function (){var statearr_49078 = state_49070;
(statearr_49078[(11)] = inst_49058);

return statearr_49078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49070__$1,(7),inst_49051);
} else {
if((state_val_49071 === (7))){
var inst_49060 = (state_49070[(2)]);
var inst_49061 = cljs.core.println.call(null,inst_49060);
var state_49070__$1 = state_49070;
var statearr_49079_49091 = state_49070__$1;
(statearr_49079_49091[(2)] = inst_49061);

(statearr_49079_49091[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49071 === (8))){
var inst_49051 = (state_49070[(8)]);
var inst_49065 = (state_49070[(2)]);
var inst_49066 = cljs.core.println.call(null,inst_49065);
var state_49070__$1 = (function (){var statearr_49080 = state_49070;
(statearr_49080[(12)] = inst_49066);

return statearr_49080;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49070__$1,(9),inst_49051);
} else {
if((state_val_49071 === (9))){
var inst_49068 = (state_49070[(2)]);
var state_49070__$1 = state_49070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49070__$1,inst_49068);
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
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_49084 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49084[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_49084[(1)] = (1));

return statearr_49084;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_49070){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49085){if((e49085 instanceof Object)){
var ex__9301__auto__ = e49085;
var statearr_49086_49092 = state_49070;
(statearr_49086_49092[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49093 = state_49070;
state_49070 = G__49093;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_49070){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_49070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_49087 = f__9319__auto__.call(null);
(statearr_49087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_49087;
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
return (function (state_49128){
var state_val_49129 = (state_49128[(1)]);
if((state_val_49129 === (1))){
var state_49128__$1 = state_49128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49128__$1,(2),c);
} else {
if((state_val_49129 === (2))){
var inst_49119 = (state_49128[(7)]);
var inst_49119__$1 = (state_49128[(2)]);
var inst_49120 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_49119__$1);
var state_49128__$1 = (function (){var statearr_49130 = state_49128;
(statearr_49130[(7)] = inst_49119__$1);

return statearr_49130;
})();
if(cljs.core.truth_(inst_49120)){
var statearr_49131_49142 = state_49128__$1;
(statearr_49131_49142[(1)] = (3));

} else {
var statearr_49132_49143 = state_49128__$1;
(statearr_49132_49143[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49129 === (3))){
var inst_49119 = (state_49128[(7)]);
var inst_49122 = cljs.core.println.call(null,inst_49119);
var state_49128__$1 = state_49128;
var statearr_49133_49144 = state_49128__$1;
(statearr_49133_49144[(2)] = inst_49122);

(statearr_49133_49144[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49129 === (4))){
var inst_49119 = (state_49128[(7)]);
var inst_49124 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_49119);
var state_49128__$1 = state_49128;
var statearr_49134_49145 = state_49128__$1;
(statearr_49134_49145[(2)] = inst_49124);

(statearr_49134_49145[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49129 === (5))){
var inst_49126 = (state_49128[(2)]);
var state_49128__$1 = state_49128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49128__$1,inst_49126);
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
var statearr_49138 = [null,null,null,null,null,null,null,null];
(statearr_49138[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_49138[(1)] = (1));

return statearr_49138;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_49128){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49139){if((e49139 instanceof Object)){
var ex__9301__auto__ = e49139;
var statearr_49140_49146 = state_49128;
(statearr_49140_49146[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49147 = state_49128;
state_49128 = G__49147;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_49128){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_49128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_49141 = f__9319__auto__.call(null);
(statearr_49141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_49141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.drop_line = (function drop_dot$core$drop_line(line){
return drop_dot.core.drop_chan_verified_droppee.call(null,drop_dot.core.chan_verified_path__GT_chan_verified_droppee.call(null,drop_dot.core.line__GT_chan_verified_path.call(null,line)));
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_49209){
var state_val_49210 = (state_49209[(1)]);
if((state_val_49210 === (7))){
var inst_49205 = (state_49209[(2)]);
var state_49209__$1 = state_49209;
var statearr_49211_49232 = state_49209__$1;
(statearr_49211_49232[(2)] = inst_49205);

(statearr_49211_49232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49210 === (1))){
var inst_49190 = chan_config;
var state_49209__$1 = (function (){var statearr_49212 = state_49209;
(statearr_49212[(7)] = inst_49190);

return statearr_49212;
})();
var statearr_49213_49233 = state_49209__$1;
(statearr_49213_49233[(2)] = null);

(statearr_49213_49233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49210 === (4))){
var inst_49193 = (state_49209[(8)]);
var inst_49193__$1 = (state_49209[(2)]);
var state_49209__$1 = (function (){var statearr_49214 = state_49209;
(statearr_49214[(8)] = inst_49193__$1);

return statearr_49214;
})();
if(cljs.core.truth_(inst_49193__$1)){
var statearr_49215_49234 = state_49209__$1;
(statearr_49215_49234[(1)] = (5));

} else {
var statearr_49216_49235 = state_49209__$1;
(statearr_49216_49235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49210 === (6))){
var state_49209__$1 = state_49209;
var statearr_49217_49236 = state_49209__$1;
(statearr_49217_49236[(2)] = null);

(statearr_49217_49236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49210 === (3))){
var inst_49207 = (state_49209[(2)]);
var state_49209__$1 = state_49209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49209__$1,inst_49207);
} else {
if((state_val_49210 === (2))){
var inst_49190 = (state_49209[(7)]);
var state_49209__$1 = state_49209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49209__$1,(4),inst_49190);
} else {
if((state_val_49210 === (9))){
var inst_49193 = (state_49209[(8)]);
var inst_49199 = cljs.core.println.call(null,inst_49193);
var state_49209__$1 = state_49209;
var statearr_49219_49237 = state_49209__$1;
(statearr_49219_49237[(2)] = inst_49199);

(statearr_49219_49237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49210 === (5))){
var inst_49195 = cljs.core._EQ_.call(null,cmd,"drop");
var state_49209__$1 = state_49209;
if(inst_49195){
var statearr_49220_49238 = state_49209__$1;
(statearr_49220_49238[(1)] = (8));

} else {
var statearr_49221_49239 = state_49209__$1;
(statearr_49221_49239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49210 === (10))){
var inst_49190 = (state_49209[(7)]);
var inst_49201 = (state_49209[(2)]);
var tmp49218 = inst_49190;
var inst_49190__$1 = tmp49218;
var state_49209__$1 = (function (){var statearr_49222 = state_49209;
(statearr_49222[(7)] = inst_49190__$1);

(statearr_49222[(9)] = inst_49201);

return statearr_49222;
})();
var statearr_49223_49240 = state_49209__$1;
(statearr_49223_49240[(2)] = null);

(statearr_49223_49240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49210 === (8))){
var inst_49193 = (state_49209[(8)]);
var inst_49197 = drop_dot.core.drop_line.call(null,inst_49193);
var state_49209__$1 = state_49209;
var statearr_49224_49241 = state_49209__$1;
(statearr_49224_49241[(2)] = inst_49197);

(statearr_49224_49241[(1)] = (10));


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
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0 = (function (){
var statearr_49228 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49228[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__);

(statearr_49228[(1)] = (1));

return statearr_49228;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1 = (function (state_49209){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49229){if((e49229 instanceof Object)){
var ex__9301__auto__ = e49229;
var statearr_49230_49242 = state_49209;
(statearr_49230_49242[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49243 = state_49209;
state_49209 = G__49243;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__ = function(state_49209){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1.call(this,state_49209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_49231 = f__9319__auto__.call(null);
(statearr_49231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_49231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__9318__auto___49340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto___49340,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto___49340,c){
return (function (state_49304){
var state_val_49305 = (state_49304[(1)]);
if((state_val_49305 === (1))){
var inst_49292 = (state_49304[(7)]);
var inst_49294 = (state_49304[(8)]);
var inst_49293 = (state_49304[(9)]);
var inst_49292__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_49293__$1 = cljs.core.async.chan.call(null,(1));
var inst_49294__$1 = (function (){var res = inst_49292__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_49293__$1;
return ((function (res,config_path,wcc,inst_49292,inst_49294,inst_49293,inst_49292__$1,inst_49293__$1,state_val_49305,c__9318__auto___49340,c){
return (function (error,res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,inst_49292,inst_49294,inst_49293,inst_49292__$1,inst_49293__$1,state_val_49305,c__9318__auto___49340,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,inst_49292,inst_49294,inst_49293,inst_49292__$1,inst_49293__$1,state_val_49305,c__9318__auto___49340,c){
return (function (state_49309){
var state_val_49310 = (state_49309[(1)]);
if((state_val_49310 === (1))){
var state_49309__$1 = state_49309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49309__$1,(2),wcc,res__$1);
} else {
if((state_val_49310 === (2))){
var inst_49307 = (state_49309[(2)]);
var state_49309__$1 = state_49309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49309__$1,inst_49307);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,inst_49292,inst_49294,inst_49293,inst_49292__$1,inst_49293__$1,state_val_49305,c__9318__auto___49340,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_49292,inst_49294,inst_49293,inst_49292__$1,inst_49293__$1,state_val_49305,c__9318__auto___49340,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_49314 = [null,null,null,null,null,null,null];
(statearr_49314[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_49314[(1)] = (1));

return statearr_49314;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_49309){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49315){if((e49315 instanceof Object)){
var ex__9301__auto__ = e49315;
var statearr_49316_49341 = state_49309;
(statearr_49316_49341[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49342 = state_49309;
state_49309 = G__49342;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_49309){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_49309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_49292,inst_49294,inst_49293,inst_49292__$1,inst_49293__$1,state_val_49305,c__9318__auto___49340,c))
})();
var state__9320__auto__ = (function (){var statearr_49317 = f__9319__auto__.call(null);
(statearr_49317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_49317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,inst_49292,inst_49294,inst_49293,inst_49292__$1,inst_49293__$1,state_val_49305,c__9318__auto___49340,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,inst_49292,inst_49294,inst_49293,inst_49292__$1,inst_49293__$1,state_val_49305,c__9318__auto___49340,c))
})();
var inst_49295 = inst_49292__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_49294__$1);
var state_49304__$1 = (function (){var statearr_49318 = state_49304;
(statearr_49318[(7)] = inst_49292__$1);

(statearr_49318[(10)] = inst_49295);

(statearr_49318[(8)] = inst_49294__$1);

(statearr_49318[(9)] = inst_49293__$1);

return statearr_49318;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49304__$1,(2),inst_49293__$1);
} else {
if((state_val_49305 === (2))){
var inst_49292 = (state_49304[(7)]);
var inst_49295 = (state_49304[(10)]);
var inst_49294 = (state_49304[(8)]);
var inst_49293 = (state_49304[(9)]);
var inst_49297 = (state_49304[(2)]);
var inst_49298 = [cljs.core.str(inst_49297)].join('');
var inst_49299 = parseInt(inst_49298);
var inst_49300 = (function (){var res = inst_49292;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_49293;
var wcc_jammer = inst_49294;
var get_wc = inst_49295;
var lines = inst_49299;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_49292,inst_49295,inst_49294,inst_49293,inst_49297,inst_49298,inst_49299,state_val_49305,c__9318__auto___49340,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_49292,inst_49295,inst_49294,inst_49293,inst_49297,inst_49298,inst_49299,state_val_49305,c__9318__auto___49340,c))
})();
var inst_49301 = (function (){var res = inst_49292;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_49293;
var wcc_jammer = inst_49294;
var get_wc = inst_49295;
var lines = inst_49299;
var close_if_done = inst_49300;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_49292,inst_49295,inst_49294,inst_49293,inst_49297,inst_49298,inst_49299,inst_49300,state_val_49305,c__9318__auto___49340,c){
return (function (res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_49292,inst_49295,inst_49294,inst_49293,inst_49297,inst_49298,inst_49299,inst_49300,state_val_49305,c__9318__auto___49340,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_49292,inst_49295,inst_49294,inst_49293,inst_49297,inst_49298,inst_49299,inst_49300,state_val_49305,c__9318__auto___49340,c){
return (function (state_49323){
var state_val_49324 = (state_49323[(1)]);
if((state_val_49324 === (1))){
var state_49323__$1 = state_49323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49323__$1,(2),c,res__$1);
} else {
if((state_val_49324 === (2))){
var inst_49320 = (state_49323[(2)]);
var inst_49321 = close_if_done.call(null);
var state_49323__$1 = (function (){var statearr_49325 = state_49323;
(statearr_49325[(7)] = inst_49320);

return statearr_49325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49323__$1,inst_49321);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_49292,inst_49295,inst_49294,inst_49293,inst_49297,inst_49298,inst_49299,inst_49300,state_val_49305,c__9318__auto___49340,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_49292,inst_49295,inst_49294,inst_49293,inst_49297,inst_49298,inst_49299,inst_49300,state_val_49305,c__9318__auto___49340,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_49329 = [null,null,null,null,null,null,null,null];
(statearr_49329[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_49329[(1)] = (1));

return statearr_49329;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_49323){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49330){if((e49330 instanceof Object)){
var ex__9301__auto__ = e49330;
var statearr_49331_49343 = state_49323;
(statearr_49331_49343[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49344 = state_49323;
state_49323 = G__49344;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_49323){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_49323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_49292,inst_49295,inst_49294,inst_49293,inst_49297,inst_49298,inst_49299,inst_49300,state_val_49305,c__9318__auto___49340,c))
})();
var state__9320__auto__ = (function (){var statearr_49332 = f__9319__auto__.call(null);
(statearr_49332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_49332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_49292,inst_49295,inst_49294,inst_49293,inst_49297,inst_49298,inst_49299,inst_49300,state_val_49305,c__9318__auto___49340,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_49292,inst_49295,inst_49294,inst_49293,inst_49297,inst_49298,inst_49299,inst_49300,state_val_49305,c__9318__auto___49340,c))
})();
var inst_49302 = inst_49292.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_49301);
var state_49304__$1 = state_49304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49304__$1,inst_49302);
} else {
return null;
}
}
});})(c__9318__auto___49340,c))
;
return ((function (switch__9297__auto__,c__9318__auto___49340,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_49336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49336[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_49336[(1)] = (1));

return statearr_49336;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_49304){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49337){if((e49337 instanceof Object)){
var ex__9301__auto__ = e49337;
var statearr_49338_49345 = state_49304;
(statearr_49338_49345[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49346 = state_49304;
state_49304 = G__49346;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_49304){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_49304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto___49340,c))
})();
var state__9320__auto__ = (function (){var statearr_49339 = f__9319__auto__.call(null);
(statearr_49339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto___49340);

return statearr_49339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto___49340,c))
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
var len__7018__auto___49348 = arguments.length;
var i__7019__auto___49349 = (0);
while(true){
if((i__7019__auto___49349 < len__7018__auto___49348)){
args__7025__auto__.push((arguments[i__7019__auto___49349]));

var G__49350 = (i__7019__auto___49349 + (1));
i__7019__auto___49349 = G__49350;
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
cljs.core.println.call(null,"drop mode");

drop_dot.core.chan_config_paths__GT_exec_drop_dot.call(null,drop_dot.core.chan_config_paths.call(null),"drop");
} else {
}

if(cljs.core._EQ_.call(null,arg,"link")){
return cljs.core.println.call(null,"link mode");
} else {
return null;
}
});

drop_dot.core._main.cljs$lang$maxFixedArity = (0);

drop_dot.core._main.cljs$lang$applyTo = (function (seq49347){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49347));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map