goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24604__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24605__i = 0, G__24605__a = new Array(arguments.length -  0);
while (G__24605__i < G__24605__a.length) {G__24605__a[G__24605__i] = arguments[G__24605__i + 0]; ++G__24605__i;}
  args = new cljs.core.IndexedSeq(G__24605__a,0);
} 
return G__24604__delegate.call(this,args);};
G__24604.cljs$lang$maxFixedArity = 0;
G__24604.cljs$lang$applyTo = (function (arglist__24606){
var args = cljs.core.seq(arglist__24606);
return G__24604__delegate(args);
});
G__24604.cljs$core$IFn$_invoke$arity$variadic = G__24604__delegate;
return G__24604;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24607__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24608__i = 0, G__24608__a = new Array(arguments.length -  0);
while (G__24608__i < G__24608__a.length) {G__24608__a[G__24608__i] = arguments[G__24608__i + 0]; ++G__24608__i;}
  args = new cljs.core.IndexedSeq(G__24608__a,0);
} 
return G__24607__delegate.call(this,args);};
G__24607.cljs$lang$maxFixedArity = 0;
G__24607.cljs$lang$applyTo = (function (arglist__24609){
var args = cljs.core.seq(arglist__24609);
return G__24607__delegate(args);
});
G__24607.cljs$core$IFn$_invoke$arity$variadic = G__24607__delegate;
return G__24607;
})()
;

return null;
});
