goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42543__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42544__i = 0, G__42544__a = new Array(arguments.length -  0);
while (G__42544__i < G__42544__a.length) {G__42544__a[G__42544__i] = arguments[G__42544__i + 0]; ++G__42544__i;}
  args = new cljs.core.IndexedSeq(G__42544__a,0);
} 
return G__42543__delegate.call(this,args);};
G__42543.cljs$lang$maxFixedArity = 0;
G__42543.cljs$lang$applyTo = (function (arglist__42545){
var args = cljs.core.seq(arglist__42545);
return G__42543__delegate(args);
});
G__42543.cljs$core$IFn$_invoke$arity$variadic = G__42543__delegate;
return G__42543;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42546__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42547__i = 0, G__42547__a = new Array(arguments.length -  0);
while (G__42547__i < G__42547__a.length) {G__42547__a[G__42547__i] = arguments[G__42547__i + 0]; ++G__42547__i;}
  args = new cljs.core.IndexedSeq(G__42547__a,0);
} 
return G__42546__delegate.call(this,args);};
G__42546.cljs$lang$maxFixedArity = 0;
G__42546.cljs$lang$applyTo = (function (arglist__42548){
var args = cljs.core.seq(arglist__42548);
return G__42546__delegate(args);
});
G__42546.cljs$core$IFn$_invoke$arity$variadic = G__42546__delegate;
return G__42546;
})()
;

return null;
});
