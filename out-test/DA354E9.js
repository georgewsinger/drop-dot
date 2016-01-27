goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53312__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53313__i = 0, G__53313__a = new Array(arguments.length -  0);
while (G__53313__i < G__53313__a.length) {G__53313__a[G__53313__i] = arguments[G__53313__i + 0]; ++G__53313__i;}
  args = new cljs.core.IndexedSeq(G__53313__a,0);
} 
return G__53312__delegate.call(this,args);};
G__53312.cljs$lang$maxFixedArity = 0;
G__53312.cljs$lang$applyTo = (function (arglist__53314){
var args = cljs.core.seq(arglist__53314);
return G__53312__delegate(args);
});
G__53312.cljs$core$IFn$_invoke$arity$variadic = G__53312__delegate;
return G__53312;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53315__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53316__i = 0, G__53316__a = new Array(arguments.length -  0);
while (G__53316__i < G__53316__a.length) {G__53316__a[G__53316__i] = arguments[G__53316__i + 0]; ++G__53316__i;}
  args = new cljs.core.IndexedSeq(G__53316__a,0);
} 
return G__53315__delegate.call(this,args);};
G__53315.cljs$lang$maxFixedArity = 0;
G__53315.cljs$lang$applyTo = (function (arglist__53317){
var args = cljs.core.seq(arglist__53317);
return G__53315__delegate(args);
});
G__53315.cljs$core$IFn$_invoke$arity$variadic = G__53315__delegate;
return G__53315;
})()
;

return null;
});
