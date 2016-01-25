goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53260__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53261__i = 0, G__53261__a = new Array(arguments.length -  0);
while (G__53261__i < G__53261__a.length) {G__53261__a[G__53261__i] = arguments[G__53261__i + 0]; ++G__53261__i;}
  args = new cljs.core.IndexedSeq(G__53261__a,0);
} 
return G__53260__delegate.call(this,args);};
G__53260.cljs$lang$maxFixedArity = 0;
G__53260.cljs$lang$applyTo = (function (arglist__53262){
var args = cljs.core.seq(arglist__53262);
return G__53260__delegate(args);
});
G__53260.cljs$core$IFn$_invoke$arity$variadic = G__53260__delegate;
return G__53260;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53263__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53264__i = 0, G__53264__a = new Array(arguments.length -  0);
while (G__53264__i < G__53264__a.length) {G__53264__a[G__53264__i] = arguments[G__53264__i + 0]; ++G__53264__i;}
  args = new cljs.core.IndexedSeq(G__53264__a,0);
} 
return G__53263__delegate.call(this,args);};
G__53263.cljs$lang$maxFixedArity = 0;
G__53263.cljs$lang$applyTo = (function (arglist__53265){
var args = cljs.core.seq(arglist__53265);
return G__53263__delegate(args);
});
G__53263.cljs$core$IFn$_invoke$arity$variadic = G__53263__delegate;
return G__53263;
})()
;

return null;
});
