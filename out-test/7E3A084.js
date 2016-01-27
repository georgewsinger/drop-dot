goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__138442__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__138442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__138443__i = 0, G__138443__a = new Array(arguments.length -  0);
while (G__138443__i < G__138443__a.length) {G__138443__a[G__138443__i] = arguments[G__138443__i + 0]; ++G__138443__i;}
  args = new cljs.core.IndexedSeq(G__138443__a,0);
} 
return G__138442__delegate.call(this,args);};
G__138442.cljs$lang$maxFixedArity = 0;
G__138442.cljs$lang$applyTo = (function (arglist__138444){
var args = cljs.core.seq(arglist__138444);
return G__138442__delegate(args);
});
G__138442.cljs$core$IFn$_invoke$arity$variadic = G__138442__delegate;
return G__138442;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__138445__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__138445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__138446__i = 0, G__138446__a = new Array(arguments.length -  0);
while (G__138446__i < G__138446__a.length) {G__138446__a[G__138446__i] = arguments[G__138446__i + 0]; ++G__138446__i;}
  args = new cljs.core.IndexedSeq(G__138446__a,0);
} 
return G__138445__delegate.call(this,args);};
G__138445.cljs$lang$maxFixedArity = 0;
G__138445.cljs$lang$applyTo = (function (arglist__138447){
var args = cljs.core.seq(arglist__138447);
return G__138445__delegate(args);
});
G__138445.cljs$core$IFn$_invoke$arity$variadic = G__138445__delegate;
return G__138445;
})()
;

return null;
});
