goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__222886__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__222886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__222887__i = 0, G__222887__a = new Array(arguments.length -  0);
while (G__222887__i < G__222887__a.length) {G__222887__a[G__222887__i] = arguments[G__222887__i + 0]; ++G__222887__i;}
  args = new cljs.core.IndexedSeq(G__222887__a,0);
} 
return G__222886__delegate.call(this,args);};
G__222886.cljs$lang$maxFixedArity = 0;
G__222886.cljs$lang$applyTo = (function (arglist__222888){
var args = cljs.core.seq(arglist__222888);
return G__222886__delegate(args);
});
G__222886.cljs$core$IFn$_invoke$arity$variadic = G__222886__delegate;
return G__222886;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__222889__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__222889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__222890__i = 0, G__222890__a = new Array(arguments.length -  0);
while (G__222890__i < G__222890__a.length) {G__222890__a[G__222890__i] = arguments[G__222890__i + 0]; ++G__222890__i;}
  args = new cljs.core.IndexedSeq(G__222890__a,0);
} 
return G__222889__delegate.call(this,args);};
G__222889.cljs$lang$maxFixedArity = 0;
G__222889.cljs$lang$applyTo = (function (arglist__222891){
var args = cljs.core.seq(arglist__222891);
return G__222889__delegate(args);
});
G__222889.cljs$core$IFn$_invoke$arity$variadic = G__222889__delegate;
return G__222889;
})()
;

return null;
});
