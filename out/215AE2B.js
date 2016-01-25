goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__74065__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__74065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74066__i = 0, G__74066__a = new Array(arguments.length -  0);
while (G__74066__i < G__74066__a.length) {G__74066__a[G__74066__i] = arguments[G__74066__i + 0]; ++G__74066__i;}
  args = new cljs.core.IndexedSeq(G__74066__a,0);
} 
return G__74065__delegate.call(this,args);};
G__74065.cljs$lang$maxFixedArity = 0;
G__74065.cljs$lang$applyTo = (function (arglist__74067){
var args = cljs.core.seq(arglist__74067);
return G__74065__delegate(args);
});
G__74065.cljs$core$IFn$_invoke$arity$variadic = G__74065__delegate;
return G__74065;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__74068__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__74068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74069__i = 0, G__74069__a = new Array(arguments.length -  0);
while (G__74069__i < G__74069__a.length) {G__74069__a[G__74069__i] = arguments[G__74069__i + 0]; ++G__74069__i;}
  args = new cljs.core.IndexedSeq(G__74069__a,0);
} 
return G__74068__delegate.call(this,args);};
G__74068.cljs$lang$maxFixedArity = 0;
G__74068.cljs$lang$applyTo = (function (arglist__74070){
var args = cljs.core.seq(arglist__74070);
return G__74068__delegate(args);
});
G__74068.cljs$core$IFn$_invoke$arity$variadic = G__74068__delegate;
return G__74068;
})()
;

return null;
});
