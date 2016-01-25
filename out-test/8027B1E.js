goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21665__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21666__i = 0, G__21666__a = new Array(arguments.length -  0);
while (G__21666__i < G__21666__a.length) {G__21666__a[G__21666__i] = arguments[G__21666__i + 0]; ++G__21666__i;}
  args = new cljs.core.IndexedSeq(G__21666__a,0);
} 
return G__21665__delegate.call(this,args);};
G__21665.cljs$lang$maxFixedArity = 0;
G__21665.cljs$lang$applyTo = (function (arglist__21667){
var args = cljs.core.seq(arglist__21667);
return G__21665__delegate(args);
});
G__21665.cljs$core$IFn$_invoke$arity$variadic = G__21665__delegate;
return G__21665;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21668__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21669__i = 0, G__21669__a = new Array(arguments.length -  0);
while (G__21669__i < G__21669__a.length) {G__21669__a[G__21669__i] = arguments[G__21669__i + 0]; ++G__21669__i;}
  args = new cljs.core.IndexedSeq(G__21669__a,0);
} 
return G__21668__delegate.call(this,args);};
G__21668.cljs$lang$maxFixedArity = 0;
G__21668.cljs$lang$applyTo = (function (arglist__21670){
var args = cljs.core.seq(arglist__21670);
return G__21668__delegate(args);
});
G__21668.cljs$core$IFn$_invoke$arity$variadic = G__21668__delegate;
return G__21668;
})()
;

return null;
});
