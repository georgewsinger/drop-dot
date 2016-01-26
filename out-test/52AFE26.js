goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35018__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35019__i = 0, G__35019__a = new Array(arguments.length -  0);
while (G__35019__i < G__35019__a.length) {G__35019__a[G__35019__i] = arguments[G__35019__i + 0]; ++G__35019__i;}
  args = new cljs.core.IndexedSeq(G__35019__a,0);
} 
return G__35018__delegate.call(this,args);};
G__35018.cljs$lang$maxFixedArity = 0;
G__35018.cljs$lang$applyTo = (function (arglist__35020){
var args = cljs.core.seq(arglist__35020);
return G__35018__delegate(args);
});
G__35018.cljs$core$IFn$_invoke$arity$variadic = G__35018__delegate;
return G__35018;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35021__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35022__i = 0, G__35022__a = new Array(arguments.length -  0);
while (G__35022__i < G__35022__a.length) {G__35022__a[G__35022__i] = arguments[G__35022__i + 0]; ++G__35022__i;}
  args = new cljs.core.IndexedSeq(G__35022__a,0);
} 
return G__35021__delegate.call(this,args);};
G__35021.cljs$lang$maxFixedArity = 0;
G__35021.cljs$lang$applyTo = (function (arglist__35023){
var args = cljs.core.seq(arglist__35023);
return G__35021__delegate(args);
});
G__35021.cljs$core$IFn$_invoke$arity$variadic = G__35021__delegate;
return G__35021;
})()
;

return null;
});
