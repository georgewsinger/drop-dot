goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37415__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37416__i = 0, G__37416__a = new Array(arguments.length -  0);
while (G__37416__i < G__37416__a.length) {G__37416__a[G__37416__i] = arguments[G__37416__i + 0]; ++G__37416__i;}
  args = new cljs.core.IndexedSeq(G__37416__a,0);
} 
return G__37415__delegate.call(this,args);};
G__37415.cljs$lang$maxFixedArity = 0;
G__37415.cljs$lang$applyTo = (function (arglist__37417){
var args = cljs.core.seq(arglist__37417);
return G__37415__delegate(args);
});
G__37415.cljs$core$IFn$_invoke$arity$variadic = G__37415__delegate;
return G__37415;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37418__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37419__i = 0, G__37419__a = new Array(arguments.length -  0);
while (G__37419__i < G__37419__a.length) {G__37419__a[G__37419__i] = arguments[G__37419__i + 0]; ++G__37419__i;}
  args = new cljs.core.IndexedSeq(G__37419__a,0);
} 
return G__37418__delegate.call(this,args);};
G__37418.cljs$lang$maxFixedArity = 0;
G__37418.cljs$lang$applyTo = (function (arglist__37420){
var args = cljs.core.seq(arglist__37420);
return G__37418__delegate(args);
});
G__37418.cljs$core$IFn$_invoke$arity$variadic = G__37418__delegate;
return G__37418;
})()
;

return null;
});
