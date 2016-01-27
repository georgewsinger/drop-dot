goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51117__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51118__i = 0, G__51118__a = new Array(arguments.length -  0);
while (G__51118__i < G__51118__a.length) {G__51118__a[G__51118__i] = arguments[G__51118__i + 0]; ++G__51118__i;}
  args = new cljs.core.IndexedSeq(G__51118__a,0);
} 
return G__51117__delegate.call(this,args);};
G__51117.cljs$lang$maxFixedArity = 0;
G__51117.cljs$lang$applyTo = (function (arglist__51119){
var args = cljs.core.seq(arglist__51119);
return G__51117__delegate(args);
});
G__51117.cljs$core$IFn$_invoke$arity$variadic = G__51117__delegate;
return G__51117;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51120__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51121__i = 0, G__51121__a = new Array(arguments.length -  0);
while (G__51121__i < G__51121__a.length) {G__51121__a[G__51121__i] = arguments[G__51121__i + 0]; ++G__51121__i;}
  args = new cljs.core.IndexedSeq(G__51121__a,0);
} 
return G__51120__delegate.call(this,args);};
G__51120.cljs$lang$maxFixedArity = 0;
G__51120.cljs$lang$applyTo = (function (arglist__51122){
var args = cljs.core.seq(arglist__51122);
return G__51120__delegate(args);
});
G__51120.cljs$core$IFn$_invoke$arity$variadic = G__51120__delegate;
return G__51120;
})()
;

return null;
});
