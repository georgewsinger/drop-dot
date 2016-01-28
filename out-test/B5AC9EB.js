goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53662__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53663__i = 0, G__53663__a = new Array(arguments.length -  0);
while (G__53663__i < G__53663__a.length) {G__53663__a[G__53663__i] = arguments[G__53663__i + 0]; ++G__53663__i;}
  args = new cljs.core.IndexedSeq(G__53663__a,0);
} 
return G__53662__delegate.call(this,args);};
G__53662.cljs$lang$maxFixedArity = 0;
G__53662.cljs$lang$applyTo = (function (arglist__53664){
var args = cljs.core.seq(arglist__53664);
return G__53662__delegate(args);
});
G__53662.cljs$core$IFn$_invoke$arity$variadic = G__53662__delegate;
return G__53662;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53665__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53666__i = 0, G__53666__a = new Array(arguments.length -  0);
while (G__53666__i < G__53666__a.length) {G__53666__a[G__53666__i] = arguments[G__53666__i + 0]; ++G__53666__i;}
  args = new cljs.core.IndexedSeq(G__53666__a,0);
} 
return G__53665__delegate.call(this,args);};
G__53665.cljs$lang$maxFixedArity = 0;
G__53665.cljs$lang$applyTo = (function (arglist__53667){
var args = cljs.core.seq(arglist__53667);
return G__53665__delegate(args);
});
G__53665.cljs$core$IFn$_invoke$arity$variadic = G__53665__delegate;
return G__53665;
})()
;

return null;
});
