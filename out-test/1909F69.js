goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__73992__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__73992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73993__i = 0, G__73993__a = new Array(arguments.length -  0);
while (G__73993__i < G__73993__a.length) {G__73993__a[G__73993__i] = arguments[G__73993__i + 0]; ++G__73993__i;}
  args = new cljs.core.IndexedSeq(G__73993__a,0);
} 
return G__73992__delegate.call(this,args);};
G__73992.cljs$lang$maxFixedArity = 0;
G__73992.cljs$lang$applyTo = (function (arglist__73994){
var args = cljs.core.seq(arglist__73994);
return G__73992__delegate(args);
});
G__73992.cljs$core$IFn$_invoke$arity$variadic = G__73992__delegate;
return G__73992;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__73995__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__73995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73996__i = 0, G__73996__a = new Array(arguments.length -  0);
while (G__73996__i < G__73996__a.length) {G__73996__a[G__73996__i] = arguments[G__73996__i + 0]; ++G__73996__i;}
  args = new cljs.core.IndexedSeq(G__73996__a,0);
} 
return G__73995__delegate.call(this,args);};
G__73995.cljs$lang$maxFixedArity = 0;
G__73995.cljs$lang$applyTo = (function (arglist__73997){
var args = cljs.core.seq(arglist__73997);
return G__73995__delegate(args);
});
G__73995.cljs$core$IFn$_invoke$arity$variadic = G__73995__delegate;
return G__73995;
})()
;

return null;
});
