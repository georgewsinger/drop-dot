goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__306809__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__306809 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__306810__i = 0, G__306810__a = new Array(arguments.length -  0);
while (G__306810__i < G__306810__a.length) {G__306810__a[G__306810__i] = arguments[G__306810__i + 0]; ++G__306810__i;}
  args = new cljs.core.IndexedSeq(G__306810__a,0);
} 
return G__306809__delegate.call(this,args);};
G__306809.cljs$lang$maxFixedArity = 0;
G__306809.cljs$lang$applyTo = (function (arglist__306811){
var args = cljs.core.seq(arglist__306811);
return G__306809__delegate(args);
});
G__306809.cljs$core$IFn$_invoke$arity$variadic = G__306809__delegate;
return G__306809;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__306812__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__306812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__306813__i = 0, G__306813__a = new Array(arguments.length -  0);
while (G__306813__i < G__306813__a.length) {G__306813__a[G__306813__i] = arguments[G__306813__i + 0]; ++G__306813__i;}
  args = new cljs.core.IndexedSeq(G__306813__a,0);
} 
return G__306812__delegate.call(this,args);};
G__306812.cljs$lang$maxFixedArity = 0;
G__306812.cljs$lang$applyTo = (function (arglist__306814){
var args = cljs.core.seq(arglist__306814);
return G__306812__delegate(args);
});
G__306812.cljs$core$IFn$_invoke$arity$variadic = G__306812__delegate;
return G__306812;
})()
;

return null;
});
