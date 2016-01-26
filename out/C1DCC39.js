goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22700__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22701__i = 0, G__22701__a = new Array(arguments.length -  0);
while (G__22701__i < G__22701__a.length) {G__22701__a[G__22701__i] = arguments[G__22701__i + 0]; ++G__22701__i;}
  args = new cljs.core.IndexedSeq(G__22701__a,0);
} 
return G__22700__delegate.call(this,args);};
G__22700.cljs$lang$maxFixedArity = 0;
G__22700.cljs$lang$applyTo = (function (arglist__22702){
var args = cljs.core.seq(arglist__22702);
return G__22700__delegate(args);
});
G__22700.cljs$core$IFn$_invoke$arity$variadic = G__22700__delegate;
return G__22700;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22703__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22704__i = 0, G__22704__a = new Array(arguments.length -  0);
while (G__22704__i < G__22704__a.length) {G__22704__a[G__22704__i] = arguments[G__22704__i + 0]; ++G__22704__i;}
  args = new cljs.core.IndexedSeq(G__22704__a,0);
} 
return G__22703__delegate.call(this,args);};
G__22703.cljs$lang$maxFixedArity = 0;
G__22703.cljs$lang$applyTo = (function (arglist__22705){
var args = cljs.core.seq(arglist__22705);
return G__22703__delegate(args);
});
G__22703.cljs$core$IFn$_invoke$arity$variadic = G__22703__delegate;
return G__22703;
})()
;

return null;
});
