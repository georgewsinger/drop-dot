goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__392718__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__392718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__392719__i = 0, G__392719__a = new Array(arguments.length -  0);
while (G__392719__i < G__392719__a.length) {G__392719__a[G__392719__i] = arguments[G__392719__i + 0]; ++G__392719__i;}
  args = new cljs.core.IndexedSeq(G__392719__a,0);
} 
return G__392718__delegate.call(this,args);};
G__392718.cljs$lang$maxFixedArity = 0;
G__392718.cljs$lang$applyTo = (function (arglist__392720){
var args = cljs.core.seq(arglist__392720);
return G__392718__delegate(args);
});
G__392718.cljs$core$IFn$_invoke$arity$variadic = G__392718__delegate;
return G__392718;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__392721__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__392721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__392722__i = 0, G__392722__a = new Array(arguments.length -  0);
while (G__392722__i < G__392722__a.length) {G__392722__a[G__392722__i] = arguments[G__392722__i + 0]; ++G__392722__i;}
  args = new cljs.core.IndexedSeq(G__392722__a,0);
} 
return G__392721__delegate.call(this,args);};
G__392721.cljs$lang$maxFixedArity = 0;
G__392721.cljs$lang$applyTo = (function (arglist__392723){
var args = cljs.core.seq(arglist__392723);
return G__392721__delegate(args);
});
G__392721.cljs$core$IFn$_invoke$arity$variadic = G__392721__delegate;
return G__392721;
})()
;

return null;
});
