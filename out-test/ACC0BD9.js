goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24720__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24720 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24721__i = 0, G__24721__a = new Array(arguments.length -  0);
while (G__24721__i < G__24721__a.length) {G__24721__a[G__24721__i] = arguments[G__24721__i + 0]; ++G__24721__i;}
  args = new cljs.core.IndexedSeq(G__24721__a,0);
} 
return G__24720__delegate.call(this,args);};
G__24720.cljs$lang$maxFixedArity = 0;
G__24720.cljs$lang$applyTo = (function (arglist__24722){
var args = cljs.core.seq(arglist__24722);
return G__24720__delegate(args);
});
G__24720.cljs$core$IFn$_invoke$arity$variadic = G__24720__delegate;
return G__24720;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24723__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24724__i = 0, G__24724__a = new Array(arguments.length -  0);
while (G__24724__i < G__24724__a.length) {G__24724__a[G__24724__i] = arguments[G__24724__i + 0]; ++G__24724__i;}
  args = new cljs.core.IndexedSeq(G__24724__a,0);
} 
return G__24723__delegate.call(this,args);};
G__24723.cljs$lang$maxFixedArity = 0;
G__24723.cljs$lang$applyTo = (function (arglist__24725){
var args = cljs.core.seq(arglist__24725);
return G__24723__delegate(args);
});
G__24723.cljs$core$IFn$_invoke$arity$variadic = G__24723__delegate;
return G__24723;
})()
;

return null;
});
