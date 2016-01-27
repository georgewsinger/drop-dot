goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__353565__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__353565 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__353566__i = 0, G__353566__a = new Array(arguments.length -  0);
while (G__353566__i < G__353566__a.length) {G__353566__a[G__353566__i] = arguments[G__353566__i + 0]; ++G__353566__i;}
  args = new cljs.core.IndexedSeq(G__353566__a,0);
} 
return G__353565__delegate.call(this,args);};
G__353565.cljs$lang$maxFixedArity = 0;
G__353565.cljs$lang$applyTo = (function (arglist__353567){
var args = cljs.core.seq(arglist__353567);
return G__353565__delegate(args);
});
G__353565.cljs$core$IFn$_invoke$arity$variadic = G__353565__delegate;
return G__353565;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__353568__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__353568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__353569__i = 0, G__353569__a = new Array(arguments.length -  0);
while (G__353569__i < G__353569__a.length) {G__353569__a[G__353569__i] = arguments[G__353569__i + 0]; ++G__353569__i;}
  args = new cljs.core.IndexedSeq(G__353569__a,0);
} 
return G__353568__delegate.call(this,args);};
G__353568.cljs$lang$maxFixedArity = 0;
G__353568.cljs$lang$applyTo = (function (arglist__353570){
var args = cljs.core.seq(arglist__353570);
return G__353568__delegate(args);
});
G__353568.cljs$core$IFn$_invoke$arity$variadic = G__353568__delegate;
return G__353568;
})()
;

return null;
});
