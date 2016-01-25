goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__195246__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__195246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__195247__i = 0, G__195247__a = new Array(arguments.length -  0);
while (G__195247__i < G__195247__a.length) {G__195247__a[G__195247__i] = arguments[G__195247__i + 0]; ++G__195247__i;}
  args = new cljs.core.IndexedSeq(G__195247__a,0);
} 
return G__195246__delegate.call(this,args);};
G__195246.cljs$lang$maxFixedArity = 0;
G__195246.cljs$lang$applyTo = (function (arglist__195248){
var args = cljs.core.seq(arglist__195248);
return G__195246__delegate(args);
});
G__195246.cljs$core$IFn$_invoke$arity$variadic = G__195246__delegate;
return G__195246;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__195249__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__195249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__195250__i = 0, G__195250__a = new Array(arguments.length -  0);
while (G__195250__i < G__195250__a.length) {G__195250__a[G__195250__i] = arguments[G__195250__i + 0]; ++G__195250__i;}
  args = new cljs.core.IndexedSeq(G__195250__a,0);
} 
return G__195249__delegate.call(this,args);};
G__195249.cljs$lang$maxFixedArity = 0;
G__195249.cljs$lang$applyTo = (function (arglist__195251){
var args = cljs.core.seq(arglist__195251);
return G__195249__delegate(args);
});
G__195249.cljs$core$IFn$_invoke$arity$variadic = G__195249__delegate;
return G__195249;
})()
;

return null;
});
