goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17990__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17991__i = 0, G__17991__a = new Array(arguments.length -  0);
while (G__17991__i < G__17991__a.length) {G__17991__a[G__17991__i] = arguments[G__17991__i + 0]; ++G__17991__i;}
  args = new cljs.core.IndexedSeq(G__17991__a,0);
} 
return G__17990__delegate.call(this,args);};
G__17990.cljs$lang$maxFixedArity = 0;
G__17990.cljs$lang$applyTo = (function (arglist__17992){
var args = cljs.core.seq(arglist__17992);
return G__17990__delegate(args);
});
G__17990.cljs$core$IFn$_invoke$arity$variadic = G__17990__delegate;
return G__17990;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17993__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17994__i = 0, G__17994__a = new Array(arguments.length -  0);
while (G__17994__i < G__17994__a.length) {G__17994__a[G__17994__i] = arguments[G__17994__i + 0]; ++G__17994__i;}
  args = new cljs.core.IndexedSeq(G__17994__a,0);
} 
return G__17993__delegate.call(this,args);};
G__17993.cljs$lang$maxFixedArity = 0;
G__17993.cljs$lang$applyTo = (function (arglist__17995){
var args = cljs.core.seq(arglist__17995);
return G__17993__delegate(args);
});
G__17993.cljs$core$IFn$_invoke$arity$variadic = G__17993__delegate;
return G__17993;
})()
;

return null;
});
