goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27094__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27095__i = 0, G__27095__a = new Array(arguments.length -  0);
while (G__27095__i < G__27095__a.length) {G__27095__a[G__27095__i] = arguments[G__27095__i + 0]; ++G__27095__i;}
  args = new cljs.core.IndexedSeq(G__27095__a,0);
} 
return G__27094__delegate.call(this,args);};
G__27094.cljs$lang$maxFixedArity = 0;
G__27094.cljs$lang$applyTo = (function (arglist__27096){
var args = cljs.core.seq(arglist__27096);
return G__27094__delegate(args);
});
G__27094.cljs$core$IFn$_invoke$arity$variadic = G__27094__delegate;
return G__27094;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27097__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27098__i = 0, G__27098__a = new Array(arguments.length -  0);
while (G__27098__i < G__27098__a.length) {G__27098__a[G__27098__i] = arguments[G__27098__i + 0]; ++G__27098__i;}
  args = new cljs.core.IndexedSeq(G__27098__a,0);
} 
return G__27097__delegate.call(this,args);};
G__27097.cljs$lang$maxFixedArity = 0;
G__27097.cljs$lang$applyTo = (function (arglist__27099){
var args = cljs.core.seq(arglist__27099);
return G__27097__delegate(args);
});
G__27097.cljs$core$IFn$_invoke$arity$variadic = G__27097__delegate;
return G__27097;
})()
;

return null;
});
