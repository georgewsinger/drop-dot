goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__289550__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__289550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__289551__i = 0, G__289551__a = new Array(arguments.length -  0);
while (G__289551__i < G__289551__a.length) {G__289551__a[G__289551__i] = arguments[G__289551__i + 0]; ++G__289551__i;}
  args = new cljs.core.IndexedSeq(G__289551__a,0);
} 
return G__289550__delegate.call(this,args);};
G__289550.cljs$lang$maxFixedArity = 0;
G__289550.cljs$lang$applyTo = (function (arglist__289552){
var args = cljs.core.seq(arglist__289552);
return G__289550__delegate(args);
});
G__289550.cljs$core$IFn$_invoke$arity$variadic = G__289550__delegate;
return G__289550;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__289553__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__289553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__289554__i = 0, G__289554__a = new Array(arguments.length -  0);
while (G__289554__i < G__289554__a.length) {G__289554__a[G__289554__i] = arguments[G__289554__i + 0]; ++G__289554__i;}
  args = new cljs.core.IndexedSeq(G__289554__a,0);
} 
return G__289553__delegate.call(this,args);};
G__289553.cljs$lang$maxFixedArity = 0;
G__289553.cljs$lang$applyTo = (function (arglist__289555){
var args = cljs.core.seq(arglist__289555);
return G__289553__delegate(args);
});
G__289553.cljs$core$IFn$_invoke$arity$variadic = G__289553__delegate;
return G__289553;
})()
;

return null;
});
