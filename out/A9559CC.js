goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24936__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24937__i = 0, G__24937__a = new Array(arguments.length -  0);
while (G__24937__i < G__24937__a.length) {G__24937__a[G__24937__i] = arguments[G__24937__i + 0]; ++G__24937__i;}
  args = new cljs.core.IndexedSeq(G__24937__a,0);
} 
return G__24936__delegate.call(this,args);};
G__24936.cljs$lang$maxFixedArity = 0;
G__24936.cljs$lang$applyTo = (function (arglist__24938){
var args = cljs.core.seq(arglist__24938);
return G__24936__delegate(args);
});
G__24936.cljs$core$IFn$_invoke$arity$variadic = G__24936__delegate;
return G__24936;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24939__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24940__i = 0, G__24940__a = new Array(arguments.length -  0);
while (G__24940__i < G__24940__a.length) {G__24940__a[G__24940__i] = arguments[G__24940__i + 0]; ++G__24940__i;}
  args = new cljs.core.IndexedSeq(G__24940__a,0);
} 
return G__24939__delegate.call(this,args);};
G__24939.cljs$lang$maxFixedArity = 0;
G__24939.cljs$lang$applyTo = (function (arglist__24941){
var args = cljs.core.seq(arglist__24941);
return G__24939__delegate(args);
});
G__24939.cljs$core$IFn$_invoke$arity$variadic = G__24939__delegate;
return G__24939;
})()
;

return null;
});
