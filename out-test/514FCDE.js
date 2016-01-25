goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56760__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56761__i = 0, G__56761__a = new Array(arguments.length -  0);
while (G__56761__i < G__56761__a.length) {G__56761__a[G__56761__i] = arguments[G__56761__i + 0]; ++G__56761__i;}
  args = new cljs.core.IndexedSeq(G__56761__a,0);
} 
return G__56760__delegate.call(this,args);};
G__56760.cljs$lang$maxFixedArity = 0;
G__56760.cljs$lang$applyTo = (function (arglist__56762){
var args = cljs.core.seq(arglist__56762);
return G__56760__delegate(args);
});
G__56760.cljs$core$IFn$_invoke$arity$variadic = G__56760__delegate;
return G__56760;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56763__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56763 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56764__i = 0, G__56764__a = new Array(arguments.length -  0);
while (G__56764__i < G__56764__a.length) {G__56764__a[G__56764__i] = arguments[G__56764__i + 0]; ++G__56764__i;}
  args = new cljs.core.IndexedSeq(G__56764__a,0);
} 
return G__56763__delegate.call(this,args);};
G__56763.cljs$lang$maxFixedArity = 0;
G__56763.cljs$lang$applyTo = (function (arglist__56765){
var args = cljs.core.seq(arglist__56765);
return G__56763__delegate(args);
});
G__56763.cljs$core$IFn$_invoke$arity$variadic = G__56763__delegate;
return G__56763;
})()
;

return null;
});
