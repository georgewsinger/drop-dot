goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__255034__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__255034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__255035__i = 0, G__255035__a = new Array(arguments.length -  0);
while (G__255035__i < G__255035__a.length) {G__255035__a[G__255035__i] = arguments[G__255035__i + 0]; ++G__255035__i;}
  args = new cljs.core.IndexedSeq(G__255035__a,0);
} 
return G__255034__delegate.call(this,args);};
G__255034.cljs$lang$maxFixedArity = 0;
G__255034.cljs$lang$applyTo = (function (arglist__255036){
var args = cljs.core.seq(arglist__255036);
return G__255034__delegate(args);
});
G__255034.cljs$core$IFn$_invoke$arity$variadic = G__255034__delegate;
return G__255034;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__255037__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__255037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__255038__i = 0, G__255038__a = new Array(arguments.length -  0);
while (G__255038__i < G__255038__a.length) {G__255038__a[G__255038__i] = arguments[G__255038__i + 0]; ++G__255038__i;}
  args = new cljs.core.IndexedSeq(G__255038__a,0);
} 
return G__255037__delegate.call(this,args);};
G__255037.cljs$lang$maxFixedArity = 0;
G__255037.cljs$lang$applyTo = (function (arglist__255039){
var args = cljs.core.seq(arglist__255039);
return G__255037__delegate(args);
});
G__255037.cljs$core$IFn$_invoke$arity$variadic = G__255037__delegate;
return G__255037;
})()
;

return null;
});
