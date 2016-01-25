goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42421__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42422__i = 0, G__42422__a = new Array(arguments.length -  0);
while (G__42422__i < G__42422__a.length) {G__42422__a[G__42422__i] = arguments[G__42422__i + 0]; ++G__42422__i;}
  args = new cljs.core.IndexedSeq(G__42422__a,0);
} 
return G__42421__delegate.call(this,args);};
G__42421.cljs$lang$maxFixedArity = 0;
G__42421.cljs$lang$applyTo = (function (arglist__42423){
var args = cljs.core.seq(arglist__42423);
return G__42421__delegate(args);
});
G__42421.cljs$core$IFn$_invoke$arity$variadic = G__42421__delegate;
return G__42421;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42424__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42425__i = 0, G__42425__a = new Array(arguments.length -  0);
while (G__42425__i < G__42425__a.length) {G__42425__a[G__42425__i] = arguments[G__42425__i + 0]; ++G__42425__i;}
  args = new cljs.core.IndexedSeq(G__42425__a,0);
} 
return G__42424__delegate.call(this,args);};
G__42424.cljs$lang$maxFixedArity = 0;
G__42424.cljs$lang$applyTo = (function (arglist__42426){
var args = cljs.core.seq(arglist__42426);
return G__42424__delegate(args);
});
G__42424.cljs$core$IFn$_invoke$arity$variadic = G__42424__delegate;
return G__42424;
})()
;

return null;
});
