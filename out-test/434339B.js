goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44576__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44577__i = 0, G__44577__a = new Array(arguments.length -  0);
while (G__44577__i < G__44577__a.length) {G__44577__a[G__44577__i] = arguments[G__44577__i + 0]; ++G__44577__i;}
  args = new cljs.core.IndexedSeq(G__44577__a,0);
} 
return G__44576__delegate.call(this,args);};
G__44576.cljs$lang$maxFixedArity = 0;
G__44576.cljs$lang$applyTo = (function (arglist__44578){
var args = cljs.core.seq(arglist__44578);
return G__44576__delegate(args);
});
G__44576.cljs$core$IFn$_invoke$arity$variadic = G__44576__delegate;
return G__44576;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44579__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44580__i = 0, G__44580__a = new Array(arguments.length -  0);
while (G__44580__i < G__44580__a.length) {G__44580__a[G__44580__i] = arguments[G__44580__i + 0]; ++G__44580__i;}
  args = new cljs.core.IndexedSeq(G__44580__a,0);
} 
return G__44579__delegate.call(this,args);};
G__44579.cljs$lang$maxFixedArity = 0;
G__44579.cljs$lang$applyTo = (function (arglist__44581){
var args = cljs.core.seq(arglist__44581);
return G__44579__delegate(args);
});
G__44579.cljs$core$IFn$_invoke$arity$variadic = G__44579__delegate;
return G__44579;
})()
;

return null;
});
