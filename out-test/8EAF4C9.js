goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29757__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29757 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29758__i = 0, G__29758__a = new Array(arguments.length -  0);
while (G__29758__i < G__29758__a.length) {G__29758__a[G__29758__i] = arguments[G__29758__i + 0]; ++G__29758__i;}
  args = new cljs.core.IndexedSeq(G__29758__a,0);
} 
return G__29757__delegate.call(this,args);};
G__29757.cljs$lang$maxFixedArity = 0;
G__29757.cljs$lang$applyTo = (function (arglist__29759){
var args = cljs.core.seq(arglist__29759);
return G__29757__delegate(args);
});
G__29757.cljs$core$IFn$_invoke$arity$variadic = G__29757__delegate;
return G__29757;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29760__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29761__i = 0, G__29761__a = new Array(arguments.length -  0);
while (G__29761__i < G__29761__a.length) {G__29761__a[G__29761__i] = arguments[G__29761__i + 0]; ++G__29761__i;}
  args = new cljs.core.IndexedSeq(G__29761__a,0);
} 
return G__29760__delegate.call(this,args);};
G__29760.cljs$lang$maxFixedArity = 0;
G__29760.cljs$lang$applyTo = (function (arglist__29762){
var args = cljs.core.seq(arglist__29762);
return G__29760__delegate(args);
});
G__29760.cljs$core$IFn$_invoke$arity$variadic = G__29760__delegate;
return G__29760;
})()
;

return null;
});
