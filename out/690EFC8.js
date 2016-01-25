goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__267663__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__267663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__267664__i = 0, G__267664__a = new Array(arguments.length -  0);
while (G__267664__i < G__267664__a.length) {G__267664__a[G__267664__i] = arguments[G__267664__i + 0]; ++G__267664__i;}
  args = new cljs.core.IndexedSeq(G__267664__a,0);
} 
return G__267663__delegate.call(this,args);};
G__267663.cljs$lang$maxFixedArity = 0;
G__267663.cljs$lang$applyTo = (function (arglist__267665){
var args = cljs.core.seq(arglist__267665);
return G__267663__delegate(args);
});
G__267663.cljs$core$IFn$_invoke$arity$variadic = G__267663__delegate;
return G__267663;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__267666__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__267666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__267667__i = 0, G__267667__a = new Array(arguments.length -  0);
while (G__267667__i < G__267667__a.length) {G__267667__a[G__267667__i] = arguments[G__267667__i + 0]; ++G__267667__i;}
  args = new cljs.core.IndexedSeq(G__267667__a,0);
} 
return G__267666__delegate.call(this,args);};
G__267666.cljs$lang$maxFixedArity = 0;
G__267666.cljs$lang$applyTo = (function (arglist__267668){
var args = cljs.core.seq(arglist__267668);
return G__267666__delegate(args);
});
G__267666.cljs$core$IFn$_invoke$arity$variadic = G__267666__delegate;
return G__267666;
})()
;

return null;
});
