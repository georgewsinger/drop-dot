goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__165546__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__165546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165547__i = 0, G__165547__a = new Array(arguments.length -  0);
while (G__165547__i < G__165547__a.length) {G__165547__a[G__165547__i] = arguments[G__165547__i + 0]; ++G__165547__i;}
  args = new cljs.core.IndexedSeq(G__165547__a,0);
} 
return G__165546__delegate.call(this,args);};
G__165546.cljs$lang$maxFixedArity = 0;
G__165546.cljs$lang$applyTo = (function (arglist__165548){
var args = cljs.core.seq(arglist__165548);
return G__165546__delegate(args);
});
G__165546.cljs$core$IFn$_invoke$arity$variadic = G__165546__delegate;
return G__165546;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__165549__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__165549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__165550__i = 0, G__165550__a = new Array(arguments.length -  0);
while (G__165550__i < G__165550__a.length) {G__165550__a[G__165550__i] = arguments[G__165550__i + 0]; ++G__165550__i;}
  args = new cljs.core.IndexedSeq(G__165550__a,0);
} 
return G__165549__delegate.call(this,args);};
G__165549.cljs$lang$maxFixedArity = 0;
G__165549.cljs$lang$applyTo = (function (arglist__165551){
var args = cljs.core.seq(arglist__165551);
return G__165549__delegate(args);
});
G__165549.cljs$core$IFn$_invoke$arity$variadic = G__165549__delegate;
return G__165549;
})()
;

return null;
});
