goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21374__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21375__i = 0, G__21375__a = new Array(arguments.length -  0);
while (G__21375__i < G__21375__a.length) {G__21375__a[G__21375__i] = arguments[G__21375__i + 0]; ++G__21375__i;}
  args = new cljs.core.IndexedSeq(G__21375__a,0);
} 
return G__21374__delegate.call(this,args);};
G__21374.cljs$lang$maxFixedArity = 0;
G__21374.cljs$lang$applyTo = (function (arglist__21376){
var args = cljs.core.seq(arglist__21376);
return G__21374__delegate(args);
});
G__21374.cljs$core$IFn$_invoke$arity$variadic = G__21374__delegate;
return G__21374;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21377__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21378__i = 0, G__21378__a = new Array(arguments.length -  0);
while (G__21378__i < G__21378__a.length) {G__21378__a[G__21378__i] = arguments[G__21378__i + 0]; ++G__21378__i;}
  args = new cljs.core.IndexedSeq(G__21378__a,0);
} 
return G__21377__delegate.call(this,args);};
G__21377.cljs$lang$maxFixedArity = 0;
G__21377.cljs$lang$applyTo = (function (arglist__21379){
var args = cljs.core.seq(arglist__21379);
return G__21377__delegate(args);
});
G__21377.cljs$core$IFn$_invoke$arity$variadic = G__21377__delegate;
return G__21377;
})()
;

return null;
});
