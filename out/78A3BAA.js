goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__389698__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__389698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__389699__i = 0, G__389699__a = new Array(arguments.length -  0);
while (G__389699__i < G__389699__a.length) {G__389699__a[G__389699__i] = arguments[G__389699__i + 0]; ++G__389699__i;}
  args = new cljs.core.IndexedSeq(G__389699__a,0);
} 
return G__389698__delegate.call(this,args);};
G__389698.cljs$lang$maxFixedArity = 0;
G__389698.cljs$lang$applyTo = (function (arglist__389700){
var args = cljs.core.seq(arglist__389700);
return G__389698__delegate(args);
});
G__389698.cljs$core$IFn$_invoke$arity$variadic = G__389698__delegate;
return G__389698;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__389701__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__389701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__389702__i = 0, G__389702__a = new Array(arguments.length -  0);
while (G__389702__i < G__389702__a.length) {G__389702__a[G__389702__i] = arguments[G__389702__i + 0]; ++G__389702__i;}
  args = new cljs.core.IndexedSeq(G__389702__a,0);
} 
return G__389701__delegate.call(this,args);};
G__389701.cljs$lang$maxFixedArity = 0;
G__389701.cljs$lang$applyTo = (function (arglist__389703){
var args = cljs.core.seq(arglist__389703);
return G__389701__delegate(args);
});
G__389701.cljs$core$IFn$_invoke$arity$variadic = G__389701__delegate;
return G__389701;
})()
;

return null;
});
