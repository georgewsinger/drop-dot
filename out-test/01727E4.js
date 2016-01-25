goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21654__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21655__i = 0, G__21655__a = new Array(arguments.length -  0);
while (G__21655__i < G__21655__a.length) {G__21655__a[G__21655__i] = arguments[G__21655__i + 0]; ++G__21655__i;}
  args = new cljs.core.IndexedSeq(G__21655__a,0);
} 
return G__21654__delegate.call(this,args);};
G__21654.cljs$lang$maxFixedArity = 0;
G__21654.cljs$lang$applyTo = (function (arglist__21656){
var args = cljs.core.seq(arglist__21656);
return G__21654__delegate(args);
});
G__21654.cljs$core$IFn$_invoke$arity$variadic = G__21654__delegate;
return G__21654;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21657__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21658__i = 0, G__21658__a = new Array(arguments.length -  0);
while (G__21658__i < G__21658__a.length) {G__21658__a[G__21658__i] = arguments[G__21658__i + 0]; ++G__21658__i;}
  args = new cljs.core.IndexedSeq(G__21658__a,0);
} 
return G__21657__delegate.call(this,args);};
G__21657.cljs$lang$maxFixedArity = 0;
G__21657.cljs$lang$applyTo = (function (arglist__21659){
var args = cljs.core.seq(arglist__21659);
return G__21657__delegate(args);
});
G__21657.cljs$core$IFn$_invoke$arity$variadic = G__21657__delegate;
return G__21657;
})()
;

return null;
});
