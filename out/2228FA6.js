goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__345161__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__345161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__345162__i = 0, G__345162__a = new Array(arguments.length -  0);
while (G__345162__i < G__345162__a.length) {G__345162__a[G__345162__i] = arguments[G__345162__i + 0]; ++G__345162__i;}
  args = new cljs.core.IndexedSeq(G__345162__a,0);
} 
return G__345161__delegate.call(this,args);};
G__345161.cljs$lang$maxFixedArity = 0;
G__345161.cljs$lang$applyTo = (function (arglist__345163){
var args = cljs.core.seq(arglist__345163);
return G__345161__delegate(args);
});
G__345161.cljs$core$IFn$_invoke$arity$variadic = G__345161__delegate;
return G__345161;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__345164__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__345164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__345165__i = 0, G__345165__a = new Array(arguments.length -  0);
while (G__345165__i < G__345165__a.length) {G__345165__a[G__345165__i] = arguments[G__345165__i + 0]; ++G__345165__i;}
  args = new cljs.core.IndexedSeq(G__345165__a,0);
} 
return G__345164__delegate.call(this,args);};
G__345164.cljs$lang$maxFixedArity = 0;
G__345164.cljs$lang$applyTo = (function (arglist__345166){
var args = cljs.core.seq(arglist__345166);
return G__345164__delegate(args);
});
G__345164.cljs$core$IFn$_invoke$arity$variadic = G__345164__delegate;
return G__345164;
})()
;

return null;
});
