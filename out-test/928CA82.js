goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16701__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16702__i = 0, G__16702__a = new Array(arguments.length -  0);
while (G__16702__i < G__16702__a.length) {G__16702__a[G__16702__i] = arguments[G__16702__i + 0]; ++G__16702__i;}
  args = new cljs.core.IndexedSeq(G__16702__a,0);
} 
return G__16701__delegate.call(this,args);};
G__16701.cljs$lang$maxFixedArity = 0;
G__16701.cljs$lang$applyTo = (function (arglist__16703){
var args = cljs.core.seq(arglist__16703);
return G__16701__delegate(args);
});
G__16701.cljs$core$IFn$_invoke$arity$variadic = G__16701__delegate;
return G__16701;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16704__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16705__i = 0, G__16705__a = new Array(arguments.length -  0);
while (G__16705__i < G__16705__a.length) {G__16705__a[G__16705__i] = arguments[G__16705__i + 0]; ++G__16705__i;}
  args = new cljs.core.IndexedSeq(G__16705__a,0);
} 
return G__16704__delegate.call(this,args);};
G__16704.cljs$lang$maxFixedArity = 0;
G__16704.cljs$lang$applyTo = (function (arglist__16706){
var args = cljs.core.seq(arglist__16706);
return G__16704__delegate(args);
});
G__16704.cljs$core$IFn$_invoke$arity$variadic = G__16704__delegate;
return G__16704;
})()
;

return null;
});
