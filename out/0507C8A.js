goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__385697__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__385697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__385698__i = 0, G__385698__a = new Array(arguments.length -  0);
while (G__385698__i < G__385698__a.length) {G__385698__a[G__385698__i] = arguments[G__385698__i + 0]; ++G__385698__i;}
  args = new cljs.core.IndexedSeq(G__385698__a,0);
} 
return G__385697__delegate.call(this,args);};
G__385697.cljs$lang$maxFixedArity = 0;
G__385697.cljs$lang$applyTo = (function (arglist__385699){
var args = cljs.core.seq(arglist__385699);
return G__385697__delegate(args);
});
G__385697.cljs$core$IFn$_invoke$arity$variadic = G__385697__delegate;
return G__385697;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__385700__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__385700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__385701__i = 0, G__385701__a = new Array(arguments.length -  0);
while (G__385701__i < G__385701__a.length) {G__385701__a[G__385701__i] = arguments[G__385701__i + 0]; ++G__385701__i;}
  args = new cljs.core.IndexedSeq(G__385701__a,0);
} 
return G__385700__delegate.call(this,args);};
G__385700.cljs$lang$maxFixedArity = 0;
G__385700.cljs$lang$applyTo = (function (arglist__385702){
var args = cljs.core.seq(arglist__385702);
return G__385700__delegate(args);
});
G__385700.cljs$core$IFn$_invoke$arity$variadic = G__385700__delegate;
return G__385700;
})()
;

return null;
});
