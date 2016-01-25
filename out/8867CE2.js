goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__198728__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__198728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__198729__i = 0, G__198729__a = new Array(arguments.length -  0);
while (G__198729__i < G__198729__a.length) {G__198729__a[G__198729__i] = arguments[G__198729__i + 0]; ++G__198729__i;}
  args = new cljs.core.IndexedSeq(G__198729__a,0);
} 
return G__198728__delegate.call(this,args);};
G__198728.cljs$lang$maxFixedArity = 0;
G__198728.cljs$lang$applyTo = (function (arglist__198730){
var args = cljs.core.seq(arglist__198730);
return G__198728__delegate(args);
});
G__198728.cljs$core$IFn$_invoke$arity$variadic = G__198728__delegate;
return G__198728;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__198731__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__198731 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__198732__i = 0, G__198732__a = new Array(arguments.length -  0);
while (G__198732__i < G__198732__a.length) {G__198732__a[G__198732__i] = arguments[G__198732__i + 0]; ++G__198732__i;}
  args = new cljs.core.IndexedSeq(G__198732__a,0);
} 
return G__198731__delegate.call(this,args);};
G__198731.cljs$lang$maxFixedArity = 0;
G__198731.cljs$lang$applyTo = (function (arglist__198733){
var args = cljs.core.seq(arglist__198733);
return G__198731__delegate(args);
});
G__198731.cljs$core$IFn$_invoke$arity$variadic = G__198731__delegate;
return G__198731;
})()
;

return null;
});
