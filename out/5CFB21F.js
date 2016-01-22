goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34365__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34366__i = 0, G__34366__a = new Array(arguments.length -  0);
while (G__34366__i < G__34366__a.length) {G__34366__a[G__34366__i] = arguments[G__34366__i + 0]; ++G__34366__i;}
  args = new cljs.core.IndexedSeq(G__34366__a,0);
} 
return G__34365__delegate.call(this,args);};
G__34365.cljs$lang$maxFixedArity = 0;
G__34365.cljs$lang$applyTo = (function (arglist__34367){
var args = cljs.core.seq(arglist__34367);
return G__34365__delegate(args);
});
G__34365.cljs$core$IFn$_invoke$arity$variadic = G__34365__delegate;
return G__34365;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34368__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34368 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34369__i = 0, G__34369__a = new Array(arguments.length -  0);
while (G__34369__i < G__34369__a.length) {G__34369__a[G__34369__i] = arguments[G__34369__i + 0]; ++G__34369__i;}
  args = new cljs.core.IndexedSeq(G__34369__a,0);
} 
return G__34368__delegate.call(this,args);};
G__34368.cljs$lang$maxFixedArity = 0;
G__34368.cljs$lang$applyTo = (function (arglist__34370){
var args = cljs.core.seq(arglist__34370);
return G__34368__delegate(args);
});
G__34368.cljs$core$IFn$_invoke$arity$variadic = G__34368__delegate;
return G__34368;
})()
;

return null;
});
