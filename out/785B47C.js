goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__223010__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__223010 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__223011__i = 0, G__223011__a = new Array(arguments.length -  0);
while (G__223011__i < G__223011__a.length) {G__223011__a[G__223011__i] = arguments[G__223011__i + 0]; ++G__223011__i;}
  args = new cljs.core.IndexedSeq(G__223011__a,0);
} 
return G__223010__delegate.call(this,args);};
G__223010.cljs$lang$maxFixedArity = 0;
G__223010.cljs$lang$applyTo = (function (arglist__223012){
var args = cljs.core.seq(arglist__223012);
return G__223010__delegate(args);
});
G__223010.cljs$core$IFn$_invoke$arity$variadic = G__223010__delegate;
return G__223010;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__223013__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__223013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__223014__i = 0, G__223014__a = new Array(arguments.length -  0);
while (G__223014__i < G__223014__a.length) {G__223014__a[G__223014__i] = arguments[G__223014__i + 0]; ++G__223014__i;}
  args = new cljs.core.IndexedSeq(G__223014__a,0);
} 
return G__223013__delegate.call(this,args);};
G__223013.cljs$lang$maxFixedArity = 0;
G__223013.cljs$lang$applyTo = (function (arglist__223015){
var args = cljs.core.seq(arglist__223015);
return G__223013__delegate(args);
});
G__223013.cljs$core$IFn$_invoke$arity$variadic = G__223013__delegate;
return G__223013;
})()
;

return null;
});
