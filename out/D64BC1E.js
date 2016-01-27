goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__351467__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__351467 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__351468__i = 0, G__351468__a = new Array(arguments.length -  0);
while (G__351468__i < G__351468__a.length) {G__351468__a[G__351468__i] = arguments[G__351468__i + 0]; ++G__351468__i;}
  args = new cljs.core.IndexedSeq(G__351468__a,0);
} 
return G__351467__delegate.call(this,args);};
G__351467.cljs$lang$maxFixedArity = 0;
G__351467.cljs$lang$applyTo = (function (arglist__351469){
var args = cljs.core.seq(arglist__351469);
return G__351467__delegate(args);
});
G__351467.cljs$core$IFn$_invoke$arity$variadic = G__351467__delegate;
return G__351467;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__351470__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__351470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__351471__i = 0, G__351471__a = new Array(arguments.length -  0);
while (G__351471__i < G__351471__a.length) {G__351471__a[G__351471__i] = arguments[G__351471__i + 0]; ++G__351471__i;}
  args = new cljs.core.IndexedSeq(G__351471__a,0);
} 
return G__351470__delegate.call(this,args);};
G__351470.cljs$lang$maxFixedArity = 0;
G__351470.cljs$lang$applyTo = (function (arglist__351472){
var args = cljs.core.seq(arglist__351472);
return G__351470__delegate(args);
});
G__351470.cljs$core$IFn$_invoke$arity$variadic = G__351470__delegate;
return G__351470;
})()
;

return null;
});
