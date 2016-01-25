goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__212700__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__212700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__212701__i = 0, G__212701__a = new Array(arguments.length -  0);
while (G__212701__i < G__212701__a.length) {G__212701__a[G__212701__i] = arguments[G__212701__i + 0]; ++G__212701__i;}
  args = new cljs.core.IndexedSeq(G__212701__a,0);
} 
return G__212700__delegate.call(this,args);};
G__212700.cljs$lang$maxFixedArity = 0;
G__212700.cljs$lang$applyTo = (function (arglist__212702){
var args = cljs.core.seq(arglist__212702);
return G__212700__delegate(args);
});
G__212700.cljs$core$IFn$_invoke$arity$variadic = G__212700__delegate;
return G__212700;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__212703__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__212703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__212704__i = 0, G__212704__a = new Array(arguments.length -  0);
while (G__212704__i < G__212704__a.length) {G__212704__a[G__212704__i] = arguments[G__212704__i + 0]; ++G__212704__i;}
  args = new cljs.core.IndexedSeq(G__212704__a,0);
} 
return G__212703__delegate.call(this,args);};
G__212703.cljs$lang$maxFixedArity = 0;
G__212703.cljs$lang$applyTo = (function (arglist__212705){
var args = cljs.core.seq(arglist__212705);
return G__212703__delegate(args);
});
G__212703.cljs$core$IFn$_invoke$arity$variadic = G__212703__delegate;
return G__212703;
})()
;

return null;
});
