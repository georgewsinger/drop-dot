goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19244__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19245__i = 0, G__19245__a = new Array(arguments.length -  0);
while (G__19245__i < G__19245__a.length) {G__19245__a[G__19245__i] = arguments[G__19245__i + 0]; ++G__19245__i;}
  args = new cljs.core.IndexedSeq(G__19245__a,0);
} 
return G__19244__delegate.call(this,args);};
G__19244.cljs$lang$maxFixedArity = 0;
G__19244.cljs$lang$applyTo = (function (arglist__19246){
var args = cljs.core.seq(arglist__19246);
return G__19244__delegate(args);
});
G__19244.cljs$core$IFn$_invoke$arity$variadic = G__19244__delegate;
return G__19244;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19247__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19248__i = 0, G__19248__a = new Array(arguments.length -  0);
while (G__19248__i < G__19248__a.length) {G__19248__a[G__19248__i] = arguments[G__19248__i + 0]; ++G__19248__i;}
  args = new cljs.core.IndexedSeq(G__19248__a,0);
} 
return G__19247__delegate.call(this,args);};
G__19247.cljs$lang$maxFixedArity = 0;
G__19247.cljs$lang$applyTo = (function (arglist__19249){
var args = cljs.core.seq(arglist__19249);
return G__19247__delegate(args);
});
G__19247.cljs$core$IFn$_invoke$arity$variadic = G__19247__delegate;
return G__19247;
})()
;

return null;
});
