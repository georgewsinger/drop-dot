goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24947__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24948__i = 0, G__24948__a = new Array(arguments.length -  0);
while (G__24948__i < G__24948__a.length) {G__24948__a[G__24948__i] = arguments[G__24948__i + 0]; ++G__24948__i;}
  args = new cljs.core.IndexedSeq(G__24948__a,0);
} 
return G__24947__delegate.call(this,args);};
G__24947.cljs$lang$maxFixedArity = 0;
G__24947.cljs$lang$applyTo = (function (arglist__24949){
var args = cljs.core.seq(arglist__24949);
return G__24947__delegate(args);
});
G__24947.cljs$core$IFn$_invoke$arity$variadic = G__24947__delegate;
return G__24947;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24950__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24951__i = 0, G__24951__a = new Array(arguments.length -  0);
while (G__24951__i < G__24951__a.length) {G__24951__a[G__24951__i] = arguments[G__24951__i + 0]; ++G__24951__i;}
  args = new cljs.core.IndexedSeq(G__24951__a,0);
} 
return G__24950__delegate.call(this,args);};
G__24950.cljs$lang$maxFixedArity = 0;
G__24950.cljs$lang$applyTo = (function (arglist__24952){
var args = cljs.core.seq(arglist__24952);
return G__24950__delegate(args);
});
G__24950.cljs$core$IFn$_invoke$arity$variadic = G__24950__delegate;
return G__24950;
})()
;

return null;
});
