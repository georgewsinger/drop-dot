goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__380682__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__380682 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__380683__i = 0, G__380683__a = new Array(arguments.length -  0);
while (G__380683__i < G__380683__a.length) {G__380683__a[G__380683__i] = arguments[G__380683__i + 0]; ++G__380683__i;}
  args = new cljs.core.IndexedSeq(G__380683__a,0);
} 
return G__380682__delegate.call(this,args);};
G__380682.cljs$lang$maxFixedArity = 0;
G__380682.cljs$lang$applyTo = (function (arglist__380684){
var args = cljs.core.seq(arglist__380684);
return G__380682__delegate(args);
});
G__380682.cljs$core$IFn$_invoke$arity$variadic = G__380682__delegate;
return G__380682;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__380685__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__380685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__380686__i = 0, G__380686__a = new Array(arguments.length -  0);
while (G__380686__i < G__380686__a.length) {G__380686__a[G__380686__i] = arguments[G__380686__i + 0]; ++G__380686__i;}
  args = new cljs.core.IndexedSeq(G__380686__a,0);
} 
return G__380685__delegate.call(this,args);};
G__380685.cljs$lang$maxFixedArity = 0;
G__380685.cljs$lang$applyTo = (function (arglist__380687){
var args = cljs.core.seq(arglist__380687);
return G__380685__delegate(args);
});
G__380685.cljs$core$IFn$_invoke$arity$variadic = G__380685__delegate;
return G__380685;
})()
;

return null;
});
