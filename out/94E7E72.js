goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23907__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23908__i = 0, G__23908__a = new Array(arguments.length -  0);
while (G__23908__i < G__23908__a.length) {G__23908__a[G__23908__i] = arguments[G__23908__i + 0]; ++G__23908__i;}
  args = new cljs.core.IndexedSeq(G__23908__a,0);
} 
return G__23907__delegate.call(this,args);};
G__23907.cljs$lang$maxFixedArity = 0;
G__23907.cljs$lang$applyTo = (function (arglist__23909){
var args = cljs.core.seq(arglist__23909);
return G__23907__delegate(args);
});
G__23907.cljs$core$IFn$_invoke$arity$variadic = G__23907__delegate;
return G__23907;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23910__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23911__i = 0, G__23911__a = new Array(arguments.length -  0);
while (G__23911__i < G__23911__a.length) {G__23911__a[G__23911__i] = arguments[G__23911__i + 0]; ++G__23911__i;}
  args = new cljs.core.IndexedSeq(G__23911__a,0);
} 
return G__23910__delegate.call(this,args);};
G__23910.cljs$lang$maxFixedArity = 0;
G__23910.cljs$lang$applyTo = (function (arglist__23912){
var args = cljs.core.seq(arglist__23912);
return G__23910__delegate(args);
});
G__23910.cljs$core$IFn$_invoke$arity$variadic = G__23910__delegate;
return G__23910;
})()
;

return null;
});
