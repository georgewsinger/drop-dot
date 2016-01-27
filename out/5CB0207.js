goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__363062__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__363062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__363063__i = 0, G__363063__a = new Array(arguments.length -  0);
while (G__363063__i < G__363063__a.length) {G__363063__a[G__363063__i] = arguments[G__363063__i + 0]; ++G__363063__i;}
  args = new cljs.core.IndexedSeq(G__363063__a,0);
} 
return G__363062__delegate.call(this,args);};
G__363062.cljs$lang$maxFixedArity = 0;
G__363062.cljs$lang$applyTo = (function (arglist__363064){
var args = cljs.core.seq(arglist__363064);
return G__363062__delegate(args);
});
G__363062.cljs$core$IFn$_invoke$arity$variadic = G__363062__delegate;
return G__363062;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__363065__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__363065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__363066__i = 0, G__363066__a = new Array(arguments.length -  0);
while (G__363066__i < G__363066__a.length) {G__363066__a[G__363066__i] = arguments[G__363066__i + 0]; ++G__363066__i;}
  args = new cljs.core.IndexedSeq(G__363066__a,0);
} 
return G__363065__delegate.call(this,args);};
G__363065.cljs$lang$maxFixedArity = 0;
G__363065.cljs$lang$applyTo = (function (arglist__363067){
var args = cljs.core.seq(arglist__363067);
return G__363065__delegate(args);
});
G__363065.cljs$core$IFn$_invoke$arity$variadic = G__363065__delegate;
return G__363065;
})()
;

return null;
});
