goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23501__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23502__i = 0, G__23502__a = new Array(arguments.length -  0);
while (G__23502__i < G__23502__a.length) {G__23502__a[G__23502__i] = arguments[G__23502__i + 0]; ++G__23502__i;}
  args = new cljs.core.IndexedSeq(G__23502__a,0);
} 
return G__23501__delegate.call(this,args);};
G__23501.cljs$lang$maxFixedArity = 0;
G__23501.cljs$lang$applyTo = (function (arglist__23503){
var args = cljs.core.seq(arglist__23503);
return G__23501__delegate(args);
});
G__23501.cljs$core$IFn$_invoke$arity$variadic = G__23501__delegate;
return G__23501;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23504__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23505__i = 0, G__23505__a = new Array(arguments.length -  0);
while (G__23505__i < G__23505__a.length) {G__23505__a[G__23505__i] = arguments[G__23505__i + 0]; ++G__23505__i;}
  args = new cljs.core.IndexedSeq(G__23505__a,0);
} 
return G__23504__delegate.call(this,args);};
G__23504.cljs$lang$maxFixedArity = 0;
G__23504.cljs$lang$applyTo = (function (arglist__23506){
var args = cljs.core.seq(arglist__23506);
return G__23504__delegate(args);
});
G__23504.cljs$core$IFn$_invoke$arity$variadic = G__23504__delegate;
return G__23504;
})()
;

return null;
});
