goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32290__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32291__i = 0, G__32291__a = new Array(arguments.length -  0);
while (G__32291__i < G__32291__a.length) {G__32291__a[G__32291__i] = arguments[G__32291__i + 0]; ++G__32291__i;}
  args = new cljs.core.IndexedSeq(G__32291__a,0);
} 
return G__32290__delegate.call(this,args);};
G__32290.cljs$lang$maxFixedArity = 0;
G__32290.cljs$lang$applyTo = (function (arglist__32292){
var args = cljs.core.seq(arglist__32292);
return G__32290__delegate(args);
});
G__32290.cljs$core$IFn$_invoke$arity$variadic = G__32290__delegate;
return G__32290;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32293__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32294__i = 0, G__32294__a = new Array(arguments.length -  0);
while (G__32294__i < G__32294__a.length) {G__32294__a[G__32294__i] = arguments[G__32294__i + 0]; ++G__32294__i;}
  args = new cljs.core.IndexedSeq(G__32294__a,0);
} 
return G__32293__delegate.call(this,args);};
G__32293.cljs$lang$maxFixedArity = 0;
G__32293.cljs$lang$applyTo = (function (arglist__32295){
var args = cljs.core.seq(arglist__32295);
return G__32293__delegate(args);
});
G__32293.cljs$core$IFn$_invoke$arity$variadic = G__32293__delegate;
return G__32293;
})()
;

return null;
});
