goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11586__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11587__i = 0, G__11587__a = new Array(arguments.length -  0);
while (G__11587__i < G__11587__a.length) {G__11587__a[G__11587__i] = arguments[G__11587__i + 0]; ++G__11587__i;}
  args = new cljs.core.IndexedSeq(G__11587__a,0);
} 
return G__11586__delegate.call(this,args);};
G__11586.cljs$lang$maxFixedArity = 0;
G__11586.cljs$lang$applyTo = (function (arglist__11588){
var args = cljs.core.seq(arglist__11588);
return G__11586__delegate(args);
});
G__11586.cljs$core$IFn$_invoke$arity$variadic = G__11586__delegate;
return G__11586;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11589__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11590__i = 0, G__11590__a = new Array(arguments.length -  0);
while (G__11590__i < G__11590__a.length) {G__11590__a[G__11590__i] = arguments[G__11590__i + 0]; ++G__11590__i;}
  args = new cljs.core.IndexedSeq(G__11590__a,0);
} 
return G__11589__delegate.call(this,args);};
G__11589.cljs$lang$maxFixedArity = 0;
G__11589.cljs$lang$applyTo = (function (arglist__11591){
var args = cljs.core.seq(arglist__11591);
return G__11589__delegate(args);
});
G__11589.cljs$core$IFn$_invoke$arity$variadic = G__11589__delegate;
return G__11589;
})()
;

return null;
});
