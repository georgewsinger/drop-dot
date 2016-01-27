goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__348308__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__348308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__348309__i = 0, G__348309__a = new Array(arguments.length -  0);
while (G__348309__i < G__348309__a.length) {G__348309__a[G__348309__i] = arguments[G__348309__i + 0]; ++G__348309__i;}
  args = new cljs.core.IndexedSeq(G__348309__a,0);
} 
return G__348308__delegate.call(this,args);};
G__348308.cljs$lang$maxFixedArity = 0;
G__348308.cljs$lang$applyTo = (function (arglist__348310){
var args = cljs.core.seq(arglist__348310);
return G__348308__delegate(args);
});
G__348308.cljs$core$IFn$_invoke$arity$variadic = G__348308__delegate;
return G__348308;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__348311__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__348311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__348312__i = 0, G__348312__a = new Array(arguments.length -  0);
while (G__348312__i < G__348312__a.length) {G__348312__a[G__348312__i] = arguments[G__348312__i + 0]; ++G__348312__i;}
  args = new cljs.core.IndexedSeq(G__348312__a,0);
} 
return G__348311__delegate.call(this,args);};
G__348311.cljs$lang$maxFixedArity = 0;
G__348311.cljs$lang$applyTo = (function (arglist__348313){
var args = cljs.core.seq(arglist__348313);
return G__348311__delegate(args);
});
G__348311.cljs$core$IFn$_invoke$arity$variadic = G__348311__delegate;
return G__348311;
})()
;

return null;
});
