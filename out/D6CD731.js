goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__223053__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__223053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__223054__i = 0, G__223054__a = new Array(arguments.length -  0);
while (G__223054__i < G__223054__a.length) {G__223054__a[G__223054__i] = arguments[G__223054__i + 0]; ++G__223054__i;}
  args = new cljs.core.IndexedSeq(G__223054__a,0);
} 
return G__223053__delegate.call(this,args);};
G__223053.cljs$lang$maxFixedArity = 0;
G__223053.cljs$lang$applyTo = (function (arglist__223055){
var args = cljs.core.seq(arglist__223055);
return G__223053__delegate(args);
});
G__223053.cljs$core$IFn$_invoke$arity$variadic = G__223053__delegate;
return G__223053;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__223056__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__223056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__223057__i = 0, G__223057__a = new Array(arguments.length -  0);
while (G__223057__i < G__223057__a.length) {G__223057__a[G__223057__i] = arguments[G__223057__i + 0]; ++G__223057__i;}
  args = new cljs.core.IndexedSeq(G__223057__a,0);
} 
return G__223056__delegate.call(this,args);};
G__223056.cljs$lang$maxFixedArity = 0;
G__223056.cljs$lang$applyTo = (function (arglist__223058){
var args = cljs.core.seq(arglist__223058);
return G__223056__delegate(args);
});
G__223056.cljs$core$IFn$_invoke$arity$variadic = G__223056__delegate;
return G__223056;
})()
;

return null;
});
