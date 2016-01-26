goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37461__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37462__i = 0, G__37462__a = new Array(arguments.length -  0);
while (G__37462__i < G__37462__a.length) {G__37462__a[G__37462__i] = arguments[G__37462__i + 0]; ++G__37462__i;}
  args = new cljs.core.IndexedSeq(G__37462__a,0);
} 
return G__37461__delegate.call(this,args);};
G__37461.cljs$lang$maxFixedArity = 0;
G__37461.cljs$lang$applyTo = (function (arglist__37463){
var args = cljs.core.seq(arglist__37463);
return G__37461__delegate(args);
});
G__37461.cljs$core$IFn$_invoke$arity$variadic = G__37461__delegate;
return G__37461;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37464__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37464 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37465__i = 0, G__37465__a = new Array(arguments.length -  0);
while (G__37465__i < G__37465__a.length) {G__37465__a[G__37465__i] = arguments[G__37465__i + 0]; ++G__37465__i;}
  args = new cljs.core.IndexedSeq(G__37465__a,0);
} 
return G__37464__delegate.call(this,args);};
G__37464.cljs$lang$maxFixedArity = 0;
G__37464.cljs$lang$applyTo = (function (arglist__37466){
var args = cljs.core.seq(arglist__37466);
return G__37464__delegate(args);
});
G__37464.cljs$core$IFn$_invoke$arity$variadic = G__37464__delegate;
return G__37464;
})()
;

return null;
});
