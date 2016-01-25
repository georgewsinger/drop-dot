goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21050__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21050 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21051__i = 0, G__21051__a = new Array(arguments.length -  0);
while (G__21051__i < G__21051__a.length) {G__21051__a[G__21051__i] = arguments[G__21051__i + 0]; ++G__21051__i;}
  args = new cljs.core.IndexedSeq(G__21051__a,0);
} 
return G__21050__delegate.call(this,args);};
G__21050.cljs$lang$maxFixedArity = 0;
G__21050.cljs$lang$applyTo = (function (arglist__21052){
var args = cljs.core.seq(arglist__21052);
return G__21050__delegate(args);
});
G__21050.cljs$core$IFn$_invoke$arity$variadic = G__21050__delegate;
return G__21050;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21053__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21054__i = 0, G__21054__a = new Array(arguments.length -  0);
while (G__21054__i < G__21054__a.length) {G__21054__a[G__21054__i] = arguments[G__21054__i + 0]; ++G__21054__i;}
  args = new cljs.core.IndexedSeq(G__21054__a,0);
} 
return G__21053__delegate.call(this,args);};
G__21053.cljs$lang$maxFixedArity = 0;
G__21053.cljs$lang$applyTo = (function (arglist__21055){
var args = cljs.core.seq(arglist__21055);
return G__21053__delegate(args);
});
G__21053.cljs$core$IFn$_invoke$arity$variadic = G__21053__delegate;
return G__21053;
})()
;

return null;
});
