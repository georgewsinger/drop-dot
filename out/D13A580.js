goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46034__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46035__i = 0, G__46035__a = new Array(arguments.length -  0);
while (G__46035__i < G__46035__a.length) {G__46035__a[G__46035__i] = arguments[G__46035__i + 0]; ++G__46035__i;}
  args = new cljs.core.IndexedSeq(G__46035__a,0);
} 
return G__46034__delegate.call(this,args);};
G__46034.cljs$lang$maxFixedArity = 0;
G__46034.cljs$lang$applyTo = (function (arglist__46036){
var args = cljs.core.seq(arglist__46036);
return G__46034__delegate(args);
});
G__46034.cljs$core$IFn$_invoke$arity$variadic = G__46034__delegate;
return G__46034;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46037__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46038__i = 0, G__46038__a = new Array(arguments.length -  0);
while (G__46038__i < G__46038__a.length) {G__46038__a[G__46038__i] = arguments[G__46038__i + 0]; ++G__46038__i;}
  args = new cljs.core.IndexedSeq(G__46038__a,0);
} 
return G__46037__delegate.call(this,args);};
G__46037.cljs$lang$maxFixedArity = 0;
G__46037.cljs$lang$applyTo = (function (arglist__46039){
var args = cljs.core.seq(arglist__46039);
return G__46037__delegate(args);
});
G__46037.cljs$core$IFn$_invoke$arity$variadic = G__46037__delegate;
return G__46037;
})()
;

return null;
});
