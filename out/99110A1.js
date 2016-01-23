goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27759__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27760__i = 0, G__27760__a = new Array(arguments.length -  0);
while (G__27760__i < G__27760__a.length) {G__27760__a[G__27760__i] = arguments[G__27760__i + 0]; ++G__27760__i;}
  args = new cljs.core.IndexedSeq(G__27760__a,0);
} 
return G__27759__delegate.call(this,args);};
G__27759.cljs$lang$maxFixedArity = 0;
G__27759.cljs$lang$applyTo = (function (arglist__27761){
var args = cljs.core.seq(arglist__27761);
return G__27759__delegate(args);
});
G__27759.cljs$core$IFn$_invoke$arity$variadic = G__27759__delegate;
return G__27759;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27762__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27763__i = 0, G__27763__a = new Array(arguments.length -  0);
while (G__27763__i < G__27763__a.length) {G__27763__a[G__27763__i] = arguments[G__27763__i + 0]; ++G__27763__i;}
  args = new cljs.core.IndexedSeq(G__27763__a,0);
} 
return G__27762__delegate.call(this,args);};
G__27762.cljs$lang$maxFixedArity = 0;
G__27762.cljs$lang$applyTo = (function (arglist__27764){
var args = cljs.core.seq(arglist__27764);
return G__27762__delegate(args);
});
G__27762.cljs$core$IFn$_invoke$arity$variadic = G__27762__delegate;
return G__27762;
})()
;

return null;
});
