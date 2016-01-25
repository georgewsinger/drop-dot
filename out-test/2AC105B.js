goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43525__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43526__i = 0, G__43526__a = new Array(arguments.length -  0);
while (G__43526__i < G__43526__a.length) {G__43526__a[G__43526__i] = arguments[G__43526__i + 0]; ++G__43526__i;}
  args = new cljs.core.IndexedSeq(G__43526__a,0);
} 
return G__43525__delegate.call(this,args);};
G__43525.cljs$lang$maxFixedArity = 0;
G__43525.cljs$lang$applyTo = (function (arglist__43527){
var args = cljs.core.seq(arglist__43527);
return G__43525__delegate(args);
});
G__43525.cljs$core$IFn$_invoke$arity$variadic = G__43525__delegate;
return G__43525;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43528__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43529__i = 0, G__43529__a = new Array(arguments.length -  0);
while (G__43529__i < G__43529__a.length) {G__43529__a[G__43529__i] = arguments[G__43529__i + 0]; ++G__43529__i;}
  args = new cljs.core.IndexedSeq(G__43529__a,0);
} 
return G__43528__delegate.call(this,args);};
G__43528.cljs$lang$maxFixedArity = 0;
G__43528.cljs$lang$applyTo = (function (arglist__43530){
var args = cljs.core.seq(arglist__43530);
return G__43528__delegate(args);
});
G__43528.cljs$core$IFn$_invoke$arity$variadic = G__43528__delegate;
return G__43528;
})()
;

return null;
});
