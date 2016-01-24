goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30999__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31000__i = 0, G__31000__a = new Array(arguments.length -  0);
while (G__31000__i < G__31000__a.length) {G__31000__a[G__31000__i] = arguments[G__31000__i + 0]; ++G__31000__i;}
  args = new cljs.core.IndexedSeq(G__31000__a,0);
} 
return G__30999__delegate.call(this,args);};
G__30999.cljs$lang$maxFixedArity = 0;
G__30999.cljs$lang$applyTo = (function (arglist__31001){
var args = cljs.core.seq(arglist__31001);
return G__30999__delegate(args);
});
G__30999.cljs$core$IFn$_invoke$arity$variadic = G__30999__delegate;
return G__30999;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31002__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31003__i = 0, G__31003__a = new Array(arguments.length -  0);
while (G__31003__i < G__31003__a.length) {G__31003__a[G__31003__i] = arguments[G__31003__i + 0]; ++G__31003__i;}
  args = new cljs.core.IndexedSeq(G__31003__a,0);
} 
return G__31002__delegate.call(this,args);};
G__31002.cljs$lang$maxFixedArity = 0;
G__31002.cljs$lang$applyTo = (function (arglist__31004){
var args = cljs.core.seq(arglist__31004);
return G__31002__delegate(args);
});
G__31002.cljs$core$IFn$_invoke$arity$variadic = G__31002__delegate;
return G__31002;
})()
;

return null;
});
