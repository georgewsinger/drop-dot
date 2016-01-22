// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43642__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43643__i = 0, G__43643__a = new Array(arguments.length -  0);
while (G__43643__i < G__43643__a.length) {G__43643__a[G__43643__i] = arguments[G__43643__i + 0]; ++G__43643__i;}
  args = new cljs.core.IndexedSeq(G__43643__a,0);
} 
return G__43642__delegate.call(this,args);};
G__43642.cljs$lang$maxFixedArity = 0;
G__43642.cljs$lang$applyTo = (function (arglist__43644){
var args = cljs.core.seq(arglist__43644);
return G__43642__delegate(args);
});
G__43642.cljs$core$IFn$_invoke$arity$variadic = G__43642__delegate;
return G__43642;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43645__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43646__i = 0, G__43646__a = new Array(arguments.length -  0);
while (G__43646__i < G__43646__a.length) {G__43646__a[G__43646__i] = arguments[G__43646__i + 0]; ++G__43646__i;}
  args = new cljs.core.IndexedSeq(G__43646__a,0);
} 
return G__43645__delegate.call(this,args);};
G__43645.cljs$lang$maxFixedArity = 0;
G__43645.cljs$lang$applyTo = (function (arglist__43647){
var args = cljs.core.seq(arglist__43647);
return G__43645__delegate(args);
});
G__43645.cljs$core$IFn$_invoke$arity$variadic = G__43645__delegate;
return G__43645;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map