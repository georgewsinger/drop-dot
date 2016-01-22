goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21940__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21941__i = 0, G__21941__a = new Array(arguments.length -  0);
while (G__21941__i < G__21941__a.length) {G__21941__a[G__21941__i] = arguments[G__21941__i + 0]; ++G__21941__i;}
  args = new cljs.core.IndexedSeq(G__21941__a,0);
} 
return G__21940__delegate.call(this,args);};
G__21940.cljs$lang$maxFixedArity = 0;
G__21940.cljs$lang$applyTo = (function (arglist__21942){
var args = cljs.core.seq(arglist__21942);
return G__21940__delegate(args);
});
G__21940.cljs$core$IFn$_invoke$arity$variadic = G__21940__delegate;
return G__21940;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21943__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21944__i = 0, G__21944__a = new Array(arguments.length -  0);
while (G__21944__i < G__21944__a.length) {G__21944__a[G__21944__i] = arguments[G__21944__i + 0]; ++G__21944__i;}
  args = new cljs.core.IndexedSeq(G__21944__a,0);
} 
return G__21943__delegate.call(this,args);};
G__21943.cljs$lang$maxFixedArity = 0;
G__21943.cljs$lang$applyTo = (function (arglist__21945){
var args = cljs.core.seq(arglist__21945);
return G__21943__delegate(args);
});
G__21943.cljs$core$IFn$_invoke$arity$variadic = G__21943__delegate;
return G__21943;
})()
;

return null;
});
