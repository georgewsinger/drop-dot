goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__314812__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__314812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__314813__i = 0, G__314813__a = new Array(arguments.length -  0);
while (G__314813__i < G__314813__a.length) {G__314813__a[G__314813__i] = arguments[G__314813__i + 0]; ++G__314813__i;}
  args = new cljs.core.IndexedSeq(G__314813__a,0);
} 
return G__314812__delegate.call(this,args);};
G__314812.cljs$lang$maxFixedArity = 0;
G__314812.cljs$lang$applyTo = (function (arglist__314814){
var args = cljs.core.seq(arglist__314814);
return G__314812__delegate(args);
});
G__314812.cljs$core$IFn$_invoke$arity$variadic = G__314812__delegate;
return G__314812;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__314815__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__314815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__314816__i = 0, G__314816__a = new Array(arguments.length -  0);
while (G__314816__i < G__314816__a.length) {G__314816__a[G__314816__i] = arguments[G__314816__i + 0]; ++G__314816__i;}
  args = new cljs.core.IndexedSeq(G__314816__a,0);
} 
return G__314815__delegate.call(this,args);};
G__314815.cljs$lang$maxFixedArity = 0;
G__314815.cljs$lang$applyTo = (function (arglist__314817){
var args = cljs.core.seq(arglist__314817);
return G__314815__delegate(args);
});
G__314815.cljs$core$IFn$_invoke$arity$variadic = G__314815__delegate;
return G__314815;
})()
;

return null;
});
