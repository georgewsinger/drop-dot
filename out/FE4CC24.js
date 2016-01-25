goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__281289__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__281289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__281290__i = 0, G__281290__a = new Array(arguments.length -  0);
while (G__281290__i < G__281290__a.length) {G__281290__a[G__281290__i] = arguments[G__281290__i + 0]; ++G__281290__i;}
  args = new cljs.core.IndexedSeq(G__281290__a,0);
} 
return G__281289__delegate.call(this,args);};
G__281289.cljs$lang$maxFixedArity = 0;
G__281289.cljs$lang$applyTo = (function (arglist__281291){
var args = cljs.core.seq(arglist__281291);
return G__281289__delegate(args);
});
G__281289.cljs$core$IFn$_invoke$arity$variadic = G__281289__delegate;
return G__281289;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__281292__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__281292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__281293__i = 0, G__281293__a = new Array(arguments.length -  0);
while (G__281293__i < G__281293__a.length) {G__281293__a[G__281293__i] = arguments[G__281293__i + 0]; ++G__281293__i;}
  args = new cljs.core.IndexedSeq(G__281293__a,0);
} 
return G__281292__delegate.call(this,args);};
G__281292.cljs$lang$maxFixedArity = 0;
G__281292.cljs$lang$applyTo = (function (arglist__281294){
var args = cljs.core.seq(arglist__281294);
return G__281292__delegate(args);
});
G__281292.cljs$core$IFn$_invoke$arity$variadic = G__281292__delegate;
return G__281292;
})()
;

return null;
});
