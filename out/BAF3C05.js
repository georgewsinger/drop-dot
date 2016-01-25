goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__231925__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__231925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__231926__i = 0, G__231926__a = new Array(arguments.length -  0);
while (G__231926__i < G__231926__a.length) {G__231926__a[G__231926__i] = arguments[G__231926__i + 0]; ++G__231926__i;}
  args = new cljs.core.IndexedSeq(G__231926__a,0);
} 
return G__231925__delegate.call(this,args);};
G__231925.cljs$lang$maxFixedArity = 0;
G__231925.cljs$lang$applyTo = (function (arglist__231927){
var args = cljs.core.seq(arglist__231927);
return G__231925__delegate(args);
});
G__231925.cljs$core$IFn$_invoke$arity$variadic = G__231925__delegate;
return G__231925;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__231928__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__231928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__231929__i = 0, G__231929__a = new Array(arguments.length -  0);
while (G__231929__i < G__231929__a.length) {G__231929__a[G__231929__i] = arguments[G__231929__i + 0]; ++G__231929__i;}
  args = new cljs.core.IndexedSeq(G__231929__a,0);
} 
return G__231928__delegate.call(this,args);};
G__231928.cljs$lang$maxFixedArity = 0;
G__231928.cljs$lang$applyTo = (function (arglist__231930){
var args = cljs.core.seq(arglist__231930);
return G__231928__delegate(args);
});
G__231928.cljs$core$IFn$_invoke$arity$variadic = G__231928__delegate;
return G__231928;
})()
;

return null;
});
