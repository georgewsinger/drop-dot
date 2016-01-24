goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57746__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57747__i = 0, G__57747__a = new Array(arguments.length -  0);
while (G__57747__i < G__57747__a.length) {G__57747__a[G__57747__i] = arguments[G__57747__i + 0]; ++G__57747__i;}
  args = new cljs.core.IndexedSeq(G__57747__a,0);
} 
return G__57746__delegate.call(this,args);};
G__57746.cljs$lang$maxFixedArity = 0;
G__57746.cljs$lang$applyTo = (function (arglist__57748){
var args = cljs.core.seq(arglist__57748);
return G__57746__delegate(args);
});
G__57746.cljs$core$IFn$_invoke$arity$variadic = G__57746__delegate;
return G__57746;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57749__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57749 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57750__i = 0, G__57750__a = new Array(arguments.length -  0);
while (G__57750__i < G__57750__a.length) {G__57750__a[G__57750__i] = arguments[G__57750__i + 0]; ++G__57750__i;}
  args = new cljs.core.IndexedSeq(G__57750__a,0);
} 
return G__57749__delegate.call(this,args);};
G__57749.cljs$lang$maxFixedArity = 0;
G__57749.cljs$lang$applyTo = (function (arglist__57751){
var args = cljs.core.seq(arglist__57751);
return G__57749__delegate(args);
});
G__57749.cljs$core$IFn$_invoke$arity$variadic = G__57749__delegate;
return G__57749;
})()
;

return null;
});
