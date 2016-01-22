goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20874__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20875__i = 0, G__20875__a = new Array(arguments.length -  0);
while (G__20875__i < G__20875__a.length) {G__20875__a[G__20875__i] = arguments[G__20875__i + 0]; ++G__20875__i;}
  args = new cljs.core.IndexedSeq(G__20875__a,0);
} 
return G__20874__delegate.call(this,args);};
G__20874.cljs$lang$maxFixedArity = 0;
G__20874.cljs$lang$applyTo = (function (arglist__20876){
var args = cljs.core.seq(arglist__20876);
return G__20874__delegate(args);
});
G__20874.cljs$core$IFn$_invoke$arity$variadic = G__20874__delegate;
return G__20874;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20877__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20878__i = 0, G__20878__a = new Array(arguments.length -  0);
while (G__20878__i < G__20878__a.length) {G__20878__a[G__20878__i] = arguments[G__20878__i + 0]; ++G__20878__i;}
  args = new cljs.core.IndexedSeq(G__20878__a,0);
} 
return G__20877__delegate.call(this,args);};
G__20877.cljs$lang$maxFixedArity = 0;
G__20877.cljs$lang$applyTo = (function (arglist__20879){
var args = cljs.core.seq(arglist__20879);
return G__20877__delegate(args);
});
G__20877.cljs$core$IFn$_invoke$arity$variadic = G__20877__delegate;
return G__20877;
})()
;

return null;
});
