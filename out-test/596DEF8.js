goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28640__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28641__i = 0, G__28641__a = new Array(arguments.length -  0);
while (G__28641__i < G__28641__a.length) {G__28641__a[G__28641__i] = arguments[G__28641__i + 0]; ++G__28641__i;}
  args = new cljs.core.IndexedSeq(G__28641__a,0);
} 
return G__28640__delegate.call(this,args);};
G__28640.cljs$lang$maxFixedArity = 0;
G__28640.cljs$lang$applyTo = (function (arglist__28642){
var args = cljs.core.seq(arglist__28642);
return G__28640__delegate(args);
});
G__28640.cljs$core$IFn$_invoke$arity$variadic = G__28640__delegate;
return G__28640;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28643__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28644__i = 0, G__28644__a = new Array(arguments.length -  0);
while (G__28644__i < G__28644__a.length) {G__28644__a[G__28644__i] = arguments[G__28644__i + 0]; ++G__28644__i;}
  args = new cljs.core.IndexedSeq(G__28644__a,0);
} 
return G__28643__delegate.call(this,args);};
G__28643.cljs$lang$maxFixedArity = 0;
G__28643.cljs$lang$applyTo = (function (arglist__28645){
var args = cljs.core.seq(arglist__28645);
return G__28643__delegate(args);
});
G__28643.cljs$core$IFn$_invoke$arity$variadic = G__28643__delegate;
return G__28643;
})()
;

return null;
});
