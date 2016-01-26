goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27166__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27167__i = 0, G__27167__a = new Array(arguments.length -  0);
while (G__27167__i < G__27167__a.length) {G__27167__a[G__27167__i] = arguments[G__27167__i + 0]; ++G__27167__i;}
  args = new cljs.core.IndexedSeq(G__27167__a,0);
} 
return G__27166__delegate.call(this,args);};
G__27166.cljs$lang$maxFixedArity = 0;
G__27166.cljs$lang$applyTo = (function (arglist__27168){
var args = cljs.core.seq(arglist__27168);
return G__27166__delegate(args);
});
G__27166.cljs$core$IFn$_invoke$arity$variadic = G__27166__delegate;
return G__27166;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27169__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27170__i = 0, G__27170__a = new Array(arguments.length -  0);
while (G__27170__i < G__27170__a.length) {G__27170__a[G__27170__i] = arguments[G__27170__i + 0]; ++G__27170__i;}
  args = new cljs.core.IndexedSeq(G__27170__a,0);
} 
return G__27169__delegate.call(this,args);};
G__27169.cljs$lang$maxFixedArity = 0;
G__27169.cljs$lang$applyTo = (function (arglist__27171){
var args = cljs.core.seq(arglist__27171);
return G__27169__delegate(args);
});
G__27169.cljs$core$IFn$_invoke$arity$variadic = G__27169__delegate;
return G__27169;
})()
;

return null;
});
