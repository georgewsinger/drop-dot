goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27250__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27251__i = 0, G__27251__a = new Array(arguments.length -  0);
while (G__27251__i < G__27251__a.length) {G__27251__a[G__27251__i] = arguments[G__27251__i + 0]; ++G__27251__i;}
  args = new cljs.core.IndexedSeq(G__27251__a,0);
} 
return G__27250__delegate.call(this,args);};
G__27250.cljs$lang$maxFixedArity = 0;
G__27250.cljs$lang$applyTo = (function (arglist__27252){
var args = cljs.core.seq(arglist__27252);
return G__27250__delegate(args);
});
G__27250.cljs$core$IFn$_invoke$arity$variadic = G__27250__delegate;
return G__27250;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27253__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27254__i = 0, G__27254__a = new Array(arguments.length -  0);
while (G__27254__i < G__27254__a.length) {G__27254__a[G__27254__i] = arguments[G__27254__i + 0]; ++G__27254__i;}
  args = new cljs.core.IndexedSeq(G__27254__a,0);
} 
return G__27253__delegate.call(this,args);};
G__27253.cljs$lang$maxFixedArity = 0;
G__27253.cljs$lang$applyTo = (function (arglist__27255){
var args = cljs.core.seq(arglist__27255);
return G__27253__delegate(args);
});
G__27253.cljs$core$IFn$_invoke$arity$variadic = G__27253__delegate;
return G__27253;
})()
;

return null;
});
