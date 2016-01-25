goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__246014__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__246014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__246015__i = 0, G__246015__a = new Array(arguments.length -  0);
while (G__246015__i < G__246015__a.length) {G__246015__a[G__246015__i] = arguments[G__246015__i + 0]; ++G__246015__i;}
  args = new cljs.core.IndexedSeq(G__246015__a,0);
} 
return G__246014__delegate.call(this,args);};
G__246014.cljs$lang$maxFixedArity = 0;
G__246014.cljs$lang$applyTo = (function (arglist__246016){
var args = cljs.core.seq(arglist__246016);
return G__246014__delegate(args);
});
G__246014.cljs$core$IFn$_invoke$arity$variadic = G__246014__delegate;
return G__246014;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__246017__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__246017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__246018__i = 0, G__246018__a = new Array(arguments.length -  0);
while (G__246018__i < G__246018__a.length) {G__246018__a[G__246018__i] = arguments[G__246018__i + 0]; ++G__246018__i;}
  args = new cljs.core.IndexedSeq(G__246018__a,0);
} 
return G__246017__delegate.call(this,args);};
G__246017.cljs$lang$maxFixedArity = 0;
G__246017.cljs$lang$applyTo = (function (arglist__246019){
var args = cljs.core.seq(arglist__246019);
return G__246017__delegate(args);
});
G__246017.cljs$core$IFn$_invoke$arity$variadic = G__246017__delegate;
return G__246017;
})()
;

return null;
});
