goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__177215__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__177215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__177216__i = 0, G__177216__a = new Array(arguments.length -  0);
while (G__177216__i < G__177216__a.length) {G__177216__a[G__177216__i] = arguments[G__177216__i + 0]; ++G__177216__i;}
  args = new cljs.core.IndexedSeq(G__177216__a,0);
} 
return G__177215__delegate.call(this,args);};
G__177215.cljs$lang$maxFixedArity = 0;
G__177215.cljs$lang$applyTo = (function (arglist__177217){
var args = cljs.core.seq(arglist__177217);
return G__177215__delegate(args);
});
G__177215.cljs$core$IFn$_invoke$arity$variadic = G__177215__delegate;
return G__177215;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__177218__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__177218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__177219__i = 0, G__177219__a = new Array(arguments.length -  0);
while (G__177219__i < G__177219__a.length) {G__177219__a[G__177219__i] = arguments[G__177219__i + 0]; ++G__177219__i;}
  args = new cljs.core.IndexedSeq(G__177219__a,0);
} 
return G__177218__delegate.call(this,args);};
G__177218.cljs$lang$maxFixedArity = 0;
G__177218.cljs$lang$applyTo = (function (arglist__177220){
var args = cljs.core.seq(arglist__177220);
return G__177218__delegate(args);
});
G__177218.cljs$core$IFn$_invoke$arity$variadic = G__177218__delegate;
return G__177218;
})()
;

return null;
});
