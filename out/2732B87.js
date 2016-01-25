goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__269635__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__269635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__269636__i = 0, G__269636__a = new Array(arguments.length -  0);
while (G__269636__i < G__269636__a.length) {G__269636__a[G__269636__i] = arguments[G__269636__i + 0]; ++G__269636__i;}
  args = new cljs.core.IndexedSeq(G__269636__a,0);
} 
return G__269635__delegate.call(this,args);};
G__269635.cljs$lang$maxFixedArity = 0;
G__269635.cljs$lang$applyTo = (function (arglist__269637){
var args = cljs.core.seq(arglist__269637);
return G__269635__delegate(args);
});
G__269635.cljs$core$IFn$_invoke$arity$variadic = G__269635__delegate;
return G__269635;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__269638__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__269638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__269639__i = 0, G__269639__a = new Array(arguments.length -  0);
while (G__269639__i < G__269639__a.length) {G__269639__a[G__269639__i] = arguments[G__269639__i + 0]; ++G__269639__i;}
  args = new cljs.core.IndexedSeq(G__269639__a,0);
} 
return G__269638__delegate.call(this,args);};
G__269638.cljs$lang$maxFixedArity = 0;
G__269638.cljs$lang$applyTo = (function (arglist__269640){
var args = cljs.core.seq(arglist__269640);
return G__269638__delegate(args);
});
G__269638.cljs$core$IFn$_invoke$arity$variadic = G__269638__delegate;
return G__269638;
})()
;

return null;
});
