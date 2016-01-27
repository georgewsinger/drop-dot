goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28947__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28948__i = 0, G__28948__a = new Array(arguments.length -  0);
while (G__28948__i < G__28948__a.length) {G__28948__a[G__28948__i] = arguments[G__28948__i + 0]; ++G__28948__i;}
  args = new cljs.core.IndexedSeq(G__28948__a,0);
} 
return G__28947__delegate.call(this,args);};
G__28947.cljs$lang$maxFixedArity = 0;
G__28947.cljs$lang$applyTo = (function (arglist__28949){
var args = cljs.core.seq(arglist__28949);
return G__28947__delegate(args);
});
G__28947.cljs$core$IFn$_invoke$arity$variadic = G__28947__delegate;
return G__28947;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28950__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28951__i = 0, G__28951__a = new Array(arguments.length -  0);
while (G__28951__i < G__28951__a.length) {G__28951__a[G__28951__i] = arguments[G__28951__i + 0]; ++G__28951__i;}
  args = new cljs.core.IndexedSeq(G__28951__a,0);
} 
return G__28950__delegate.call(this,args);};
G__28950.cljs$lang$maxFixedArity = 0;
G__28950.cljs$lang$applyTo = (function (arglist__28952){
var args = cljs.core.seq(arglist__28952);
return G__28950__delegate(args);
});
G__28950.cljs$core$IFn$_invoke$arity$variadic = G__28950__delegate;
return G__28950;
})()
;

return null;
});
