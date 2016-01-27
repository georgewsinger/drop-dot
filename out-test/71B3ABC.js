goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__69868__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__69868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69869__i = 0, G__69869__a = new Array(arguments.length -  0);
while (G__69869__i < G__69869__a.length) {G__69869__a[G__69869__i] = arguments[G__69869__i + 0]; ++G__69869__i;}
  args = new cljs.core.IndexedSeq(G__69869__a,0);
} 
return G__69868__delegate.call(this,args);};
G__69868.cljs$lang$maxFixedArity = 0;
G__69868.cljs$lang$applyTo = (function (arglist__69870){
var args = cljs.core.seq(arglist__69870);
return G__69868__delegate(args);
});
G__69868.cljs$core$IFn$_invoke$arity$variadic = G__69868__delegate;
return G__69868;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__69871__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__69871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69872__i = 0, G__69872__a = new Array(arguments.length -  0);
while (G__69872__i < G__69872__a.length) {G__69872__a[G__69872__i] = arguments[G__69872__i + 0]; ++G__69872__i;}
  args = new cljs.core.IndexedSeq(G__69872__a,0);
} 
return G__69871__delegate.call(this,args);};
G__69871.cljs$lang$maxFixedArity = 0;
G__69871.cljs$lang$applyTo = (function (arglist__69873){
var args = cljs.core.seq(arglist__69873);
return G__69871__delegate(args);
});
G__69871.cljs$core$IFn$_invoke$arity$variadic = G__69871__delegate;
return G__69871;
})()
;

return null;
});
