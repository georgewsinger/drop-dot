goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25554__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25555__i = 0, G__25555__a = new Array(arguments.length -  0);
while (G__25555__i < G__25555__a.length) {G__25555__a[G__25555__i] = arguments[G__25555__i + 0]; ++G__25555__i;}
  args = new cljs.core.IndexedSeq(G__25555__a,0);
} 
return G__25554__delegate.call(this,args);};
G__25554.cljs$lang$maxFixedArity = 0;
G__25554.cljs$lang$applyTo = (function (arglist__25556){
var args = cljs.core.seq(arglist__25556);
return G__25554__delegate(args);
});
G__25554.cljs$core$IFn$_invoke$arity$variadic = G__25554__delegate;
return G__25554;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25557__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25558__i = 0, G__25558__a = new Array(arguments.length -  0);
while (G__25558__i < G__25558__a.length) {G__25558__a[G__25558__i] = arguments[G__25558__i + 0]; ++G__25558__i;}
  args = new cljs.core.IndexedSeq(G__25558__a,0);
} 
return G__25557__delegate.call(this,args);};
G__25557.cljs$lang$maxFixedArity = 0;
G__25557.cljs$lang$applyTo = (function (arglist__25559){
var args = cljs.core.seq(arglist__25559);
return G__25557__delegate(args);
});
G__25557.cljs$core$IFn$_invoke$arity$variadic = G__25557__delegate;
return G__25557;
})()
;

return null;
});
