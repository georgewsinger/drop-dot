goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__242481__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__242481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__242482__i = 0, G__242482__a = new Array(arguments.length -  0);
while (G__242482__i < G__242482__a.length) {G__242482__a[G__242482__i] = arguments[G__242482__i + 0]; ++G__242482__i;}
  args = new cljs.core.IndexedSeq(G__242482__a,0);
} 
return G__242481__delegate.call(this,args);};
G__242481.cljs$lang$maxFixedArity = 0;
G__242481.cljs$lang$applyTo = (function (arglist__242483){
var args = cljs.core.seq(arglist__242483);
return G__242481__delegate(args);
});
G__242481.cljs$core$IFn$_invoke$arity$variadic = G__242481__delegate;
return G__242481;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__242484__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__242484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__242485__i = 0, G__242485__a = new Array(arguments.length -  0);
while (G__242485__i < G__242485__a.length) {G__242485__a[G__242485__i] = arguments[G__242485__i + 0]; ++G__242485__i;}
  args = new cljs.core.IndexedSeq(G__242485__a,0);
} 
return G__242484__delegate.call(this,args);};
G__242484.cljs$lang$maxFixedArity = 0;
G__242484.cljs$lang$applyTo = (function (arglist__242486){
var args = cljs.core.seq(arglist__242486);
return G__242484__delegate(args);
});
G__242484.cljs$core$IFn$_invoke$arity$variadic = G__242484__delegate;
return G__242484;
})()
;

return null;
});
