goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__76247__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__76247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76248__i = 0, G__76248__a = new Array(arguments.length -  0);
while (G__76248__i < G__76248__a.length) {G__76248__a[G__76248__i] = arguments[G__76248__i + 0]; ++G__76248__i;}
  args = new cljs.core.IndexedSeq(G__76248__a,0);
} 
return G__76247__delegate.call(this,args);};
G__76247.cljs$lang$maxFixedArity = 0;
G__76247.cljs$lang$applyTo = (function (arglist__76249){
var args = cljs.core.seq(arglist__76249);
return G__76247__delegate(args);
});
G__76247.cljs$core$IFn$_invoke$arity$variadic = G__76247__delegate;
return G__76247;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__76250__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__76250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76251__i = 0, G__76251__a = new Array(arguments.length -  0);
while (G__76251__i < G__76251__a.length) {G__76251__a[G__76251__i] = arguments[G__76251__i + 0]; ++G__76251__i;}
  args = new cljs.core.IndexedSeq(G__76251__a,0);
} 
return G__76250__delegate.call(this,args);};
G__76250.cljs$lang$maxFixedArity = 0;
G__76250.cljs$lang$applyTo = (function (arglist__76252){
var args = cljs.core.seq(arglist__76252);
return G__76250__delegate(args);
});
G__76250.cljs$core$IFn$_invoke$arity$variadic = G__76250__delegate;
return G__76250;
})()
;

return null;
});
