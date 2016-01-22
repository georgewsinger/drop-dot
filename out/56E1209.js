goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43939__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43940__i = 0, G__43940__a = new Array(arguments.length -  0);
while (G__43940__i < G__43940__a.length) {G__43940__a[G__43940__i] = arguments[G__43940__i + 0]; ++G__43940__i;}
  args = new cljs.core.IndexedSeq(G__43940__a,0);
} 
return G__43939__delegate.call(this,args);};
G__43939.cljs$lang$maxFixedArity = 0;
G__43939.cljs$lang$applyTo = (function (arglist__43941){
var args = cljs.core.seq(arglist__43941);
return G__43939__delegate(args);
});
G__43939.cljs$core$IFn$_invoke$arity$variadic = G__43939__delegate;
return G__43939;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43942__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43943__i = 0, G__43943__a = new Array(arguments.length -  0);
while (G__43943__i < G__43943__a.length) {G__43943__a[G__43943__i] = arguments[G__43943__i + 0]; ++G__43943__i;}
  args = new cljs.core.IndexedSeq(G__43943__a,0);
} 
return G__43942__delegate.call(this,args);};
G__43942.cljs$lang$maxFixedArity = 0;
G__43942.cljs$lang$applyTo = (function (arglist__43944){
var args = cljs.core.seq(arglist__43944);
return G__43942__delegate(args);
});
G__43942.cljs$core$IFn$_invoke$arity$variadic = G__43942__delegate;
return G__43942;
})()
;

return null;
});
