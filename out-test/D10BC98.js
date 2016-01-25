goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44571__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44572__i = 0, G__44572__a = new Array(arguments.length -  0);
while (G__44572__i < G__44572__a.length) {G__44572__a[G__44572__i] = arguments[G__44572__i + 0]; ++G__44572__i;}
  args = new cljs.core.IndexedSeq(G__44572__a,0);
} 
return G__44571__delegate.call(this,args);};
G__44571.cljs$lang$maxFixedArity = 0;
G__44571.cljs$lang$applyTo = (function (arglist__44573){
var args = cljs.core.seq(arglist__44573);
return G__44571__delegate(args);
});
G__44571.cljs$core$IFn$_invoke$arity$variadic = G__44571__delegate;
return G__44571;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44574__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44575__i = 0, G__44575__a = new Array(arguments.length -  0);
while (G__44575__i < G__44575__a.length) {G__44575__a[G__44575__i] = arguments[G__44575__i + 0]; ++G__44575__i;}
  args = new cljs.core.IndexedSeq(G__44575__a,0);
} 
return G__44574__delegate.call(this,args);};
G__44574.cljs$lang$maxFixedArity = 0;
G__44574.cljs$lang$applyTo = (function (arglist__44576){
var args = cljs.core.seq(arglist__44576);
return G__44574__delegate(args);
});
G__44574.cljs$core$IFn$_invoke$arity$variadic = G__44574__delegate;
return G__44574;
})()
;

return null;
});
