goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__268974__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__268974 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__268975__i = 0, G__268975__a = new Array(arguments.length -  0);
while (G__268975__i < G__268975__a.length) {G__268975__a[G__268975__i] = arguments[G__268975__i + 0]; ++G__268975__i;}
  args = new cljs.core.IndexedSeq(G__268975__a,0);
} 
return G__268974__delegate.call(this,args);};
G__268974.cljs$lang$maxFixedArity = 0;
G__268974.cljs$lang$applyTo = (function (arglist__268976){
var args = cljs.core.seq(arglist__268976);
return G__268974__delegate(args);
});
G__268974.cljs$core$IFn$_invoke$arity$variadic = G__268974__delegate;
return G__268974;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__268977__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__268977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__268978__i = 0, G__268978__a = new Array(arguments.length -  0);
while (G__268978__i < G__268978__a.length) {G__268978__a[G__268978__i] = arguments[G__268978__i + 0]; ++G__268978__i;}
  args = new cljs.core.IndexedSeq(G__268978__a,0);
} 
return G__268977__delegate.call(this,args);};
G__268977.cljs$lang$maxFixedArity = 0;
G__268977.cljs$lang$applyTo = (function (arglist__268979){
var args = cljs.core.seq(arglist__268979);
return G__268977__delegate(args);
});
G__268977.cljs$core$IFn$_invoke$arity$variadic = G__268977__delegate;
return G__268977;
})()
;

return null;
});
