goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43351__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43352__i = 0, G__43352__a = new Array(arguments.length -  0);
while (G__43352__i < G__43352__a.length) {G__43352__a[G__43352__i] = arguments[G__43352__i + 0]; ++G__43352__i;}
  args = new cljs.core.IndexedSeq(G__43352__a,0);
} 
return G__43351__delegate.call(this,args);};
G__43351.cljs$lang$maxFixedArity = 0;
G__43351.cljs$lang$applyTo = (function (arglist__43353){
var args = cljs.core.seq(arglist__43353);
return G__43351__delegate(args);
});
G__43351.cljs$core$IFn$_invoke$arity$variadic = G__43351__delegate;
return G__43351;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43354__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43355__i = 0, G__43355__a = new Array(arguments.length -  0);
while (G__43355__i < G__43355__a.length) {G__43355__a[G__43355__i] = arguments[G__43355__i + 0]; ++G__43355__i;}
  args = new cljs.core.IndexedSeq(G__43355__a,0);
} 
return G__43354__delegate.call(this,args);};
G__43354.cljs$lang$maxFixedArity = 0;
G__43354.cljs$lang$applyTo = (function (arglist__43356){
var args = cljs.core.seq(arglist__43356);
return G__43354__delegate(args);
});
G__43354.cljs$core$IFn$_invoke$arity$variadic = G__43354__delegate;
return G__43354;
})()
;

return null;
});
