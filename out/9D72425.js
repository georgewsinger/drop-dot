goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__275936__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__275936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__275937__i = 0, G__275937__a = new Array(arguments.length -  0);
while (G__275937__i < G__275937__a.length) {G__275937__a[G__275937__i] = arguments[G__275937__i + 0]; ++G__275937__i;}
  args = new cljs.core.IndexedSeq(G__275937__a,0);
} 
return G__275936__delegate.call(this,args);};
G__275936.cljs$lang$maxFixedArity = 0;
G__275936.cljs$lang$applyTo = (function (arglist__275938){
var args = cljs.core.seq(arglist__275938);
return G__275936__delegate(args);
});
G__275936.cljs$core$IFn$_invoke$arity$variadic = G__275936__delegate;
return G__275936;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__275939__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__275939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__275940__i = 0, G__275940__a = new Array(arguments.length -  0);
while (G__275940__i < G__275940__a.length) {G__275940__a[G__275940__i] = arguments[G__275940__i + 0]; ++G__275940__i;}
  args = new cljs.core.IndexedSeq(G__275940__a,0);
} 
return G__275939__delegate.call(this,args);};
G__275939.cljs$lang$maxFixedArity = 0;
G__275939.cljs$lang$applyTo = (function (arglist__275941){
var args = cljs.core.seq(arglist__275941);
return G__275939__delegate(args);
});
G__275939.cljs$core$IFn$_invoke$arity$variadic = G__275939__delegate;
return G__275939;
})()
;

return null;
});
