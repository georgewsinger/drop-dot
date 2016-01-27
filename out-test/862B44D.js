goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30123__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30124__i = 0, G__30124__a = new Array(arguments.length -  0);
while (G__30124__i < G__30124__a.length) {G__30124__a[G__30124__i] = arguments[G__30124__i + 0]; ++G__30124__i;}
  args = new cljs.core.IndexedSeq(G__30124__a,0);
} 
return G__30123__delegate.call(this,args);};
G__30123.cljs$lang$maxFixedArity = 0;
G__30123.cljs$lang$applyTo = (function (arglist__30125){
var args = cljs.core.seq(arglist__30125);
return G__30123__delegate(args);
});
G__30123.cljs$core$IFn$_invoke$arity$variadic = G__30123__delegate;
return G__30123;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30126__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30127__i = 0, G__30127__a = new Array(arguments.length -  0);
while (G__30127__i < G__30127__a.length) {G__30127__a[G__30127__i] = arguments[G__30127__i + 0]; ++G__30127__i;}
  args = new cljs.core.IndexedSeq(G__30127__a,0);
} 
return G__30126__delegate.call(this,args);};
G__30126.cljs$lang$maxFixedArity = 0;
G__30126.cljs$lang$applyTo = (function (arglist__30128){
var args = cljs.core.seq(arglist__30128);
return G__30126__delegate(args);
});
G__30126.cljs$core$IFn$_invoke$arity$variadic = G__30126__delegate;
return G__30126;
})()
;

return null;
});
