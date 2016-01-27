goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__154715__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__154715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154716__i = 0, G__154716__a = new Array(arguments.length -  0);
while (G__154716__i < G__154716__a.length) {G__154716__a[G__154716__i] = arguments[G__154716__i + 0]; ++G__154716__i;}
  args = new cljs.core.IndexedSeq(G__154716__a,0);
} 
return G__154715__delegate.call(this,args);};
G__154715.cljs$lang$maxFixedArity = 0;
G__154715.cljs$lang$applyTo = (function (arglist__154717){
var args = cljs.core.seq(arglist__154717);
return G__154715__delegate(args);
});
G__154715.cljs$core$IFn$_invoke$arity$variadic = G__154715__delegate;
return G__154715;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__154718__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__154718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154719__i = 0, G__154719__a = new Array(arguments.length -  0);
while (G__154719__i < G__154719__a.length) {G__154719__a[G__154719__i] = arguments[G__154719__i + 0]; ++G__154719__i;}
  args = new cljs.core.IndexedSeq(G__154719__a,0);
} 
return G__154718__delegate.call(this,args);};
G__154718.cljs$lang$maxFixedArity = 0;
G__154718.cljs$lang$applyTo = (function (arglist__154720){
var args = cljs.core.seq(arglist__154720);
return G__154718__delegate(args);
});
G__154718.cljs$core$IFn$_invoke$arity$variadic = G__154718__delegate;
return G__154718;
})()
;

return null;
});
