goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__283514__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__283514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__283515__i = 0, G__283515__a = new Array(arguments.length -  0);
while (G__283515__i < G__283515__a.length) {G__283515__a[G__283515__i] = arguments[G__283515__i + 0]; ++G__283515__i;}
  args = new cljs.core.IndexedSeq(G__283515__a,0);
} 
return G__283514__delegate.call(this,args);};
G__283514.cljs$lang$maxFixedArity = 0;
G__283514.cljs$lang$applyTo = (function (arglist__283516){
var args = cljs.core.seq(arglist__283516);
return G__283514__delegate(args);
});
G__283514.cljs$core$IFn$_invoke$arity$variadic = G__283514__delegate;
return G__283514;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__283517__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__283517 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__283518__i = 0, G__283518__a = new Array(arguments.length -  0);
while (G__283518__i < G__283518__a.length) {G__283518__a[G__283518__i] = arguments[G__283518__i + 0]; ++G__283518__i;}
  args = new cljs.core.IndexedSeq(G__283518__a,0);
} 
return G__283517__delegate.call(this,args);};
G__283517.cljs$lang$maxFixedArity = 0;
G__283517.cljs$lang$applyTo = (function (arglist__283519){
var args = cljs.core.seq(arglist__283519);
return G__283517__delegate(args);
});
G__283517.cljs$core$IFn$_invoke$arity$variadic = G__283517__delegate;
return G__283517;
})()
;

return null;
});
