goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33607__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33608__i = 0, G__33608__a = new Array(arguments.length -  0);
while (G__33608__i < G__33608__a.length) {G__33608__a[G__33608__i] = arguments[G__33608__i + 0]; ++G__33608__i;}
  args = new cljs.core.IndexedSeq(G__33608__a,0);
} 
return G__33607__delegate.call(this,args);};
G__33607.cljs$lang$maxFixedArity = 0;
G__33607.cljs$lang$applyTo = (function (arglist__33609){
var args = cljs.core.seq(arglist__33609);
return G__33607__delegate(args);
});
G__33607.cljs$core$IFn$_invoke$arity$variadic = G__33607__delegate;
return G__33607;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33610__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33611__i = 0, G__33611__a = new Array(arguments.length -  0);
while (G__33611__i < G__33611__a.length) {G__33611__a[G__33611__i] = arguments[G__33611__i + 0]; ++G__33611__i;}
  args = new cljs.core.IndexedSeq(G__33611__a,0);
} 
return G__33610__delegate.call(this,args);};
G__33610.cljs$lang$maxFixedArity = 0;
G__33610.cljs$lang$applyTo = (function (arglist__33612){
var args = cljs.core.seq(arglist__33612);
return G__33610__delegate(args);
});
G__33610.cljs$core$IFn$_invoke$arity$variadic = G__33610__delegate;
return G__33610;
})()
;

return null;
});
