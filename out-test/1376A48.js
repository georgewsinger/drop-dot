goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10467__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10467 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10468__i = 0, G__10468__a = new Array(arguments.length -  0);
while (G__10468__i < G__10468__a.length) {G__10468__a[G__10468__i] = arguments[G__10468__i + 0]; ++G__10468__i;}
  args = new cljs.core.IndexedSeq(G__10468__a,0);
} 
return G__10467__delegate.call(this,args);};
G__10467.cljs$lang$maxFixedArity = 0;
G__10467.cljs$lang$applyTo = (function (arglist__10469){
var args = cljs.core.seq(arglist__10469);
return G__10467__delegate(args);
});
G__10467.cljs$core$IFn$_invoke$arity$variadic = G__10467__delegate;
return G__10467;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10470__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10471__i = 0, G__10471__a = new Array(arguments.length -  0);
while (G__10471__i < G__10471__a.length) {G__10471__a[G__10471__i] = arguments[G__10471__i + 0]; ++G__10471__i;}
  args = new cljs.core.IndexedSeq(G__10471__a,0);
} 
return G__10470__delegate.call(this,args);};
G__10470.cljs$lang$maxFixedArity = 0;
G__10470.cljs$lang$applyTo = (function (arglist__10472){
var args = cljs.core.seq(arglist__10472);
return G__10470__delegate(args);
});
G__10470.cljs$core$IFn$_invoke$arity$variadic = G__10470__delegate;
return G__10470;
})()
;

return null;
});
