goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9576__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9577__i = 0, G__9577__a = new Array(arguments.length -  0);
while (G__9577__i < G__9577__a.length) {G__9577__a[G__9577__i] = arguments[G__9577__i + 0]; ++G__9577__i;}
  args = new cljs.core.IndexedSeq(G__9577__a,0);
} 
return G__9576__delegate.call(this,args);};
G__9576.cljs$lang$maxFixedArity = 0;
G__9576.cljs$lang$applyTo = (function (arglist__9578){
var args = cljs.core.seq(arglist__9578);
return G__9576__delegate(args);
});
G__9576.cljs$core$IFn$_invoke$arity$variadic = G__9576__delegate;
return G__9576;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9579__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9580__i = 0, G__9580__a = new Array(arguments.length -  0);
while (G__9580__i < G__9580__a.length) {G__9580__a[G__9580__i] = arguments[G__9580__i + 0]; ++G__9580__i;}
  args = new cljs.core.IndexedSeq(G__9580__a,0);
} 
return G__9579__delegate.call(this,args);};
G__9579.cljs$lang$maxFixedArity = 0;
G__9579.cljs$lang$applyTo = (function (arglist__9581){
var args = cljs.core.seq(arglist__9581);
return G__9579__delegate(args);
});
G__9579.cljs$core$IFn$_invoke$arity$variadic = G__9579__delegate;
return G__9579;
})()
;

return null;
});
