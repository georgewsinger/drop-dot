goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20612__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20613__i = 0, G__20613__a = new Array(arguments.length -  0);
while (G__20613__i < G__20613__a.length) {G__20613__a[G__20613__i] = arguments[G__20613__i + 0]; ++G__20613__i;}
  args = new cljs.core.IndexedSeq(G__20613__a,0);
} 
return G__20612__delegate.call(this,args);};
G__20612.cljs$lang$maxFixedArity = 0;
G__20612.cljs$lang$applyTo = (function (arglist__20614){
var args = cljs.core.seq(arglist__20614);
return G__20612__delegate(args);
});
G__20612.cljs$core$IFn$_invoke$arity$variadic = G__20612__delegate;
return G__20612;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20615__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20616__i = 0, G__20616__a = new Array(arguments.length -  0);
while (G__20616__i < G__20616__a.length) {G__20616__a[G__20616__i] = arguments[G__20616__i + 0]; ++G__20616__i;}
  args = new cljs.core.IndexedSeq(G__20616__a,0);
} 
return G__20615__delegate.call(this,args);};
G__20615.cljs$lang$maxFixedArity = 0;
G__20615.cljs$lang$applyTo = (function (arglist__20617){
var args = cljs.core.seq(arglist__20617);
return G__20615__delegate(args);
});
G__20615.cljs$core$IFn$_invoke$arity$variadic = G__20615__delegate;
return G__20615;
})()
;

return null;
});
