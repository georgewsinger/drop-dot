goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41655__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41656__i = 0, G__41656__a = new Array(arguments.length -  0);
while (G__41656__i < G__41656__a.length) {G__41656__a[G__41656__i] = arguments[G__41656__i + 0]; ++G__41656__i;}
  args = new cljs.core.IndexedSeq(G__41656__a,0);
} 
return G__41655__delegate.call(this,args);};
G__41655.cljs$lang$maxFixedArity = 0;
G__41655.cljs$lang$applyTo = (function (arglist__41657){
var args = cljs.core.seq(arglist__41657);
return G__41655__delegate(args);
});
G__41655.cljs$core$IFn$_invoke$arity$variadic = G__41655__delegate;
return G__41655;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41658__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41659__i = 0, G__41659__a = new Array(arguments.length -  0);
while (G__41659__i < G__41659__a.length) {G__41659__a[G__41659__i] = arguments[G__41659__i + 0]; ++G__41659__i;}
  args = new cljs.core.IndexedSeq(G__41659__a,0);
} 
return G__41658__delegate.call(this,args);};
G__41658.cljs$lang$maxFixedArity = 0;
G__41658.cljs$lang$applyTo = (function (arglist__41660){
var args = cljs.core.seq(arglist__41660);
return G__41658__delegate(args);
});
G__41658.cljs$core$IFn$_invoke$arity$variadic = G__41658__delegate;
return G__41658;
})()
;

return null;
});
