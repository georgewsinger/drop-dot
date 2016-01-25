goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__231936__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__231936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__231937__i = 0, G__231937__a = new Array(arguments.length -  0);
while (G__231937__i < G__231937__a.length) {G__231937__a[G__231937__i] = arguments[G__231937__i + 0]; ++G__231937__i;}
  args = new cljs.core.IndexedSeq(G__231937__a,0);
} 
return G__231936__delegate.call(this,args);};
G__231936.cljs$lang$maxFixedArity = 0;
G__231936.cljs$lang$applyTo = (function (arglist__231938){
var args = cljs.core.seq(arglist__231938);
return G__231936__delegate(args);
});
G__231936.cljs$core$IFn$_invoke$arity$variadic = G__231936__delegate;
return G__231936;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__231939__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__231939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__231940__i = 0, G__231940__a = new Array(arguments.length -  0);
while (G__231940__i < G__231940__a.length) {G__231940__a[G__231940__i] = arguments[G__231940__i + 0]; ++G__231940__i;}
  args = new cljs.core.IndexedSeq(G__231940__a,0);
} 
return G__231939__delegate.call(this,args);};
G__231939.cljs$lang$maxFixedArity = 0;
G__231939.cljs$lang$applyTo = (function (arglist__231941){
var args = cljs.core.seq(arglist__231941);
return G__231939__delegate(args);
});
G__231939.cljs$core$IFn$_invoke$arity$variadic = G__231939__delegate;
return G__231939;
})()
;

return null;
});
