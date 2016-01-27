goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__87558__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__87558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87559__i = 0, G__87559__a = new Array(arguments.length -  0);
while (G__87559__i < G__87559__a.length) {G__87559__a[G__87559__i] = arguments[G__87559__i + 0]; ++G__87559__i;}
  args = new cljs.core.IndexedSeq(G__87559__a,0);
} 
return G__87558__delegate.call(this,args);};
G__87558.cljs$lang$maxFixedArity = 0;
G__87558.cljs$lang$applyTo = (function (arglist__87560){
var args = cljs.core.seq(arglist__87560);
return G__87558__delegate(args);
});
G__87558.cljs$core$IFn$_invoke$arity$variadic = G__87558__delegate;
return G__87558;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__87561__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__87561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87562__i = 0, G__87562__a = new Array(arguments.length -  0);
while (G__87562__i < G__87562__a.length) {G__87562__a[G__87562__i] = arguments[G__87562__i + 0]; ++G__87562__i;}
  args = new cljs.core.IndexedSeq(G__87562__a,0);
} 
return G__87561__delegate.call(this,args);};
G__87561.cljs$lang$maxFixedArity = 0;
G__87561.cljs$lang$applyTo = (function (arglist__87563){
var args = cljs.core.seq(arglist__87563);
return G__87561__delegate(args);
});
G__87561.cljs$core$IFn$_invoke$arity$variadic = G__87561__delegate;
return G__87561;
})()
;

return null;
});
