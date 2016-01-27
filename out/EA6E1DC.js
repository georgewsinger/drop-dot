goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__349363__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__349363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__349364__i = 0, G__349364__a = new Array(arguments.length -  0);
while (G__349364__i < G__349364__a.length) {G__349364__a[G__349364__i] = arguments[G__349364__i + 0]; ++G__349364__i;}
  args = new cljs.core.IndexedSeq(G__349364__a,0);
} 
return G__349363__delegate.call(this,args);};
G__349363.cljs$lang$maxFixedArity = 0;
G__349363.cljs$lang$applyTo = (function (arglist__349365){
var args = cljs.core.seq(arglist__349365);
return G__349363__delegate(args);
});
G__349363.cljs$core$IFn$_invoke$arity$variadic = G__349363__delegate;
return G__349363;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__349366__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__349366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__349367__i = 0, G__349367__a = new Array(arguments.length -  0);
while (G__349367__i < G__349367__a.length) {G__349367__a[G__349367__i] = arguments[G__349367__i + 0]; ++G__349367__i;}
  args = new cljs.core.IndexedSeq(G__349367__a,0);
} 
return G__349366__delegate.call(this,args);};
G__349366.cljs$lang$maxFixedArity = 0;
G__349366.cljs$lang$applyTo = (function (arglist__349368){
var args = cljs.core.seq(arglist__349368);
return G__349366__delegate(args);
});
G__349366.cljs$core$IFn$_invoke$arity$variadic = G__349366__delegate;
return G__349366;
})()
;

return null;
});
