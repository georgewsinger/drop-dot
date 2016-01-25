goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20048__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20049__i = 0, G__20049__a = new Array(arguments.length -  0);
while (G__20049__i < G__20049__a.length) {G__20049__a[G__20049__i] = arguments[G__20049__i + 0]; ++G__20049__i;}
  args = new cljs.core.IndexedSeq(G__20049__a,0);
} 
return G__20048__delegate.call(this,args);};
G__20048.cljs$lang$maxFixedArity = 0;
G__20048.cljs$lang$applyTo = (function (arglist__20050){
var args = cljs.core.seq(arglist__20050);
return G__20048__delegate(args);
});
G__20048.cljs$core$IFn$_invoke$arity$variadic = G__20048__delegate;
return G__20048;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20051__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20052__i = 0, G__20052__a = new Array(arguments.length -  0);
while (G__20052__i < G__20052__a.length) {G__20052__a[G__20052__i] = arguments[G__20052__i + 0]; ++G__20052__i;}
  args = new cljs.core.IndexedSeq(G__20052__a,0);
} 
return G__20051__delegate.call(this,args);};
G__20051.cljs$lang$maxFixedArity = 0;
G__20051.cljs$lang$applyTo = (function (arglist__20053){
var args = cljs.core.seq(arglist__20053);
return G__20051__delegate(args);
});
G__20051.cljs$core$IFn$_invoke$arity$variadic = G__20051__delegate;
return G__20051;
})()
;

return null;
});
