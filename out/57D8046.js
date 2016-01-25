goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__219686__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__219686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__219687__i = 0, G__219687__a = new Array(arguments.length -  0);
while (G__219687__i < G__219687__a.length) {G__219687__a[G__219687__i] = arguments[G__219687__i + 0]; ++G__219687__i;}
  args = new cljs.core.IndexedSeq(G__219687__a,0);
} 
return G__219686__delegate.call(this,args);};
G__219686.cljs$lang$maxFixedArity = 0;
G__219686.cljs$lang$applyTo = (function (arglist__219688){
var args = cljs.core.seq(arglist__219688);
return G__219686__delegate(args);
});
G__219686.cljs$core$IFn$_invoke$arity$variadic = G__219686__delegate;
return G__219686;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__219689__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__219689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__219690__i = 0, G__219690__a = new Array(arguments.length -  0);
while (G__219690__i < G__219690__a.length) {G__219690__a[G__219690__i] = arguments[G__219690__i + 0]; ++G__219690__i;}
  args = new cljs.core.IndexedSeq(G__219690__a,0);
} 
return G__219689__delegate.call(this,args);};
G__219689.cljs$lang$maxFixedArity = 0;
G__219689.cljs$lang$applyTo = (function (arglist__219691){
var args = cljs.core.seq(arglist__219691);
return G__219689__delegate(args);
});
G__219689.cljs$core$IFn$_invoke$arity$variadic = G__219689__delegate;
return G__219689;
})()
;

return null;
});
