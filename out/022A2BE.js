goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__226002__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__226002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__226003__i = 0, G__226003__a = new Array(arguments.length -  0);
while (G__226003__i < G__226003__a.length) {G__226003__a[G__226003__i] = arguments[G__226003__i + 0]; ++G__226003__i;}
  args = new cljs.core.IndexedSeq(G__226003__a,0);
} 
return G__226002__delegate.call(this,args);};
G__226002.cljs$lang$maxFixedArity = 0;
G__226002.cljs$lang$applyTo = (function (arglist__226004){
var args = cljs.core.seq(arglist__226004);
return G__226002__delegate(args);
});
G__226002.cljs$core$IFn$_invoke$arity$variadic = G__226002__delegate;
return G__226002;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__226005__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__226005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__226006__i = 0, G__226006__a = new Array(arguments.length -  0);
while (G__226006__i < G__226006__a.length) {G__226006__a[G__226006__i] = arguments[G__226006__i + 0]; ++G__226006__i;}
  args = new cljs.core.IndexedSeq(G__226006__a,0);
} 
return G__226005__delegate.call(this,args);};
G__226005.cljs$lang$maxFixedArity = 0;
G__226005.cljs$lang$applyTo = (function (arglist__226007){
var args = cljs.core.seq(arglist__226007);
return G__226005__delegate(args);
});
G__226005.cljs$core$IFn$_invoke$arity$variadic = G__226005__delegate;
return G__226005;
})()
;

return null;
});
