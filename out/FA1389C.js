goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__205714__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__205714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__205715__i = 0, G__205715__a = new Array(arguments.length -  0);
while (G__205715__i < G__205715__a.length) {G__205715__a[G__205715__i] = arguments[G__205715__i + 0]; ++G__205715__i;}
  args = new cljs.core.IndexedSeq(G__205715__a,0);
} 
return G__205714__delegate.call(this,args);};
G__205714.cljs$lang$maxFixedArity = 0;
G__205714.cljs$lang$applyTo = (function (arglist__205716){
var args = cljs.core.seq(arglist__205716);
return G__205714__delegate(args);
});
G__205714.cljs$core$IFn$_invoke$arity$variadic = G__205714__delegate;
return G__205714;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__205717__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__205717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__205718__i = 0, G__205718__a = new Array(arguments.length -  0);
while (G__205718__i < G__205718__a.length) {G__205718__a[G__205718__i] = arguments[G__205718__i + 0]; ++G__205718__i;}
  args = new cljs.core.IndexedSeq(G__205718__a,0);
} 
return G__205717__delegate.call(this,args);};
G__205717.cljs$lang$maxFixedArity = 0;
G__205717.cljs$lang$applyTo = (function (arglist__205719){
var args = cljs.core.seq(arglist__205719);
return G__205717__delegate(args);
});
G__205717.cljs$core$IFn$_invoke$arity$variadic = G__205717__delegate;
return G__205717;
})()
;

return null;
});
