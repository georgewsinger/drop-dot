goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__125009__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__125009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__125010__i = 0, G__125010__a = new Array(arguments.length -  0);
while (G__125010__i < G__125010__a.length) {G__125010__a[G__125010__i] = arguments[G__125010__i + 0]; ++G__125010__i;}
  args = new cljs.core.IndexedSeq(G__125010__a,0);
} 
return G__125009__delegate.call(this,args);};
G__125009.cljs$lang$maxFixedArity = 0;
G__125009.cljs$lang$applyTo = (function (arglist__125011){
var args = cljs.core.seq(arglist__125011);
return G__125009__delegate(args);
});
G__125009.cljs$core$IFn$_invoke$arity$variadic = G__125009__delegate;
return G__125009;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__125012__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__125012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__125013__i = 0, G__125013__a = new Array(arguments.length -  0);
while (G__125013__i < G__125013__a.length) {G__125013__a[G__125013__i] = arguments[G__125013__i + 0]; ++G__125013__i;}
  args = new cljs.core.IndexedSeq(G__125013__a,0);
} 
return G__125012__delegate.call(this,args);};
G__125012.cljs$lang$maxFixedArity = 0;
G__125012.cljs$lang$applyTo = (function (arglist__125014){
var args = cljs.core.seq(arglist__125014);
return G__125012__delegate(args);
});
G__125012.cljs$core$IFn$_invoke$arity$variadic = G__125012__delegate;
return G__125012;
})()
;

return null;
});
