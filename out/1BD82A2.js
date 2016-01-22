goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37367__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37368__i = 0, G__37368__a = new Array(arguments.length -  0);
while (G__37368__i < G__37368__a.length) {G__37368__a[G__37368__i] = arguments[G__37368__i + 0]; ++G__37368__i;}
  args = new cljs.core.IndexedSeq(G__37368__a,0);
} 
return G__37367__delegate.call(this,args);};
G__37367.cljs$lang$maxFixedArity = 0;
G__37367.cljs$lang$applyTo = (function (arglist__37369){
var args = cljs.core.seq(arglist__37369);
return G__37367__delegate(args);
});
G__37367.cljs$core$IFn$_invoke$arity$variadic = G__37367__delegate;
return G__37367;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37370__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37371__i = 0, G__37371__a = new Array(arguments.length -  0);
while (G__37371__i < G__37371__a.length) {G__37371__a[G__37371__i] = arguments[G__37371__i + 0]; ++G__37371__i;}
  args = new cljs.core.IndexedSeq(G__37371__a,0);
} 
return G__37370__delegate.call(this,args);};
G__37370.cljs$lang$maxFixedArity = 0;
G__37370.cljs$lang$applyTo = (function (arglist__37372){
var args = cljs.core.seq(arglist__37372);
return G__37370__delegate(args);
});
G__37370.cljs$core$IFn$_invoke$arity$variadic = G__37370__delegate;
return G__37370;
})()
;

return null;
});
