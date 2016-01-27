goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33183__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33184__i = 0, G__33184__a = new Array(arguments.length -  0);
while (G__33184__i < G__33184__a.length) {G__33184__a[G__33184__i] = arguments[G__33184__i + 0]; ++G__33184__i;}
  args = new cljs.core.IndexedSeq(G__33184__a,0);
} 
return G__33183__delegate.call(this,args);};
G__33183.cljs$lang$maxFixedArity = 0;
G__33183.cljs$lang$applyTo = (function (arglist__33185){
var args = cljs.core.seq(arglist__33185);
return G__33183__delegate(args);
});
G__33183.cljs$core$IFn$_invoke$arity$variadic = G__33183__delegate;
return G__33183;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33186__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33187__i = 0, G__33187__a = new Array(arguments.length -  0);
while (G__33187__i < G__33187__a.length) {G__33187__a[G__33187__i] = arguments[G__33187__i + 0]; ++G__33187__i;}
  args = new cljs.core.IndexedSeq(G__33187__a,0);
} 
return G__33186__delegate.call(this,args);};
G__33186.cljs$lang$maxFixedArity = 0;
G__33186.cljs$lang$applyTo = (function (arglist__33188){
var args = cljs.core.seq(arglist__33188);
return G__33186__delegate(args);
});
G__33186.cljs$core$IFn$_invoke$arity$variadic = G__33186__delegate;
return G__33186;
})()
;

return null;
});
