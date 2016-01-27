goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__300678__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__300678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__300679__i = 0, G__300679__a = new Array(arguments.length -  0);
while (G__300679__i < G__300679__a.length) {G__300679__a[G__300679__i] = arguments[G__300679__i + 0]; ++G__300679__i;}
  args = new cljs.core.IndexedSeq(G__300679__a,0);
} 
return G__300678__delegate.call(this,args);};
G__300678.cljs$lang$maxFixedArity = 0;
G__300678.cljs$lang$applyTo = (function (arglist__300680){
var args = cljs.core.seq(arglist__300680);
return G__300678__delegate(args);
});
G__300678.cljs$core$IFn$_invoke$arity$variadic = G__300678__delegate;
return G__300678;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__300681__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__300681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__300682__i = 0, G__300682__a = new Array(arguments.length -  0);
while (G__300682__i < G__300682__a.length) {G__300682__a[G__300682__i] = arguments[G__300682__i + 0]; ++G__300682__i;}
  args = new cljs.core.IndexedSeq(G__300682__a,0);
} 
return G__300681__delegate.call(this,args);};
G__300681.cljs$lang$maxFixedArity = 0;
G__300681.cljs$lang$applyTo = (function (arglist__300683){
var args = cljs.core.seq(arglist__300683);
return G__300681__delegate(args);
});
G__300681.cljs$core$IFn$_invoke$arity$variadic = G__300681__delegate;
return G__300681;
})()
;

return null;
});
