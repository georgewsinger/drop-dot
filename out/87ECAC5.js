goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__304399__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__304399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__304400__i = 0, G__304400__a = new Array(arguments.length -  0);
while (G__304400__i < G__304400__a.length) {G__304400__a[G__304400__i] = arguments[G__304400__i + 0]; ++G__304400__i;}
  args = new cljs.core.IndexedSeq(G__304400__a,0);
} 
return G__304399__delegate.call(this,args);};
G__304399.cljs$lang$maxFixedArity = 0;
G__304399.cljs$lang$applyTo = (function (arglist__304401){
var args = cljs.core.seq(arglist__304401);
return G__304399__delegate(args);
});
G__304399.cljs$core$IFn$_invoke$arity$variadic = G__304399__delegate;
return G__304399;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__304402__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__304402 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__304403__i = 0, G__304403__a = new Array(arguments.length -  0);
while (G__304403__i < G__304403__a.length) {G__304403__a[G__304403__i] = arguments[G__304403__i + 0]; ++G__304403__i;}
  args = new cljs.core.IndexedSeq(G__304403__a,0);
} 
return G__304402__delegate.call(this,args);};
G__304402.cljs$lang$maxFixedArity = 0;
G__304402.cljs$lang$applyTo = (function (arglist__304404){
var args = cljs.core.seq(arglist__304404);
return G__304402__delegate(args);
});
G__304402.cljs$core$IFn$_invoke$arity$variadic = G__304402__delegate;
return G__304402;
})()
;

return null;
});
