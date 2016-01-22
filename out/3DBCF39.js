goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44002__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44003__i = 0, G__44003__a = new Array(arguments.length -  0);
while (G__44003__i < G__44003__a.length) {G__44003__a[G__44003__i] = arguments[G__44003__i + 0]; ++G__44003__i;}
  args = new cljs.core.IndexedSeq(G__44003__a,0);
} 
return G__44002__delegate.call(this,args);};
G__44002.cljs$lang$maxFixedArity = 0;
G__44002.cljs$lang$applyTo = (function (arglist__44004){
var args = cljs.core.seq(arglist__44004);
return G__44002__delegate(args);
});
G__44002.cljs$core$IFn$_invoke$arity$variadic = G__44002__delegate;
return G__44002;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44005__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44006__i = 0, G__44006__a = new Array(arguments.length -  0);
while (G__44006__i < G__44006__a.length) {G__44006__a[G__44006__i] = arguments[G__44006__i + 0]; ++G__44006__i;}
  args = new cljs.core.IndexedSeq(G__44006__a,0);
} 
return G__44005__delegate.call(this,args);};
G__44005.cljs$lang$maxFixedArity = 0;
G__44005.cljs$lang$applyTo = (function (arglist__44007){
var args = cljs.core.seq(arglist__44007);
return G__44005__delegate(args);
});
G__44005.cljs$core$IFn$_invoke$arity$variadic = G__44005__delegate;
return G__44005;
})()
;

return null;
});
