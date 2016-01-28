goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__379679__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__379679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__379680__i = 0, G__379680__a = new Array(arguments.length -  0);
while (G__379680__i < G__379680__a.length) {G__379680__a[G__379680__i] = arguments[G__379680__i + 0]; ++G__379680__i;}
  args = new cljs.core.IndexedSeq(G__379680__a,0);
} 
return G__379679__delegate.call(this,args);};
G__379679.cljs$lang$maxFixedArity = 0;
G__379679.cljs$lang$applyTo = (function (arglist__379681){
var args = cljs.core.seq(arglist__379681);
return G__379679__delegate(args);
});
G__379679.cljs$core$IFn$_invoke$arity$variadic = G__379679__delegate;
return G__379679;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__379682__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__379682 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__379683__i = 0, G__379683__a = new Array(arguments.length -  0);
while (G__379683__i < G__379683__a.length) {G__379683__a[G__379683__i] = arguments[G__379683__i + 0]; ++G__379683__i;}
  args = new cljs.core.IndexedSeq(G__379683__a,0);
} 
return G__379682__delegate.call(this,args);};
G__379682.cljs$lang$maxFixedArity = 0;
G__379682.cljs$lang$applyTo = (function (arglist__379684){
var args = cljs.core.seq(arglist__379684);
return G__379682__delegate(args);
});
G__379682.cljs$core$IFn$_invoke$arity$variadic = G__379682__delegate;
return G__379682;
})()
;

return null;
});
