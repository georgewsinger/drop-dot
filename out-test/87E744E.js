goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42654__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42655__i = 0, G__42655__a = new Array(arguments.length -  0);
while (G__42655__i < G__42655__a.length) {G__42655__a[G__42655__i] = arguments[G__42655__i + 0]; ++G__42655__i;}
  args = new cljs.core.IndexedSeq(G__42655__a,0);
} 
return G__42654__delegate.call(this,args);};
G__42654.cljs$lang$maxFixedArity = 0;
G__42654.cljs$lang$applyTo = (function (arglist__42656){
var args = cljs.core.seq(arglist__42656);
return G__42654__delegate(args);
});
G__42654.cljs$core$IFn$_invoke$arity$variadic = G__42654__delegate;
return G__42654;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42657__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42658__i = 0, G__42658__a = new Array(arguments.length -  0);
while (G__42658__i < G__42658__a.length) {G__42658__a[G__42658__i] = arguments[G__42658__i + 0]; ++G__42658__i;}
  args = new cljs.core.IndexedSeq(G__42658__a,0);
} 
return G__42657__delegate.call(this,args);};
G__42657.cljs$lang$maxFixedArity = 0;
G__42657.cljs$lang$applyTo = (function (arglist__42659){
var args = cljs.core.seq(arglist__42659);
return G__42657__delegate(args);
});
G__42657.cljs$core$IFn$_invoke$arity$variadic = G__42657__delegate;
return G__42657;
})()
;

return null;
});
