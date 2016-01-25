goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27638__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27639__i = 0, G__27639__a = new Array(arguments.length -  0);
while (G__27639__i < G__27639__a.length) {G__27639__a[G__27639__i] = arguments[G__27639__i + 0]; ++G__27639__i;}
  args = new cljs.core.IndexedSeq(G__27639__a,0);
} 
return G__27638__delegate.call(this,args);};
G__27638.cljs$lang$maxFixedArity = 0;
G__27638.cljs$lang$applyTo = (function (arglist__27640){
var args = cljs.core.seq(arglist__27640);
return G__27638__delegate(args);
});
G__27638.cljs$core$IFn$_invoke$arity$variadic = G__27638__delegate;
return G__27638;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27641__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27642__i = 0, G__27642__a = new Array(arguments.length -  0);
while (G__27642__i < G__27642__a.length) {G__27642__a[G__27642__i] = arguments[G__27642__i + 0]; ++G__27642__i;}
  args = new cljs.core.IndexedSeq(G__27642__a,0);
} 
return G__27641__delegate.call(this,args);};
G__27641.cljs$lang$maxFixedArity = 0;
G__27641.cljs$lang$applyTo = (function (arglist__27643){
var args = cljs.core.seq(arglist__27643);
return G__27641__delegate(args);
});
G__27641.cljs$core$IFn$_invoke$arity$variadic = G__27641__delegate;
return G__27641;
})()
;

return null;
});
