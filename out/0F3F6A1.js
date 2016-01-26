goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24258__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24259__i = 0, G__24259__a = new Array(arguments.length -  0);
while (G__24259__i < G__24259__a.length) {G__24259__a[G__24259__i] = arguments[G__24259__i + 0]; ++G__24259__i;}
  args = new cljs.core.IndexedSeq(G__24259__a,0);
} 
return G__24258__delegate.call(this,args);};
G__24258.cljs$lang$maxFixedArity = 0;
G__24258.cljs$lang$applyTo = (function (arglist__24260){
var args = cljs.core.seq(arglist__24260);
return G__24258__delegate(args);
});
G__24258.cljs$core$IFn$_invoke$arity$variadic = G__24258__delegate;
return G__24258;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24261__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24262__i = 0, G__24262__a = new Array(arguments.length -  0);
while (G__24262__i < G__24262__a.length) {G__24262__a[G__24262__i] = arguments[G__24262__i + 0]; ++G__24262__i;}
  args = new cljs.core.IndexedSeq(G__24262__a,0);
} 
return G__24261__delegate.call(this,args);};
G__24261.cljs$lang$maxFixedArity = 0;
G__24261.cljs$lang$applyTo = (function (arglist__24263){
var args = cljs.core.seq(arglist__24263);
return G__24261__delegate(args);
});
G__24261.cljs$core$IFn$_invoke$arity$variadic = G__24261__delegate;
return G__24261;
})()
;

return null;
});
