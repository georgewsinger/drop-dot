goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42501__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42502__i = 0, G__42502__a = new Array(arguments.length -  0);
while (G__42502__i < G__42502__a.length) {G__42502__a[G__42502__i] = arguments[G__42502__i + 0]; ++G__42502__i;}
  args = new cljs.core.IndexedSeq(G__42502__a,0);
} 
return G__42501__delegate.call(this,args);};
G__42501.cljs$lang$maxFixedArity = 0;
G__42501.cljs$lang$applyTo = (function (arglist__42503){
var args = cljs.core.seq(arglist__42503);
return G__42501__delegate(args);
});
G__42501.cljs$core$IFn$_invoke$arity$variadic = G__42501__delegate;
return G__42501;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42504__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42505__i = 0, G__42505__a = new Array(arguments.length -  0);
while (G__42505__i < G__42505__a.length) {G__42505__a[G__42505__i] = arguments[G__42505__i + 0]; ++G__42505__i;}
  args = new cljs.core.IndexedSeq(G__42505__a,0);
} 
return G__42504__delegate.call(this,args);};
G__42504.cljs$lang$maxFixedArity = 0;
G__42504.cljs$lang$applyTo = (function (arglist__42506){
var args = cljs.core.seq(arglist__42506);
return G__42504__delegate(args);
});
G__42504.cljs$core$IFn$_invoke$arity$variadic = G__42504__delegate;
return G__42504;
})()
;

return null;
});
