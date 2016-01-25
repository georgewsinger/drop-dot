goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__73977__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__73977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73978__i = 0, G__73978__a = new Array(arguments.length -  0);
while (G__73978__i < G__73978__a.length) {G__73978__a[G__73978__i] = arguments[G__73978__i + 0]; ++G__73978__i;}
  args = new cljs.core.IndexedSeq(G__73978__a,0);
} 
return G__73977__delegate.call(this,args);};
G__73977.cljs$lang$maxFixedArity = 0;
G__73977.cljs$lang$applyTo = (function (arglist__73979){
var args = cljs.core.seq(arglist__73979);
return G__73977__delegate(args);
});
G__73977.cljs$core$IFn$_invoke$arity$variadic = G__73977__delegate;
return G__73977;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__73980__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__73980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73981__i = 0, G__73981__a = new Array(arguments.length -  0);
while (G__73981__i < G__73981__a.length) {G__73981__a[G__73981__i] = arguments[G__73981__i + 0]; ++G__73981__i;}
  args = new cljs.core.IndexedSeq(G__73981__a,0);
} 
return G__73980__delegate.call(this,args);};
G__73980.cljs$lang$maxFixedArity = 0;
G__73980.cljs$lang$applyTo = (function (arglist__73982){
var args = cljs.core.seq(arglist__73982);
return G__73980__delegate(args);
});
G__73980.cljs$core$IFn$_invoke$arity$variadic = G__73980__delegate;
return G__73980;
})()
;

return null;
});
