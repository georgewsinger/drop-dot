goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__68700__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__68700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68701__i = 0, G__68701__a = new Array(arguments.length -  0);
while (G__68701__i < G__68701__a.length) {G__68701__a[G__68701__i] = arguments[G__68701__i + 0]; ++G__68701__i;}
  args = new cljs.core.IndexedSeq(G__68701__a,0);
} 
return G__68700__delegate.call(this,args);};
G__68700.cljs$lang$maxFixedArity = 0;
G__68700.cljs$lang$applyTo = (function (arglist__68702){
var args = cljs.core.seq(arglist__68702);
return G__68700__delegate(args);
});
G__68700.cljs$core$IFn$_invoke$arity$variadic = G__68700__delegate;
return G__68700;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__68703__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__68703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68704__i = 0, G__68704__a = new Array(arguments.length -  0);
while (G__68704__i < G__68704__a.length) {G__68704__a[G__68704__i] = arguments[G__68704__i + 0]; ++G__68704__i;}
  args = new cljs.core.IndexedSeq(G__68704__a,0);
} 
return G__68703__delegate.call(this,args);};
G__68703.cljs$lang$maxFixedArity = 0;
G__68703.cljs$lang$applyTo = (function (arglist__68705){
var args = cljs.core.seq(arglist__68705);
return G__68703__delegate(args);
});
G__68703.cljs$core$IFn$_invoke$arity$variadic = G__68703__delegate;
return G__68703;
})()
;

return null;
});
