goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__337998__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__337998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__337999__i = 0, G__337999__a = new Array(arguments.length -  0);
while (G__337999__i < G__337999__a.length) {G__337999__a[G__337999__i] = arguments[G__337999__i + 0]; ++G__337999__i;}
  args = new cljs.core.IndexedSeq(G__337999__a,0);
} 
return G__337998__delegate.call(this,args);};
G__337998.cljs$lang$maxFixedArity = 0;
G__337998.cljs$lang$applyTo = (function (arglist__338000){
var args = cljs.core.seq(arglist__338000);
return G__337998__delegate(args);
});
G__337998.cljs$core$IFn$_invoke$arity$variadic = G__337998__delegate;
return G__337998;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__338001__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__338001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__338002__i = 0, G__338002__a = new Array(arguments.length -  0);
while (G__338002__i < G__338002__a.length) {G__338002__a[G__338002__i] = arguments[G__338002__i + 0]; ++G__338002__i;}
  args = new cljs.core.IndexedSeq(G__338002__a,0);
} 
return G__338001__delegate.call(this,args);};
G__338001.cljs$lang$maxFixedArity = 0;
G__338001.cljs$lang$applyTo = (function (arglist__338003){
var args = cljs.core.seq(arglist__338003);
return G__338001__delegate(args);
});
G__338001.cljs$core$IFn$_invoke$arity$variadic = G__338001__delegate;
return G__338001;
})()
;

return null;
});
