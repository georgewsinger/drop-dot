// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('drop_dot.core_test');
goog.require('cljs.core');
goog.require('cemerick.cljs.test');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
drop_dot.core_test.basic = (function drop_dot$core_test$basic(){
return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.init_test_environment(),drop_dot.core_test.basic) : cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment(),drop_dot.core_test.basic));
});

drop_dot.core_test.basic = cljs.core.with_meta(drop_dot.core_test.basic,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$file,"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",cljs.core.cst$kw$line,7,cljs.core.cst$kw$column,10,cljs.core.cst$kw$end_DASH_line,7,cljs.core.cst$kw$end_DASH_column,15], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.with_meta(cljs.core.cst$sym$drop_DASH_dot$core_DASH_test_SLASH_basic,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$file,"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",cljs.core.cst$kw$line,7,cljs.core.cst$kw$column,10,cljs.core.cst$kw$end_DASH_line,7,cljs.core.cst$kw$end_DASH_column,15], null)),cljs.core.cst$kw$test,(function drop_dot$core_test$basic_test(test_ctx__12548__auto__){
var _test_ctx = test_ctx__12548__auto__;
var async_QMARK___12463__auto__ = cljs.core.cst$kw$async.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.cst$kw$test_DASH_name.cljs$core$IFn$_invoke$arity$1(_test_ctx)));
var _STAR_test_ctx_STAR_12878 = cemerick.cljs.test._STAR_test_ctx_STAR_;
cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___12463__auto__)?null:_test_ctx);

try{try{try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$test_DASH_env.cljs$core$IFn$_invoke$arity$1(_test_ctx),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_contexts], null),cljs.core.conj,cljs.core.array_seq(["Testing basic CLJS tests."], 0));

var _test_ctx__$1 = _test_ctx;
var async_QMARK___12463__auto____$1 = cljs.core.cst$kw$async.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.cst$kw$test_DASH_name.cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));
var _STAR_test_ctx_STAR_12880 = cemerick.cljs.test._STAR_test_ctx_STAR_;
cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___12463__auto____$1)?null:_test_ctx__$1);

try{try{try{var values__12483__auto__ = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(6)),(5));
var result__12484__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__12483__auto__);
if((result__12484__auto__ instanceof cemerick.cljs.test.TestContext)){
throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else {
}

if(cljs.core.truth_(result__12484__auto__)){
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$2(_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(5),(6)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__12483__auto__),cljs.core.cst$kw$message,null], null));
} else {
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$2(_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(5),(6)),cljs.core.cst$kw$actual,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__12483__auto__)),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__12484__auto__;
}catch (e12882){if((e12882 instanceof Error)){
var t__12520__auto__ = e12882;
return cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$2(_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(5),(6)),cljs.core.cst$kw$actual,t__12520__auto__,cljs.core.cst$kw$message,null], null));
} else {
throw e12882;

}
}}catch (e12881){if((e12881 instanceof Error)){
var e__12464__auto__ = e12881;
if(cljs.core.truth_(async_QMARK___12463__auto____$1)){
return cemerick.cljs.test.done_STAR_.cljs$core$IFn$_invoke$arity$2(_test_ctx__$1,e__12464__auto__);
} else {
throw e__12464__auto__;
}
} else {
throw e12881;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_12880;
}}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$test_DASH_env.cljs$core$IFn$_invoke$arity$1(_test_ctx),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cemerick$cljs$test_SLASH_test_DASH_contexts], null),cljs.core.pop);
}}catch (e12879){if((e12879 instanceof Error)){
var e__12464__auto__ = e12879;
if(cljs.core.truth_(async_QMARK___12463__auto__)){
return cemerick.cljs.test.done_STAR_.cljs$core$IFn$_invoke$arity$2(_test_ctx,e__12464__auto__);
} else {
throw e__12464__auto__;
}
} else {
throw e12879;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_12878;
}})], null)], 0)));

cemerick.cljs.test.register_test_BANG_(cljs.core.cst$sym$drop_DASH_dot$core_DASH_test,cljs.core.cst$sym$drop_DASH_dot$core_DASH_test_SLASH_basic,drop_dot.core_test.basic);

