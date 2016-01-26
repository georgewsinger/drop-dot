goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__294539__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__294539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__294540__i = 0, G__294540__a = new Array(arguments.length -  0);
while (G__294540__i < G__294540__a.length) {G__294540__a[G__294540__i] = arguments[G__294540__i + 0]; ++G__294540__i;}
  args = new cljs.core.IndexedSeq(G__294540__a,0);
} 
return G__294539__delegate.call(this,args);};
G__294539.cljs$lang$maxFixedArity = 0;
G__294539.cljs$lang$applyTo = (function (arglist__294541){
var args = cljs.core.seq(arglist__294541);
return G__294539__delegate(args);
});
G__294539.cljs$core$IFn$_invoke$arity$variadic = G__294539__delegate;
return G__294539;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__294542__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__294542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__294543__i = 0, G__294543__a = new Array(arguments.length -  0);
while (G__294543__i < G__294543__a.length) {G__294543__a[G__294543__i] = arguments[G__294543__i + 0]; ++G__294543__i;}
  args = new cljs.core.IndexedSeq(G__294543__a,0);
} 
return G__294542__delegate.call(this,args);};
G__294542.cljs$lang$maxFixedArity = 0;
G__294542.cljs$lang$applyTo = (function (arglist__294544){
var args = cljs.core.seq(arglist__294544);
return G__294542__delegate(args);
});
G__294542.cljs$core$IFn$_invoke$arity$variadic = G__294542__delegate;
return G__294542;
})()
;

return null;
});
