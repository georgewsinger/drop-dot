goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45728__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45729__i = 0, G__45729__a = new Array(arguments.length -  0);
while (G__45729__i < G__45729__a.length) {G__45729__a[G__45729__i] = arguments[G__45729__i + 0]; ++G__45729__i;}
  args = new cljs.core.IndexedSeq(G__45729__a,0);
} 
return G__45728__delegate.call(this,args);};
G__45728.cljs$lang$maxFixedArity = 0;
G__45728.cljs$lang$applyTo = (function (arglist__45730){
var args = cljs.core.seq(arglist__45730);
return G__45728__delegate(args);
});
G__45728.cljs$core$IFn$_invoke$arity$variadic = G__45728__delegate;
return G__45728;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45731__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45731 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45732__i = 0, G__45732__a = new Array(arguments.length -  0);
while (G__45732__i < G__45732__a.length) {G__45732__a[G__45732__i] = arguments[G__45732__i + 0]; ++G__45732__i;}
  args = new cljs.core.IndexedSeq(G__45732__a,0);
} 
return G__45731__delegate.call(this,args);};
G__45731.cljs$lang$maxFixedArity = 0;
G__45731.cljs$lang$applyTo = (function (arglist__45733){
var args = cljs.core.seq(arglist__45733);
return G__45731__delegate(args);
});
G__45731.cljs$core$IFn$_invoke$arity$variadic = G__45731__delegate;
return G__45731;
})()
;

return null;
});
