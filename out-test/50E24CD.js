goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24246__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24247__i = 0, G__24247__a = new Array(arguments.length -  0);
while (G__24247__i < G__24247__a.length) {G__24247__a[G__24247__i] = arguments[G__24247__i + 0]; ++G__24247__i;}
  args = new cljs.core.IndexedSeq(G__24247__a,0);
} 
return G__24246__delegate.call(this,args);};
G__24246.cljs$lang$maxFixedArity = 0;
G__24246.cljs$lang$applyTo = (function (arglist__24248){
var args = cljs.core.seq(arglist__24248);
return G__24246__delegate(args);
});
G__24246.cljs$core$IFn$_invoke$arity$variadic = G__24246__delegate;
return G__24246;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24249__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24250__i = 0, G__24250__a = new Array(arguments.length -  0);
while (G__24250__i < G__24250__a.length) {G__24250__a[G__24250__i] = arguments[G__24250__i + 0]; ++G__24250__i;}
  args = new cljs.core.IndexedSeq(G__24250__a,0);
} 
return G__24249__delegate.call(this,args);};
G__24249.cljs$lang$maxFixedArity = 0;
G__24249.cljs$lang$applyTo = (function (arglist__24251){
var args = cljs.core.seq(arglist__24251);
return G__24249__delegate(args);
});
G__24249.cljs$core$IFn$_invoke$arity$variadic = G__24249__delegate;
return G__24249;
})()
;

return null;
});
