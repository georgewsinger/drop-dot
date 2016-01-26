goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28215__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28216__i = 0, G__28216__a = new Array(arguments.length -  0);
while (G__28216__i < G__28216__a.length) {G__28216__a[G__28216__i] = arguments[G__28216__i + 0]; ++G__28216__i;}
  args = new cljs.core.IndexedSeq(G__28216__a,0);
} 
return G__28215__delegate.call(this,args);};
G__28215.cljs$lang$maxFixedArity = 0;
G__28215.cljs$lang$applyTo = (function (arglist__28217){
var args = cljs.core.seq(arglist__28217);
return G__28215__delegate(args);
});
G__28215.cljs$core$IFn$_invoke$arity$variadic = G__28215__delegate;
return G__28215;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28218__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28219__i = 0, G__28219__a = new Array(arguments.length -  0);
while (G__28219__i < G__28219__a.length) {G__28219__a[G__28219__i] = arguments[G__28219__i + 0]; ++G__28219__i;}
  args = new cljs.core.IndexedSeq(G__28219__a,0);
} 
return G__28218__delegate.call(this,args);};
G__28218.cljs$lang$maxFixedArity = 0;
G__28218.cljs$lang$applyTo = (function (arglist__28220){
var args = cljs.core.seq(arglist__28220);
return G__28218__delegate(args);
});
G__28218.cljs$core$IFn$_invoke$arity$variadic = G__28218__delegate;
return G__28218;
})()
;

return null;
});
