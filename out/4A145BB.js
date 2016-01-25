goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__222875__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__222875 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__222876__i = 0, G__222876__a = new Array(arguments.length -  0);
while (G__222876__i < G__222876__a.length) {G__222876__a[G__222876__i] = arguments[G__222876__i + 0]; ++G__222876__i;}
  args = new cljs.core.IndexedSeq(G__222876__a,0);
} 
return G__222875__delegate.call(this,args);};
G__222875.cljs$lang$maxFixedArity = 0;
G__222875.cljs$lang$applyTo = (function (arglist__222877){
var args = cljs.core.seq(arglist__222877);
return G__222875__delegate(args);
});
G__222875.cljs$core$IFn$_invoke$arity$variadic = G__222875__delegate;
return G__222875;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__222878__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__222878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__222879__i = 0, G__222879__a = new Array(arguments.length -  0);
while (G__222879__i < G__222879__a.length) {G__222879__a[G__222879__i] = arguments[G__222879__i + 0]; ++G__222879__i;}
  args = new cljs.core.IndexedSeq(G__222879__a,0);
} 
return G__222878__delegate.call(this,args);};
G__222878.cljs$lang$maxFixedArity = 0;
G__222878.cljs$lang$applyTo = (function (arglist__222880){
var args = cljs.core.seq(arglist__222880);
return G__222878__delegate(args);
});
G__222878.cljs$core$IFn$_invoke$arity$variadic = G__222878__delegate;
return G__222878;
})()
;

return null;
});
