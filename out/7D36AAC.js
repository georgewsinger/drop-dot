goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__290308__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__290308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290309__i = 0, G__290309__a = new Array(arguments.length -  0);
while (G__290309__i < G__290309__a.length) {G__290309__a[G__290309__i] = arguments[G__290309__i + 0]; ++G__290309__i;}
  args = new cljs.core.IndexedSeq(G__290309__a,0);
} 
return G__290308__delegate.call(this,args);};
G__290308.cljs$lang$maxFixedArity = 0;
G__290308.cljs$lang$applyTo = (function (arglist__290310){
var args = cljs.core.seq(arglist__290310);
return G__290308__delegate(args);
});
G__290308.cljs$core$IFn$_invoke$arity$variadic = G__290308__delegate;
return G__290308;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__290311__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__290311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290312__i = 0, G__290312__a = new Array(arguments.length -  0);
while (G__290312__i < G__290312__a.length) {G__290312__a[G__290312__i] = arguments[G__290312__i + 0]; ++G__290312__i;}
  args = new cljs.core.IndexedSeq(G__290312__a,0);
} 
return G__290311__delegate.call(this,args);};
G__290311.cljs$lang$maxFixedArity = 0;
G__290311.cljs$lang$applyTo = (function (arglist__290313){
var args = cljs.core.seq(arglist__290313);
return G__290311__delegate(args);
});
G__290311.cljs$core$IFn$_invoke$arity$variadic = G__290311__delegate;
return G__290311;
})()
;

return null;
});
