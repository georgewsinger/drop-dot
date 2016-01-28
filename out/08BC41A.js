goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__376659__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__376659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__376660__i = 0, G__376660__a = new Array(arguments.length -  0);
while (G__376660__i < G__376660__a.length) {G__376660__a[G__376660__i] = arguments[G__376660__i + 0]; ++G__376660__i;}
  args = new cljs.core.IndexedSeq(G__376660__a,0);
} 
return G__376659__delegate.call(this,args);};
G__376659.cljs$lang$maxFixedArity = 0;
G__376659.cljs$lang$applyTo = (function (arglist__376661){
var args = cljs.core.seq(arglist__376661);
return G__376659__delegate(args);
});
G__376659.cljs$core$IFn$_invoke$arity$variadic = G__376659__delegate;
return G__376659;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__376662__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__376662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__376663__i = 0, G__376663__a = new Array(arguments.length -  0);
while (G__376663__i < G__376663__a.length) {G__376663__a[G__376663__i] = arguments[G__376663__i + 0]; ++G__376663__i;}
  args = new cljs.core.IndexedSeq(G__376663__a,0);
} 
return G__376662__delegate.call(this,args);};
G__376662.cljs$lang$maxFixedArity = 0;
G__376662.cljs$lang$applyTo = (function (arglist__376664){
var args = cljs.core.seq(arglist__376664);
return G__376662__delegate(args);
});
G__376662.cljs$core$IFn$_invoke$arity$variadic = G__376662__delegate;
return G__376662;
})()
;

return null;
});
