goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27628__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27629__i = 0, G__27629__a = new Array(arguments.length -  0);
while (G__27629__i < G__27629__a.length) {G__27629__a[G__27629__i] = arguments[G__27629__i + 0]; ++G__27629__i;}
  args = new cljs.core.IndexedSeq(G__27629__a,0);
} 
return G__27628__delegate.call(this,args);};
G__27628.cljs$lang$maxFixedArity = 0;
G__27628.cljs$lang$applyTo = (function (arglist__27630){
var args = cljs.core.seq(arglist__27630);
return G__27628__delegate(args);
});
G__27628.cljs$core$IFn$_invoke$arity$variadic = G__27628__delegate;
return G__27628;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27631__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27631 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27632__i = 0, G__27632__a = new Array(arguments.length -  0);
while (G__27632__i < G__27632__a.length) {G__27632__a[G__27632__i] = arguments[G__27632__i + 0]; ++G__27632__i;}
  args = new cljs.core.IndexedSeq(G__27632__a,0);
} 
return G__27631__delegate.call(this,args);};
G__27631.cljs$lang$maxFixedArity = 0;
G__27631.cljs$lang$applyTo = (function (arglist__27633){
var args = cljs.core.seq(arglist__27633);
return G__27631__delegate(args);
});
G__27631.cljs$core$IFn$_invoke$arity$variadic = G__27631__delegate;
return G__27631;
})()
;

return null;
});
