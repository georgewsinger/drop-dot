goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__68050__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__68050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68051__i = 0, G__68051__a = new Array(arguments.length -  0);
while (G__68051__i < G__68051__a.length) {G__68051__a[G__68051__i] = arguments[G__68051__i + 0]; ++G__68051__i;}
  args = new cljs.core.IndexedSeq(G__68051__a,0);
} 
return G__68050__delegate.call(this,args);};
G__68050.cljs$lang$maxFixedArity = 0;
G__68050.cljs$lang$applyTo = (function (arglist__68052){
var args = cljs.core.seq(arglist__68052);
return G__68050__delegate(args);
});
G__68050.cljs$core$IFn$_invoke$arity$variadic = G__68050__delegate;
return G__68050;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__68053__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__68053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68054__i = 0, G__68054__a = new Array(arguments.length -  0);
while (G__68054__i < G__68054__a.length) {G__68054__a[G__68054__i] = arguments[G__68054__i + 0]; ++G__68054__i;}
  args = new cljs.core.IndexedSeq(G__68054__a,0);
} 
return G__68053__delegate.call(this,args);};
G__68053.cljs$lang$maxFixedArity = 0;
G__68053.cljs$lang$applyTo = (function (arglist__68055){
var args = cljs.core.seq(arglist__68055);
return G__68053__delegate(args);
});
G__68053.cljs$core$IFn$_invoke$arity$variadic = G__68053__delegate;
return G__68053;
})()
;

return null;
});
