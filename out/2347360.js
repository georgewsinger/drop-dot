goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18464__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18464 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18465__i = 0, G__18465__a = new Array(arguments.length -  0);
while (G__18465__i < G__18465__a.length) {G__18465__a[G__18465__i] = arguments[G__18465__i + 0]; ++G__18465__i;}
  args = new cljs.core.IndexedSeq(G__18465__a,0);
} 
return G__18464__delegate.call(this,args);};
G__18464.cljs$lang$maxFixedArity = 0;
G__18464.cljs$lang$applyTo = (function (arglist__18466){
var args = cljs.core.seq(arglist__18466);
return G__18464__delegate(args);
});
G__18464.cljs$core$IFn$_invoke$arity$variadic = G__18464__delegate;
return G__18464;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18467__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18467 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18468__i = 0, G__18468__a = new Array(arguments.length -  0);
while (G__18468__i < G__18468__a.length) {G__18468__a[G__18468__i] = arguments[G__18468__i + 0]; ++G__18468__i;}
  args = new cljs.core.IndexedSeq(G__18468__a,0);
} 
return G__18467__delegate.call(this,args);};
G__18467.cljs$lang$maxFixedArity = 0;
G__18467.cljs$lang$applyTo = (function (arglist__18469){
var args = cljs.core.seq(arglist__18469);
return G__18467__delegate(args);
});
G__18467.cljs$core$IFn$_invoke$arity$variadic = G__18467__delegate;
return G__18467;
})()
;

return null;
});
