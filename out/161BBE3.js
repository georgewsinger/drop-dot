goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__293785__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__293785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293786__i = 0, G__293786__a = new Array(arguments.length -  0);
while (G__293786__i < G__293786__a.length) {G__293786__a[G__293786__i] = arguments[G__293786__i + 0]; ++G__293786__i;}
  args = new cljs.core.IndexedSeq(G__293786__a,0);
} 
return G__293785__delegate.call(this,args);};
G__293785.cljs$lang$maxFixedArity = 0;
G__293785.cljs$lang$applyTo = (function (arglist__293787){
var args = cljs.core.seq(arglist__293787);
return G__293785__delegate(args);
});
G__293785.cljs$core$IFn$_invoke$arity$variadic = G__293785__delegate;
return G__293785;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__293788__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__293788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293789__i = 0, G__293789__a = new Array(arguments.length -  0);
while (G__293789__i < G__293789__a.length) {G__293789__a[G__293789__i] = arguments[G__293789__i + 0]; ++G__293789__i;}
  args = new cljs.core.IndexedSeq(G__293789__a,0);
} 
return G__293788__delegate.call(this,args);};
G__293788.cljs$lang$maxFixedArity = 0;
G__293788.cljs$lang$applyTo = (function (arglist__293790){
var args = cljs.core.seq(arglist__293790);
return G__293788__delegate(args);
});
G__293788.cljs$core$IFn$_invoke$arity$variadic = G__293788__delegate;
return G__293788;
})()
;

return null;
});
