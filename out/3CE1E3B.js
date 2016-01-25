goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18977__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18978__i = 0, G__18978__a = new Array(arguments.length -  0);
while (G__18978__i < G__18978__a.length) {G__18978__a[G__18978__i] = arguments[G__18978__i + 0]; ++G__18978__i;}
  args = new cljs.core.IndexedSeq(G__18978__a,0);
} 
return G__18977__delegate.call(this,args);};
G__18977.cljs$lang$maxFixedArity = 0;
G__18977.cljs$lang$applyTo = (function (arglist__18979){
var args = cljs.core.seq(arglist__18979);
return G__18977__delegate(args);
});
G__18977.cljs$core$IFn$_invoke$arity$variadic = G__18977__delegate;
return G__18977;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18980__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18981__i = 0, G__18981__a = new Array(arguments.length -  0);
while (G__18981__i < G__18981__a.length) {G__18981__a[G__18981__i] = arguments[G__18981__i + 0]; ++G__18981__i;}
  args = new cljs.core.IndexedSeq(G__18981__a,0);
} 
return G__18980__delegate.call(this,args);};
G__18980.cljs$lang$maxFixedArity = 0;
G__18980.cljs$lang$applyTo = (function (arglist__18982){
var args = cljs.core.seq(arglist__18982);
return G__18980__delegate(args);
});
G__18980.cljs$core$IFn$_invoke$arity$variadic = G__18980__delegate;
return G__18980;
})()
;

return null;
});
