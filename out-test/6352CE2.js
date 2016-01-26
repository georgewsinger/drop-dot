goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26999__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27000__i = 0, G__27000__a = new Array(arguments.length -  0);
while (G__27000__i < G__27000__a.length) {G__27000__a[G__27000__i] = arguments[G__27000__i + 0]; ++G__27000__i;}
  args = new cljs.core.IndexedSeq(G__27000__a,0);
} 
return G__26999__delegate.call(this,args);};
G__26999.cljs$lang$maxFixedArity = 0;
G__26999.cljs$lang$applyTo = (function (arglist__27001){
var args = cljs.core.seq(arglist__27001);
return G__26999__delegate(args);
});
G__26999.cljs$core$IFn$_invoke$arity$variadic = G__26999__delegate;
return G__26999;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27002__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27003__i = 0, G__27003__a = new Array(arguments.length -  0);
while (G__27003__i < G__27003__a.length) {G__27003__a[G__27003__i] = arguments[G__27003__i + 0]; ++G__27003__i;}
  args = new cljs.core.IndexedSeq(G__27003__a,0);
} 
return G__27002__delegate.call(this,args);};
G__27002.cljs$lang$maxFixedArity = 0;
G__27002.cljs$lang$applyTo = (function (arglist__27004){
var args = cljs.core.seq(arglist__27004);
return G__27002__delegate(args);
});
G__27002.cljs$core$IFn$_invoke$arity$variadic = G__27002__delegate;
return G__27002;
})()
;

return null;
});
