goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__268324__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__268324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__268325__i = 0, G__268325__a = new Array(arguments.length -  0);
while (G__268325__i < G__268325__a.length) {G__268325__a[G__268325__i] = arguments[G__268325__i + 0]; ++G__268325__i;}
  args = new cljs.core.IndexedSeq(G__268325__a,0);
} 
return G__268324__delegate.call(this,args);};
G__268324.cljs$lang$maxFixedArity = 0;
G__268324.cljs$lang$applyTo = (function (arglist__268326){
var args = cljs.core.seq(arglist__268326);
return G__268324__delegate(args);
});
G__268324.cljs$core$IFn$_invoke$arity$variadic = G__268324__delegate;
return G__268324;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__268327__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__268327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__268328__i = 0, G__268328__a = new Array(arguments.length -  0);
while (G__268328__i < G__268328__a.length) {G__268328__a[G__268328__i] = arguments[G__268328__i + 0]; ++G__268328__i;}
  args = new cljs.core.IndexedSeq(G__268328__a,0);
} 
return G__268327__delegate.call(this,args);};
G__268327.cljs$lang$maxFixedArity = 0;
G__268327.cljs$lang$applyTo = (function (arglist__268329){
var args = cljs.core.seq(arglist__268329);
return G__268327__delegate(args);
});
G__268327.cljs$core$IFn$_invoke$arity$variadic = G__268327__delegate;
return G__268327;
})()
;

return null;
});
