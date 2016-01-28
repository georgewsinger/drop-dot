goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__380671__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__380671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__380672__i = 0, G__380672__a = new Array(arguments.length -  0);
while (G__380672__i < G__380672__a.length) {G__380672__a[G__380672__i] = arguments[G__380672__i + 0]; ++G__380672__i;}
  args = new cljs.core.IndexedSeq(G__380672__a,0);
} 
return G__380671__delegate.call(this,args);};
G__380671.cljs$lang$maxFixedArity = 0;
G__380671.cljs$lang$applyTo = (function (arglist__380673){
var args = cljs.core.seq(arglist__380673);
return G__380671__delegate(args);
});
G__380671.cljs$core$IFn$_invoke$arity$variadic = G__380671__delegate;
return G__380671;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__380674__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__380674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__380675__i = 0, G__380675__a = new Array(arguments.length -  0);
while (G__380675__i < G__380675__a.length) {G__380675__a[G__380675__i] = arguments[G__380675__i + 0]; ++G__380675__i;}
  args = new cljs.core.IndexedSeq(G__380675__a,0);
} 
return G__380674__delegate.call(this,args);};
G__380674.cljs$lang$maxFixedArity = 0;
G__380674.cljs$lang$applyTo = (function (arglist__380676){
var args = cljs.core.seq(arglist__380676);
return G__380674__delegate(args);
});
G__380674.cljs$core$IFn$_invoke$arity$variadic = G__380674__delegate;
return G__380674;
})()
;

return null;
});
