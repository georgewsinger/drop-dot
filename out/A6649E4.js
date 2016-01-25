goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__257394__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__257394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__257395__i = 0, G__257395__a = new Array(arguments.length -  0);
while (G__257395__i < G__257395__a.length) {G__257395__a[G__257395__i] = arguments[G__257395__i + 0]; ++G__257395__i;}
  args = new cljs.core.IndexedSeq(G__257395__a,0);
} 
return G__257394__delegate.call(this,args);};
G__257394.cljs$lang$maxFixedArity = 0;
G__257394.cljs$lang$applyTo = (function (arglist__257396){
var args = cljs.core.seq(arglist__257396);
return G__257394__delegate(args);
});
G__257394.cljs$core$IFn$_invoke$arity$variadic = G__257394__delegate;
return G__257394;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__257397__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__257397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__257398__i = 0, G__257398__a = new Array(arguments.length -  0);
while (G__257398__i < G__257398__a.length) {G__257398__a[G__257398__i] = arguments[G__257398__i + 0]; ++G__257398__i;}
  args = new cljs.core.IndexedSeq(G__257398__a,0);
} 
return G__257397__delegate.call(this,args);};
G__257397.cljs$lang$maxFixedArity = 0;
G__257397.cljs$lang$applyTo = (function (arglist__257399){
var args = cljs.core.seq(arglist__257399);
return G__257397__delegate(args);
});
G__257397.cljs$core$IFn$_invoke$arity$variadic = G__257397__delegate;
return G__257397;
})()
;

return null;
});
