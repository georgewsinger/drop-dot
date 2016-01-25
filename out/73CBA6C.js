goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__117222__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__117222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__117223__i = 0, G__117223__a = new Array(arguments.length -  0);
while (G__117223__i < G__117223__a.length) {G__117223__a[G__117223__i] = arguments[G__117223__i + 0]; ++G__117223__i;}
  args = new cljs.core.IndexedSeq(G__117223__a,0);
} 
return G__117222__delegate.call(this,args);};
G__117222.cljs$lang$maxFixedArity = 0;
G__117222.cljs$lang$applyTo = (function (arglist__117224){
var args = cljs.core.seq(arglist__117224);
return G__117222__delegate(args);
});
G__117222.cljs$core$IFn$_invoke$arity$variadic = G__117222__delegate;
return G__117222;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__117225__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__117225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__117226__i = 0, G__117226__a = new Array(arguments.length -  0);
while (G__117226__i < G__117226__a.length) {G__117226__a[G__117226__i] = arguments[G__117226__i + 0]; ++G__117226__i;}
  args = new cljs.core.IndexedSeq(G__117226__a,0);
} 
return G__117225__delegate.call(this,args);};
G__117225.cljs$lang$maxFixedArity = 0;
G__117225.cljs$lang$applyTo = (function (arglist__117227){
var args = cljs.core.seq(arglist__117227);
return G__117225__delegate(args);
});
G__117225.cljs$core$IFn$_invoke$arity$variadic = G__117225__delegate;
return G__117225;
})()
;

return null;
});
