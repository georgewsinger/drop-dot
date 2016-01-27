goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__352516__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__352516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__352517__i = 0, G__352517__a = new Array(arguments.length -  0);
while (G__352517__i < G__352517__a.length) {G__352517__a[G__352517__i] = arguments[G__352517__i + 0]; ++G__352517__i;}
  args = new cljs.core.IndexedSeq(G__352517__a,0);
} 
return G__352516__delegate.call(this,args);};
G__352516.cljs$lang$maxFixedArity = 0;
G__352516.cljs$lang$applyTo = (function (arglist__352518){
var args = cljs.core.seq(arglist__352518);
return G__352516__delegate(args);
});
G__352516.cljs$core$IFn$_invoke$arity$variadic = G__352516__delegate;
return G__352516;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__352519__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__352519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__352520__i = 0, G__352520__a = new Array(arguments.length -  0);
while (G__352520__i < G__352520__a.length) {G__352520__a[G__352520__i] = arguments[G__352520__i + 0]; ++G__352520__i;}
  args = new cljs.core.IndexedSeq(G__352520__a,0);
} 
return G__352519__delegate.call(this,args);};
G__352519.cljs$lang$maxFixedArity = 0;
G__352519.cljs$lang$applyTo = (function (arglist__352521){
var args = cljs.core.seq(arglist__352521);
return G__352519__delegate(args);
});
G__352519.cljs$core$IFn$_invoke$arity$variadic = G__352519__delegate;
return G__352519;
})()
;

return null;
});
