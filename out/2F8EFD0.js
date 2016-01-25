goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__261053__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__261053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__261054__i = 0, G__261054__a = new Array(arguments.length -  0);
while (G__261054__i < G__261054__a.length) {G__261054__a[G__261054__i] = arguments[G__261054__i + 0]; ++G__261054__i;}
  args = new cljs.core.IndexedSeq(G__261054__a,0);
} 
return G__261053__delegate.call(this,args);};
G__261053.cljs$lang$maxFixedArity = 0;
G__261053.cljs$lang$applyTo = (function (arglist__261055){
var args = cljs.core.seq(arglist__261055);
return G__261053__delegate(args);
});
G__261053.cljs$core$IFn$_invoke$arity$variadic = G__261053__delegate;
return G__261053;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__261056__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__261056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__261057__i = 0, G__261057__a = new Array(arguments.length -  0);
while (G__261057__i < G__261057__a.length) {G__261057__a[G__261057__i] = arguments[G__261057__i + 0]; ++G__261057__i;}
  args = new cljs.core.IndexedSeq(G__261057__a,0);
} 
return G__261056__delegate.call(this,args);};
G__261056.cljs$lang$maxFixedArity = 0;
G__261056.cljs$lang$applyTo = (function (arglist__261058){
var args = cljs.core.seq(arglist__261058);
return G__261056__delegate(args);
});
G__261056.cljs$core$IFn$_invoke$arity$variadic = G__261056__delegate;
return G__261056;
})()
;

return null;
});
