goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__95583__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__95583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95584__i = 0, G__95584__a = new Array(arguments.length -  0);
while (G__95584__i < G__95584__a.length) {G__95584__a[G__95584__i] = arguments[G__95584__i + 0]; ++G__95584__i;}
  args = new cljs.core.IndexedSeq(G__95584__a,0);
} 
return G__95583__delegate.call(this,args);};
G__95583.cljs$lang$maxFixedArity = 0;
G__95583.cljs$lang$applyTo = (function (arglist__95585){
var args = cljs.core.seq(arglist__95585);
return G__95583__delegate(args);
});
G__95583.cljs$core$IFn$_invoke$arity$variadic = G__95583__delegate;
return G__95583;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__95586__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__95586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95587__i = 0, G__95587__a = new Array(arguments.length -  0);
while (G__95587__i < G__95587__a.length) {G__95587__a[G__95587__i] = arguments[G__95587__i + 0]; ++G__95587__i;}
  args = new cljs.core.IndexedSeq(G__95587__a,0);
} 
return G__95586__delegate.call(this,args);};
G__95586.cljs$lang$maxFixedArity = 0;
G__95586.cljs$lang$applyTo = (function (arglist__95588){
var args = cljs.core.seq(arglist__95588);
return G__95586__delegate(args);
});
G__95586.cljs$core$IFn$_invoke$arity$variadic = G__95586__delegate;
return G__95586;
})()
;

return null;
});
