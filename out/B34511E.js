goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__383680__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__383680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__383681__i = 0, G__383681__a = new Array(arguments.length -  0);
while (G__383681__i < G__383681__a.length) {G__383681__a[G__383681__i] = arguments[G__383681__i + 0]; ++G__383681__i;}
  args = new cljs.core.IndexedSeq(G__383681__a,0);
} 
return G__383680__delegate.call(this,args);};
G__383680.cljs$lang$maxFixedArity = 0;
G__383680.cljs$lang$applyTo = (function (arglist__383682){
var args = cljs.core.seq(arglist__383682);
return G__383680__delegate(args);
});
G__383680.cljs$core$IFn$_invoke$arity$variadic = G__383680__delegate;
return G__383680;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__383683__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__383683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__383684__i = 0, G__383684__a = new Array(arguments.length -  0);
while (G__383684__i < G__383684__a.length) {G__383684__a[G__383684__i] = arguments[G__383684__i + 0]; ++G__383684__i;}
  args = new cljs.core.IndexedSeq(G__383684__a,0);
} 
return G__383683__delegate.call(this,args);};
G__383683.cljs$lang$maxFixedArity = 0;
G__383683.cljs$lang$applyTo = (function (arglist__383685){
var args = cljs.core.seq(arglist__383685);
return G__383683__delegate(args);
});
G__383683.cljs$core$IFn$_invoke$arity$variadic = G__383683__delegate;
return G__383683;
})()
;

return null;
});
