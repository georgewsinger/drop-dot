goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56334__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56335__i = 0, G__56335__a = new Array(arguments.length -  0);
while (G__56335__i < G__56335__a.length) {G__56335__a[G__56335__i] = arguments[G__56335__i + 0]; ++G__56335__i;}
  args = new cljs.core.IndexedSeq(G__56335__a,0);
} 
return G__56334__delegate.call(this,args);};
G__56334.cljs$lang$maxFixedArity = 0;
G__56334.cljs$lang$applyTo = (function (arglist__56336){
var args = cljs.core.seq(arglist__56336);
return G__56334__delegate(args);
});
G__56334.cljs$core$IFn$_invoke$arity$variadic = G__56334__delegate;
return G__56334;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56337__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56338__i = 0, G__56338__a = new Array(arguments.length -  0);
while (G__56338__i < G__56338__a.length) {G__56338__a[G__56338__i] = arguments[G__56338__i + 0]; ++G__56338__i;}
  args = new cljs.core.IndexedSeq(G__56338__a,0);
} 
return G__56337__delegate.call(this,args);};
G__56337.cljs$lang$maxFixedArity = 0;
G__56337.cljs$lang$applyTo = (function (arglist__56339){
var args = cljs.core.seq(arglist__56339);
return G__56337__delegate(args);
});
G__56337.cljs$core$IFn$_invoke$arity$variadic = G__56337__delegate;
return G__56337;
})()
;

return null;
});
