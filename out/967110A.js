goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__306820__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__306820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__306821__i = 0, G__306821__a = new Array(arguments.length -  0);
while (G__306821__i < G__306821__a.length) {G__306821__a[G__306821__i] = arguments[G__306821__i + 0]; ++G__306821__i;}
  args = new cljs.core.IndexedSeq(G__306821__a,0);
} 
return G__306820__delegate.call(this,args);};
G__306820.cljs$lang$maxFixedArity = 0;
G__306820.cljs$lang$applyTo = (function (arglist__306822){
var args = cljs.core.seq(arglist__306822);
return G__306820__delegate(args);
});
G__306820.cljs$core$IFn$_invoke$arity$variadic = G__306820__delegate;
return G__306820;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__306823__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__306823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__306824__i = 0, G__306824__a = new Array(arguments.length -  0);
while (G__306824__i < G__306824__a.length) {G__306824__a[G__306824__i] = arguments[G__306824__i + 0]; ++G__306824__i;}
  args = new cljs.core.IndexedSeq(G__306824__a,0);
} 
return G__306823__delegate.call(this,args);};
G__306823.cljs$lang$maxFixedArity = 0;
G__306823.cljs$lang$applyTo = (function (arglist__306825){
var args = cljs.core.seq(arglist__306825);
return G__306823__delegate(args);
});
G__306823.cljs$core$IFn$_invoke$arity$variadic = G__306823__delegate;
return G__306823;
})()
;

return null;
});
