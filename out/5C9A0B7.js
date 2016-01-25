goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__249558__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__249558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__249559__i = 0, G__249559__a = new Array(arguments.length -  0);
while (G__249559__i < G__249559__a.length) {G__249559__a[G__249559__i] = arguments[G__249559__i + 0]; ++G__249559__i;}
  args = new cljs.core.IndexedSeq(G__249559__a,0);
} 
return G__249558__delegate.call(this,args);};
G__249558.cljs$lang$maxFixedArity = 0;
G__249558.cljs$lang$applyTo = (function (arglist__249560){
var args = cljs.core.seq(arglist__249560);
return G__249558__delegate(args);
});
G__249558.cljs$core$IFn$_invoke$arity$variadic = G__249558__delegate;
return G__249558;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__249561__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__249561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__249562__i = 0, G__249562__a = new Array(arguments.length -  0);
while (G__249562__i < G__249562__a.length) {G__249562__a[G__249562__i] = arguments[G__249562__i + 0]; ++G__249562__i;}
  args = new cljs.core.IndexedSeq(G__249562__a,0);
} 
return G__249561__delegate.call(this,args);};
G__249561.cljs$lang$maxFixedArity = 0;
G__249561.cljs$lang$applyTo = (function (arglist__249563){
var args = cljs.core.seq(arglist__249563);
return G__249561__delegate(args);
});
G__249561.cljs$core$IFn$_invoke$arity$variadic = G__249561__delegate;
return G__249561;
})()
;

return null;
});
