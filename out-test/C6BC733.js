goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43018__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43019__i = 0, G__43019__a = new Array(arguments.length -  0);
while (G__43019__i < G__43019__a.length) {G__43019__a[G__43019__i] = arguments[G__43019__i + 0]; ++G__43019__i;}
  args = new cljs.core.IndexedSeq(G__43019__a,0);
} 
return G__43018__delegate.call(this,args);};
G__43018.cljs$lang$maxFixedArity = 0;
G__43018.cljs$lang$applyTo = (function (arglist__43020){
var args = cljs.core.seq(arglist__43020);
return G__43018__delegate(args);
});
G__43018.cljs$core$IFn$_invoke$arity$variadic = G__43018__delegate;
return G__43018;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43021__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43022__i = 0, G__43022__a = new Array(arguments.length -  0);
while (G__43022__i < G__43022__a.length) {G__43022__a[G__43022__i] = arguments[G__43022__i + 0]; ++G__43022__i;}
  args = new cljs.core.IndexedSeq(G__43022__a,0);
} 
return G__43021__delegate.call(this,args);};
G__43021.cljs$lang$maxFixedArity = 0;
G__43021.cljs$lang$applyTo = (function (arglist__43023){
var args = cljs.core.seq(arglist__43023);
return G__43021__delegate(args);
});
G__43021.cljs$core$IFn$_invoke$arity$variadic = G__43021__delegate;
return G__43021;
})()
;

return null;
});
