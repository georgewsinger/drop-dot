goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64051__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64052__i = 0, G__64052__a = new Array(arguments.length -  0);
while (G__64052__i < G__64052__a.length) {G__64052__a[G__64052__i] = arguments[G__64052__i + 0]; ++G__64052__i;}
  args = new cljs.core.IndexedSeq(G__64052__a,0);
} 
return G__64051__delegate.call(this,args);};
G__64051.cljs$lang$maxFixedArity = 0;
G__64051.cljs$lang$applyTo = (function (arglist__64053){
var args = cljs.core.seq(arglist__64053);
return G__64051__delegate(args);
});
G__64051.cljs$core$IFn$_invoke$arity$variadic = G__64051__delegate;
return G__64051;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64054__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64055__i = 0, G__64055__a = new Array(arguments.length -  0);
while (G__64055__i < G__64055__a.length) {G__64055__a[G__64055__i] = arguments[G__64055__i + 0]; ++G__64055__i;}
  args = new cljs.core.IndexedSeq(G__64055__a,0);
} 
return G__64054__delegate.call(this,args);};
G__64054.cljs$lang$maxFixedArity = 0;
G__64054.cljs$lang$applyTo = (function (arglist__64056){
var args = cljs.core.seq(arglist__64056);
return G__64054__delegate(args);
});
G__64054.cljs$core$IFn$_invoke$arity$variadic = G__64054__delegate;
return G__64054;
})()
;

return null;
});
