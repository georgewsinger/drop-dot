goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__257999__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__257999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__258000__i = 0, G__258000__a = new Array(arguments.length -  0);
while (G__258000__i < G__258000__a.length) {G__258000__a[G__258000__i] = arguments[G__258000__i + 0]; ++G__258000__i;}
  args = new cljs.core.IndexedSeq(G__258000__a,0);
} 
return G__257999__delegate.call(this,args);};
G__257999.cljs$lang$maxFixedArity = 0;
G__257999.cljs$lang$applyTo = (function (arglist__258001){
var args = cljs.core.seq(arglist__258001);
return G__257999__delegate(args);
});
G__257999.cljs$core$IFn$_invoke$arity$variadic = G__257999__delegate;
return G__257999;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__258002__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__258002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__258003__i = 0, G__258003__a = new Array(arguments.length -  0);
while (G__258003__i < G__258003__a.length) {G__258003__a[G__258003__i] = arguments[G__258003__i + 0]; ++G__258003__i;}
  args = new cljs.core.IndexedSeq(G__258003__a,0);
} 
return G__258002__delegate.call(this,args);};
G__258002.cljs$lang$maxFixedArity = 0;
G__258002.cljs$lang$applyTo = (function (arglist__258004){
var args = cljs.core.seq(arglist__258004);
return G__258002__delegate(args);
});
G__258002.cljs$core$IFn$_invoke$arity$variadic = G__258002__delegate;
return G__258002;
})()
;

return null;
});
