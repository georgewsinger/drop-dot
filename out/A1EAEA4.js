goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__276605__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__276605 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__276606__i = 0, G__276606__a = new Array(arguments.length -  0);
while (G__276606__i < G__276606__a.length) {G__276606__a[G__276606__i] = arguments[G__276606__i + 0]; ++G__276606__i;}
  args = new cljs.core.IndexedSeq(G__276606__a,0);
} 
return G__276605__delegate.call(this,args);};
G__276605.cljs$lang$maxFixedArity = 0;
G__276605.cljs$lang$applyTo = (function (arglist__276607){
var args = cljs.core.seq(arglist__276607);
return G__276605__delegate(args);
});
G__276605.cljs$core$IFn$_invoke$arity$variadic = G__276605__delegate;
return G__276605;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__276608__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__276608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__276609__i = 0, G__276609__a = new Array(arguments.length -  0);
while (G__276609__i < G__276609__a.length) {G__276609__a[G__276609__i] = arguments[G__276609__i + 0]; ++G__276609__i;}
  args = new cljs.core.IndexedSeq(G__276609__a,0);
} 
return G__276608__delegate.call(this,args);};
G__276608.cljs$lang$maxFixedArity = 0;
G__276608.cljs$lang$applyTo = (function (arglist__276610){
var args = cljs.core.seq(arglist__276610);
return G__276608__delegate(args);
});
G__276608.cljs$core$IFn$_invoke$arity$variadic = G__276608__delegate;
return G__276608;
})()
;

return null;
});
