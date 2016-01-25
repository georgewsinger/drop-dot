goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__253884__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__253884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__253885__i = 0, G__253885__a = new Array(arguments.length -  0);
while (G__253885__i < G__253885__a.length) {G__253885__a[G__253885__i] = arguments[G__253885__i + 0]; ++G__253885__i;}
  args = new cljs.core.IndexedSeq(G__253885__a,0);
} 
return G__253884__delegate.call(this,args);};
G__253884.cljs$lang$maxFixedArity = 0;
G__253884.cljs$lang$applyTo = (function (arglist__253886){
var args = cljs.core.seq(arglist__253886);
return G__253884__delegate(args);
});
G__253884.cljs$core$IFn$_invoke$arity$variadic = G__253884__delegate;
return G__253884;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__253887__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__253887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__253888__i = 0, G__253888__a = new Array(arguments.length -  0);
while (G__253888__i < G__253888__a.length) {G__253888__a[G__253888__i] = arguments[G__253888__i + 0]; ++G__253888__i;}
  args = new cljs.core.IndexedSeq(G__253888__a,0);
} 
return G__253887__delegate.call(this,args);};
G__253887.cljs$lang$maxFixedArity = 0;
G__253887.cljs$lang$applyTo = (function (arglist__253889){
var args = cljs.core.seq(arglist__253889);
return G__253887__delegate(args);
});
G__253887.cljs$core$IFn$_invoke$arity$variadic = G__253887__delegate;
return G__253887;
})()
;

return null;
});
