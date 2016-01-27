goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__84904__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__84904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__84905__i = 0, G__84905__a = new Array(arguments.length -  0);
while (G__84905__i < G__84905__a.length) {G__84905__a[G__84905__i] = arguments[G__84905__i + 0]; ++G__84905__i;}
  args = new cljs.core.IndexedSeq(G__84905__a,0);
} 
return G__84904__delegate.call(this,args);};
G__84904.cljs$lang$maxFixedArity = 0;
G__84904.cljs$lang$applyTo = (function (arglist__84906){
var args = cljs.core.seq(arglist__84906);
return G__84904__delegate(args);
});
G__84904.cljs$core$IFn$_invoke$arity$variadic = G__84904__delegate;
return G__84904;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__84907__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__84907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__84908__i = 0, G__84908__a = new Array(arguments.length -  0);
while (G__84908__i < G__84908__a.length) {G__84908__a[G__84908__i] = arguments[G__84908__i + 0]; ++G__84908__i;}
  args = new cljs.core.IndexedSeq(G__84908__a,0);
} 
return G__84907__delegate.call(this,args);};
G__84907.cljs$lang$maxFixedArity = 0;
G__84907.cljs$lang$applyTo = (function (arglist__84909){
var args = cljs.core.seq(arglist__84909);
return G__84907__delegate(args);
});
G__84907.cljs$core$IFn$_invoke$arity$variadic = G__84907__delegate;
return G__84907;
})()
;

return null;
});
