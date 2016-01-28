goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48351__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48352__i = 0, G__48352__a = new Array(arguments.length -  0);
while (G__48352__i < G__48352__a.length) {G__48352__a[G__48352__i] = arguments[G__48352__i + 0]; ++G__48352__i;}
  args = new cljs.core.IndexedSeq(G__48352__a,0);
} 
return G__48351__delegate.call(this,args);};
G__48351.cljs$lang$maxFixedArity = 0;
G__48351.cljs$lang$applyTo = (function (arglist__48353){
var args = cljs.core.seq(arglist__48353);
return G__48351__delegate(args);
});
G__48351.cljs$core$IFn$_invoke$arity$variadic = G__48351__delegate;
return G__48351;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48354__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48355__i = 0, G__48355__a = new Array(arguments.length -  0);
while (G__48355__i < G__48355__a.length) {G__48355__a[G__48355__i] = arguments[G__48355__i + 0]; ++G__48355__i;}
  args = new cljs.core.IndexedSeq(G__48355__a,0);
} 
return G__48354__delegate.call(this,args);};
G__48354.cljs$lang$maxFixedArity = 0;
G__48354.cljs$lang$applyTo = (function (arglist__48356){
var args = cljs.core.seq(arglist__48356);
return G__48354__delegate(args);
});
G__48354.cljs$core$IFn$_invoke$arity$variadic = G__48354__delegate;
return G__48354;
})()
;

return null;
});
