goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22711__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22712__i = 0, G__22712__a = new Array(arguments.length -  0);
while (G__22712__i < G__22712__a.length) {G__22712__a[G__22712__i] = arguments[G__22712__i + 0]; ++G__22712__i;}
  args = new cljs.core.IndexedSeq(G__22712__a,0);
} 
return G__22711__delegate.call(this,args);};
G__22711.cljs$lang$maxFixedArity = 0;
G__22711.cljs$lang$applyTo = (function (arglist__22713){
var args = cljs.core.seq(arglist__22713);
return G__22711__delegate(args);
});
G__22711.cljs$core$IFn$_invoke$arity$variadic = G__22711__delegate;
return G__22711;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22714__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22715__i = 0, G__22715__a = new Array(arguments.length -  0);
while (G__22715__i < G__22715__a.length) {G__22715__a[G__22715__i] = arguments[G__22715__i + 0]; ++G__22715__i;}
  args = new cljs.core.IndexedSeq(G__22715__a,0);
} 
return G__22714__delegate.call(this,args);};
G__22714.cljs$lang$maxFixedArity = 0;
G__22714.cljs$lang$applyTo = (function (arglist__22716){
var args = cljs.core.seq(arglist__22716);
return G__22714__delegate(args);
});
G__22714.cljs$core$IFn$_invoke$arity$variadic = G__22714__delegate;
return G__22714;
})()
;

return null;
});
