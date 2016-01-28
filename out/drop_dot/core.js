// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs.nodejs.enable_util_print_BANG_();
drop_dot.core.pure_js = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("../js/pure-js.js") : cljs.nodejs.require.call(null,"../js/pure-js.js"));
drop_dot.core.chan_vec_cmd__GT_exec = (function drop_dot$core$chan_vec_cmd__GT_exec(input_chan){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13171){
var state_val_13172 = (state_13171[(1)]);
if((state_val_13172 === (1))){
var state_13171__$1 = state_13171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13171__$1,(2),input_chan);
} else {
if((state_val_13172 === (2))){
var inst_13150 = (state_13171[(2)]);
var inst_13151 = inst_13150;
var state_13171__$1 = (function (){var statearr_13173 = state_13171;
(statearr_13173[(7)] = inst_13151);

return statearr_13173;
})();
var statearr_13174_13201 = state_13171__$1;
(statearr_13174_13201[(2)] = null);

(statearr_13174_13201[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13172 === (3))){
var inst_13151 = (state_13171[(7)]);
var inst_13153 = cljs.core.count(inst_13151);
var inst_13154 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13153,(0));
var state_13171__$1 = state_13171;
if(inst_13154){
var statearr_13175_13202 = state_13171__$1;
(statearr_13175_13202[(1)] = (5));

} else {
var statearr_13176_13203 = state_13171__$1;
(statearr_13176_13203[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13172 === (4))){
var inst_13169 = (state_13171[(2)]);
var state_13171__$1 = state_13171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13171__$1,inst_13169);
} else {
if((state_val_13172 === (5))){
var state_13171__$1 = state_13171;
var statearr_13177_13204 = state_13171__$1;
(statearr_13177_13204[(2)] = null);

(statearr_13177_13204[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13172 === (6))){
var inst_13151 = (state_13171[(7)]);
var inst_13157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_13158 = cljs.core.first(inst_13151);
var inst_13159 = (function (){var v = inst_13151;
var rc = inst_13157;
var cmd = inst_13158;
return ((function (v,rc,cmd,inst_13151,inst_13157,inst_13158,state_val_13172,c__10212__auto__){
return (function (res){
var c__10212__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto____$1,v,rc,cmd,inst_13151,inst_13157,inst_13158,state_val_13172,c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto____$1,v,rc,cmd,inst_13151,inst_13157,inst_13158,state_val_13172,c__10212__auto__){
return (function (state_13181){
var state_val_13182 = (state_13181[(1)]);
if((state_val_13182 === (1))){
var state_13181__$1 = state_13181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13181__$1,(2),rc,res);
} else {
if((state_val_13182 === (2))){
var inst_13179 = (state_13181[(2)]);
var state_13181__$1 = state_13181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13181__$1,inst_13179);
} else {
return null;
}
}
});})(c__10212__auto____$1,v,rc,cmd,inst_13151,inst_13157,inst_13158,state_val_13172,c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto____$1,v,rc,cmd,inst_13151,inst_13157,inst_13158,state_val_13172,c__10212__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____0 = (function (){
var statearr_13186 = [null,null,null,null,null,null,null];
(statearr_13186[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__);

(statearr_13186[(1)] = (1));

return statearr_13186;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____1 = (function (state_13181){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13181);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13187){if((e13187 instanceof Object)){
var ex__10102__auto__ = e13187;
var statearr_13188_13205 = state_13181;
(statearr_13188_13205[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13181);

return cljs.core.cst$kw$recur;
} else {
throw e13187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13206 = state_13181;
state_13181 = G__13206;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__ = function(state_13181){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____1.call(this,state_13181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto____$1,v,rc,cmd,inst_13151,inst_13157,inst_13158,state_val_13172,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13189 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto____$1);

return statearr_13189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto____$1,v,rc,cmd,inst_13151,inst_13157,inst_13158,state_val_13172,c__10212__auto__))
);

return c__10212__auto____$1;
});
;})(v,rc,cmd,inst_13151,inst_13157,inst_13158,state_val_13172,c__10212__auto__))
})();
var inst_13160 = drop_dot.core.pure_js.execAndPrint(inst_13158,inst_13159);
var state_13171__$1 = (function (){var statearr_13190 = state_13171;
(statearr_13190[(8)] = inst_13160);

return statearr_13190;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13171__$1,(8),inst_13157);
} else {
if((state_val_13172 === (7))){
var inst_13167 = (state_13171[(2)]);
var state_13171__$1 = state_13171;
var statearr_13191_13207 = state_13171__$1;
(statearr_13191_13207[(2)] = inst_13167);

(statearr_13191_13207[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13172 === (8))){
var inst_13151 = (state_13171[(7)]);
var inst_13162 = (state_13171[(2)]);
var inst_13163 = cljs.core.rest(inst_13151);
var inst_13164 = cljs.core.vec(inst_13163);
var inst_13151__$1 = inst_13164;
var state_13171__$1 = (function (){var statearr_13192 = state_13171;
(statearr_13192[(7)] = inst_13151__$1);

(statearr_13192[(9)] = inst_13162);

return statearr_13192;
})();
var statearr_13193_13208 = state_13171__$1;
(statearr_13193_13208[(2)] = null);

(statearr_13193_13208[(1)] = (3));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____0 = (function (){
var statearr_13197 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13197[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__);

(statearr_13197[(1)] = (1));

return statearr_13197;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____1 = (function (state_13171){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13171);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13198){if((e13198 instanceof Object)){
var ex__10102__auto__ = e13198;
var statearr_13199_13209 = state_13171;
(statearr_13199_13209[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13171);

return cljs.core.cst$kw$recur;
} else {
throw e13198;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13210 = state_13171;
state_13171 = G__13210;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__ = function(state_13171){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____1.call(this,state_13171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13200 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
drop_dot.core.exec_vec_of_commands = (function drop_dot$core$exec_vec_of_commands(v){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return drop_dot.core.chan_vec_cmd__GT_exec((function (){var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__,c){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__,c){
return (function (state_13222){
var state_val_13223 = (state_13222[(1)]);
if((state_val_13223 === (1))){
var state_13222__$1 = state_13222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13222__$1,v);
} else {
return null;
}
});})(c__10212__auto__,c))
;
return ((function (switch__10098__auto__,c__10212__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto____0 = (function (){
var statearr_13227 = [null,null,null,null,null,null,null];
(statearr_13227[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto__);

(statearr_13227[(1)] = (1));

return statearr_13227;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto____1 = (function (state_13222){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13222);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13228){if((e13228 instanceof Object)){
var ex__10102__auto__ = e13228;
var statearr_13229_13231 = state_13222;
(statearr_13229_13231[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13222);

return cljs.core.cst$kw$recur;
} else {
throw e13228;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13232 = state_13222;
state_13222 = G__13232;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto__ = function(state_13222){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto____1.call(this,state_13222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__,c))
})();
var state__10214__auto__ = (function (){var statearr_13230 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__,c))
);

return c__10212__auto__;
})());
});
drop_dot.core.dropdot_folder_exists_QMARK_ = (function drop_dot$core$dropdot_folder_exists_QMARK_(){
return drop_dot.core.pure_js.dirExists("~/Dropbox/.drop-dot");
});
drop_dot.core.dropbox_installed_QMARK_ = (function drop_dot$core$dropbox_installed_QMARK_(){
return drop_dot.core.pure_js.dirExists("~/Dropbox");
});
drop_dot.core.unix_OS_QMARK_ = (function drop_dot$core$unix_OS_QMARK_(){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.nodejs.process["platform"]),"linux")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.nodejs.process["platform"]),"darwin"));
});
drop_dot.core.chan_path_exists_QMARK_ = (function drop_dot$core$chan_path_exists_QMARK_(line){
var res = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("../js/pure-js.js") : cljs.nodejs.require.call(null,"../js/pure-js.js"));
var d = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
res.confirmPathExists(line,((function (res,d){
return (function (res__$1){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__,res,d){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__,res,d){
return (function (state_13248){
var state_val_13249 = (state_13248[(1)]);
if((state_val_13249 === (1))){
var state_13248__$1 = state_13248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13248__$1,(2),d,res__$1);
} else {
if((state_val_13249 === (2))){
var inst_13246 = (state_13248[(2)]);
var state_13248__$1 = state_13248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13248__$1,inst_13246);
} else {
return null;
}
}
});})(c__10212__auto__,res,d))
;
return ((function (switch__10098__auto__,c__10212__auto__,res,d){
return (function() {
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto____0 = (function (){
var statearr_13253 = [null,null,null,null,null,null,null];
(statearr_13253[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto__);

(statearr_13253[(1)] = (1));

return statearr_13253;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto____1 = (function (state_13248){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13248);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13254){if((e13254 instanceof Object)){
var ex__10102__auto__ = e13254;
var statearr_13255_13257 = state_13248;
(statearr_13255_13257[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13248);

return cljs.core.cst$kw$recur;
} else {
throw e13254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13258 = state_13248;
state_13248 = G__13258;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto__ = function(state_13248){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto____1.call(this,state_13248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__,res,d))
})();
var state__10214__auto__ = (function (){var statearr_13256 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__,res,d))
);

return c__10212__auto__;
});})(res,d))
);

return d;
});
drop_dot.core.line__GT_chan_verified_path = (function drop_dot$core$line__GT_chan_verified_path(line){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13290){
var state_val_13291 = (state_13290[(1)]);
if((state_val_13291 === (1))){
var inst_13281 = drop_dot.core.chan_path_exists_QMARK_(line);
var state_13290__$1 = state_13290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13290__$1,(2),inst_13281);
} else {
if((state_val_13291 === (2))){
var inst_13283 = (state_13290[(2)]);
var state_13290__$1 = state_13290;
if(cljs.core.truth_(inst_13283)){
var statearr_13292_13303 = state_13290__$1;
(statearr_13292_13303[(1)] = (3));

} else {
var statearr_13293_13304 = state_13290__$1;
(statearr_13293_13304[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13291 === (3))){
var state_13290__$1 = state_13290;
var statearr_13294_13305 = state_13290__$1;
(statearr_13294_13305[(2)] = line);

(statearr_13294_13305[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13291 === (4))){
var inst_13286 = [cljs.core.str("ERROR: "),cljs.core.str(line),cljs.core.str(" does not exist on this machine.")].join('');
var state_13290__$1 = state_13290;
var statearr_13295_13306 = state_13290__$1;
(statearr_13295_13306[(2)] = inst_13286);

(statearr_13295_13306[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13291 === (5))){
var inst_13288 = (state_13290[(2)]);
var state_13290__$1 = state_13290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13290__$1,inst_13288);
} else {
return null;
}
}
}
}
}
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto__ = null;
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto____0 = (function (){
var statearr_13299 = [null,null,null,null,null,null,null];
(statearr_13299[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto__);

(statearr_13299[(1)] = (1));

return statearr_13299;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto____1 = (function (state_13290){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13290);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13300){if((e13300 instanceof Object)){
var ex__10102__auto__ = e13300;
var statearr_13301_13307 = state_13290;
(statearr_13301_13307[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13290);

return cljs.core.cst$kw$recur;
} else {
throw e13300;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13308 = state_13290;
state_13290 = G__13308;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto__ = function(state_13290){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto____1.call(this,state_13290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13302 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
drop_dot.core.protocol_msg_QMARK_ = (function drop_dot$core$protocol_msg_QMARK_(arg){
return (clojure.string.includes_QMARK_(arg,"ERROR: ")) || (clojure.string.includes_QMARK_(arg,"NOTICE: "));
});
drop_dot.core.chan_verified_path__GT_chan_verified_droppee = (function drop_dot$core$chan_verified_path__GT_chan_verified_droppee(chan_verified_path){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13379){
var state_val_13380 = (state_13379[(1)]);
if((state_val_13380 === (1))){
var state_13379__$1 = state_13379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13379__$1,(2),chan_verified_path);
} else {
if((state_val_13380 === (2))){
var inst_13366 = (state_13379[(7)]);
var inst_13365 = (state_13379[(8)]);
var inst_13365__$1 = (state_13379[(2)]);
var inst_13366__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13367 = (function (){var verified_path = inst_13365__$1;
var rc = inst_13366__$1;
return ((function (verified_path,rc,inst_13366,inst_13365,inst_13365__$1,inst_13366__$1,state_val_13380,c__10212__auto__){
return (function (res){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,true)){
var c__10212__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto____$1,verified_path,rc,inst_13366,inst_13365,inst_13365__$1,inst_13366__$1,state_val_13380,c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto____$1,verified_path,rc,inst_13366,inst_13365,inst_13365__$1,inst_13366__$1,state_val_13380,c__10212__auto__){
return (function (state_13385){
var state_val_13386 = (state_13385[(1)]);
if((state_val_13386 === (1))){
var inst_13381 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced on this machine.")].join('');
var state_13385__$1 = state_13385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13385__$1,(2),rc,inst_13381);
} else {
if((state_val_13386 === (2))){
var inst_13383 = (state_13385[(2)]);
var state_13385__$1 = state_13385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13385__$1,inst_13383);
} else {
return null;
}
}
});})(c__10212__auto____$1,verified_path,rc,inst_13366,inst_13365,inst_13365__$1,inst_13366__$1,state_val_13380,c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto____$1,verified_path,rc,inst_13366,inst_13365,inst_13365__$1,inst_13366__$1,state_val_13380,c__10212__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0 = (function (){
var statearr_13390 = [null,null,null,null,null,null,null];
(statearr_13390[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__);

(statearr_13390[(1)] = (1));

return statearr_13390;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1 = (function (state_13385){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13385);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13391){if((e13391 instanceof Object)){
var ex__10102__auto__ = e13391;
var statearr_13392_13419 = state_13385;
(statearr_13392_13419[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13385);

return cljs.core.cst$kw$recur;
} else {
throw e13391;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13420 = state_13385;
state_13385 = G__13420;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__ = function(state_13385){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1.call(this,state_13385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto____$1,verified_path,rc,inst_13366,inst_13365,inst_13365__$1,inst_13366__$1,state_val_13380,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13393 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto____$1);

return statearr_13393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto____$1,verified_path,rc,inst_13366,inst_13365,inst_13365__$1,inst_13366__$1,state_val_13380,c__10212__auto__))
);

return c__10212__auto____$1;
} else {
var c__10212__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto____$1,verified_path,rc,inst_13366,inst_13365,inst_13365__$1,inst_13366__$1,state_val_13380,c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto____$1,verified_path,rc,inst_13366,inst_13365,inst_13365__$1,inst_13366__$1,state_val_13380,c__10212__auto__){
return (function (state_13397){
var state_val_13398 = (state_13397[(1)]);
if((state_val_13398 === (1))){
var state_13397__$1 = state_13397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13397__$1,(2),rc,verified_path);
} else {
if((state_val_13398 === (2))){
var inst_13395 = (state_13397[(2)]);
var state_13397__$1 = state_13397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13397__$1,inst_13395);
} else {
return null;
}
}
});})(c__10212__auto____$1,verified_path,rc,inst_13366,inst_13365,inst_13365__$1,inst_13366__$1,state_val_13380,c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto____$1,verified_path,rc,inst_13366,inst_13365,inst_13365__$1,inst_13366__$1,state_val_13380,c__10212__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0 = (function (){
var statearr_13402 = [null,null,null,null,null,null,null];
(statearr_13402[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__);

(statearr_13402[(1)] = (1));

return statearr_13402;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1 = (function (state_13397){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13397);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13403){if((e13403 instanceof Object)){
var ex__10102__auto__ = e13403;
var statearr_13404_13421 = state_13397;
(statearr_13404_13421[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13397);

return cljs.core.cst$kw$recur;
} else {
throw e13403;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13422 = state_13397;
state_13397 = G__13422;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__ = function(state_13397){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1.call(this,state_13397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto____$1,verified_path,rc,inst_13366,inst_13365,inst_13365__$1,inst_13366__$1,state_val_13380,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13405 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto____$1);

return statearr_13405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto____$1,verified_path,rc,inst_13366,inst_13365,inst_13365__$1,inst_13366__$1,state_val_13380,c__10212__auto__))
);

return c__10212__auto____$1;
}
});
;})(verified_path,rc,inst_13366,inst_13365,inst_13365__$1,inst_13366__$1,state_val_13380,c__10212__auto__))
})();
var inst_13368 = drop_dot.core.protocol_msg_QMARK_(inst_13365__$1);
var state_13379__$1 = (function (){var statearr_13406 = state_13379;
(statearr_13406[(7)] = inst_13366__$1);

(statearr_13406[(9)] = inst_13367);

(statearr_13406[(8)] = inst_13365__$1);

return statearr_13406;
})();
if(cljs.core.truth_(inst_13368)){
var statearr_13407_13423 = state_13379__$1;
(statearr_13407_13423[(1)] = (3));

} else {
var statearr_13408_13424 = state_13379__$1;
(statearr_13408_13424[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13380 === (3))){
var inst_13366 = (state_13379[(7)]);
var inst_13365 = (state_13379[(8)]);
var state_13379__$1 = state_13379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13379__$1,(6),inst_13366,inst_13365);
} else {
if((state_val_13380 === (4))){
var inst_13367 = (state_13379[(9)]);
var inst_13365 = (state_13379[(8)]);
var inst_13373 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_13365,inst_13367);
var state_13379__$1 = state_13379;
var statearr_13409_13425 = state_13379__$1;
(statearr_13409_13425[(2)] = inst_13373);

(statearr_13409_13425[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13380 === (5))){
var inst_13366 = (state_13379[(7)]);
var inst_13375 = (state_13379[(2)]);
var state_13379__$1 = (function (){var statearr_13410 = state_13379;
(statearr_13410[(10)] = inst_13375);

return statearr_13410;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13379__$1,(7),inst_13366);
} else {
if((state_val_13380 === (6))){
var inst_13371 = (state_13379[(2)]);
var state_13379__$1 = state_13379;
var statearr_13411_13426 = state_13379__$1;
(statearr_13411_13426[(2)] = inst_13371);

(statearr_13411_13426[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13380 === (7))){
var inst_13377 = (state_13379[(2)]);
var state_13379__$1 = state_13379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13379__$1,inst_13377);
} else {
return null;
}
}
}
}
}
}
}
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0 = (function (){
var statearr_13415 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13415[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__);

(statearr_13415[(1)] = (1));

return statearr_13415;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1 = (function (state_13379){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13379);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13416){if((e13416 instanceof Object)){
var ex__10102__auto__ = e13416;
var statearr_13417_13427 = state_13379;
(statearr_13417_13427[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13379);

return cljs.core.cst$kw$recur;
} else {
throw e13416;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13428 = state_13379;
state_13379 = G__13428;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__ = function(state_13379){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1.call(this,state_13379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13418 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
drop_dot.core.drop_chan_verified_droppee = (function drop_dot$core$drop_chan_verified_droppee(c){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13463){
var state_val_13464 = (state_13463[(1)]);
if((state_val_13464 === (1))){
var state_13463__$1 = state_13463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13463__$1,(2),c);
} else {
if((state_val_13464 === (2))){
var inst_13454 = (state_13463[(7)]);
var inst_13454__$1 = (state_13463[(2)]);
var inst_13455 = drop_dot.core.protocol_msg_QMARK_(inst_13454__$1);
var state_13463__$1 = (function (){var statearr_13465 = state_13463;
(statearr_13465[(7)] = inst_13454__$1);

return statearr_13465;
})();
if(cljs.core.truth_(inst_13455)){
var statearr_13466_13477 = state_13463__$1;
(statearr_13466_13477[(1)] = (3));

} else {
var statearr_13467_13478 = state_13463__$1;
(statearr_13467_13478[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13464 === (3))){
var inst_13454 = (state_13463[(7)]);
var inst_13457 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_13454], 0));
var state_13463__$1 = state_13463;
var statearr_13468_13479 = state_13463__$1;
(statearr_13468_13479[(2)] = inst_13457);

(statearr_13468_13479[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13464 === (4))){
var inst_13454 = (state_13463[(7)]);
var inst_13459 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_13454);
var state_13463__$1 = state_13463;
var statearr_13469_13480 = state_13463__$1;
(statearr_13469_13480[(2)] = inst_13459);

(statearr_13469_13480[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13464 === (5))){
var inst_13461 = (state_13463[(2)]);
var state_13463__$1 = state_13463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13463__$1,inst_13461);
} else {
return null;
}
}
}
}
}
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto__ = null;
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto____0 = (function (){
var statearr_13473 = [null,null,null,null,null,null,null,null];
(statearr_13473[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto__);

(statearr_13473[(1)] = (1));

return statearr_13473;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto____1 = (function (state_13463){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13463);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13474){if((e13474 instanceof Object)){
var ex__10102__auto__ = e13474;
var statearr_13475_13481 = state_13463;
(statearr_13475_13481[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13463);

return cljs.core.cst$kw$recur;
} else {
throw e13474;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13482 = state_13463;
state_13463 = G__13482;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto__ = function(state_13463){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto____1.call(this,state_13463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13476 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
drop_dot.core.drop_line = (function drop_dot$core$drop_line(line){
return drop_dot.core.drop_chan_verified_droppee(drop_dot.core.chan_verified_path__GT_chan_verified_droppee(drop_dot.core.line__GT_chan_verified_path(line)));
});
drop_dot.core.line__GT_chan_linkable_path = (function drop_dot$core$line__GT_chan_linkable_path(line){
var basename = drop_dot.core.pure_js.getBasename(line);
var target_path = [cljs.core.str("~/Dropbox/.drop-dot/"),cljs.core.str(basename)].join('');
var rc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var cb = ((function (basename,target_path,rc){
return (function (res){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,true)){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__,basename,target_path,rc){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__,basename,target_path,rc){
return (function (state_13511){
var state_val_13512 = (state_13511[(1)]);
if((state_val_13512 === (1))){
var state_13511__$1 = state_13511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13511__$1,(2),rc,line);
} else {
if((state_val_13512 === (2))){
var inst_13509 = (state_13511[(2)]);
var state_13511__$1 = state_13511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13511__$1,inst_13509);
} else {
return null;
}
}
});})(c__10212__auto__,basename,target_path,rc))
;
return ((function (switch__10098__auto__,c__10212__auto__,basename,target_path,rc){
return (function() {
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto__ = null;
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto____0 = (function (){
var statearr_13516 = [null,null,null,null,null,null,null];
(statearr_13516[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto__);

(statearr_13516[(1)] = (1));

return statearr_13516;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto____1 = (function (state_13511){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13511);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13517){if((e13517 instanceof Object)){
var ex__10102__auto__ = e13517;
var statearr_13518_13533 = state_13511;
(statearr_13518_13533[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13511);

return cljs.core.cst$kw$recur;
} else {
throw e13517;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13534 = state_13511;
state_13511 = G__13534;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto__ = function(state_13511){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto____1.call(this,state_13511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__,basename,target_path,rc))
})();
var state__10214__auto__ = (function (){var statearr_13519 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__,basename,target_path,rc))
);

return c__10212__auto__;
} else {
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__,basename,target_path,rc){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__,basename,target_path,rc){
return (function (state_13524){
var state_val_13525 = (state_13524[(1)]);
if((state_val_13525 === (1))){
var inst_13520 = [cljs.core.str("ERROR: Invalid line: there is nothing to link "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_13524__$1 = state_13524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13524__$1,(2),rc,inst_13520);
} else {
if((state_val_13525 === (2))){
var inst_13522 = (state_13524[(2)]);
var state_13524__$1 = state_13524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13524__$1,inst_13522);
} else {
return null;
}
}
});})(c__10212__auto__,basename,target_path,rc))
;
return ((function (switch__10098__auto__,c__10212__auto__,basename,target_path,rc){
return (function() {
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto__ = null;
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto____0 = (function (){
var statearr_13529 = [null,null,null,null,null,null,null];
(statearr_13529[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto__);

(statearr_13529[(1)] = (1));

return statearr_13529;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto____1 = (function (state_13524){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13524);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13530){if((e13530 instanceof Object)){
var ex__10102__auto__ = e13530;
var statearr_13531_13535 = state_13524;
(statearr_13531_13535[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13524);

return cljs.core.cst$kw$recur;
} else {
throw e13530;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13536 = state_13524;
state_13524 = G__13536;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto__ = function(state_13524){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto____1.call(this,state_13524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__,basename,target_path,rc))
})();
var state__10214__auto__ = (function (){var statearr_13532 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__,basename,target_path,rc))
);

return c__10212__auto__;
}
});})(basename,target_path,rc))
;
drop_dot.core.pure_js.pathExists(target_path,cb);

return rc;
});
drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking = (function drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking(chan_linkable_path){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13607){
var state_val_13608 = (state_13607[(1)]);
if((state_val_13608 === (1))){
var state_13607__$1 = state_13607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13607__$1,(2),chan_linkable_path);
} else {
if((state_val_13608 === (2))){
var inst_13593 = (state_13607[(7)]);
var inst_13594 = (state_13607[(8)]);
var inst_13593__$1 = (state_13607[(2)]);
var inst_13594__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13595 = (function (){var linkable_path = inst_13593__$1;
var rc = inst_13594__$1;
return ((function (linkable_path,rc,inst_13593,inst_13594,inst_13593__$1,inst_13594__$1,state_val_13608,c__10212__auto__){
return (function (res){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,true)){
var c__10212__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto____$1,linkable_path,rc,inst_13593,inst_13594,inst_13593__$1,inst_13594__$1,state_val_13608,c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto____$1,linkable_path,rc,inst_13593,inst_13594,inst_13593__$1,inst_13594__$1,state_val_13608,c__10212__auto__){
return (function (state_13613){
var state_val_13614 = (state_13613[(1)]);
if((state_val_13614 === (1))){
var inst_13609 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_13613__$1 = state_13613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13613__$1,(2),rc,inst_13609);
} else {
if((state_val_13614 === (2))){
var inst_13611 = (state_13613[(2)]);
var state_13613__$1 = state_13613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13613__$1,inst_13611);
} else {
return null;
}
}
});})(c__10212__auto____$1,linkable_path,rc,inst_13593,inst_13594,inst_13593__$1,inst_13594__$1,state_val_13608,c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto____$1,linkable_path,rc,inst_13593,inst_13594,inst_13593__$1,inst_13594__$1,state_val_13608,c__10212__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____0 = (function (){
var statearr_13618 = [null,null,null,null,null,null,null];
(statearr_13618[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__);

(statearr_13618[(1)] = (1));

return statearr_13618;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____1 = (function (state_13613){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13613);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13619){if((e13619 instanceof Object)){
var ex__10102__auto__ = e13619;
var statearr_13620_13647 = state_13613;
(statearr_13620_13647[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13613);

return cljs.core.cst$kw$recur;
} else {
throw e13619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13648 = state_13613;
state_13613 = G__13648;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__ = function(state_13613){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____1.call(this,state_13613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto____$1,linkable_path,rc,inst_13593,inst_13594,inst_13593__$1,inst_13594__$1,state_val_13608,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13621 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto____$1);

return statearr_13621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto____$1,linkable_path,rc,inst_13593,inst_13594,inst_13593__$1,inst_13594__$1,state_val_13608,c__10212__auto__))
);

return c__10212__auto____$1;
} else {
var c__10212__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto____$1,linkable_path,rc,inst_13593,inst_13594,inst_13593__$1,inst_13594__$1,state_val_13608,c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto____$1,linkable_path,rc,inst_13593,inst_13594,inst_13593__$1,inst_13594__$1,state_val_13608,c__10212__auto__){
return (function (state_13625){
var state_val_13626 = (state_13625[(1)]);
if((state_val_13626 === (1))){
var state_13625__$1 = state_13625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13625__$1,(2),rc,linkable_path);
} else {
if((state_val_13626 === (2))){
var inst_13623 = (state_13625[(2)]);
var state_13625__$1 = state_13625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13625__$1,inst_13623);
} else {
return null;
}
}
});})(c__10212__auto____$1,linkable_path,rc,inst_13593,inst_13594,inst_13593__$1,inst_13594__$1,state_val_13608,c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto____$1,linkable_path,rc,inst_13593,inst_13594,inst_13593__$1,inst_13594__$1,state_val_13608,c__10212__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____0 = (function (){
var statearr_13630 = [null,null,null,null,null,null,null];
(statearr_13630[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__);

(statearr_13630[(1)] = (1));

return statearr_13630;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____1 = (function (state_13625){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13625);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13631){if((e13631 instanceof Object)){
var ex__10102__auto__ = e13631;
var statearr_13632_13649 = state_13625;
(statearr_13632_13649[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13625);

return cljs.core.cst$kw$recur;
} else {
throw e13631;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13650 = state_13625;
state_13625 = G__13650;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__ = function(state_13625){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____1.call(this,state_13625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto____$1,linkable_path,rc,inst_13593,inst_13594,inst_13593__$1,inst_13594__$1,state_val_13608,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13633 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto____$1);

return statearr_13633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto____$1,linkable_path,rc,inst_13593,inst_13594,inst_13593__$1,inst_13594__$1,state_val_13608,c__10212__auto__))
);

return c__10212__auto____$1;
}
});
;})(linkable_path,rc,inst_13593,inst_13594,inst_13593__$1,inst_13594__$1,state_val_13608,c__10212__auto__))
})();
var inst_13596 = drop_dot.core.protocol_msg_QMARK_(inst_13593__$1);
var state_13607__$1 = (function (){var statearr_13634 = state_13607;
(statearr_13634[(7)] = inst_13593__$1);

(statearr_13634[(9)] = inst_13595);

(statearr_13634[(8)] = inst_13594__$1);

return statearr_13634;
})();
if(cljs.core.truth_(inst_13596)){
var statearr_13635_13651 = state_13607__$1;
(statearr_13635_13651[(1)] = (3));

} else {
var statearr_13636_13652 = state_13607__$1;
(statearr_13636_13652[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13608 === (3))){
var inst_13593 = (state_13607[(7)]);
var inst_13594 = (state_13607[(8)]);
var state_13607__$1 = state_13607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13607__$1,(6),inst_13594,inst_13593);
} else {
if((state_val_13608 === (4))){
var inst_13593 = (state_13607[(7)]);
var inst_13595 = (state_13607[(9)]);
var inst_13601 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_13593,inst_13595);
var state_13607__$1 = state_13607;
var statearr_13637_13653 = state_13607__$1;
(statearr_13637_13653[(2)] = inst_13601);

(statearr_13637_13653[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13608 === (5))){
var inst_13594 = (state_13607[(8)]);
var inst_13603 = (state_13607[(2)]);
var state_13607__$1 = (function (){var statearr_13638 = state_13607;
(statearr_13638[(10)] = inst_13603);

return statearr_13638;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13607__$1,(7),inst_13594);
} else {
if((state_val_13608 === (6))){
var inst_13599 = (state_13607[(2)]);
var state_13607__$1 = state_13607;
var statearr_13639_13654 = state_13607__$1;
(statearr_13639_13654[(2)] = inst_13599);

(statearr_13639_13654[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13608 === (7))){
var inst_13605 = (state_13607[(2)]);
var state_13607__$1 = state_13607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13607__$1,inst_13605);
} else {
return null;
}
}
}
}
}
}
}
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____0 = (function (){
var statearr_13643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13643[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__);

(statearr_13643[(1)] = (1));

return statearr_13643;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____1 = (function (state_13607){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13607);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13644){if((e13644 instanceof Object)){
var ex__10102__auto__ = e13644;
var statearr_13645_13655 = state_13607;
(statearr_13645_13655[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13607);

return cljs.core.cst$kw$recur;
} else {
throw e13644;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13656 = state_13607;
state_13607 = G__13656;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__ = function(state_13607){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____1.call(this,state_13607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13646 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking = (function drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking(chan_linkable_path_that_wants_linking){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13727){
var state_val_13728 = (state_13727[(1)]);
if((state_val_13728 === (1))){
var state_13727__$1 = state_13727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13727__$1,(2),chan_linkable_path_that_wants_linking);
} else {
if((state_val_13728 === (2))){
var inst_13714 = (state_13727[(7)]);
var inst_13713 = (state_13727[(8)]);
var inst_13713__$1 = (state_13727[(2)]);
var inst_13714__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13715 = (function (){var linkable_path = inst_13713__$1;
var rc = inst_13714__$1;
return ((function (linkable_path,rc,inst_13714,inst_13713,inst_13713__$1,inst_13714__$1,state_val_13728,c__10212__auto__){
return (function (res){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,true)){
var c__10212__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto____$1,linkable_path,rc,inst_13714,inst_13713,inst_13713__$1,inst_13714__$1,state_val_13728,c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto____$1,linkable_path,rc,inst_13714,inst_13713,inst_13713__$1,inst_13714__$1,state_val_13728,c__10212__auto__){
return (function (state_13733){
var state_val_13734 = (state_13733[(1)]);
if((state_val_13734 === (1))){
var inst_13729 = [cljs.core.str("ERROR: "),cljs.core.str(linkable_path),cljs.core.str(" already has a version on this system; please remove this file and re-run this command.")].join('');
var state_13733__$1 = state_13733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13733__$1,(2),rc,inst_13729);
} else {
if((state_val_13734 === (2))){
var inst_13731 = (state_13733[(2)]);
var state_13733__$1 = state_13733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13733__$1,inst_13731);
} else {
return null;
}
}
});})(c__10212__auto____$1,linkable_path,rc,inst_13714,inst_13713,inst_13713__$1,inst_13714__$1,state_val_13728,c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto____$1,linkable_path,rc,inst_13714,inst_13713,inst_13713__$1,inst_13714__$1,state_val_13728,c__10212__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____0 = (function (){
var statearr_13738 = [null,null,null,null,null,null,null];
(statearr_13738[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__);

(statearr_13738[(1)] = (1));

return statearr_13738;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____1 = (function (state_13733){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13733);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13739){if((e13739 instanceof Object)){
var ex__10102__auto__ = e13739;
var statearr_13740_13767 = state_13733;
(statearr_13740_13767[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13733);

return cljs.core.cst$kw$recur;
} else {
throw e13739;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13768 = state_13733;
state_13733 = G__13768;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__ = function(state_13733){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____1.call(this,state_13733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto____$1,linkable_path,rc,inst_13714,inst_13713,inst_13713__$1,inst_13714__$1,state_val_13728,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13741 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto____$1);

return statearr_13741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto____$1,linkable_path,rc,inst_13714,inst_13713,inst_13713__$1,inst_13714__$1,state_val_13728,c__10212__auto__))
);

return c__10212__auto____$1;
} else {
var c__10212__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto____$1,linkable_path,rc,inst_13714,inst_13713,inst_13713__$1,inst_13714__$1,state_val_13728,c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto____$1,linkable_path,rc,inst_13714,inst_13713,inst_13713__$1,inst_13714__$1,state_val_13728,c__10212__auto__){
return (function (state_13745){
var state_val_13746 = (state_13745[(1)]);
if((state_val_13746 === (1))){
var state_13745__$1 = state_13745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13745__$1,(2),rc,linkable_path);
} else {
if((state_val_13746 === (2))){
var inst_13743 = (state_13745[(2)]);
var state_13745__$1 = state_13745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13745__$1,inst_13743);
} else {
return null;
}
}
});})(c__10212__auto____$1,linkable_path,rc,inst_13714,inst_13713,inst_13713__$1,inst_13714__$1,state_val_13728,c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto____$1,linkable_path,rc,inst_13714,inst_13713,inst_13713__$1,inst_13714__$1,state_val_13728,c__10212__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____0 = (function (){
var statearr_13750 = [null,null,null,null,null,null,null];
(statearr_13750[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__);

(statearr_13750[(1)] = (1));

return statearr_13750;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____1 = (function (state_13745){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13745);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13751){if((e13751 instanceof Object)){
var ex__10102__auto__ = e13751;
var statearr_13752_13769 = state_13745;
(statearr_13752_13769[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13745);

return cljs.core.cst$kw$recur;
} else {
throw e13751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13770 = state_13745;
state_13745 = G__13770;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__ = function(state_13745){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____1.call(this,state_13745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto____$1,linkable_path,rc,inst_13714,inst_13713,inst_13713__$1,inst_13714__$1,state_val_13728,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13753 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto____$1);

return statearr_13753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto____$1,linkable_path,rc,inst_13714,inst_13713,inst_13713__$1,inst_13714__$1,state_val_13728,c__10212__auto__))
);

return c__10212__auto____$1;
}
});
;})(linkable_path,rc,inst_13714,inst_13713,inst_13713__$1,inst_13714__$1,state_val_13728,c__10212__auto__))
})();
var inst_13716 = drop_dot.core.protocol_msg_QMARK_(inst_13713__$1);
var state_13727__$1 = (function (){var statearr_13754 = state_13727;
(statearr_13754[(7)] = inst_13714__$1);

(statearr_13754[(9)] = inst_13715);

(statearr_13754[(8)] = inst_13713__$1);

return statearr_13754;
})();
if(cljs.core.truth_(inst_13716)){
var statearr_13755_13771 = state_13727__$1;
(statearr_13755_13771[(1)] = (3));

} else {
var statearr_13756_13772 = state_13727__$1;
(statearr_13756_13772[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13728 === (3))){
var inst_13714 = (state_13727[(7)]);
var inst_13713 = (state_13727[(8)]);
var state_13727__$1 = state_13727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13727__$1,(6),inst_13714,inst_13713);
} else {
if((state_val_13728 === (4))){
var inst_13715 = (state_13727[(9)]);
var inst_13713 = (state_13727[(8)]);
var inst_13721 = drop_dot.core.pure_js.pathExists(inst_13713,inst_13715);
var state_13727__$1 = state_13727;
var statearr_13757_13773 = state_13727__$1;
(statearr_13757_13773[(2)] = inst_13721);

(statearr_13757_13773[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13728 === (5))){
var inst_13714 = (state_13727[(7)]);
var inst_13723 = (state_13727[(2)]);
var state_13727__$1 = (function (){var statearr_13758 = state_13727;
(statearr_13758[(10)] = inst_13723);

return statearr_13758;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13727__$1,(7),inst_13714);
} else {
if((state_val_13728 === (6))){
var inst_13719 = (state_13727[(2)]);
var state_13727__$1 = state_13727;
var statearr_13759_13774 = state_13727__$1;
(statearr_13759_13774[(2)] = inst_13719);

(statearr_13759_13774[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13728 === (7))){
var inst_13725 = (state_13727[(2)]);
var state_13727__$1 = state_13727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13727__$1,inst_13725);
} else {
return null;
}
}
}
}
}
}
}
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____0 = (function (){
var statearr_13763 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13763[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__);

(statearr_13763[(1)] = (1));

return statearr_13763;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____1 = (function (state_13727){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13727);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13764){if((e13764 instanceof Object)){
var ex__10102__auto__ = e13764;
var statearr_13765_13775 = state_13727;
(statearr_13765_13775[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13727);

return cljs.core.cst$kw$recur;
} else {
throw e13764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13776 = state_13727;
state_13727 = G__13776;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__ = function(state_13727){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____1.call(this,state_13727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13766 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
drop_dot.core.link_chan_path_that_needs_linking = (function drop_dot$core$link_chan_path_that_needs_linking(c){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13829){
var state_val_13830 = (state_13829[(1)]);
if((state_val_13830 === (1))){
var state_13829__$1 = state_13829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13829__$1,(2),c);
} else {
if((state_val_13830 === (2))){
var inst_13812 = (state_13829[(7)]);
var inst_13811 = (state_13829[(2)]);
var inst_13812__$1 = drop_dot.core.pure_js.localExpandHomeDir(inst_13811);
var inst_13813 = drop_dot.core.pure_js.getDirname(inst_13812__$1);
var inst_13814 = drop_dot.core.pure_js.getBasename(inst_13812__$1);
var inst_13815 = drop_dot.core.protocol_msg_QMARK_(inst_13812__$1);
var state_13829__$1 = (function (){var statearr_13831 = state_13829;
(statearr_13831[(8)] = inst_13814);

(statearr_13831[(9)] = inst_13813);

(statearr_13831[(7)] = inst_13812__$1);

return statearr_13831;
})();
if(cljs.core.truth_(inst_13815)){
var statearr_13832_13843 = state_13829__$1;
(statearr_13832_13843[(1)] = (3));

} else {
var statearr_13833_13844 = state_13829__$1;
(statearr_13833_13844[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13830 === (3))){
var inst_13812 = (state_13829[(7)]);
var inst_13817 = [cljs.core.str(inst_13812)].join('');
var inst_13818 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_13817], 0));
var state_13829__$1 = state_13829;
var statearr_13834_13845 = state_13829__$1;
(statearr_13834_13845[(2)] = inst_13818);

(statearr_13834_13845[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13830 === (4))){
var inst_13814 = (state_13829[(8)]);
var inst_13813 = (state_13829[(9)]);
var inst_13812 = (state_13829[(7)]);
var inst_13820 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13821 = [cljs.core.str("mkdir -vp "),cljs.core.str(inst_13813)].join('');
var inst_13822 = [cljs.core.str("ln -sv ~/Dropbox/.drop-dot/"),cljs.core.str(inst_13814),cljs.core.str(" "),cljs.core.str(inst_13812)].join('');
var inst_13823 = [inst_13821,inst_13822];
var inst_13824 = (new cljs.core.PersistentVector(null,2,(5),inst_13820,inst_13823,null));
var inst_13825 = drop_dot.core.exec_vec_of_commands(inst_13824);
var state_13829__$1 = state_13829;
var statearr_13835_13846 = state_13829__$1;
(statearr_13835_13846[(2)] = inst_13825);

(statearr_13835_13846[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13830 === (5))){
var inst_13827 = (state_13829[(2)]);
var state_13829__$1 = state_13829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13829__$1,inst_13827);
} else {
return null;
}
}
}
}
}
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10099__auto__ = null;
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10099__auto____0 = (function (){
var statearr_13839 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13839[(0)] = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10099__auto__);

(statearr_13839[(1)] = (1));

return statearr_13839;
});
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10099__auto____1 = (function (state_13829){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13829);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13840){if((e13840 instanceof Object)){
var ex__10102__auto__ = e13840;
var statearr_13841_13847 = state_13829;
(statearr_13841_13847[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13829);

return cljs.core.cst$kw$recur;
} else {
throw e13840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13848 = state_13829;
state_13829 = G__13848;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10099__auto__ = function(state_13829){
switch(arguments.length){
case 0:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10099__auto____1.call(this,state_13829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10099__auto____0;
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10099__auto____1;
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13842 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
return drop_dot.core.link_chan_path_that_needs_linking(drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking(drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking(drop_dot.core.line__GT_chan_linkable_path(line))));
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13925){
var state_val_13926 = (state_13925[(1)]);
if((state_val_13926 === (7))){
var inst_13921 = (state_13925[(2)]);
var state_13925__$1 = state_13925;
var statearr_13928_13953 = state_13925__$1;
(statearr_13928_13953[(2)] = inst_13921);

(statearr_13928_13953[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13926 === (1))){
var inst_13901 = chan_config;
var state_13925__$1 = (function (){var statearr_13929 = state_13925;
(statearr_13929[(7)] = inst_13901);

return statearr_13929;
})();
var statearr_13930_13954 = state_13925__$1;
(statearr_13930_13954[(2)] = null);

(statearr_13930_13954[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13926 === (4))){
var inst_13904 = (state_13925[(8)]);
var inst_13904__$1 = (state_13925[(2)]);
var state_13925__$1 = (function (){var statearr_13931 = state_13925;
(statearr_13931[(8)] = inst_13904__$1);

return statearr_13931;
})();
if(cljs.core.truth_(inst_13904__$1)){
var statearr_13932_13955 = state_13925__$1;
(statearr_13932_13955[(1)] = (5));

} else {
var statearr_13933_13956 = state_13925__$1;
(statearr_13933_13956[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13926 === (13))){
var inst_13901 = (state_13925[(7)]);
var inst_13917 = (state_13925[(2)]);
var tmp13927 = inst_13901;
var inst_13901__$1 = tmp13927;
var state_13925__$1 = (function (){var statearr_13934 = state_13925;
(statearr_13934[(9)] = inst_13917);

(statearr_13934[(7)] = inst_13901__$1);

return statearr_13934;
})();
var statearr_13935_13957 = state_13925__$1;
(statearr_13935_13957[(2)] = null);

(statearr_13935_13957[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13926 === (6))){
var state_13925__$1 = state_13925;
var statearr_13936_13958 = state_13925__$1;
(statearr_13936_13958[(2)] = null);

(statearr_13936_13958[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13926 === (3))){
var inst_13923 = (state_13925[(2)]);
var state_13925__$1 = state_13925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13925__$1,inst_13923);
} else {
if((state_val_13926 === (12))){
var state_13925__$1 = state_13925;
var statearr_13937_13959 = state_13925__$1;
(statearr_13937_13959[(2)] = null);

(statearr_13937_13959[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13926 === (2))){
var inst_13901 = (state_13925[(7)]);
var state_13925__$1 = state_13925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13925__$1,(4),inst_13901);
} else {
if((state_val_13926 === (11))){
var inst_13904 = (state_13925[(8)]);
var inst_13914 = drop_dot.core.link_line(inst_13904);
var state_13925__$1 = state_13925;
var statearr_13938_13960 = state_13925__$1;
(statearr_13938_13960[(2)] = inst_13914);

(statearr_13938_13960[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13926 === (9))){
var state_13925__$1 = state_13925;
var statearr_13939_13961 = state_13925__$1;
(statearr_13939_13961[(2)] = null);

(statearr_13939_13961[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13926 === (5))){
var inst_13906 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cmd,"drop");
var state_13925__$1 = state_13925;
if(inst_13906){
var statearr_13940_13962 = state_13925__$1;
(statearr_13940_13962[(1)] = (8));

} else {
var statearr_13941_13963 = state_13925__$1;
(statearr_13941_13963[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13926 === (10))){
var inst_13911 = (state_13925[(2)]);
var inst_13912 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cmd,"link");
var state_13925__$1 = (function (){var statearr_13942 = state_13925;
(statearr_13942[(10)] = inst_13911);

return statearr_13942;
})();
if(inst_13912){
var statearr_13943_13964 = state_13925__$1;
(statearr_13943_13964[(1)] = (11));

} else {
var statearr_13944_13965 = state_13925__$1;
(statearr_13944_13965[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13926 === (8))){
var inst_13904 = (state_13925[(8)]);
var inst_13908 = drop_dot.core.drop_line(inst_13904);
var state_13925__$1 = state_13925;
var statearr_13945_13966 = state_13925__$1;
(statearr_13945_13966[(2)] = inst_13908);

(statearr_13945_13966[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10099__auto____0 = (function (){
var statearr_13949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13949[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10099__auto__);

(statearr_13949[(1)] = (1));

return statearr_13949;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10099__auto____1 = (function (state_13925){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13925);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13950){if((e13950 instanceof Object)){
var ex__10102__auto__ = e13950;
var statearr_13951_13967 = state_13925;
(statearr_13951_13967[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13925);

return cljs.core.cst$kw$recur;
} else {
throw e13950;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13968 = state_13925;
state_13925 = G__13968;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10099__auto__ = function(state_13925){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10099__auto____1.call(this,state_13925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10099__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10099__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13952 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__10212__auto___14065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___14065,c){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___14065,c){
return (function (state_14029){
var state_val_14030 = (state_14029[(1)]);
if((state_val_14030 === (1))){
var inst_14019 = (state_14029[(7)]);
var inst_14018 = (state_14029[(8)]);
var inst_14017 = (state_14029[(9)]);
var inst_14017__$1 = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("../js/pure-js.js") : cljs.nodejs.require.call(null,"../js/pure-js.js"));
var inst_14018__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14019__$1 = (function (){var res = inst_14017__$1;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_14018__$1;
return ((function (res,config_path,wcc,inst_14019,inst_14018,inst_14017,inst_14017__$1,inst_14018__$1,state_val_14030,c__10212__auto___14065,c){
return (function (error,res__$1){
var c__10212__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto____$1,res,config_path,wcc,inst_14019,inst_14018,inst_14017,inst_14017__$1,inst_14018__$1,state_val_14030,c__10212__auto___14065,c){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto____$1,res,config_path,wcc,inst_14019,inst_14018,inst_14017,inst_14017__$1,inst_14018__$1,state_val_14030,c__10212__auto___14065,c){
return (function (state_14034){
var state_val_14035 = (state_14034[(1)]);
if((state_val_14035 === (1))){
var state_14034__$1 = state_14034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14034__$1,(2),wcc,res__$1);
} else {
if((state_val_14035 === (2))){
var inst_14032 = (state_14034[(2)]);
var state_14034__$1 = state_14034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14034__$1,inst_14032);
} else {
return null;
}
}
});})(c__10212__auto____$1,res,config_path,wcc,inst_14019,inst_14018,inst_14017,inst_14017__$1,inst_14018__$1,state_val_14030,c__10212__auto___14065,c))
;
return ((function (switch__10098__auto__,c__10212__auto____$1,res,config_path,wcc,inst_14019,inst_14018,inst_14017,inst_14017__$1,inst_14018__$1,state_val_14030,c__10212__auto___14065,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0 = (function (){
var statearr_14039 = [null,null,null,null,null,null,null];
(statearr_14039[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10099__auto__);

(statearr_14039[(1)] = (1));

return statearr_14039;
});
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1 = (function (state_14034){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_14034);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e14040){if((e14040 instanceof Object)){
var ex__10102__auto__ = e14040;
var statearr_14041_14066 = state_14034;
(statearr_14041_14066[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14034);

return cljs.core.cst$kw$recur;
} else {
throw e14040;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__14067 = state_14034;
state_14034 = G__14067;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__ = function(state_14034){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1.call(this,state_14034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto____$1,res,config_path,wcc,inst_14019,inst_14018,inst_14017,inst_14017__$1,inst_14018__$1,state_val_14030,c__10212__auto___14065,c))
})();
var state__10214__auto__ = (function (){var statearr_14042 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_14042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto____$1);

return statearr_14042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto____$1,res,config_path,wcc,inst_14019,inst_14018,inst_14017,inst_14017__$1,inst_14018__$1,state_val_14030,c__10212__auto___14065,c))
);

return c__10212__auto____$1;
});
;})(res,config_path,wcc,inst_14019,inst_14018,inst_14017,inst_14017__$1,inst_14018__$1,state_val_14030,c__10212__auto___14065,c))
})();
var inst_14020 = inst_14017__$1.getFileLineCount("~/Dropbox/.drop-dot/.drop-dot",inst_14019__$1);
var state_14029__$1 = (function (){var statearr_14043 = state_14029;
(statearr_14043[(7)] = inst_14019__$1);

(statearr_14043[(8)] = inst_14018__$1);

(statearr_14043[(10)] = inst_14020);

(statearr_14043[(9)] = inst_14017__$1);

return statearr_14043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14029__$1,(2),inst_14018__$1);
} else {
if((state_val_14030 === (2))){
var inst_14019 = (state_14029[(7)]);
var inst_14018 = (state_14029[(8)]);
var inst_14020 = (state_14029[(10)]);
var inst_14017 = (state_14029[(9)]);
var inst_14022 = (state_14029[(2)]);
var inst_14023 = [cljs.core.str(inst_14022)].join('');
var inst_14024 = parseInt(inst_14023);
var inst_14025 = (function (){var res = inst_14017;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_14018;
var wcc_jammer = inst_14019;
var get_wc = inst_14020;
var lines = inst_14024;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_14019,inst_14018,inst_14020,inst_14017,inst_14022,inst_14023,inst_14024,state_val_14030,c__10212__auto___14065,c){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lines,cljs.core.count(c.buf))){
return cljs.core.async.close_BANG_(c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_14019,inst_14018,inst_14020,inst_14017,inst_14022,inst_14023,inst_14024,state_val_14030,c__10212__auto___14065,c))
})();
var inst_14026 = (function (){var res = inst_14017;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_14018;
var wcc_jammer = inst_14019;
var get_wc = inst_14020;
var lines = inst_14024;
var close_if_done = inst_14025;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_14019,inst_14018,inst_14020,inst_14017,inst_14022,inst_14023,inst_14024,inst_14025,state_val_14030,c__10212__auto___14065,c){
return (function (res__$1){
var c__10212__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_14019,inst_14018,inst_14020,inst_14017,inst_14022,inst_14023,inst_14024,inst_14025,state_val_14030,c__10212__auto___14065,c){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_14019,inst_14018,inst_14020,inst_14017,inst_14022,inst_14023,inst_14024,inst_14025,state_val_14030,c__10212__auto___14065,c){
return (function (state_14048){
var state_val_14049 = (state_14048[(1)]);
if((state_val_14049 === (1))){
var state_14048__$1 = state_14048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14048__$1,(2),c,res__$1);
} else {
if((state_val_14049 === (2))){
var inst_14045 = (state_14048[(2)]);
var inst_14046 = (close_if_done.cljs$core$IFn$_invoke$arity$0 ? close_if_done.cljs$core$IFn$_invoke$arity$0() : close_if_done.call(null));
var state_14048__$1 = (function (){var statearr_14050 = state_14048;
(statearr_14050[(7)] = inst_14045);

return statearr_14050;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14048__$1,inst_14046);
} else {
return null;
}
}
});})(c__10212__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_14019,inst_14018,inst_14020,inst_14017,inst_14022,inst_14023,inst_14024,inst_14025,state_val_14030,c__10212__auto___14065,c))
;
return ((function (switch__10098__auto__,c__10212__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_14019,inst_14018,inst_14020,inst_14017,inst_14022,inst_14023,inst_14024,inst_14025,state_val_14030,c__10212__auto___14065,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0 = (function (){
var statearr_14054 = [null,null,null,null,null,null,null,null];
(statearr_14054[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10099__auto__);

(statearr_14054[(1)] = (1));

return statearr_14054;
});
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1 = (function (state_14048){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_14048);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e14055){if((e14055 instanceof Object)){
var ex__10102__auto__ = e14055;
var statearr_14056_14068 = state_14048;
(statearr_14056_14068[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14048);

return cljs.core.cst$kw$recur;
} else {
throw e14055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__14069 = state_14048;
state_14048 = G__14069;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__ = function(state_14048){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1.call(this,state_14048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_14019,inst_14018,inst_14020,inst_14017,inst_14022,inst_14023,inst_14024,inst_14025,state_val_14030,c__10212__auto___14065,c))
})();
var state__10214__auto__ = (function (){var statearr_14057 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_14057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto____$1);

return statearr_14057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_14019,inst_14018,inst_14020,inst_14017,inst_14022,inst_14023,inst_14024,inst_14025,state_val_14030,c__10212__auto___14065,c))
);

return c__10212__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_14019,inst_14018,inst_14020,inst_14017,inst_14022,inst_14023,inst_14024,inst_14025,state_val_14030,c__10212__auto___14065,c))
})();
var inst_14027 = inst_14017.getLinesFromFile("~/Dropbox/.drop-dot/.drop-dot",inst_14026);
var state_14029__$1 = state_14029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14029__$1,inst_14027);
} else {
return null;
}
}
});})(c__10212__auto___14065,c))
;
return ((function (switch__10098__auto__,c__10212__auto___14065,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0 = (function (){
var statearr_14061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14061[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10099__auto__);

(statearr_14061[(1)] = (1));

return statearr_14061;
});
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1 = (function (state_14029){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_14029);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e14062){if((e14062 instanceof Object)){
var ex__10102__auto__ = e14062;
var statearr_14063_14070 = state_14029;
(statearr_14063_14070[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14029);

return cljs.core.cst$kw$recur;
} else {
throw e14062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__14071 = state_14029;
state_14029 = G__14071;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__ = function(state_14029){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1.call(this,state_14029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___14065,c))
})();
var state__10214__auto__ = (function (){var statearr_14064 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_14064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___14065);

return statearr_14064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___14065,c))
);


return c;
});
drop_dot.core.check_for_sys_requirements = (function drop_dot$core$check_for_sys_requirements(){
if(cljs.core.not(drop_dot.core.dropbox_installed_QMARK_())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Dropbox not installed."], 0));

cljs.nodejs.process.exit();
} else {
}

if(cljs.core.not(drop_dot.core.unix_OS_QMARK_())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Dot-drop requires a UNIX system to run."], 0));

cljs.nodejs.process.exit();
} else {
}

if(cljs.core.not(drop_dot.core.dropbox_installed_QMARK_())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Please install Dropbox in your home folder before running this program."], 0));

return cljs.nodejs.process.exit();
} else {
return null;
}
});
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__7221__auto__ = [];
var len__7214__auto___14074 = arguments.length;
var i__7215__auto___14075 = (0);
while(true){
if((i__7215__auto___14075 < len__7214__auto___14074)){
args__7221__auto__.push((arguments[i__7215__auto___14075]));

var G__14076 = (i__7215__auto___14075 + (1));
i__7215__auto___14075 = G__14076;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("minimist") : cljs.nodejs.require.call(null,"minimist"));
var argv = (function (){var G__14073 = cljs.core.clj__GT_js(cljs.core.vec(args));
return (minimist.cljs$core$IFn$_invoke$arity$1 ? minimist.cljs$core$IFn$_invoke$arity$1(G__14073) : minimist.call(null,G__14073));
})();
var e = (function (){var or__6156__auto__ = argv.e;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "e option";
}
})();
var arg = (function (){var or__6156__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "$HOME";
}
})();
drop_dot.core.check_for_sys_requirements();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,"drop")){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Dropping files from your config into ~/Dropbox/.drop-dot"], 0));

drop_dot.core.chan_config_paths__GT_exec_drop_dot(drop_dot.core.chan_config_paths(),"drop");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,"link")){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Linking files specified in  your config."], 0));

return drop_dot.core.chan_config_paths__GT_exec_drop_dot(drop_dot.core.chan_config_paths(),"link");
} else {
return null;
}
});

drop_dot.core._main.cljs$lang$maxFixedArity = (0);

drop_dot.core._main.cljs$lang$applyTo = (function (seq14072){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14072));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;
