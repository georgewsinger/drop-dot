goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__259086__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__259086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259087__i = 0, G__259087__a = new Array(arguments.length -  0);
while (G__259087__i < G__259087__a.length) {G__259087__a[G__259087__i] = arguments[G__259087__i + 0]; ++G__259087__i;}
  args = new cljs.core.IndexedSeq(G__259087__a,0);
} 
return G__259086__delegate.call(this,args);};
G__259086.cljs$lang$maxFixedArity = 0;
G__259086.cljs$lang$applyTo = (function (arglist__259088){
var args = cljs.core.seq(arglist__259088);
return G__259086__delegate(args);
});
G__259086.cljs$core$IFn$_invoke$arity$variadic = G__259086__delegate;
return G__259086;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__259089__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__259089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259090__i = 0, G__259090__a = new Array(arguments.length -  0);
while (G__259090__i < G__259090__a.length) {G__259090__a[G__259090__i] = arguments[G__259090__i + 0]; ++G__259090__i;}
  args = new cljs.core.IndexedSeq(G__259090__a,0);
} 
return G__259089__delegate.call(this,args);};
G__259089.cljs$lang$maxFixedArity = 0;
G__259089.cljs$lang$applyTo = (function (arglist__259091){
var args = cljs.core.seq(arglist__259091);
return G__259089__delegate(args);
});
G__259089.cljs$core$IFn$_invoke$arity$variadic = G__259089__delegate;
return G__259089;
})()
;

return null;
});
