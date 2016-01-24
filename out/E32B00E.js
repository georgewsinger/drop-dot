goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64188__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64189__i = 0, G__64189__a = new Array(arguments.length -  0);
while (G__64189__i < G__64189__a.length) {G__64189__a[G__64189__i] = arguments[G__64189__i + 0]; ++G__64189__i;}
  args = new cljs.core.IndexedSeq(G__64189__a,0);
} 
return G__64188__delegate.call(this,args);};
G__64188.cljs$lang$maxFixedArity = 0;
G__64188.cljs$lang$applyTo = (function (arglist__64190){
var args = cljs.core.seq(arglist__64190);
return G__64188__delegate(args);
});
G__64188.cljs$core$IFn$_invoke$arity$variadic = G__64188__delegate;
return G__64188;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64191__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64192__i = 0, G__64192__a = new Array(arguments.length -  0);
while (G__64192__i < G__64192__a.length) {G__64192__a[G__64192__i] = arguments[G__64192__i + 0]; ++G__64192__i;}
  args = new cljs.core.IndexedSeq(G__64192__a,0);
} 
return G__64191__delegate.call(this,args);};
G__64191.cljs$lang$maxFixedArity = 0;
G__64191.cljs$lang$applyTo = (function (arglist__64193){
var args = cljs.core.seq(arglist__64193);
return G__64191__delegate(args);
});
G__64191.cljs$core$IFn$_invoke$arity$variadic = G__64191__delegate;
return G__64191;
})()
;

return null;
});
