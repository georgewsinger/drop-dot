goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__381674__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__381674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__381675__i = 0, G__381675__a = new Array(arguments.length -  0);
while (G__381675__i < G__381675__a.length) {G__381675__a[G__381675__i] = arguments[G__381675__i + 0]; ++G__381675__i;}
  args = new cljs.core.IndexedSeq(G__381675__a,0);
} 
return G__381674__delegate.call(this,args);};
G__381674.cljs$lang$maxFixedArity = 0;
G__381674.cljs$lang$applyTo = (function (arglist__381676){
var args = cljs.core.seq(arglist__381676);
return G__381674__delegate(args);
});
G__381674.cljs$core$IFn$_invoke$arity$variadic = G__381674__delegate;
return G__381674;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__381677__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__381677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__381678__i = 0, G__381678__a = new Array(arguments.length -  0);
while (G__381678__i < G__381678__a.length) {G__381678__a[G__381678__i] = arguments[G__381678__i + 0]; ++G__381678__i;}
  args = new cljs.core.IndexedSeq(G__381678__a,0);
} 
return G__381677__delegate.call(this,args);};
G__381677.cljs$lang$maxFixedArity = 0;
G__381677.cljs$lang$applyTo = (function (arglist__381679){
var args = cljs.core.seq(arglist__381679);
return G__381677__delegate(args);
});
G__381677.cljs$core$IFn$_invoke$arity$variadic = G__381677__delegate;
return G__381677;
})()
;

return null;
});
