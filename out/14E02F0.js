goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43487__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43488__i = 0, G__43488__a = new Array(arguments.length -  0);
while (G__43488__i < G__43488__a.length) {G__43488__a[G__43488__i] = arguments[G__43488__i + 0]; ++G__43488__i;}
  args = new cljs.core.IndexedSeq(G__43488__a,0);
} 
return G__43487__delegate.call(this,args);};
G__43487.cljs$lang$maxFixedArity = 0;
G__43487.cljs$lang$applyTo = (function (arglist__43489){
var args = cljs.core.seq(arglist__43489);
return G__43487__delegate(args);
});
G__43487.cljs$core$IFn$_invoke$arity$variadic = G__43487__delegate;
return G__43487;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43490__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43491__i = 0, G__43491__a = new Array(arguments.length -  0);
while (G__43491__i < G__43491__a.length) {G__43491__a[G__43491__i] = arguments[G__43491__i + 0]; ++G__43491__i;}
  args = new cljs.core.IndexedSeq(G__43491__a,0);
} 
return G__43490__delegate.call(this,args);};
G__43490.cljs$lang$maxFixedArity = 0;
G__43490.cljs$lang$applyTo = (function (arglist__43492){
var args = cljs.core.seq(arglist__43492);
return G__43490__delegate(args);
});
G__43490.cljs$core$IFn$_invoke$arity$variadic = G__43490__delegate;
return G__43490;
})()
;

return null;
});
