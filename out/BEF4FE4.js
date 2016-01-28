goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__386700__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__386700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__386701__i = 0, G__386701__a = new Array(arguments.length -  0);
while (G__386701__i < G__386701__a.length) {G__386701__a[G__386701__i] = arguments[G__386701__i + 0]; ++G__386701__i;}
  args = new cljs.core.IndexedSeq(G__386701__a,0);
} 
return G__386700__delegate.call(this,args);};
G__386700.cljs$lang$maxFixedArity = 0;
G__386700.cljs$lang$applyTo = (function (arglist__386702){
var args = cljs.core.seq(arglist__386702);
return G__386700__delegate(args);
});
G__386700.cljs$core$IFn$_invoke$arity$variadic = G__386700__delegate;
return G__386700;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__386703__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__386703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__386704__i = 0, G__386704__a = new Array(arguments.length -  0);
while (G__386704__i < G__386704__a.length) {G__386704__a[G__386704__i] = arguments[G__386704__i + 0]; ++G__386704__i;}
  args = new cljs.core.IndexedSeq(G__386704__a,0);
} 
return G__386703__delegate.call(this,args);};
G__386703.cljs$lang$maxFixedArity = 0;
G__386703.cljs$lang$applyTo = (function (arglist__386705){
var args = cljs.core.seq(arglist__386705);
return G__386703__delegate(args);
});
G__386703.cljs$core$IFn$_invoke$arity$variadic = G__386703__delegate;
return G__386703;
})()
;

return null;
});
