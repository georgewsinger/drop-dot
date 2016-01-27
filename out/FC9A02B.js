goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__364117__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__364117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__364118__i = 0, G__364118__a = new Array(arguments.length -  0);
while (G__364118__i < G__364118__a.length) {G__364118__a[G__364118__i] = arguments[G__364118__i + 0]; ++G__364118__i;}
  args = new cljs.core.IndexedSeq(G__364118__a,0);
} 
return G__364117__delegate.call(this,args);};
G__364117.cljs$lang$maxFixedArity = 0;
G__364117.cljs$lang$applyTo = (function (arglist__364119){
var args = cljs.core.seq(arglist__364119);
return G__364117__delegate(args);
});
G__364117.cljs$core$IFn$_invoke$arity$variadic = G__364117__delegate;
return G__364117;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__364120__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__364120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__364121__i = 0, G__364121__a = new Array(arguments.length -  0);
while (G__364121__i < G__364121__a.length) {G__364121__a[G__364121__i] = arguments[G__364121__i + 0]; ++G__364121__i;}
  args = new cljs.core.IndexedSeq(G__364121__a,0);
} 
return G__364120__delegate.call(this,args);};
G__364120.cljs$lang$maxFixedArity = 0;
G__364120.cljs$lang$applyTo = (function (arglist__364122){
var args = cljs.core.seq(arglist__364122);
return G__364120__delegate(args);
});
G__364120.cljs$core$IFn$_invoke$arity$variadic = G__364120__delegate;
return G__364120;
})()
;

return null;
});
