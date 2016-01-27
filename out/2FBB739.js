goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__298898__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__298898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__298899__i = 0, G__298899__a = new Array(arguments.length -  0);
while (G__298899__i < G__298899__a.length) {G__298899__a[G__298899__i] = arguments[G__298899__i + 0]; ++G__298899__i;}
  args = new cljs.core.IndexedSeq(G__298899__a,0);
} 
return G__298898__delegate.call(this,args);};
G__298898.cljs$lang$maxFixedArity = 0;
G__298898.cljs$lang$applyTo = (function (arglist__298900){
var args = cljs.core.seq(arglist__298900);
return G__298898__delegate(args);
});
G__298898.cljs$core$IFn$_invoke$arity$variadic = G__298898__delegate;
return G__298898;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__298901__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__298901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__298902__i = 0, G__298902__a = new Array(arguments.length -  0);
while (G__298902__i < G__298902__a.length) {G__298902__a[G__298902__i] = arguments[G__298902__i + 0]; ++G__298902__i;}
  args = new cljs.core.IndexedSeq(G__298902__a,0);
} 
return G__298901__delegate.call(this,args);};
G__298901.cljs$lang$maxFixedArity = 0;
G__298901.cljs$lang$applyTo = (function (arglist__298903){
var args = cljs.core.seq(arglist__298903);
return G__298901__delegate(args);
});
G__298901.cljs$core$IFn$_invoke$arity$variadic = G__298901__delegate;
return G__298901;
})()
;

return null;
});
