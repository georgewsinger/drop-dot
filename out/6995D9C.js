goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27508__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27508 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27509__i = 0, G__27509__a = new Array(arguments.length -  0);
while (G__27509__i < G__27509__a.length) {G__27509__a[G__27509__i] = arguments[G__27509__i + 0]; ++G__27509__i;}
  args = new cljs.core.IndexedSeq(G__27509__a,0);
} 
return G__27508__delegate.call(this,args);};
G__27508.cljs$lang$maxFixedArity = 0;
G__27508.cljs$lang$applyTo = (function (arglist__27510){
var args = cljs.core.seq(arglist__27510);
return G__27508__delegate(args);
});
G__27508.cljs$core$IFn$_invoke$arity$variadic = G__27508__delegate;
return G__27508;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27511__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27511 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27512__i = 0, G__27512__a = new Array(arguments.length -  0);
while (G__27512__i < G__27512__a.length) {G__27512__a[G__27512__i] = arguments[G__27512__i + 0]; ++G__27512__i;}
  args = new cljs.core.IndexedSeq(G__27512__a,0);
} 
return G__27511__delegate.call(this,args);};
G__27511.cljs$lang$maxFixedArity = 0;
G__27511.cljs$lang$applyTo = (function (arglist__27513){
var args = cljs.core.seq(arglist__27513);
return G__27511__delegate(args);
});
G__27511.cljs$core$IFn$_invoke$arity$variadic = G__27511__delegate;
return G__27511;
})()
;

return null;
});
