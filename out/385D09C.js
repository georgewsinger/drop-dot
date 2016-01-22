goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44246__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44247__i = 0, G__44247__a = new Array(arguments.length -  0);
while (G__44247__i < G__44247__a.length) {G__44247__a[G__44247__i] = arguments[G__44247__i + 0]; ++G__44247__i;}
  args = new cljs.core.IndexedSeq(G__44247__a,0);
} 
return G__44246__delegate.call(this,args);};
G__44246.cljs$lang$maxFixedArity = 0;
G__44246.cljs$lang$applyTo = (function (arglist__44248){
var args = cljs.core.seq(arglist__44248);
return G__44246__delegate(args);
});
G__44246.cljs$core$IFn$_invoke$arity$variadic = G__44246__delegate;
return G__44246;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44249__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44250__i = 0, G__44250__a = new Array(arguments.length -  0);
while (G__44250__i < G__44250__a.length) {G__44250__a[G__44250__i] = arguments[G__44250__i + 0]; ++G__44250__i;}
  args = new cljs.core.IndexedSeq(G__44250__a,0);
} 
return G__44249__delegate.call(this,args);};
G__44249.cljs$lang$maxFixedArity = 0;
G__44249.cljs$lang$applyTo = (function (arglist__44251){
var args = cljs.core.seq(arglist__44251);
return G__44249__delegate(args);
});
G__44249.cljs$core$IFn$_invoke$arity$variadic = G__44249__delegate;
return G__44249;
})()
;

return null;
});
