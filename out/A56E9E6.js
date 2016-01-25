goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__238442__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__238442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__238443__i = 0, G__238443__a = new Array(arguments.length -  0);
while (G__238443__i < G__238443__a.length) {G__238443__a[G__238443__i] = arguments[G__238443__i + 0]; ++G__238443__i;}
  args = new cljs.core.IndexedSeq(G__238443__a,0);
} 
return G__238442__delegate.call(this,args);};
G__238442.cljs$lang$maxFixedArity = 0;
G__238442.cljs$lang$applyTo = (function (arglist__238444){
var args = cljs.core.seq(arglist__238444);
return G__238442__delegate(args);
});
G__238442.cljs$core$IFn$_invoke$arity$variadic = G__238442__delegate;
return G__238442;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__238445__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__238445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__238446__i = 0, G__238446__a = new Array(arguments.length -  0);
while (G__238446__i < G__238446__a.length) {G__238446__a[G__238446__i] = arguments[G__238446__i + 0]; ++G__238446__i;}
  args = new cljs.core.IndexedSeq(G__238446__a,0);
} 
return G__238445__delegate.call(this,args);};
G__238445.cljs$lang$maxFixedArity = 0;
G__238445.cljs$lang$applyTo = (function (arglist__238447){
var args = cljs.core.seq(arglist__238447);
return G__238445__delegate(args);
});
G__238445.cljs$core$IFn$_invoke$arity$variadic = G__238445__delegate;
return G__238445;
})()
;

return null;
});
