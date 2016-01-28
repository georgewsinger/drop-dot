goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__87999__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__87999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__88000__i = 0, G__88000__a = new Array(arguments.length -  0);
while (G__88000__i < G__88000__a.length) {G__88000__a[G__88000__i] = arguments[G__88000__i + 0]; ++G__88000__i;}
  args = new cljs.core.IndexedSeq(G__88000__a,0);
} 
return G__87999__delegate.call(this,args);};
G__87999.cljs$lang$maxFixedArity = 0;
G__87999.cljs$lang$applyTo = (function (arglist__88001){
var args = cljs.core.seq(arglist__88001);
return G__87999__delegate(args);
});
G__87999.cljs$core$IFn$_invoke$arity$variadic = G__87999__delegate;
return G__87999;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__88002__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__88002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__88003__i = 0, G__88003__a = new Array(arguments.length -  0);
while (G__88003__i < G__88003__a.length) {G__88003__a[G__88003__i] = arguments[G__88003__i + 0]; ++G__88003__i;}
  args = new cljs.core.IndexedSeq(G__88003__a,0);
} 
return G__88002__delegate.call(this,args);};
G__88002.cljs$lang$maxFixedArity = 0;
G__88002.cljs$lang$applyTo = (function (arglist__88004){
var args = cljs.core.seq(arglist__88004);
return G__88002__delegate(args);
});
G__88002.cljs$core$IFn$_invoke$arity$variadic = G__88002__delegate;
return G__88002;
})()
;

return null;
});
