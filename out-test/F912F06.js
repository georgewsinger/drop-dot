goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37369__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37370__i = 0, G__37370__a = new Array(arguments.length -  0);
while (G__37370__i < G__37370__a.length) {G__37370__a[G__37370__i] = arguments[G__37370__i + 0]; ++G__37370__i;}
  args = new cljs.core.IndexedSeq(G__37370__a,0);
} 
return G__37369__delegate.call(this,args);};
G__37369.cljs$lang$maxFixedArity = 0;
G__37369.cljs$lang$applyTo = (function (arglist__37371){
var args = cljs.core.seq(arglist__37371);
return G__37369__delegate(args);
});
G__37369.cljs$core$IFn$_invoke$arity$variadic = G__37369__delegate;
return G__37369;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37372__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37373__i = 0, G__37373__a = new Array(arguments.length -  0);
while (G__37373__i < G__37373__a.length) {G__37373__a[G__37373__i] = arguments[G__37373__i + 0]; ++G__37373__i;}
  args = new cljs.core.IndexedSeq(G__37373__a,0);
} 
return G__37372__delegate.call(this,args);};
G__37372.cljs$lang$maxFixedArity = 0;
G__37372.cljs$lang$applyTo = (function (arglist__37374){
var args = cljs.core.seq(arglist__37374);
return G__37372__delegate(args);
});
G__37372.cljs$core$IFn$_invoke$arity$variadic = G__37372__delegate;
return G__37372;
})()
;

return null;
});
