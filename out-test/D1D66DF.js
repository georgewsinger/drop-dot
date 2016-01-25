goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63400__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63401__i = 0, G__63401__a = new Array(arguments.length -  0);
while (G__63401__i < G__63401__a.length) {G__63401__a[G__63401__i] = arguments[G__63401__i + 0]; ++G__63401__i;}
  args = new cljs.core.IndexedSeq(G__63401__a,0);
} 
return G__63400__delegate.call(this,args);};
G__63400.cljs$lang$maxFixedArity = 0;
G__63400.cljs$lang$applyTo = (function (arglist__63402){
var args = cljs.core.seq(arglist__63402);
return G__63400__delegate(args);
});
G__63400.cljs$core$IFn$_invoke$arity$variadic = G__63400__delegate;
return G__63400;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63403__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63404__i = 0, G__63404__a = new Array(arguments.length -  0);
while (G__63404__i < G__63404__a.length) {G__63404__a[G__63404__i] = arguments[G__63404__i + 0]; ++G__63404__i;}
  args = new cljs.core.IndexedSeq(G__63404__a,0);
} 
return G__63403__delegate.call(this,args);};
G__63403.cljs$lang$maxFixedArity = 0;
G__63403.cljs$lang$applyTo = (function (arglist__63405){
var args = cljs.core.seq(arglist__63405);
return G__63403__delegate(args);
});
G__63403.cljs$core$IFn$_invoke$arity$variadic = G__63403__delegate;
return G__63403;
})()
;

return null;
});
