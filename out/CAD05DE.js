goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25991__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25992__i = 0, G__25992__a = new Array(arguments.length -  0);
while (G__25992__i < G__25992__a.length) {G__25992__a[G__25992__i] = arguments[G__25992__i + 0]; ++G__25992__i;}
  args = new cljs.core.IndexedSeq(G__25992__a,0);
} 
return G__25991__delegate.call(this,args);};
G__25991.cljs$lang$maxFixedArity = 0;
G__25991.cljs$lang$applyTo = (function (arglist__25993){
var args = cljs.core.seq(arglist__25993);
return G__25991__delegate(args);
});
G__25991.cljs$core$IFn$_invoke$arity$variadic = G__25991__delegate;
return G__25991;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25994__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25995__i = 0, G__25995__a = new Array(arguments.length -  0);
while (G__25995__i < G__25995__a.length) {G__25995__a[G__25995__i] = arguments[G__25995__i + 0]; ++G__25995__i;}
  args = new cljs.core.IndexedSeq(G__25995__a,0);
} 
return G__25994__delegate.call(this,args);};
G__25994.cljs$lang$maxFixedArity = 0;
G__25994.cljs$lang$applyTo = (function (arglist__25996){
var args = cljs.core.seq(arglist__25996);
return G__25994__delegate(args);
});
G__25994.cljs$core$IFn$_invoke$arity$variadic = G__25994__delegate;
return G__25994;
})()
;

return null;
});
