goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__236393__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__236393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__236394__i = 0, G__236394__a = new Array(arguments.length -  0);
while (G__236394__i < G__236394__a.length) {G__236394__a[G__236394__i] = arguments[G__236394__i + 0]; ++G__236394__i;}
  args = new cljs.core.IndexedSeq(G__236394__a,0);
} 
return G__236393__delegate.call(this,args);};
G__236393.cljs$lang$maxFixedArity = 0;
G__236393.cljs$lang$applyTo = (function (arglist__236395){
var args = cljs.core.seq(arglist__236395);
return G__236393__delegate(args);
});
G__236393.cljs$core$IFn$_invoke$arity$variadic = G__236393__delegate;
return G__236393;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__236396__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__236396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__236397__i = 0, G__236397__a = new Array(arguments.length -  0);
while (G__236397__i < G__236397__a.length) {G__236397__a[G__236397__i] = arguments[G__236397__i + 0]; ++G__236397__i;}
  args = new cljs.core.IndexedSeq(G__236397__a,0);
} 
return G__236396__delegate.call(this,args);};
G__236396.cljs$lang$maxFixedArity = 0;
G__236396.cljs$lang$applyTo = (function (arglist__236398){
var args = cljs.core.seq(arglist__236398);
return G__236396__delegate(args);
});
G__236396.cljs$core$IFn$_invoke$arity$variadic = G__236396__delegate;
return G__236396;
})()
;

return null;
});
