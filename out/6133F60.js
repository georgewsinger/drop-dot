goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40482__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40483__i = 0, G__40483__a = new Array(arguments.length -  0);
while (G__40483__i < G__40483__a.length) {G__40483__a[G__40483__i] = arguments[G__40483__i + 0]; ++G__40483__i;}
  args = new cljs.core.IndexedSeq(G__40483__a,0);
} 
return G__40482__delegate.call(this,args);};
G__40482.cljs$lang$maxFixedArity = 0;
G__40482.cljs$lang$applyTo = (function (arglist__40484){
var args = cljs.core.seq(arglist__40484);
return G__40482__delegate(args);
});
G__40482.cljs$core$IFn$_invoke$arity$variadic = G__40482__delegate;
return G__40482;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40485__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40486__i = 0, G__40486__a = new Array(arguments.length -  0);
while (G__40486__i < G__40486__a.length) {G__40486__a[G__40486__i] = arguments[G__40486__i + 0]; ++G__40486__i;}
  args = new cljs.core.IndexedSeq(G__40486__a,0);
} 
return G__40485__delegate.call(this,args);};
G__40485.cljs$lang$maxFixedArity = 0;
G__40485.cljs$lang$applyTo = (function (arglist__40487){
var args = cljs.core.seq(arglist__40487);
return G__40485__delegate(args);
});
G__40485.cljs$core$IFn$_invoke$arity$variadic = G__40485__delegate;
return G__40485;
})()
;

return null;
});
