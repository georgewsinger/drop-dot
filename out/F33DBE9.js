goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53002__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53003__i = 0, G__53003__a = new Array(arguments.length -  0);
while (G__53003__i < G__53003__a.length) {G__53003__a[G__53003__i] = arguments[G__53003__i + 0]; ++G__53003__i;}
  args = new cljs.core.IndexedSeq(G__53003__a,0);
} 
return G__53002__delegate.call(this,args);};
G__53002.cljs$lang$maxFixedArity = 0;
G__53002.cljs$lang$applyTo = (function (arglist__53004){
var args = cljs.core.seq(arglist__53004);
return G__53002__delegate(args);
});
G__53002.cljs$core$IFn$_invoke$arity$variadic = G__53002__delegate;
return G__53002;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53005__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53006__i = 0, G__53006__a = new Array(arguments.length -  0);
while (G__53006__i < G__53006__a.length) {G__53006__a[G__53006__i] = arguments[G__53006__i + 0]; ++G__53006__i;}
  args = new cljs.core.IndexedSeq(G__53006__a,0);
} 
return G__53005__delegate.call(this,args);};
G__53005.cljs$lang$maxFixedArity = 0;
G__53005.cljs$lang$applyTo = (function (arglist__53007){
var args = cljs.core.seq(arglist__53007);
return G__53005__delegate(args);
});
G__53005.cljs$core$IFn$_invoke$arity$variadic = G__53005__delegate;
return G__53005;
})()
;

return null;
});
