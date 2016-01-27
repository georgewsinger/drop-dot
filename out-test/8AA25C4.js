goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__111598__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__111598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__111599__i = 0, G__111599__a = new Array(arguments.length -  0);
while (G__111599__i < G__111599__a.length) {G__111599__a[G__111599__i] = arguments[G__111599__i + 0]; ++G__111599__i;}
  args = new cljs.core.IndexedSeq(G__111599__a,0);
} 
return G__111598__delegate.call(this,args);};
G__111598.cljs$lang$maxFixedArity = 0;
G__111598.cljs$lang$applyTo = (function (arglist__111600){
var args = cljs.core.seq(arglist__111600);
return G__111598__delegate(args);
});
G__111598.cljs$core$IFn$_invoke$arity$variadic = G__111598__delegate;
return G__111598;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__111601__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__111601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__111602__i = 0, G__111602__a = new Array(arguments.length -  0);
while (G__111602__i < G__111602__a.length) {G__111602__a[G__111602__i] = arguments[G__111602__i + 0]; ++G__111602__i;}
  args = new cljs.core.IndexedSeq(G__111602__a,0);
} 
return G__111601__delegate.call(this,args);};
G__111601.cljs$lang$maxFixedArity = 0;
G__111601.cljs$lang$applyTo = (function (arglist__111603){
var args = cljs.core.seq(arglist__111603);
return G__111601__delegate(args);
});
G__111601.cljs$core$IFn$_invoke$arity$variadic = G__111601__delegate;
return G__111601;
})()
;

return null;
});
