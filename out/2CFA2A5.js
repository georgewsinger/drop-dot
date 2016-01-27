goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30170__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30171__i = 0, G__30171__a = new Array(arguments.length -  0);
while (G__30171__i < G__30171__a.length) {G__30171__a[G__30171__i] = arguments[G__30171__i + 0]; ++G__30171__i;}
  args = new cljs.core.IndexedSeq(G__30171__a,0);
} 
return G__30170__delegate.call(this,args);};
G__30170.cljs$lang$maxFixedArity = 0;
G__30170.cljs$lang$applyTo = (function (arglist__30172){
var args = cljs.core.seq(arglist__30172);
return G__30170__delegate(args);
});
G__30170.cljs$core$IFn$_invoke$arity$variadic = G__30170__delegate;
return G__30170;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30173__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30174__i = 0, G__30174__a = new Array(arguments.length -  0);
while (G__30174__i < G__30174__a.length) {G__30174__a[G__30174__i] = arguments[G__30174__i + 0]; ++G__30174__i;}
  args = new cljs.core.IndexedSeq(G__30174__a,0);
} 
return G__30173__delegate.call(this,args);};
G__30173.cljs$lang$maxFixedArity = 0;
G__30173.cljs$lang$applyTo = (function (arglist__30175){
var args = cljs.core.seq(arglist__30175);
return G__30173__delegate(args);
});
G__30173.cljs$core$IFn$_invoke$arity$variadic = G__30173__delegate;
return G__30173;
})()
;

return null;
});
