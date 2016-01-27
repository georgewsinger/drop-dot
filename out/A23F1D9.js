goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__346183__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__346183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346184__i = 0, G__346184__a = new Array(arguments.length -  0);
while (G__346184__i < G__346184__a.length) {G__346184__a[G__346184__i] = arguments[G__346184__i + 0]; ++G__346184__i;}
  args = new cljs.core.IndexedSeq(G__346184__a,0);
} 
return G__346183__delegate.call(this,args);};
G__346183.cljs$lang$maxFixedArity = 0;
G__346183.cljs$lang$applyTo = (function (arglist__346185){
var args = cljs.core.seq(arglist__346185);
return G__346183__delegate(args);
});
G__346183.cljs$core$IFn$_invoke$arity$variadic = G__346183__delegate;
return G__346183;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__346186__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__346186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__346187__i = 0, G__346187__a = new Array(arguments.length -  0);
while (G__346187__i < G__346187__a.length) {G__346187__a[G__346187__i] = arguments[G__346187__i + 0]; ++G__346187__i;}
  args = new cljs.core.IndexedSeq(G__346187__a,0);
} 
return G__346186__delegate.call(this,args);};
G__346186.cljs$lang$maxFixedArity = 0;
G__346186.cljs$lang$applyTo = (function (arglist__346188){
var args = cljs.core.seq(arglist__346188);
return G__346186__delegate(args);
});
G__346186.cljs$core$IFn$_invoke$arity$variadic = G__346186__delegate;
return G__346186;
})()
;

return null;
});
