goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10787__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10788__i = 0, G__10788__a = new Array(arguments.length -  0);
while (G__10788__i < G__10788__a.length) {G__10788__a[G__10788__i] = arguments[G__10788__i + 0]; ++G__10788__i;}
  args = new cljs.core.IndexedSeq(G__10788__a,0);
} 
return G__10787__delegate.call(this,args);};
G__10787.cljs$lang$maxFixedArity = 0;
G__10787.cljs$lang$applyTo = (function (arglist__10789){
var args = cljs.core.seq(arglist__10789);
return G__10787__delegate(args);
});
G__10787.cljs$core$IFn$_invoke$arity$variadic = G__10787__delegate;
return G__10787;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10790__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10791__i = 0, G__10791__a = new Array(arguments.length -  0);
while (G__10791__i < G__10791__a.length) {G__10791__a[G__10791__i] = arguments[G__10791__i + 0]; ++G__10791__i;}
  args = new cljs.core.IndexedSeq(G__10791__a,0);
} 
return G__10790__delegate.call(this,args);};
G__10790.cljs$lang$maxFixedArity = 0;
G__10790.cljs$lang$applyTo = (function (arglist__10792){
var args = cljs.core.seq(arglist__10792);
return G__10790__delegate(args);
});
G__10790.cljs$core$IFn$_invoke$arity$variadic = G__10790__delegate;
return G__10790;
})()
;

return null;
});
