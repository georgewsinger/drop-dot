goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20077__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20078__i = 0, G__20078__a = new Array(arguments.length -  0);
while (G__20078__i < G__20078__a.length) {G__20078__a[G__20078__i] = arguments[G__20078__i + 0]; ++G__20078__i;}
  args = new cljs.core.IndexedSeq(G__20078__a,0);
} 
return G__20077__delegate.call(this,args);};
G__20077.cljs$lang$maxFixedArity = 0;
G__20077.cljs$lang$applyTo = (function (arglist__20079){
var args = cljs.core.seq(arglist__20079);
return G__20077__delegate(args);
});
G__20077.cljs$core$IFn$_invoke$arity$variadic = G__20077__delegate;
return G__20077;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20080__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20081__i = 0, G__20081__a = new Array(arguments.length -  0);
while (G__20081__i < G__20081__a.length) {G__20081__a[G__20081__i] = arguments[G__20081__i + 0]; ++G__20081__i;}
  args = new cljs.core.IndexedSeq(G__20081__a,0);
} 
return G__20080__delegate.call(this,args);};
G__20080.cljs$lang$maxFixedArity = 0;
G__20080.cljs$lang$applyTo = (function (arglist__20082){
var args = cljs.core.seq(arglist__20082);
return G__20080__delegate(args);
});
G__20080.cljs$core$IFn$_invoke$arity$variadic = G__20080__delegate;
return G__20080;
})()
;

return null;
});
