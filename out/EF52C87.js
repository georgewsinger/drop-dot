goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__293075__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__293075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293076__i = 0, G__293076__a = new Array(arguments.length -  0);
while (G__293076__i < G__293076__a.length) {G__293076__a[G__293076__i] = arguments[G__293076__i + 0]; ++G__293076__i;}
  args = new cljs.core.IndexedSeq(G__293076__a,0);
} 
return G__293075__delegate.call(this,args);};
G__293075.cljs$lang$maxFixedArity = 0;
G__293075.cljs$lang$applyTo = (function (arglist__293077){
var args = cljs.core.seq(arglist__293077);
return G__293075__delegate(args);
});
G__293075.cljs$core$IFn$_invoke$arity$variadic = G__293075__delegate;
return G__293075;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__293078__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__293078 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293079__i = 0, G__293079__a = new Array(arguments.length -  0);
while (G__293079__i < G__293079__a.length) {G__293079__a[G__293079__i] = arguments[G__293079__i + 0]; ++G__293079__i;}
  args = new cljs.core.IndexedSeq(G__293079__a,0);
} 
return G__293078__delegate.call(this,args);};
G__293078.cljs$lang$maxFixedArity = 0;
G__293078.cljs$lang$applyTo = (function (arglist__293080){
var args = cljs.core.seq(arglist__293080);
return G__293078__delegate(args);
});
G__293078.cljs$core$IFn$_invoke$arity$variadic = G__293078__delegate;
return G__293078;
})()
;

return null;
});
