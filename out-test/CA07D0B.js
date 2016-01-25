goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18185__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18186__i = 0, G__18186__a = new Array(arguments.length -  0);
while (G__18186__i < G__18186__a.length) {G__18186__a[G__18186__i] = arguments[G__18186__i + 0]; ++G__18186__i;}
  args = new cljs.core.IndexedSeq(G__18186__a,0);
} 
return G__18185__delegate.call(this,args);};
G__18185.cljs$lang$maxFixedArity = 0;
G__18185.cljs$lang$applyTo = (function (arglist__18187){
var args = cljs.core.seq(arglist__18187);
return G__18185__delegate(args);
});
G__18185.cljs$core$IFn$_invoke$arity$variadic = G__18185__delegate;
return G__18185;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18188__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18189__i = 0, G__18189__a = new Array(arguments.length -  0);
while (G__18189__i < G__18189__a.length) {G__18189__a[G__18189__i] = arguments[G__18189__i + 0]; ++G__18189__i;}
  args = new cljs.core.IndexedSeq(G__18189__a,0);
} 
return G__18188__delegate.call(this,args);};
G__18188.cljs$lang$maxFixedArity = 0;
G__18188.cljs$lang$applyTo = (function (arglist__18190){
var args = cljs.core.seq(arglist__18190);
return G__18188__delegate(args);
});
G__18188.cljs$core$IFn$_invoke$arity$variadic = G__18188__delegate;
return G__18188;
})()
;

return null;
});
