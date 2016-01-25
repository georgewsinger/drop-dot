goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27258__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27259__i = 0, G__27259__a = new Array(arguments.length -  0);
while (G__27259__i < G__27259__a.length) {G__27259__a[G__27259__i] = arguments[G__27259__i + 0]; ++G__27259__i;}
  args = new cljs.core.IndexedSeq(G__27259__a,0);
} 
return G__27258__delegate.call(this,args);};
G__27258.cljs$lang$maxFixedArity = 0;
G__27258.cljs$lang$applyTo = (function (arglist__27260){
var args = cljs.core.seq(arglist__27260);
return G__27258__delegate(args);
});
G__27258.cljs$core$IFn$_invoke$arity$variadic = G__27258__delegate;
return G__27258;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27261__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27262__i = 0, G__27262__a = new Array(arguments.length -  0);
while (G__27262__i < G__27262__a.length) {G__27262__a[G__27262__i] = arguments[G__27262__i + 0]; ++G__27262__i;}
  args = new cljs.core.IndexedSeq(G__27262__a,0);
} 
return G__27261__delegate.call(this,args);};
G__27261.cljs$lang$maxFixedArity = 0;
G__27261.cljs$lang$applyTo = (function (arglist__27263){
var args = cljs.core.seq(arglist__27263);
return G__27261__delegate(args);
});
G__27261.cljs$core$IFn$_invoke$arity$variadic = G__27261__delegate;
return G__27261;
})()
;

return null;
});
