goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__98252__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__98252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__98253__i = 0, G__98253__a = new Array(arguments.length -  0);
while (G__98253__i < G__98253__a.length) {G__98253__a[G__98253__i] = arguments[G__98253__i + 0]; ++G__98253__i;}
  args = new cljs.core.IndexedSeq(G__98253__a,0);
} 
return G__98252__delegate.call(this,args);};
G__98252.cljs$lang$maxFixedArity = 0;
G__98252.cljs$lang$applyTo = (function (arglist__98254){
var args = cljs.core.seq(arglist__98254);
return G__98252__delegate(args);
});
G__98252.cljs$core$IFn$_invoke$arity$variadic = G__98252__delegate;
return G__98252;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__98255__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__98255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__98256__i = 0, G__98256__a = new Array(arguments.length -  0);
while (G__98256__i < G__98256__a.length) {G__98256__a[G__98256__i] = arguments[G__98256__i + 0]; ++G__98256__i;}
  args = new cljs.core.IndexedSeq(G__98256__a,0);
} 
return G__98255__delegate.call(this,args);};
G__98255.cljs$lang$maxFixedArity = 0;
G__98255.cljs$lang$applyTo = (function (arglist__98257){
var args = cljs.core.seq(arglist__98257);
return G__98255__delegate(args);
});
G__98255.cljs$core$IFn$_invoke$arity$variadic = G__98255__delegate;
return G__98255;
})()
;

return null;
});
