goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17544__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17545__i = 0, G__17545__a = new Array(arguments.length -  0);
while (G__17545__i < G__17545__a.length) {G__17545__a[G__17545__i] = arguments[G__17545__i + 0]; ++G__17545__i;}
  args = new cljs.core.IndexedSeq(G__17545__a,0);
} 
return G__17544__delegate.call(this,args);};
G__17544.cljs$lang$maxFixedArity = 0;
G__17544.cljs$lang$applyTo = (function (arglist__17546){
var args = cljs.core.seq(arglist__17546);
return G__17544__delegate(args);
});
G__17544.cljs$core$IFn$_invoke$arity$variadic = G__17544__delegate;
return G__17544;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17547__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17548__i = 0, G__17548__a = new Array(arguments.length -  0);
while (G__17548__i < G__17548__a.length) {G__17548__a[G__17548__i] = arguments[G__17548__i + 0]; ++G__17548__i;}
  args = new cljs.core.IndexedSeq(G__17548__a,0);
} 
return G__17547__delegate.call(this,args);};
G__17547.cljs$lang$maxFixedArity = 0;
G__17547.cljs$lang$applyTo = (function (arglist__17549){
var args = cljs.core.seq(arglist__17549);
return G__17547__delegate(args);
});
G__17547.cljs$core$IFn$_invoke$arity$variadic = G__17547__delegate;
return G__17547;
})()
;

return null;
});
