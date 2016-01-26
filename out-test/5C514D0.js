goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36245__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36245 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36246__i = 0, G__36246__a = new Array(arguments.length -  0);
while (G__36246__i < G__36246__a.length) {G__36246__a[G__36246__i] = arguments[G__36246__i + 0]; ++G__36246__i;}
  args = new cljs.core.IndexedSeq(G__36246__a,0);
} 
return G__36245__delegate.call(this,args);};
G__36245.cljs$lang$maxFixedArity = 0;
G__36245.cljs$lang$applyTo = (function (arglist__36247){
var args = cljs.core.seq(arglist__36247);
return G__36245__delegate(args);
});
G__36245.cljs$core$IFn$_invoke$arity$variadic = G__36245__delegate;
return G__36245;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36248__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36249__i = 0, G__36249__a = new Array(arguments.length -  0);
while (G__36249__i < G__36249__a.length) {G__36249__a[G__36249__i] = arguments[G__36249__i + 0]; ++G__36249__i;}
  args = new cljs.core.IndexedSeq(G__36249__a,0);
} 
return G__36248__delegate.call(this,args);};
G__36248.cljs$lang$maxFixedArity = 0;
G__36248.cljs$lang$applyTo = (function (arglist__36250){
var args = cljs.core.seq(arglist__36250);
return G__36248__delegate(args);
});
G__36248.cljs$core$IFn$_invoke$arity$variadic = G__36248__delegate;
return G__36248;
})()
;

return null;
});
