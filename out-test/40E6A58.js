goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__111609__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__111609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__111610__i = 0, G__111610__a = new Array(arguments.length -  0);
while (G__111610__i < G__111610__a.length) {G__111610__a[G__111610__i] = arguments[G__111610__i + 0]; ++G__111610__i;}
  args = new cljs.core.IndexedSeq(G__111610__a,0);
} 
return G__111609__delegate.call(this,args);};
G__111609.cljs$lang$maxFixedArity = 0;
G__111609.cljs$lang$applyTo = (function (arglist__111611){
var args = cljs.core.seq(arglist__111611);
return G__111609__delegate(args);
});
G__111609.cljs$core$IFn$_invoke$arity$variadic = G__111609__delegate;
return G__111609;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__111612__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__111612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__111613__i = 0, G__111613__a = new Array(arguments.length -  0);
while (G__111613__i < G__111613__a.length) {G__111613__a[G__111613__i] = arguments[G__111613__i + 0]; ++G__111613__i;}
  args = new cljs.core.IndexedSeq(G__111613__a,0);
} 
return G__111612__delegate.call(this,args);};
G__111612.cljs$lang$maxFixedArity = 0;
G__111612.cljs$lang$applyTo = (function (arglist__111614){
var args = cljs.core.seq(arglist__111614);
return G__111612__delegate(args);
});
G__111612.cljs$core$IFn$_invoke$arity$variadic = G__111612__delegate;
return G__111612;
})()
;

return null;
});
