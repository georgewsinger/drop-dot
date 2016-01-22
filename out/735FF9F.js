goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37339__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37340__i = 0, G__37340__a = new Array(arguments.length -  0);
while (G__37340__i < G__37340__a.length) {G__37340__a[G__37340__i] = arguments[G__37340__i + 0]; ++G__37340__i;}
  args = new cljs.core.IndexedSeq(G__37340__a,0);
} 
return G__37339__delegate.call(this,args);};
G__37339.cljs$lang$maxFixedArity = 0;
G__37339.cljs$lang$applyTo = (function (arglist__37341){
var args = cljs.core.seq(arglist__37341);
return G__37339__delegate(args);
});
G__37339.cljs$core$IFn$_invoke$arity$variadic = G__37339__delegate;
return G__37339;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37342__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37343__i = 0, G__37343__a = new Array(arguments.length -  0);
while (G__37343__i < G__37343__a.length) {G__37343__a[G__37343__i] = arguments[G__37343__i + 0]; ++G__37343__i;}
  args = new cljs.core.IndexedSeq(G__37343__a,0);
} 
return G__37342__delegate.call(this,args);};
G__37342.cljs$lang$maxFixedArity = 0;
G__37342.cljs$lang$applyTo = (function (arglist__37344){
var args = cljs.core.seq(arglist__37344);
return G__37342__delegate(args);
});
G__37342.cljs$core$IFn$_invoke$arity$variadic = G__37342__delegate;
return G__37342;
})()
;

return null;
});
