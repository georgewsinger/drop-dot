goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33117__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33118__i = 0, G__33118__a = new Array(arguments.length -  0);
while (G__33118__i < G__33118__a.length) {G__33118__a[G__33118__i] = arguments[G__33118__i + 0]; ++G__33118__i;}
  args = new cljs.core.IndexedSeq(G__33118__a,0);
} 
return G__33117__delegate.call(this,args);};
G__33117.cljs$lang$maxFixedArity = 0;
G__33117.cljs$lang$applyTo = (function (arglist__33119){
var args = cljs.core.seq(arglist__33119);
return G__33117__delegate(args);
});
G__33117.cljs$core$IFn$_invoke$arity$variadic = G__33117__delegate;
return G__33117;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33120__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33121__i = 0, G__33121__a = new Array(arguments.length -  0);
while (G__33121__i < G__33121__a.length) {G__33121__a[G__33121__i] = arguments[G__33121__i + 0]; ++G__33121__i;}
  args = new cljs.core.IndexedSeq(G__33121__a,0);
} 
return G__33120__delegate.call(this,args);};
G__33120.cljs$lang$maxFixedArity = 0;
G__33120.cljs$lang$applyTo = (function (arglist__33122){
var args = cljs.core.seq(arglist__33122);
return G__33120__delegate(args);
});
G__33120.cljs$core$IFn$_invoke$arity$variadic = G__33120__delegate;
return G__33120;
})()
;

return null;
});
