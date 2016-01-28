goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__389709__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__389709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__389710__i = 0, G__389710__a = new Array(arguments.length -  0);
while (G__389710__i < G__389710__a.length) {G__389710__a[G__389710__i] = arguments[G__389710__i + 0]; ++G__389710__i;}
  args = new cljs.core.IndexedSeq(G__389710__a,0);
} 
return G__389709__delegate.call(this,args);};
G__389709.cljs$lang$maxFixedArity = 0;
G__389709.cljs$lang$applyTo = (function (arglist__389711){
var args = cljs.core.seq(arglist__389711);
return G__389709__delegate(args);
});
G__389709.cljs$core$IFn$_invoke$arity$variadic = G__389709__delegate;
return G__389709;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__389712__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__389712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__389713__i = 0, G__389713__a = new Array(arguments.length -  0);
while (G__389713__i < G__389713__a.length) {G__389713__a[G__389713__i] = arguments[G__389713__i + 0]; ++G__389713__i;}
  args = new cljs.core.IndexedSeq(G__389713__a,0);
} 
return G__389712__delegate.call(this,args);};
G__389712.cljs$lang$maxFixedArity = 0;
G__389712.cljs$lang$applyTo = (function (arglist__389714){
var args = cljs.core.seq(arglist__389714);
return G__389712__delegate(args);
});
G__389712.cljs$core$IFn$_invoke$arity$variadic = G__389712__delegate;
return G__389712;
})()
;

return null;
});
