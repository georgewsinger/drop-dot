goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19197__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19198__i = 0, G__19198__a = new Array(arguments.length -  0);
while (G__19198__i < G__19198__a.length) {G__19198__a[G__19198__i] = arguments[G__19198__i + 0]; ++G__19198__i;}
  args = new cljs.core.IndexedSeq(G__19198__a,0);
} 
return G__19197__delegate.call(this,args);};
G__19197.cljs$lang$maxFixedArity = 0;
G__19197.cljs$lang$applyTo = (function (arglist__19199){
var args = cljs.core.seq(arglist__19199);
return G__19197__delegate(args);
});
G__19197.cljs$core$IFn$_invoke$arity$variadic = G__19197__delegate;
return G__19197;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19200__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19201__i = 0, G__19201__a = new Array(arguments.length -  0);
while (G__19201__i < G__19201__a.length) {G__19201__a[G__19201__i] = arguments[G__19201__i + 0]; ++G__19201__i;}
  args = new cljs.core.IndexedSeq(G__19201__a,0);
} 
return G__19200__delegate.call(this,args);};
G__19200.cljs$lang$maxFixedArity = 0;
G__19200.cljs$lang$applyTo = (function (arglist__19202){
var args = cljs.core.seq(arglist__19202);
return G__19200__delegate(args);
});
G__19200.cljs$core$IFn$_invoke$arity$variadic = G__19200__delegate;
return G__19200;
})()
;

return null;
});
