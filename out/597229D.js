goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18999__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19000__i = 0, G__19000__a = new Array(arguments.length -  0);
while (G__19000__i < G__19000__a.length) {G__19000__a[G__19000__i] = arguments[G__19000__i + 0]; ++G__19000__i;}
  args = new cljs.core.IndexedSeq(G__19000__a,0);
} 
return G__18999__delegate.call(this,args);};
G__18999.cljs$lang$maxFixedArity = 0;
G__18999.cljs$lang$applyTo = (function (arglist__19001){
var args = cljs.core.seq(arglist__19001);
return G__18999__delegate(args);
});
G__18999.cljs$core$IFn$_invoke$arity$variadic = G__18999__delegate;
return G__18999;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19002__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19003__i = 0, G__19003__a = new Array(arguments.length -  0);
while (G__19003__i < G__19003__a.length) {G__19003__a[G__19003__i] = arguments[G__19003__i + 0]; ++G__19003__i;}
  args = new cljs.core.IndexedSeq(G__19003__a,0);
} 
return G__19002__delegate.call(this,args);};
G__19002.cljs$lang$maxFixedArity = 0;
G__19002.cljs$lang$applyTo = (function (arglist__19004){
var args = cljs.core.seq(arglist__19004);
return G__19002__delegate(args);
});
G__19002.cljs$core$IFn$_invoke$arity$variadic = G__19002__delegate;
return G__19002;
})()
;

return null;
});
