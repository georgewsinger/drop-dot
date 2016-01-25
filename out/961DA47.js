goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__256228__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__256228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__256229__i = 0, G__256229__a = new Array(arguments.length -  0);
while (G__256229__i < G__256229__a.length) {G__256229__a[G__256229__i] = arguments[G__256229__i + 0]; ++G__256229__i;}
  args = new cljs.core.IndexedSeq(G__256229__a,0);
} 
return G__256228__delegate.call(this,args);};
G__256228.cljs$lang$maxFixedArity = 0;
G__256228.cljs$lang$applyTo = (function (arglist__256230){
var args = cljs.core.seq(arglist__256230);
return G__256228__delegate(args);
});
G__256228.cljs$core$IFn$_invoke$arity$variadic = G__256228__delegate;
return G__256228;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__256231__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__256231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__256232__i = 0, G__256232__a = new Array(arguments.length -  0);
while (G__256232__i < G__256232__a.length) {G__256232__a[G__256232__i] = arguments[G__256232__i + 0]; ++G__256232__i;}
  args = new cljs.core.IndexedSeq(G__256232__a,0);
} 
return G__256231__delegate.call(this,args);};
G__256231.cljs$lang$maxFixedArity = 0;
G__256231.cljs$lang$applyTo = (function (arglist__256233){
var args = cljs.core.seq(arglist__256233);
return G__256231__delegate(args);
});
G__256231.cljs$core$IFn$_invoke$arity$variadic = G__256231__delegate;
return G__256231;
})()
;

return null;
});
