goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__366260__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__366260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__366261__i = 0, G__366261__a = new Array(arguments.length -  0);
while (G__366261__i < G__366261__a.length) {G__366261__a[G__366261__i] = arguments[G__366261__i + 0]; ++G__366261__i;}
  args = new cljs.core.IndexedSeq(G__366261__a,0);
} 
return G__366260__delegate.call(this,args);};
G__366260.cljs$lang$maxFixedArity = 0;
G__366260.cljs$lang$applyTo = (function (arglist__366262){
var args = cljs.core.seq(arglist__366262);
return G__366260__delegate(args);
});
G__366260.cljs$core$IFn$_invoke$arity$variadic = G__366260__delegate;
return G__366260;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__366263__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__366263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__366264__i = 0, G__366264__a = new Array(arguments.length -  0);
while (G__366264__i < G__366264__a.length) {G__366264__a[G__366264__i] = arguments[G__366264__i + 0]; ++G__366264__i;}
  args = new cljs.core.IndexedSeq(G__366264__a,0);
} 
return G__366263__delegate.call(this,args);};
G__366263.cljs$lang$maxFixedArity = 0;
G__366263.cljs$lang$applyTo = (function (arglist__366265){
var args = cljs.core.seq(arglist__366265);
return G__366263__delegate(args);
});
G__366263.cljs$core$IFn$_invoke$arity$variadic = G__366263__delegate;
return G__366263;
})()
;

return null;
});
