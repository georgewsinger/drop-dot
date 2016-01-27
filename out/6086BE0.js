goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__321166__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__321166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__321167__i = 0, G__321167__a = new Array(arguments.length -  0);
while (G__321167__i < G__321167__a.length) {G__321167__a[G__321167__i] = arguments[G__321167__i + 0]; ++G__321167__i;}
  args = new cljs.core.IndexedSeq(G__321167__a,0);
} 
return G__321166__delegate.call(this,args);};
G__321166.cljs$lang$maxFixedArity = 0;
G__321166.cljs$lang$applyTo = (function (arglist__321168){
var args = cljs.core.seq(arglist__321168);
return G__321166__delegate(args);
});
G__321166.cljs$core$IFn$_invoke$arity$variadic = G__321166__delegate;
return G__321166;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__321169__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__321169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__321170__i = 0, G__321170__a = new Array(arguments.length -  0);
while (G__321170__i < G__321170__a.length) {G__321170__a[G__321170__i] = arguments[G__321170__i + 0]; ++G__321170__i;}
  args = new cljs.core.IndexedSeq(G__321170__a,0);
} 
return G__321169__delegate.call(this,args);};
G__321169.cljs$lang$maxFixedArity = 0;
G__321169.cljs$lang$applyTo = (function (arglist__321171){
var args = cljs.core.seq(arglist__321171);
return G__321169__delegate(args);
});
G__321169.cljs$core$IFn$_invoke$arity$variadic = G__321169__delegate;
return G__321169;
})()
;

return null;
});
