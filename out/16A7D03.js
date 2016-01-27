goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__301978__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__301978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__301979__i = 0, G__301979__a = new Array(arguments.length -  0);
while (G__301979__i < G__301979__a.length) {G__301979__a[G__301979__i] = arguments[G__301979__i + 0]; ++G__301979__i;}
  args = new cljs.core.IndexedSeq(G__301979__a,0);
} 
return G__301978__delegate.call(this,args);};
G__301978.cljs$lang$maxFixedArity = 0;
G__301978.cljs$lang$applyTo = (function (arglist__301980){
var args = cljs.core.seq(arglist__301980);
return G__301978__delegate(args);
});
G__301978.cljs$core$IFn$_invoke$arity$variadic = G__301978__delegate;
return G__301978;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__301981__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__301981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__301982__i = 0, G__301982__a = new Array(arguments.length -  0);
while (G__301982__i < G__301982__a.length) {G__301982__a[G__301982__i] = arguments[G__301982__i + 0]; ++G__301982__i;}
  args = new cljs.core.IndexedSeq(G__301982__a,0);
} 
return G__301981__delegate.call(this,args);};
G__301981.cljs$lang$maxFixedArity = 0;
G__301981.cljs$lang$applyTo = (function (arglist__301983){
var args = cljs.core.seq(arglist__301983);
return G__301981__delegate(args);
});
G__301981.cljs$core$IFn$_invoke$arity$variadic = G__301981__delegate;
return G__301981;
})()
;

return null;
});
