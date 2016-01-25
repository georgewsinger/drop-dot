goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__188260__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__188260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__188261__i = 0, G__188261__a = new Array(arguments.length -  0);
while (G__188261__i < G__188261__a.length) {G__188261__a[G__188261__i] = arguments[G__188261__i + 0]; ++G__188261__i;}
  args = new cljs.core.IndexedSeq(G__188261__a,0);
} 
return G__188260__delegate.call(this,args);};
G__188260.cljs$lang$maxFixedArity = 0;
G__188260.cljs$lang$applyTo = (function (arglist__188262){
var args = cljs.core.seq(arglist__188262);
return G__188260__delegate(args);
});
G__188260.cljs$core$IFn$_invoke$arity$variadic = G__188260__delegate;
return G__188260;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__188263__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__188263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__188264__i = 0, G__188264__a = new Array(arguments.length -  0);
while (G__188264__i < G__188264__a.length) {G__188264__a[G__188264__i] = arguments[G__188264__i + 0]; ++G__188264__i;}
  args = new cljs.core.IndexedSeq(G__188264__a,0);
} 
return G__188263__delegate.call(this,args);};
G__188263.cljs$lang$maxFixedArity = 0;
G__188263.cljs$lang$applyTo = (function (arglist__188265){
var args = cljs.core.seq(arglist__188265);
return G__188263__delegate(args);
});
G__188263.cljs$core$IFn$_invoke$arity$variadic = G__188263__delegate;
return G__188263;
})()
;

return null;
});
