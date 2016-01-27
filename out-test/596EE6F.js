goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__70103__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__70103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70104__i = 0, G__70104__a = new Array(arguments.length -  0);
while (G__70104__i < G__70104__a.length) {G__70104__a[G__70104__i] = arguments[G__70104__i + 0]; ++G__70104__i;}
  args = new cljs.core.IndexedSeq(G__70104__a,0);
} 
return G__70103__delegate.call(this,args);};
G__70103.cljs$lang$maxFixedArity = 0;
G__70103.cljs$lang$applyTo = (function (arglist__70105){
var args = cljs.core.seq(arglist__70105);
return G__70103__delegate(args);
});
G__70103.cljs$core$IFn$_invoke$arity$variadic = G__70103__delegate;
return G__70103;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__70106__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__70106 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70107__i = 0, G__70107__a = new Array(arguments.length -  0);
while (G__70107__i < G__70107__a.length) {G__70107__a[G__70107__i] = arguments[G__70107__i + 0]; ++G__70107__i;}
  args = new cljs.core.IndexedSeq(G__70107__a,0);
} 
return G__70106__delegate.call(this,args);};
G__70106.cljs$lang$maxFixedArity = 0;
G__70106.cljs$lang$applyTo = (function (arglist__70108){
var args = cljs.core.seq(arglist__70108);
return G__70106__delegate(args);
});
G__70106.cljs$core$IFn$_invoke$arity$variadic = G__70106__delegate;
return G__70106;
})()
;

return null;
});
