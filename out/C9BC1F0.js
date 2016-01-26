goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22033__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22034__i = 0, G__22034__a = new Array(arguments.length -  0);
while (G__22034__i < G__22034__a.length) {G__22034__a[G__22034__i] = arguments[G__22034__i + 0]; ++G__22034__i;}
  args = new cljs.core.IndexedSeq(G__22034__a,0);
} 
return G__22033__delegate.call(this,args);};
G__22033.cljs$lang$maxFixedArity = 0;
G__22033.cljs$lang$applyTo = (function (arglist__22035){
var args = cljs.core.seq(arglist__22035);
return G__22033__delegate(args);
});
G__22033.cljs$core$IFn$_invoke$arity$variadic = G__22033__delegate;
return G__22033;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22036__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22037__i = 0, G__22037__a = new Array(arguments.length -  0);
while (G__22037__i < G__22037__a.length) {G__22037__a[G__22037__i] = arguments[G__22037__i + 0]; ++G__22037__i;}
  args = new cljs.core.IndexedSeq(G__22037__a,0);
} 
return G__22036__delegate.call(this,args);};
G__22036.cljs$lang$maxFixedArity = 0;
G__22036.cljs$lang$applyTo = (function (arglist__22038){
var args = cljs.core.seq(arglist__22038);
return G__22036__delegate(args);
});
G__22036.cljs$core$IFn$_invoke$arity$variadic = G__22036__delegate;
return G__22036;
})()
;

return null;
});
