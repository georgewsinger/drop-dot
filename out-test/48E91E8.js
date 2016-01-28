goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__80607__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__80607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80608__i = 0, G__80608__a = new Array(arguments.length -  0);
while (G__80608__i < G__80608__a.length) {G__80608__a[G__80608__i] = arguments[G__80608__i + 0]; ++G__80608__i;}
  args = new cljs.core.IndexedSeq(G__80608__a,0);
} 
return G__80607__delegate.call(this,args);};
G__80607.cljs$lang$maxFixedArity = 0;
G__80607.cljs$lang$applyTo = (function (arglist__80609){
var args = cljs.core.seq(arglist__80609);
return G__80607__delegate(args);
});
G__80607.cljs$core$IFn$_invoke$arity$variadic = G__80607__delegate;
return G__80607;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__80610__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__80610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80611__i = 0, G__80611__a = new Array(arguments.length -  0);
while (G__80611__i < G__80611__a.length) {G__80611__a[G__80611__i] = arguments[G__80611__i + 0]; ++G__80611__i;}
  args = new cljs.core.IndexedSeq(G__80611__a,0);
} 
return G__80610__delegate.call(this,args);};
G__80610.cljs$lang$maxFixedArity = 0;
G__80610.cljs$lang$applyTo = (function (arglist__80612){
var args = cljs.core.seq(arglist__80612);
return G__80610__delegate(args);
});
G__80610.cljs$core$IFn$_invoke$arity$variadic = G__80610__delegate;
return G__80610;
})()
;

return null;
});
