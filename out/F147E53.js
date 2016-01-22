goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37440__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37441__i = 0, G__37441__a = new Array(arguments.length -  0);
while (G__37441__i < G__37441__a.length) {G__37441__a[G__37441__i] = arguments[G__37441__i + 0]; ++G__37441__i;}
  args = new cljs.core.IndexedSeq(G__37441__a,0);
} 
return G__37440__delegate.call(this,args);};
G__37440.cljs$lang$maxFixedArity = 0;
G__37440.cljs$lang$applyTo = (function (arglist__37442){
var args = cljs.core.seq(arglist__37442);
return G__37440__delegate(args);
});
G__37440.cljs$core$IFn$_invoke$arity$variadic = G__37440__delegate;
return G__37440;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37443__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37444__i = 0, G__37444__a = new Array(arguments.length -  0);
while (G__37444__i < G__37444__a.length) {G__37444__a[G__37444__i] = arguments[G__37444__i + 0]; ++G__37444__i;}
  args = new cljs.core.IndexedSeq(G__37444__a,0);
} 
return G__37443__delegate.call(this,args);};
G__37443.cljs$lang$maxFixedArity = 0;
G__37443.cljs$lang$applyTo = (function (arglist__37445){
var args = cljs.core.seq(arglist__37445);
return G__37443__delegate(args);
});
G__37443.cljs$core$IFn$_invoke$arity$variadic = G__37443__delegate;
return G__37443;
})()
;

return null;
});
