goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24312__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24313__i = 0, G__24313__a = new Array(arguments.length -  0);
while (G__24313__i < G__24313__a.length) {G__24313__a[G__24313__i] = arguments[G__24313__i + 0]; ++G__24313__i;}
  args = new cljs.core.IndexedSeq(G__24313__a,0);
} 
return G__24312__delegate.call(this,args);};
G__24312.cljs$lang$maxFixedArity = 0;
G__24312.cljs$lang$applyTo = (function (arglist__24314){
var args = cljs.core.seq(arglist__24314);
return G__24312__delegate(args);
});
G__24312.cljs$core$IFn$_invoke$arity$variadic = G__24312__delegate;
return G__24312;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24315__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24316__i = 0, G__24316__a = new Array(arguments.length -  0);
while (G__24316__i < G__24316__a.length) {G__24316__a[G__24316__i] = arguments[G__24316__i + 0]; ++G__24316__i;}
  args = new cljs.core.IndexedSeq(G__24316__a,0);
} 
return G__24315__delegate.call(this,args);};
G__24315.cljs$lang$maxFixedArity = 0;
G__24315.cljs$lang$applyTo = (function (arglist__24317){
var args = cljs.core.seq(arglist__24317);
return G__24315__delegate(args);
});
G__24315.cljs$core$IFn$_invoke$arity$variadic = G__24315__delegate;
return G__24315;
})()
;

return null;
});
