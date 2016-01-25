// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__112152__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__112152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__112153__i = 0, G__112153__a = new Array(arguments.length -  0);
while (G__112153__i < G__112153__a.length) {G__112153__a[G__112153__i] = arguments[G__112153__i + 0]; ++G__112153__i;}
  args = new cljs.core.IndexedSeq(G__112153__a,0);
} 
return G__112152__delegate.call(this,args);};
G__112152.cljs$lang$maxFixedArity = 0;
G__112152.cljs$lang$applyTo = (function (arglist__112154){
var args = cljs.core.seq(arglist__112154);
return G__112152__delegate(args);
});
G__112152.cljs$core$IFn$_invoke$arity$variadic = G__112152__delegate;
return G__112152;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__112155__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__112155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__112156__i = 0, G__112156__a = new Array(arguments.length -  0);
while (G__112156__i < G__112156__a.length) {G__112156__a[G__112156__i] = arguments[G__112156__i + 0]; ++G__112156__i;}
  args = new cljs.core.IndexedSeq(G__112156__a,0);
} 
return G__112155__delegate.call(this,args);};
G__112155.cljs$lang$maxFixedArity = 0;
G__112155.cljs$lang$applyTo = (function (arglist__112157){
var args = cljs.core.seq(arglist__112157);
return G__112155__delegate(args);
});
G__112155.cljs$core$IFn$_invoke$arity$variadic = G__112155__delegate;
return G__112155;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map