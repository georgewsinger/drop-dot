goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19698__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19699__i = 0, G__19699__a = new Array(arguments.length -  0);
while (G__19699__i < G__19699__a.length) {G__19699__a[G__19699__i] = arguments[G__19699__i + 0]; ++G__19699__i;}
  args = new cljs.core.IndexedSeq(G__19699__a,0);
} 
return G__19698__delegate.call(this,args);};
G__19698.cljs$lang$maxFixedArity = 0;
G__19698.cljs$lang$applyTo = (function (arglist__19700){
var args = cljs.core.seq(arglist__19700);
return G__19698__delegate(args);
});
G__19698.cljs$core$IFn$_invoke$arity$variadic = G__19698__delegate;
return G__19698;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19701__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19702__i = 0, G__19702__a = new Array(arguments.length -  0);
while (G__19702__i < G__19702__a.length) {G__19702__a[G__19702__i] = arguments[G__19702__i + 0]; ++G__19702__i;}
  args = new cljs.core.IndexedSeq(G__19702__a,0);
} 
return G__19701__delegate.call(this,args);};
G__19701.cljs$lang$maxFixedArity = 0;
G__19701.cljs$lang$applyTo = (function (arglist__19703){
var args = cljs.core.seq(arglist__19703);
return G__19701__delegate(args);
});
G__19701.cljs$core$IFn$_invoke$arity$variadic = G__19701__delegate;
return G__19701;
})()
;

return null;
});
