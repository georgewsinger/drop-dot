goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__318415__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__318415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__318416__i = 0, G__318416__a = new Array(arguments.length -  0);
while (G__318416__i < G__318416__a.length) {G__318416__a[G__318416__i] = arguments[G__318416__i + 0]; ++G__318416__i;}
  args = new cljs.core.IndexedSeq(G__318416__a,0);
} 
return G__318415__delegate.call(this,args);};
G__318415.cljs$lang$maxFixedArity = 0;
G__318415.cljs$lang$applyTo = (function (arglist__318417){
var args = cljs.core.seq(arglist__318417);
return G__318415__delegate(args);
});
G__318415.cljs$core$IFn$_invoke$arity$variadic = G__318415__delegate;
return G__318415;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__318418__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__318418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__318419__i = 0, G__318419__a = new Array(arguments.length -  0);
while (G__318419__i < G__318419__a.length) {G__318419__a[G__318419__i] = arguments[G__318419__i + 0]; ++G__318419__i;}
  args = new cljs.core.IndexedSeq(G__318419__a,0);
} 
return G__318418__delegate.call(this,args);};
G__318418.cljs$lang$maxFixedArity = 0;
G__318418.cljs$lang$applyTo = (function (arglist__318420){
var args = cljs.core.seq(arglist__318420);
return G__318418__delegate(args);
});
G__318418.cljs$core$IFn$_invoke$arity$variadic = G__318418__delegate;
return G__318418;
})()
;

return null;
});
