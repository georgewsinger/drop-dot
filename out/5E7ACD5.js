goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30400__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30401__i = 0, G__30401__a = new Array(arguments.length -  0);
while (G__30401__i < G__30401__a.length) {G__30401__a[G__30401__i] = arguments[G__30401__i + 0]; ++G__30401__i;}
  args = new cljs.core.IndexedSeq(G__30401__a,0);
} 
return G__30400__delegate.call(this,args);};
G__30400.cljs$lang$maxFixedArity = 0;
G__30400.cljs$lang$applyTo = (function (arglist__30402){
var args = cljs.core.seq(arglist__30402);
return G__30400__delegate(args);
});
G__30400.cljs$core$IFn$_invoke$arity$variadic = G__30400__delegate;
return G__30400;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30403__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30404__i = 0, G__30404__a = new Array(arguments.length -  0);
while (G__30404__i < G__30404__a.length) {G__30404__a[G__30404__i] = arguments[G__30404__i + 0]; ++G__30404__i;}
  args = new cljs.core.IndexedSeq(G__30404__a,0);
} 
return G__30403__delegate.call(this,args);};
G__30403.cljs$lang$maxFixedArity = 0;
G__30403.cljs$lang$applyTo = (function (arglist__30405){
var args = cljs.core.seq(arglist__30405);
return G__30403__delegate(args);
});
G__30403.cljs$core$IFn$_invoke$arity$variadic = G__30403__delegate;
return G__30403;
})()
;

return null;
});
