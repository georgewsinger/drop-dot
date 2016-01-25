goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58304__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58305__i = 0, G__58305__a = new Array(arguments.length -  0);
while (G__58305__i < G__58305__a.length) {G__58305__a[G__58305__i] = arguments[G__58305__i + 0]; ++G__58305__i;}
  args = new cljs.core.IndexedSeq(G__58305__a,0);
} 
return G__58304__delegate.call(this,args);};
G__58304.cljs$lang$maxFixedArity = 0;
G__58304.cljs$lang$applyTo = (function (arglist__58306){
var args = cljs.core.seq(arglist__58306);
return G__58304__delegate(args);
});
G__58304.cljs$core$IFn$_invoke$arity$variadic = G__58304__delegate;
return G__58304;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58307__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58308__i = 0, G__58308__a = new Array(arguments.length -  0);
while (G__58308__i < G__58308__a.length) {G__58308__a[G__58308__i] = arguments[G__58308__i + 0]; ++G__58308__i;}
  args = new cljs.core.IndexedSeq(G__58308__a,0);
} 
return G__58307__delegate.call(this,args);};
G__58307.cljs$lang$maxFixedArity = 0;
G__58307.cljs$lang$applyTo = (function (arglist__58309){
var args = cljs.core.seq(arglist__58309);
return G__58307__delegate(args);
});
G__58307.cljs$core$IFn$_invoke$arity$variadic = G__58307__delegate;
return G__58307;
})()
;

return null;
});
