goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39744__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39745__i = 0, G__39745__a = new Array(arguments.length -  0);
while (G__39745__i < G__39745__a.length) {G__39745__a[G__39745__i] = arguments[G__39745__i + 0]; ++G__39745__i;}
  args = new cljs.core.IndexedSeq(G__39745__a,0);
} 
return G__39744__delegate.call(this,args);};
G__39744.cljs$lang$maxFixedArity = 0;
G__39744.cljs$lang$applyTo = (function (arglist__39746){
var args = cljs.core.seq(arglist__39746);
return G__39744__delegate(args);
});
G__39744.cljs$core$IFn$_invoke$arity$variadic = G__39744__delegate;
return G__39744;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39747__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39748__i = 0, G__39748__a = new Array(arguments.length -  0);
while (G__39748__i < G__39748__a.length) {G__39748__a[G__39748__i] = arguments[G__39748__i + 0]; ++G__39748__i;}
  args = new cljs.core.IndexedSeq(G__39748__a,0);
} 
return G__39747__delegate.call(this,args);};
G__39747.cljs$lang$maxFixedArity = 0;
G__39747.cljs$lang$applyTo = (function (arglist__39749){
var args = cljs.core.seq(arglist__39749);
return G__39747__delegate(args);
});
G__39747.cljs$core$IFn$_invoke$arity$variadic = G__39747__delegate;
return G__39747;
})()
;

return null;
});
