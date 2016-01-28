goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__90463__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__90463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90464__i = 0, G__90464__a = new Array(arguments.length -  0);
while (G__90464__i < G__90464__a.length) {G__90464__a[G__90464__i] = arguments[G__90464__i + 0]; ++G__90464__i;}
  args = new cljs.core.IndexedSeq(G__90464__a,0);
} 
return G__90463__delegate.call(this,args);};
G__90463.cljs$lang$maxFixedArity = 0;
G__90463.cljs$lang$applyTo = (function (arglist__90465){
var args = cljs.core.seq(arglist__90465);
return G__90463__delegate(args);
});
G__90463.cljs$core$IFn$_invoke$arity$variadic = G__90463__delegate;
return G__90463;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__90466__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__90466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90467__i = 0, G__90467__a = new Array(arguments.length -  0);
while (G__90467__i < G__90467__a.length) {G__90467__a[G__90467__i] = arguments[G__90467__i + 0]; ++G__90467__i;}
  args = new cljs.core.IndexedSeq(G__90467__a,0);
} 
return G__90466__delegate.call(this,args);};
G__90466.cljs$lang$maxFixedArity = 0;
G__90466.cljs$lang$applyTo = (function (arglist__90468){
var args = cljs.core.seq(arglist__90468);
return G__90466__delegate(args);
});
G__90466.cljs$core$IFn$_invoke$arity$variadic = G__90466__delegate;
return G__90466;
})()
;

return null;
});
