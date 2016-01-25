goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61856__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61857__i = 0, G__61857__a = new Array(arguments.length -  0);
while (G__61857__i < G__61857__a.length) {G__61857__a[G__61857__i] = arguments[G__61857__i + 0]; ++G__61857__i;}
  args = new cljs.core.IndexedSeq(G__61857__a,0);
} 
return G__61856__delegate.call(this,args);};
G__61856.cljs$lang$maxFixedArity = 0;
G__61856.cljs$lang$applyTo = (function (arglist__61858){
var args = cljs.core.seq(arglist__61858);
return G__61856__delegate(args);
});
G__61856.cljs$core$IFn$_invoke$arity$variadic = G__61856__delegate;
return G__61856;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61859__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61860__i = 0, G__61860__a = new Array(arguments.length -  0);
while (G__61860__i < G__61860__a.length) {G__61860__a[G__61860__i] = arguments[G__61860__i + 0]; ++G__61860__i;}
  args = new cljs.core.IndexedSeq(G__61860__a,0);
} 
return G__61859__delegate.call(this,args);};
G__61859.cljs$lang$maxFixedArity = 0;
G__61859.cljs$lang$applyTo = (function (arglist__61861){
var args = cljs.core.seq(arglist__61861);
return G__61859__delegate(args);
});
G__61859.cljs$core$IFn$_invoke$arity$variadic = G__61859__delegate;
return G__61859;
})()
;

return null;
});
