goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43797__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43798__i = 0, G__43798__a = new Array(arguments.length -  0);
while (G__43798__i < G__43798__a.length) {G__43798__a[G__43798__i] = arguments[G__43798__i + 0]; ++G__43798__i;}
  args = new cljs.core.IndexedSeq(G__43798__a,0);
} 
return G__43797__delegate.call(this,args);};
G__43797.cljs$lang$maxFixedArity = 0;
G__43797.cljs$lang$applyTo = (function (arglist__43799){
var args = cljs.core.seq(arglist__43799);
return G__43797__delegate(args);
});
G__43797.cljs$core$IFn$_invoke$arity$variadic = G__43797__delegate;
return G__43797;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43800__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43801__i = 0, G__43801__a = new Array(arguments.length -  0);
while (G__43801__i < G__43801__a.length) {G__43801__a[G__43801__i] = arguments[G__43801__i + 0]; ++G__43801__i;}
  args = new cljs.core.IndexedSeq(G__43801__a,0);
} 
return G__43800__delegate.call(this,args);};
G__43800.cljs$lang$maxFixedArity = 0;
G__43800.cljs$lang$applyTo = (function (arglist__43802){
var args = cljs.core.seq(arglist__43802);
return G__43800__delegate(args);
});
G__43800.cljs$core$IFn$_invoke$arity$variadic = G__43800__delegate;
return G__43800;
})()
;

return null;
});
