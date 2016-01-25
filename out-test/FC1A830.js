goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10259__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10260__i = 0, G__10260__a = new Array(arguments.length -  0);
while (G__10260__i < G__10260__a.length) {G__10260__a[G__10260__i] = arguments[G__10260__i + 0]; ++G__10260__i;}
  args = new cljs.core.IndexedSeq(G__10260__a,0);
} 
return G__10259__delegate.call(this,args);};
G__10259.cljs$lang$maxFixedArity = 0;
G__10259.cljs$lang$applyTo = (function (arglist__10261){
var args = cljs.core.seq(arglist__10261);
return G__10259__delegate(args);
});
G__10259.cljs$core$IFn$_invoke$arity$variadic = G__10259__delegate;
return G__10259;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10262__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10263__i = 0, G__10263__a = new Array(arguments.length -  0);
while (G__10263__i < G__10263__a.length) {G__10263__a[G__10263__i] = arguments[G__10263__i + 0]; ++G__10263__i;}
  args = new cljs.core.IndexedSeq(G__10263__a,0);
} 
return G__10262__delegate.call(this,args);};
G__10262.cljs$lang$maxFixedArity = 0;
G__10262.cljs$lang$applyTo = (function (arglist__10264){
var args = cljs.core.seq(arglist__10264);
return G__10262__delegate(args);
});
G__10262.cljs$core$IFn$_invoke$arity$variadic = G__10262__delegate;
return G__10262;
})()
;

return null;
});
