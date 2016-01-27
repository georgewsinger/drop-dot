goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__360950__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__360950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__360951__i = 0, G__360951__a = new Array(arguments.length -  0);
while (G__360951__i < G__360951__a.length) {G__360951__a[G__360951__i] = arguments[G__360951__i + 0]; ++G__360951__i;}
  args = new cljs.core.IndexedSeq(G__360951__a,0);
} 
return G__360950__delegate.call(this,args);};
G__360950.cljs$lang$maxFixedArity = 0;
G__360950.cljs$lang$applyTo = (function (arglist__360952){
var args = cljs.core.seq(arglist__360952);
return G__360950__delegate(args);
});
G__360950.cljs$core$IFn$_invoke$arity$variadic = G__360950__delegate;
return G__360950;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__360953__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__360953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__360954__i = 0, G__360954__a = new Array(arguments.length -  0);
while (G__360954__i < G__360954__a.length) {G__360954__a[G__360954__i] = arguments[G__360954__i + 0]; ++G__360954__i;}
  args = new cljs.core.IndexedSeq(G__360954__a,0);
} 
return G__360953__delegate.call(this,args);};
G__360953.cljs$lang$maxFixedArity = 0;
G__360953.cljs$lang$applyTo = (function (arglist__360955){
var args = cljs.core.seq(arglist__360955);
return G__360953__delegate(args);
});
G__360953.cljs$core$IFn$_invoke$arity$variadic = G__360953__delegate;
return G__360953;
})()
;

return null;
});
