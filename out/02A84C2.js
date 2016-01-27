goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__303525__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__303525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__303526__i = 0, G__303526__a = new Array(arguments.length -  0);
while (G__303526__i < G__303526__a.length) {G__303526__a[G__303526__i] = arguments[G__303526__i + 0]; ++G__303526__i;}
  args = new cljs.core.IndexedSeq(G__303526__a,0);
} 
return G__303525__delegate.call(this,args);};
G__303525.cljs$lang$maxFixedArity = 0;
G__303525.cljs$lang$applyTo = (function (arglist__303527){
var args = cljs.core.seq(arglist__303527);
return G__303525__delegate(args);
});
G__303525.cljs$core$IFn$_invoke$arity$variadic = G__303525__delegate;
return G__303525;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__303528__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__303528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__303529__i = 0, G__303529__a = new Array(arguments.length -  0);
while (G__303529__i < G__303529__a.length) {G__303529__a[G__303529__i] = arguments[G__303529__i + 0]; ++G__303529__i;}
  args = new cljs.core.IndexedSeq(G__303529__a,0);
} 
return G__303528__delegate.call(this,args);};
G__303528.cljs$lang$maxFixedArity = 0;
G__303528.cljs$lang$applyTo = (function (arglist__303530){
var args = cljs.core.seq(arglist__303530);
return G__303528__delegate(args);
});
G__303528.cljs$core$IFn$_invoke$arity$variadic = G__303528__delegate;
return G__303528;
})()
;

return null;
});
