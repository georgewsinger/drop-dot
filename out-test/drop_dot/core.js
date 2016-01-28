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
return (function (state_88084){
var state_val_88085 = (state_88084[(1)]);
if((state_val_88085 === (1))){
var state_88084__$1 = state_88084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88084__$1,(2),input_chan);
} else {
if((state_val_88085 === (2))){
var inst_88063 = (state_88084[(2)]);
var inst_88064 = inst_88063;
var state_88084__$1 = (function (){var statearr_88086 = state_88084;
(statearr_88086[(7)] = inst_88064);

return statearr_88086;
})();
var statearr_88087_88114 = state_88084__$1;
(statearr_88087_88114[(2)] = null);

(statearr_88087_88114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88085 === (3))){
var inst_88064 = (state_88084[(7)]);
var inst_88066 = cljs.core.count.call(null,inst_88064);
var inst_88067 = cljs.core._EQ_.call(null,inst_88066,(0));
var state_88084__$1 = state_88084;
if(inst_88067){
var statearr_88088_88115 = state_88084__$1;
(statearr_88088_88115[(1)] = (5));

} else {
var statearr_88089_88116 = state_88084__$1;
(statearr_88089_88116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88085 === (4))){
var inst_88082 = (state_88084[(2)]);
var state_88084__$1 = state_88084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88084__$1,inst_88082);
} else {
if((state_val_88085 === (5))){
var state_88084__$1 = state_88084;
var statearr_88090_88117 = state_88084__$1;
(statearr_88090_88117[(2)] = null);

(statearr_88090_88117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88085 === (6))){
var inst_88064 = (state_88084[(7)]);
var inst_88070 = cljs.core.async.chan.call(null);
var inst_88071 = cljs.core.first.call(null,inst_88064);
var inst_88072 = (function (){var v = inst_88064;
var rc = inst_88070;
var cmd = inst_88071;
return ((function (v,rc,cmd,inst_88064,inst_88070,inst_88071,state_val_88085,c__9318__auto__){
return (function (res){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,v,rc,cmd,inst_88064,inst_88070,inst_88071,state_val_88085,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,v,rc,cmd,inst_88064,inst_88070,inst_88071,state_val_88085,c__9318__auto__){
return (function (state_88094){
var state_val_88095 = (state_88094[(1)]);
if((state_val_88095 === (1))){
var state_88094__$1 = state_88094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88094__$1,(2),rc,res);
} else {
if((state_val_88095 === (2))){
var inst_88092 = (state_88094[(2)]);
var state_88094__$1 = state_88094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88094__$1,inst_88092);
} else {
return null;
}
}
});})(c__9318__auto____$1,v,rc,cmd,inst_88064,inst_88070,inst_88071,state_val_88085,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_88064,inst_88070,inst_88071,state_val_88085,c__9318__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0 = (function (){
var statearr_88099 = [null,null,null,null,null,null,null];
(statearr_88099[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_88099[(1)] = (1));

return statearr_88099;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_88094){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88100){if((e88100 instanceof Object)){
var ex__9301__auto__ = e88100;
var statearr_88101_88118 = state_88094;
(statearr_88101_88118[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88119 = state_88094;
state_88094 = G__88119;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_88094){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_88094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_88064,inst_88070,inst_88071,state_val_88085,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88102 = f__9319__auto__.call(null);
(statearr_88102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_88102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,v,rc,cmd,inst_88064,inst_88070,inst_88071,state_val_88085,c__9318__auto__))
);

return c__9318__auto____$1;
});
;})(v,rc,cmd,inst_88064,inst_88070,inst_88071,state_val_88085,c__9318__auto__))
})();
var inst_88073 = drop_dot.core.pure_js.execAndPrint(inst_88071,inst_88072);
var state_88084__$1 = (function (){var statearr_88103 = state_88084;
(statearr_88103[(8)] = inst_88073);

return statearr_88103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88084__$1,(8),inst_88070);
} else {
if((state_val_88085 === (7))){
var inst_88080 = (state_88084[(2)]);
var state_88084__$1 = state_88084;
var statearr_88104_88120 = state_88084__$1;
(statearr_88104_88120[(2)] = inst_88080);

(statearr_88104_88120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88085 === (8))){
var inst_88064 = (state_88084[(7)]);
var inst_88075 = (state_88084[(2)]);
var inst_88076 = cljs.core.rest.call(null,inst_88064);
var inst_88077 = cljs.core.vec.call(null,inst_88076);
var inst_88064__$1 = inst_88077;
var state_88084__$1 = (function (){var statearr_88105 = state_88084;
(statearr_88105[(9)] = inst_88075);

(statearr_88105[(7)] = inst_88064__$1);

return statearr_88105;
})();
var statearr_88106_88121 = state_88084__$1;
(statearr_88106_88121[(2)] = null);

(statearr_88106_88121[(1)] = (3));


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
var statearr_88110 = [null,null,null,null,null,null,null,null,null,null];
(statearr_88110[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_88110[(1)] = (1));

return statearr_88110;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_88084){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88111){if((e88111 instanceof Object)){
var ex__9301__auto__ = e88111;
var statearr_88112_88122 = state_88084;
(statearr_88112_88122[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88123 = state_88084;
state_88084 = G__88123;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_88084){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_88084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88113 = f__9319__auto__.call(null);
(statearr_88113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_88113;
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
return (function (state_88135){
var state_val_88136 = (state_88135[(1)]);
if((state_val_88136 === (1))){
var state_88135__$1 = state_88135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88135__$1,v);
} else {
return null;
}
});})(c__9318__auto__,c))
;
return ((function (switch__9297__auto__,c__9318__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0 = (function (){
var statearr_88140 = [null,null,null,null,null,null,null];
(statearr_88140[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__);

(statearr_88140[(1)] = (1));

return statearr_88140;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1 = (function (state_88135){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88141){if((e88141 instanceof Object)){
var ex__9301__auto__ = e88141;
var statearr_88142_88144 = state_88135;
(statearr_88142_88144[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88145 = state_88135;
state_88135 = G__88145;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = function(state_88135){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1.call(this,state_88135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,c))
})();
var state__9320__auto__ = (function (){var statearr_88143 = f__9319__auto__.call(null);
(statearr_88143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_88143;
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
return (function (state_88161){
var state_val_88162 = (state_88161[(1)]);
if((state_val_88162 === (1))){
var state_88161__$1 = state_88161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88161__$1,(2),d,res__$1);
} else {
if((state_val_88162 === (2))){
var inst_88159 = (state_88161[(2)]);
var state_88161__$1 = state_88161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88161__$1,inst_88159);
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
var statearr_88166 = [null,null,null,null,null,null,null];
(statearr_88166[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__);

(statearr_88166[(1)] = (1));

return statearr_88166;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1 = (function (state_88161){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88167){if((e88167 instanceof Object)){
var ex__9301__auto__ = e88167;
var statearr_88168_88170 = state_88161;
(statearr_88168_88170[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88171 = state_88161;
state_88161 = G__88171;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__ = function(state_88161){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1.call(this,state_88161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,res,d))
})();
var state__9320__auto__ = (function (){var statearr_88169 = f__9319__auto__.call(null);
(statearr_88169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_88169;
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
return (function (state_88203){
var state_val_88204 = (state_88203[(1)]);
if((state_val_88204 === (1))){
var inst_88194 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_88203__$1 = state_88203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88203__$1,(2),inst_88194);
} else {
if((state_val_88204 === (2))){
var inst_88196 = (state_88203[(2)]);
var state_88203__$1 = state_88203;
if(cljs.core.truth_(inst_88196)){
var statearr_88205_88216 = state_88203__$1;
(statearr_88205_88216[(1)] = (3));

} else {
var statearr_88206_88217 = state_88203__$1;
(statearr_88206_88217[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88204 === (3))){
var state_88203__$1 = state_88203;
var statearr_88207_88218 = state_88203__$1;
(statearr_88207_88218[(2)] = line);

(statearr_88207_88218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88204 === (4))){
var inst_88199 = [cljs.core.str("ERROR: "),cljs.core.str(line),cljs.core.str(" does not exist on this machine.")].join('');
var state_88203__$1 = state_88203;
var statearr_88208_88219 = state_88203__$1;
(statearr_88208_88219[(2)] = inst_88199);

(statearr_88208_88219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88204 === (5))){
var inst_88201 = (state_88203[(2)]);
var state_88203__$1 = state_88203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88203__$1,inst_88201);
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
var statearr_88212 = [null,null,null,null,null,null,null];
(statearr_88212[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__);

(statearr_88212[(1)] = (1));

return statearr_88212;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1 = (function (state_88203){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88213){if((e88213 instanceof Object)){
var ex__9301__auto__ = e88213;
var statearr_88214_88220 = state_88203;
(statearr_88214_88220[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88221 = state_88203;
state_88203 = G__88221;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__ = function(state_88203){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1.call(this,state_88203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88215 = f__9319__auto__.call(null);
(statearr_88215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_88215;
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
return (function (state_88292){
var state_val_88293 = (state_88292[(1)]);
if((state_val_88293 === (1))){
var state_88292__$1 = state_88292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88292__$1,(2),chan_verified_path);
} else {
if((state_val_88293 === (2))){
var inst_88278 = (state_88292[(7)]);
var inst_88279 = (state_88292[(8)]);
var inst_88278__$1 = (state_88292[(2)]);
var inst_88279__$1 = cljs.core.async.chan.call(null,(1));
var inst_88280 = (function (){var verified_path = inst_88278__$1;
var rc = inst_88279__$1;
return ((function (verified_path,rc,inst_88278,inst_88279,inst_88278__$1,inst_88279__$1,state_val_88293,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_88278,inst_88279,inst_88278__$1,inst_88279__$1,state_val_88293,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_88278,inst_88279,inst_88278__$1,inst_88279__$1,state_val_88293,c__9318__auto__){
return (function (state_88298){
var state_val_88299 = (state_88298[(1)]);
if((state_val_88299 === (1))){
var inst_88294 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced on this machine.")].join('');
var state_88298__$1 = state_88298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88298__$1,(2),rc,inst_88294);
} else {
if((state_val_88299 === (2))){
var inst_88296 = (state_88298[(2)]);
var state_88298__$1 = state_88298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88298__$1,inst_88296);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_88278,inst_88279,inst_88278__$1,inst_88279__$1,state_val_88293,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_88278,inst_88279,inst_88278__$1,inst_88279__$1,state_val_88293,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_88303 = [null,null,null,null,null,null,null];
(statearr_88303[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_88303[(1)] = (1));

return statearr_88303;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_88298){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88304){if((e88304 instanceof Object)){
var ex__9301__auto__ = e88304;
var statearr_88305_88332 = state_88298;
(statearr_88305_88332[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88333 = state_88298;
state_88298 = G__88333;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_88298){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_88298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_88278,inst_88279,inst_88278__$1,inst_88279__$1,state_val_88293,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88306 = f__9319__auto__.call(null);
(statearr_88306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_88306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_88278,inst_88279,inst_88278__$1,inst_88279__$1,state_val_88293,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_88278,inst_88279,inst_88278__$1,inst_88279__$1,state_val_88293,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_88278,inst_88279,inst_88278__$1,inst_88279__$1,state_val_88293,c__9318__auto__){
return (function (state_88310){
var state_val_88311 = (state_88310[(1)]);
if((state_val_88311 === (1))){
var state_88310__$1 = state_88310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88310__$1,(2),rc,verified_path);
} else {
if((state_val_88311 === (2))){
var inst_88308 = (state_88310[(2)]);
var state_88310__$1 = state_88310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88310__$1,inst_88308);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_88278,inst_88279,inst_88278__$1,inst_88279__$1,state_val_88293,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_88278,inst_88279,inst_88278__$1,inst_88279__$1,state_val_88293,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_88315 = [null,null,null,null,null,null,null];
(statearr_88315[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_88315[(1)] = (1));

return statearr_88315;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_88310){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88316){if((e88316 instanceof Object)){
var ex__9301__auto__ = e88316;
var statearr_88317_88334 = state_88310;
(statearr_88317_88334[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88335 = state_88310;
state_88310 = G__88335;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_88310){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_88310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_88278,inst_88279,inst_88278__$1,inst_88279__$1,state_val_88293,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88318 = f__9319__auto__.call(null);
(statearr_88318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_88318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_88278,inst_88279,inst_88278__$1,inst_88279__$1,state_val_88293,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(verified_path,rc,inst_88278,inst_88279,inst_88278__$1,inst_88279__$1,state_val_88293,c__9318__auto__))
})();
var inst_88281 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_88278__$1);
var state_88292__$1 = (function (){var statearr_88319 = state_88292;
(statearr_88319[(7)] = inst_88278__$1);

(statearr_88319[(9)] = inst_88280);

(statearr_88319[(8)] = inst_88279__$1);

return statearr_88319;
})();
if(cljs.core.truth_(inst_88281)){
var statearr_88320_88336 = state_88292__$1;
(statearr_88320_88336[(1)] = (3));

} else {
var statearr_88321_88337 = state_88292__$1;
(statearr_88321_88337[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88293 === (3))){
var inst_88278 = (state_88292[(7)]);
var inst_88279 = (state_88292[(8)]);
var state_88292__$1 = state_88292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88292__$1,(6),inst_88279,inst_88278);
} else {
if((state_val_88293 === (4))){
var inst_88278 = (state_88292[(7)]);
var inst_88280 = (state_88292[(9)]);
var inst_88286 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_88278,inst_88280);
var state_88292__$1 = state_88292;
var statearr_88322_88338 = state_88292__$1;
(statearr_88322_88338[(2)] = inst_88286);

(statearr_88322_88338[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88293 === (5))){
var inst_88279 = (state_88292[(8)]);
var inst_88288 = (state_88292[(2)]);
var state_88292__$1 = (function (){var statearr_88323 = state_88292;
(statearr_88323[(10)] = inst_88288);

return statearr_88323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88292__$1,(7),inst_88279);
} else {
if((state_val_88293 === (6))){
var inst_88284 = (state_88292[(2)]);
var state_88292__$1 = state_88292;
var statearr_88324_88339 = state_88292__$1;
(statearr_88324_88339[(2)] = inst_88284);

(statearr_88324_88339[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88293 === (7))){
var inst_88290 = (state_88292[(2)]);
var state_88292__$1 = state_88292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88292__$1,inst_88290);
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
var statearr_88328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_88328[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_88328[(1)] = (1));

return statearr_88328;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_88292){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88329){if((e88329 instanceof Object)){
var ex__9301__auto__ = e88329;
var statearr_88330_88340 = state_88292;
(statearr_88330_88340[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88341 = state_88292;
state_88292 = G__88341;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_88292){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_88292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88331 = f__9319__auto__.call(null);
(statearr_88331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_88331;
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
return (function (state_88376){
var state_val_88377 = (state_88376[(1)]);
if((state_val_88377 === (1))){
var state_88376__$1 = state_88376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88376__$1,(2),c);
} else {
if((state_val_88377 === (2))){
var inst_88367 = (state_88376[(7)]);
var inst_88367__$1 = (state_88376[(2)]);
var inst_88368 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_88367__$1);
var state_88376__$1 = (function (){var statearr_88378 = state_88376;
(statearr_88378[(7)] = inst_88367__$1);

return statearr_88378;
})();
if(cljs.core.truth_(inst_88368)){
var statearr_88379_88390 = state_88376__$1;
(statearr_88379_88390[(1)] = (3));

} else {
var statearr_88380_88391 = state_88376__$1;
(statearr_88380_88391[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88377 === (3))){
var inst_88367 = (state_88376[(7)]);
var inst_88370 = cljs.core.println.call(null,inst_88367);
var state_88376__$1 = state_88376;
var statearr_88381_88392 = state_88376__$1;
(statearr_88381_88392[(2)] = inst_88370);

(statearr_88381_88392[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88377 === (4))){
var inst_88367 = (state_88376[(7)]);
var inst_88372 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_88367);
var state_88376__$1 = state_88376;
var statearr_88382_88393 = state_88376__$1;
(statearr_88382_88393[(2)] = inst_88372);

(statearr_88382_88393[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88377 === (5))){
var inst_88374 = (state_88376[(2)]);
var state_88376__$1 = state_88376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88376__$1,inst_88374);
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
var statearr_88386 = [null,null,null,null,null,null,null,null];
(statearr_88386[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_88386[(1)] = (1));

return statearr_88386;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_88376){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88387){if((e88387 instanceof Object)){
var ex__9301__auto__ = e88387;
var statearr_88388_88394 = state_88376;
(statearr_88388_88394[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88395 = state_88376;
state_88376 = G__88395;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_88376){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_88376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88389 = f__9319__auto__.call(null);
(statearr_88389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_88389;
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
return (function (state_88424){
var state_val_88425 = (state_88424[(1)]);
if((state_val_88425 === (1))){
var state_88424__$1 = state_88424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88424__$1,(2),rc,line);
} else {
if((state_val_88425 === (2))){
var inst_88422 = (state_88424[(2)]);
var state_88424__$1 = state_88424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88424__$1,inst_88422);
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
var statearr_88429 = [null,null,null,null,null,null,null];
(statearr_88429[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_88429[(1)] = (1));

return statearr_88429;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_88424){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88430){if((e88430 instanceof Object)){
var ex__9301__auto__ = e88430;
var statearr_88431_88446 = state_88424;
(statearr_88431_88446[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88447 = state_88424;
state_88424 = G__88447;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_88424){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_88424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_88432 = f__9319__auto__.call(null);
(statearr_88432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_88432;
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
return (function (state_88437){
var state_val_88438 = (state_88437[(1)]);
if((state_val_88438 === (1))){
var inst_88433 = [cljs.core.str("ERROR: Invalid line: there is nothing to link "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_88437__$1 = state_88437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88437__$1,(2),rc,inst_88433);
} else {
if((state_val_88438 === (2))){
var inst_88435 = (state_88437[(2)]);
var state_88437__$1 = state_88437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88437__$1,inst_88435);
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
var statearr_88442 = [null,null,null,null,null,null,null];
(statearr_88442[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_88442[(1)] = (1));

return statearr_88442;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_88437){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88443){if((e88443 instanceof Object)){
var ex__9301__auto__ = e88443;
var statearr_88444_88448 = state_88437;
(statearr_88444_88448[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88449 = state_88437;
state_88437 = G__88449;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_88437){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_88437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_88445 = f__9319__auto__.call(null);
(statearr_88445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_88445;
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
return (function (state_88520){
var state_val_88521 = (state_88520[(1)]);
if((state_val_88521 === (1))){
var state_88520__$1 = state_88520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88520__$1,(2),chan_linkable_path);
} else {
if((state_val_88521 === (2))){
var inst_88507 = (state_88520[(7)]);
var inst_88506 = (state_88520[(8)]);
var inst_88506__$1 = (state_88520[(2)]);
var inst_88507__$1 = cljs.core.async.chan.call(null,(1));
var inst_88508 = (function (){var linkable_path = inst_88506__$1;
var rc = inst_88507__$1;
return ((function (linkable_path,rc,inst_88507,inst_88506,inst_88506__$1,inst_88507__$1,state_val_88521,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_88507,inst_88506,inst_88506__$1,inst_88507__$1,state_val_88521,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_88507,inst_88506,inst_88506__$1,inst_88507__$1,state_val_88521,c__9318__auto__){
return (function (state_88526){
var state_val_88527 = (state_88526[(1)]);
if((state_val_88527 === (1))){
var inst_88522 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_88526__$1 = state_88526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88526__$1,(2),rc,inst_88522);
} else {
if((state_val_88527 === (2))){
var inst_88524 = (state_88526[(2)]);
var state_88526__$1 = state_88526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88526__$1,inst_88524);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_88507,inst_88506,inst_88506__$1,inst_88507__$1,state_val_88521,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_88507,inst_88506,inst_88506__$1,inst_88507__$1,state_val_88521,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_88531 = [null,null,null,null,null,null,null];
(statearr_88531[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_88531[(1)] = (1));

return statearr_88531;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_88526){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88532){if((e88532 instanceof Object)){
var ex__9301__auto__ = e88532;
var statearr_88533_88560 = state_88526;
(statearr_88533_88560[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88561 = state_88526;
state_88526 = G__88561;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_88526){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_88526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_88507,inst_88506,inst_88506__$1,inst_88507__$1,state_val_88521,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88534 = f__9319__auto__.call(null);
(statearr_88534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_88534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_88507,inst_88506,inst_88506__$1,inst_88507__$1,state_val_88521,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_88507,inst_88506,inst_88506__$1,inst_88507__$1,state_val_88521,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_88507,inst_88506,inst_88506__$1,inst_88507__$1,state_val_88521,c__9318__auto__){
return (function (state_88538){
var state_val_88539 = (state_88538[(1)]);
if((state_val_88539 === (1))){
var state_88538__$1 = state_88538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88538__$1,(2),rc,linkable_path);
} else {
if((state_val_88539 === (2))){
var inst_88536 = (state_88538[(2)]);
var state_88538__$1 = state_88538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88538__$1,inst_88536);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_88507,inst_88506,inst_88506__$1,inst_88507__$1,state_val_88521,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_88507,inst_88506,inst_88506__$1,inst_88507__$1,state_val_88521,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_88543 = [null,null,null,null,null,null,null];
(statearr_88543[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_88543[(1)] = (1));

return statearr_88543;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_88538){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88544){if((e88544 instanceof Object)){
var ex__9301__auto__ = e88544;
var statearr_88545_88562 = state_88538;
(statearr_88545_88562[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88563 = state_88538;
state_88538 = G__88563;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_88538){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_88538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_88507,inst_88506,inst_88506__$1,inst_88507__$1,state_val_88521,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88546 = f__9319__auto__.call(null);
(statearr_88546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_88546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_88507,inst_88506,inst_88506__$1,inst_88507__$1,state_val_88521,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_88507,inst_88506,inst_88506__$1,inst_88507__$1,state_val_88521,c__9318__auto__))
})();
var inst_88509 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_88506__$1);
var state_88520__$1 = (function (){var statearr_88547 = state_88520;
(statearr_88547[(7)] = inst_88507__$1);

(statearr_88547[(8)] = inst_88506__$1);

(statearr_88547[(9)] = inst_88508);

return statearr_88547;
})();
if(cljs.core.truth_(inst_88509)){
var statearr_88548_88564 = state_88520__$1;
(statearr_88548_88564[(1)] = (3));

} else {
var statearr_88549_88565 = state_88520__$1;
(statearr_88549_88565[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88521 === (3))){
var inst_88507 = (state_88520[(7)]);
var inst_88506 = (state_88520[(8)]);
var state_88520__$1 = state_88520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88520__$1,(6),inst_88507,inst_88506);
} else {
if((state_val_88521 === (4))){
var inst_88506 = (state_88520[(8)]);
var inst_88508 = (state_88520[(9)]);
var inst_88514 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_88506,inst_88508);
var state_88520__$1 = state_88520;
var statearr_88550_88566 = state_88520__$1;
(statearr_88550_88566[(2)] = inst_88514);

(statearr_88550_88566[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88521 === (5))){
var inst_88507 = (state_88520[(7)]);
var inst_88516 = (state_88520[(2)]);
var state_88520__$1 = (function (){var statearr_88551 = state_88520;
(statearr_88551[(10)] = inst_88516);

return statearr_88551;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88520__$1,(7),inst_88507);
} else {
if((state_val_88521 === (6))){
var inst_88512 = (state_88520[(2)]);
var state_88520__$1 = state_88520;
var statearr_88552_88567 = state_88520__$1;
(statearr_88552_88567[(2)] = inst_88512);

(statearr_88552_88567[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88521 === (7))){
var inst_88518 = (state_88520[(2)]);
var state_88520__$1 = state_88520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88520__$1,inst_88518);
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
var statearr_88556 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_88556[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_88556[(1)] = (1));

return statearr_88556;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_88520){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88557){if((e88557 instanceof Object)){
var ex__9301__auto__ = e88557;
var statearr_88558_88568 = state_88520;
(statearr_88558_88568[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88569 = state_88520;
state_88520 = G__88569;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_88520){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_88520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88559 = f__9319__auto__.call(null);
(statearr_88559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_88559;
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
return (function (state_88640){
var state_val_88641 = (state_88640[(1)]);
if((state_val_88641 === (1))){
var state_88640__$1 = state_88640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88640__$1,(2),chan_linkable_path_that_wants_linking);
} else {
if((state_val_88641 === (2))){
var inst_88626 = (state_88640[(7)]);
var inst_88627 = (state_88640[(8)]);
var inst_88626__$1 = (state_88640[(2)]);
var inst_88627__$1 = cljs.core.async.chan.call(null,(1));
var inst_88628 = (function (){var linkable_path = inst_88626__$1;
var rc = inst_88627__$1;
return ((function (linkable_path,rc,inst_88626,inst_88627,inst_88626__$1,inst_88627__$1,state_val_88641,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_88626,inst_88627,inst_88626__$1,inst_88627__$1,state_val_88641,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_88626,inst_88627,inst_88626__$1,inst_88627__$1,state_val_88641,c__9318__auto__){
return (function (state_88646){
var state_val_88647 = (state_88646[(1)]);
if((state_val_88647 === (1))){
var inst_88642 = [cljs.core.str("ERROR: "),cljs.core.str(linkable_path),cljs.core.str(" already has a version on this system; please remove this file and re-run this command.")].join('');
var state_88646__$1 = state_88646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88646__$1,(2),rc,inst_88642);
} else {
if((state_val_88647 === (2))){
var inst_88644 = (state_88646[(2)]);
var state_88646__$1 = state_88646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88646__$1,inst_88644);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_88626,inst_88627,inst_88626__$1,inst_88627__$1,state_val_88641,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_88626,inst_88627,inst_88626__$1,inst_88627__$1,state_val_88641,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_88651 = [null,null,null,null,null,null,null];
(statearr_88651[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_88651[(1)] = (1));

return statearr_88651;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_88646){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88652){if((e88652 instanceof Object)){
var ex__9301__auto__ = e88652;
var statearr_88653_88680 = state_88646;
(statearr_88653_88680[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88681 = state_88646;
state_88646 = G__88681;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_88646){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_88646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_88626,inst_88627,inst_88626__$1,inst_88627__$1,state_val_88641,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88654 = f__9319__auto__.call(null);
(statearr_88654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_88654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_88626,inst_88627,inst_88626__$1,inst_88627__$1,state_val_88641,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_88626,inst_88627,inst_88626__$1,inst_88627__$1,state_val_88641,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_88626,inst_88627,inst_88626__$1,inst_88627__$1,state_val_88641,c__9318__auto__){
return (function (state_88658){
var state_val_88659 = (state_88658[(1)]);
if((state_val_88659 === (1))){
var state_88658__$1 = state_88658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88658__$1,(2),rc,linkable_path);
} else {
if((state_val_88659 === (2))){
var inst_88656 = (state_88658[(2)]);
var state_88658__$1 = state_88658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88658__$1,inst_88656);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_88626,inst_88627,inst_88626__$1,inst_88627__$1,state_val_88641,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_88626,inst_88627,inst_88626__$1,inst_88627__$1,state_val_88641,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_88663 = [null,null,null,null,null,null,null];
(statearr_88663[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_88663[(1)] = (1));

return statearr_88663;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_88658){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88664){if((e88664 instanceof Object)){
var ex__9301__auto__ = e88664;
var statearr_88665_88682 = state_88658;
(statearr_88665_88682[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88683 = state_88658;
state_88658 = G__88683;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_88658){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_88658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_88626,inst_88627,inst_88626__$1,inst_88627__$1,state_val_88641,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88666 = f__9319__auto__.call(null);
(statearr_88666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_88666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_88626,inst_88627,inst_88626__$1,inst_88627__$1,state_val_88641,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_88626,inst_88627,inst_88626__$1,inst_88627__$1,state_val_88641,c__9318__auto__))
})();
var inst_88629 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_88626__$1);
var state_88640__$1 = (function (){var statearr_88667 = state_88640;
(statearr_88667[(7)] = inst_88626__$1);

(statearr_88667[(8)] = inst_88627__$1);

(statearr_88667[(9)] = inst_88628);

return statearr_88667;
})();
if(cljs.core.truth_(inst_88629)){
var statearr_88668_88684 = state_88640__$1;
(statearr_88668_88684[(1)] = (3));

} else {
var statearr_88669_88685 = state_88640__$1;
(statearr_88669_88685[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88641 === (3))){
var inst_88626 = (state_88640[(7)]);
var inst_88627 = (state_88640[(8)]);
var state_88640__$1 = state_88640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88640__$1,(6),inst_88627,inst_88626);
} else {
if((state_val_88641 === (4))){
var inst_88626 = (state_88640[(7)]);
var inst_88628 = (state_88640[(9)]);
var inst_88634 = drop_dot.core.pure_js.pathExists(inst_88626,inst_88628);
var state_88640__$1 = state_88640;
var statearr_88670_88686 = state_88640__$1;
(statearr_88670_88686[(2)] = inst_88634);

(statearr_88670_88686[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88641 === (5))){
var inst_88627 = (state_88640[(8)]);
var inst_88636 = (state_88640[(2)]);
var state_88640__$1 = (function (){var statearr_88671 = state_88640;
(statearr_88671[(10)] = inst_88636);

return statearr_88671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88640__$1,(7),inst_88627);
} else {
if((state_val_88641 === (6))){
var inst_88632 = (state_88640[(2)]);
var state_88640__$1 = state_88640;
var statearr_88672_88687 = state_88640__$1;
(statearr_88672_88687[(2)] = inst_88632);

(statearr_88672_88687[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88641 === (7))){
var inst_88638 = (state_88640[(2)]);
var state_88640__$1 = state_88640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88640__$1,inst_88638);
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
var statearr_88676 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_88676[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_88676[(1)] = (1));

return statearr_88676;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_88640){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88677){if((e88677 instanceof Object)){
var ex__9301__auto__ = e88677;
var statearr_88678_88688 = state_88640;
(statearr_88678_88688[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88689 = state_88640;
state_88640 = G__88689;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_88640){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_88640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88679 = f__9319__auto__.call(null);
(statearr_88679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_88679;
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
return (function (state_88742){
var state_val_88743 = (state_88742[(1)]);
if((state_val_88743 === (1))){
var state_88742__$1 = state_88742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88742__$1,(2),c);
} else {
if((state_val_88743 === (2))){
var inst_88725 = (state_88742[(7)]);
var inst_88724 = (state_88742[(2)]);
var inst_88725__$1 = drop_dot.core.pure_js.localExpandHomeDir(inst_88724);
var inst_88726 = drop_dot.core.pure_js.getDirname(inst_88725__$1);
var inst_88727 = drop_dot.core.pure_js.getBasename(inst_88725__$1);
var inst_88728 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_88725__$1);
var state_88742__$1 = (function (){var statearr_88744 = state_88742;
(statearr_88744[(7)] = inst_88725__$1);

(statearr_88744[(8)] = inst_88726);

(statearr_88744[(9)] = inst_88727);

return statearr_88744;
})();
if(cljs.core.truth_(inst_88728)){
var statearr_88745_88756 = state_88742__$1;
(statearr_88745_88756[(1)] = (3));

} else {
var statearr_88746_88757 = state_88742__$1;
(statearr_88746_88757[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88743 === (3))){
var inst_88725 = (state_88742[(7)]);
var inst_88730 = [cljs.core.str(inst_88725)].join('');
var inst_88731 = cljs.core.println.call(null,inst_88730);
var state_88742__$1 = state_88742;
var statearr_88747_88758 = state_88742__$1;
(statearr_88747_88758[(2)] = inst_88731);

(statearr_88747_88758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88743 === (4))){
var inst_88725 = (state_88742[(7)]);
var inst_88726 = (state_88742[(8)]);
var inst_88727 = (state_88742[(9)]);
var inst_88733 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88734 = [cljs.core.str("mkdir -vp "),cljs.core.str(inst_88726)].join('');
var inst_88735 = [cljs.core.str("ln -sv ~/Dropbox/.drop-dot/"),cljs.core.str(inst_88727),cljs.core.str(" "),cljs.core.str(inst_88725)].join('');
var inst_88736 = [inst_88734,inst_88735];
var inst_88737 = (new cljs.core.PersistentVector(null,2,(5),inst_88733,inst_88736,null));
var inst_88738 = drop_dot.core.exec_vec_of_commands.call(null,inst_88737);
var state_88742__$1 = state_88742;
var statearr_88748_88759 = state_88742__$1;
(statearr_88748_88759[(2)] = inst_88738);

(statearr_88748_88759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88743 === (5))){
var inst_88740 = (state_88742[(2)]);
var state_88742__$1 = state_88742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88742__$1,inst_88740);
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
var statearr_88752 = [null,null,null,null,null,null,null,null,null,null];
(statearr_88752[(0)] = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__);

(statearr_88752[(1)] = (1));

return statearr_88752;
});
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_88742){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88753){if((e88753 instanceof Object)){
var ex__9301__auto__ = e88753;
var statearr_88754_88760 = state_88742;
(statearr_88754_88760[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88761 = state_88742;
state_88742 = G__88761;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__ = function(state_88742){
switch(arguments.length){
case 0:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_88742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88755 = f__9319__auto__.call(null);
(statearr_88755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_88755;
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
return (function (state_88838){
var state_val_88839 = (state_88838[(1)]);
if((state_val_88839 === (7))){
var inst_88834 = (state_88838[(2)]);
var state_88838__$1 = state_88838;
var statearr_88841_88866 = state_88838__$1;
(statearr_88841_88866[(2)] = inst_88834);

(statearr_88841_88866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88839 === (1))){
var inst_88814 = chan_config;
var state_88838__$1 = (function (){var statearr_88842 = state_88838;
(statearr_88842[(7)] = inst_88814);

return statearr_88842;
})();
var statearr_88843_88867 = state_88838__$1;
(statearr_88843_88867[(2)] = null);

(statearr_88843_88867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88839 === (4))){
var inst_88817 = (state_88838[(8)]);
var inst_88817__$1 = (state_88838[(2)]);
var state_88838__$1 = (function (){var statearr_88844 = state_88838;
(statearr_88844[(8)] = inst_88817__$1);

return statearr_88844;
})();
if(cljs.core.truth_(inst_88817__$1)){
var statearr_88845_88868 = state_88838__$1;
(statearr_88845_88868[(1)] = (5));

} else {
var statearr_88846_88869 = state_88838__$1;
(statearr_88846_88869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88839 === (13))){
var inst_88814 = (state_88838[(7)]);
var inst_88830 = (state_88838[(2)]);
var tmp88840 = inst_88814;
var inst_88814__$1 = tmp88840;
var state_88838__$1 = (function (){var statearr_88847 = state_88838;
(statearr_88847[(9)] = inst_88830);

(statearr_88847[(7)] = inst_88814__$1);

return statearr_88847;
})();
var statearr_88848_88870 = state_88838__$1;
(statearr_88848_88870[(2)] = null);

(statearr_88848_88870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88839 === (6))){
var state_88838__$1 = state_88838;
var statearr_88849_88871 = state_88838__$1;
(statearr_88849_88871[(2)] = null);

(statearr_88849_88871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88839 === (3))){
var inst_88836 = (state_88838[(2)]);
var state_88838__$1 = state_88838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88838__$1,inst_88836);
} else {
if((state_val_88839 === (12))){
var state_88838__$1 = state_88838;
var statearr_88850_88872 = state_88838__$1;
(statearr_88850_88872[(2)] = null);

(statearr_88850_88872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88839 === (2))){
var inst_88814 = (state_88838[(7)]);
var state_88838__$1 = state_88838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88838__$1,(4),inst_88814);
} else {
if((state_val_88839 === (11))){
var inst_88817 = (state_88838[(8)]);
var inst_88827 = drop_dot.core.link_line.call(null,inst_88817);
var state_88838__$1 = state_88838;
var statearr_88851_88873 = state_88838__$1;
(statearr_88851_88873[(2)] = inst_88827);

(statearr_88851_88873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88839 === (9))){
var state_88838__$1 = state_88838;
var statearr_88852_88874 = state_88838__$1;
(statearr_88852_88874[(2)] = null);

(statearr_88852_88874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88839 === (5))){
var inst_88819 = cljs.core._EQ_.call(null,cmd,"drop");
var state_88838__$1 = state_88838;
if(inst_88819){
var statearr_88853_88875 = state_88838__$1;
(statearr_88853_88875[(1)] = (8));

} else {
var statearr_88854_88876 = state_88838__$1;
(statearr_88854_88876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88839 === (10))){
var inst_88824 = (state_88838[(2)]);
var inst_88825 = cljs.core._EQ_.call(null,cmd,"link");
var state_88838__$1 = (function (){var statearr_88855 = state_88838;
(statearr_88855[(10)] = inst_88824);

return statearr_88855;
})();
if(inst_88825){
var statearr_88856_88877 = state_88838__$1;
(statearr_88856_88877[(1)] = (11));

} else {
var statearr_88857_88878 = state_88838__$1;
(statearr_88857_88878[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88839 === (8))){
var inst_88817 = (state_88838[(8)]);
var inst_88821 = drop_dot.core.drop_line.call(null,inst_88817);
var state_88838__$1 = state_88838;
var statearr_88858_88879 = state_88838__$1;
(statearr_88858_88879[(2)] = inst_88821);

(statearr_88858_88879[(1)] = (10));


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
var statearr_88862 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_88862[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__);

(statearr_88862[(1)] = (1));

return statearr_88862;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1 = (function (state_88838){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88863){if((e88863 instanceof Object)){
var ex__9301__auto__ = e88863;
var statearr_88864_88880 = state_88838;
(statearr_88864_88880[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88881 = state_88838;
state_88838 = G__88881;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__ = function(state_88838){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1.call(this,state_88838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_88865 = f__9319__auto__.call(null);
(statearr_88865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_88865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__9318__auto___88978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto___88978,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto___88978,c){
return (function (state_88942){
var state_val_88943 = (state_88942[(1)]);
if((state_val_88943 === (1))){
var inst_88931 = (state_88942[(7)]);
var inst_88930 = (state_88942[(8)]);
var inst_88932 = (state_88942[(9)]);
var inst_88930__$1 = cljs.nodejs.require.call(null,"../js/pure-js.js");
var inst_88931__$1 = cljs.core.async.chan.call(null,(1));
var inst_88932__$1 = (function (){var res = inst_88930__$1;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_88931__$1;
return ((function (res,config_path,wcc,inst_88931,inst_88930,inst_88932,inst_88930__$1,inst_88931__$1,state_val_88943,c__9318__auto___88978,c){
return (function (error,res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,inst_88931,inst_88930,inst_88932,inst_88930__$1,inst_88931__$1,state_val_88943,c__9318__auto___88978,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,inst_88931,inst_88930,inst_88932,inst_88930__$1,inst_88931__$1,state_val_88943,c__9318__auto___88978,c){
return (function (state_88947){
var state_val_88948 = (state_88947[(1)]);
if((state_val_88948 === (1))){
var state_88947__$1 = state_88947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88947__$1,(2),wcc,res__$1);
} else {
if((state_val_88948 === (2))){
var inst_88945 = (state_88947[(2)]);
var state_88947__$1 = state_88947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88947__$1,inst_88945);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,inst_88931,inst_88930,inst_88932,inst_88930__$1,inst_88931__$1,state_val_88943,c__9318__auto___88978,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_88931,inst_88930,inst_88932,inst_88930__$1,inst_88931__$1,state_val_88943,c__9318__auto___88978,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_88952 = [null,null,null,null,null,null,null];
(statearr_88952[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_88952[(1)] = (1));

return statearr_88952;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_88947){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88953){if((e88953 instanceof Object)){
var ex__9301__auto__ = e88953;
var statearr_88954_88979 = state_88947;
(statearr_88954_88979[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88980 = state_88947;
state_88947 = G__88980;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_88947){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_88947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_88931,inst_88930,inst_88932,inst_88930__$1,inst_88931__$1,state_val_88943,c__9318__auto___88978,c))
})();
var state__9320__auto__ = (function (){var statearr_88955 = f__9319__auto__.call(null);
(statearr_88955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_88955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,inst_88931,inst_88930,inst_88932,inst_88930__$1,inst_88931__$1,state_val_88943,c__9318__auto___88978,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,inst_88931,inst_88930,inst_88932,inst_88930__$1,inst_88931__$1,state_val_88943,c__9318__auto___88978,c))
})();
var inst_88933 = inst_88930__$1.getFileLineCount("~/Dropbox/.drop-dot/.drop-dot",inst_88932__$1);
var state_88942__$1 = (function (){var statearr_88956 = state_88942;
(statearr_88956[(7)] = inst_88931__$1);

(statearr_88956[(8)] = inst_88930__$1);

(statearr_88956[(10)] = inst_88933);

(statearr_88956[(9)] = inst_88932__$1);

return statearr_88956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88942__$1,(2),inst_88931__$1);
} else {
if((state_val_88943 === (2))){
var inst_88931 = (state_88942[(7)]);
var inst_88930 = (state_88942[(8)]);
var inst_88933 = (state_88942[(10)]);
var inst_88932 = (state_88942[(9)]);
var inst_88935 = (state_88942[(2)]);
var inst_88936 = [cljs.core.str(inst_88935)].join('');
var inst_88937 = parseInt(inst_88936);
var inst_88938 = (function (){var res = inst_88930;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_88931;
var wcc_jammer = inst_88932;
var get_wc = inst_88933;
var lines = inst_88937;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_88931,inst_88930,inst_88933,inst_88932,inst_88935,inst_88936,inst_88937,state_val_88943,c__9318__auto___88978,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_88931,inst_88930,inst_88933,inst_88932,inst_88935,inst_88936,inst_88937,state_val_88943,c__9318__auto___88978,c))
})();
var inst_88939 = (function (){var res = inst_88930;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_88931;
var wcc_jammer = inst_88932;
var get_wc = inst_88933;
var lines = inst_88937;
var close_if_done = inst_88938;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_88931,inst_88930,inst_88933,inst_88932,inst_88935,inst_88936,inst_88937,inst_88938,state_val_88943,c__9318__auto___88978,c){
return (function (res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_88931,inst_88930,inst_88933,inst_88932,inst_88935,inst_88936,inst_88937,inst_88938,state_val_88943,c__9318__auto___88978,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_88931,inst_88930,inst_88933,inst_88932,inst_88935,inst_88936,inst_88937,inst_88938,state_val_88943,c__9318__auto___88978,c){
return (function (state_88961){
var state_val_88962 = (state_88961[(1)]);
if((state_val_88962 === (1))){
var state_88961__$1 = state_88961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88961__$1,(2),c,res__$1);
} else {
if((state_val_88962 === (2))){
var inst_88958 = (state_88961[(2)]);
var inst_88959 = close_if_done.call(null);
var state_88961__$1 = (function (){var statearr_88963 = state_88961;
(statearr_88963[(7)] = inst_88958);

return statearr_88963;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88961__$1,inst_88959);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_88931,inst_88930,inst_88933,inst_88932,inst_88935,inst_88936,inst_88937,inst_88938,state_val_88943,c__9318__auto___88978,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_88931,inst_88930,inst_88933,inst_88932,inst_88935,inst_88936,inst_88937,inst_88938,state_val_88943,c__9318__auto___88978,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_88967 = [null,null,null,null,null,null,null,null];
(statearr_88967[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_88967[(1)] = (1));

return statearr_88967;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_88961){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88968){if((e88968 instanceof Object)){
var ex__9301__auto__ = e88968;
var statearr_88969_88981 = state_88961;
(statearr_88969_88981[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88982 = state_88961;
state_88961 = G__88982;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_88961){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_88961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_88931,inst_88930,inst_88933,inst_88932,inst_88935,inst_88936,inst_88937,inst_88938,state_val_88943,c__9318__auto___88978,c))
})();
var state__9320__auto__ = (function (){var statearr_88970 = f__9319__auto__.call(null);
(statearr_88970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_88970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_88931,inst_88930,inst_88933,inst_88932,inst_88935,inst_88936,inst_88937,inst_88938,state_val_88943,c__9318__auto___88978,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_88931,inst_88930,inst_88933,inst_88932,inst_88935,inst_88936,inst_88937,inst_88938,state_val_88943,c__9318__auto___88978,c))
})();
var inst_88940 = inst_88930.getLinesFromFile("~/Dropbox/.drop-dot/.drop-dot",inst_88939);
var state_88942__$1 = state_88942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88942__$1,inst_88940);
} else {
return null;
}
}
});})(c__9318__auto___88978,c))
;
return ((function (switch__9297__auto__,c__9318__auto___88978,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_88974 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_88974[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_88974[(1)] = (1));

return statearr_88974;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_88942){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_88942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e88975){if((e88975 instanceof Object)){
var ex__9301__auto__ = e88975;
var statearr_88976_88983 = state_88942;
(statearr_88976_88983[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88984 = state_88942;
state_88942 = G__88984;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_88942){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_88942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto___88978,c))
})();
var state__9320__auto__ = (function (){var statearr_88977 = f__9319__auto__.call(null);
(statearr_88977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto___88978);

return statearr_88977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto___88978,c))
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
var len__7018__auto___88986 = arguments.length;
var i__7019__auto___88987 = (0);
while(true){
if((i__7019__auto___88987 < len__7018__auto___88986)){
args__7025__auto__.push((arguments[i__7019__auto___88987]));

var G__88988 = (i__7019__auto___88987 + (1));
i__7019__auto___88987 = G__88988;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq88985){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88985));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map