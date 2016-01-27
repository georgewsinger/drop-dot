goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__124998__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__124998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__124999__i = 0, G__124999__a = new Array(arguments.length -  0);
while (G__124999__i < G__124999__a.length) {G__124999__a[G__124999__i] = arguments[G__124999__i + 0]; ++G__124999__i;}
  args = new cljs.core.IndexedSeq(G__124999__a,0);
} 
return G__124998__delegate.call(this,args);};
G__124998.cljs$lang$maxFixedArity = 0;
G__124998.cljs$lang$applyTo = (function (arglist__125000){
var args = cljs.core.seq(arglist__125000);
return G__124998__delegate(args);
});
G__124998.cljs$core$IFn$_invoke$arity$variadic = G__124998__delegate;
return G__124998;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__125001__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__125001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__125002__i = 0, G__125002__a = new Array(arguments.length -  0);
while (G__125002__i < G__125002__a.length) {G__125002__a[G__125002__i] = arguments[G__125002__i + 0]; ++G__125002__i;}
  args = new cljs.core.IndexedSeq(G__125002__a,0);
} 
return G__125001__delegate.call(this,args);};
G__125001.cljs$lang$maxFixedArity = 0;
G__125001.cljs$lang$applyTo = (function (arglist__125003){
var args = cljs.core.seq(arglist__125003);
return G__125001__delegate(args);
});
G__125001.cljs$core$IFn$_invoke$arity$variadic = G__125001__delegate;
return G__125001;
})()
;

return null;
});
