goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27639__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27640__i = 0, G__27640__a = new Array(arguments.length -  0);
while (G__27640__i < G__27640__a.length) {G__27640__a[G__27640__i] = arguments[G__27640__i + 0]; ++G__27640__i;}
  args = new cljs.core.IndexedSeq(G__27640__a,0);
} 
return G__27639__delegate.call(this,args);};
G__27639.cljs$lang$maxFixedArity = 0;
G__27639.cljs$lang$applyTo = (function (arglist__27641){
var args = cljs.core.seq(arglist__27641);
return G__27639__delegate(args);
});
G__27639.cljs$core$IFn$_invoke$arity$variadic = G__27639__delegate;
return G__27639;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27642__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27643__i = 0, G__27643__a = new Array(arguments.length -  0);
while (G__27643__i < G__27643__a.length) {G__27643__a[G__27643__i] = arguments[G__27643__i + 0]; ++G__27643__i;}
  args = new cljs.core.IndexedSeq(G__27643__a,0);
} 
return G__27642__delegate.call(this,args);};
G__27642.cljs$lang$maxFixedArity = 0;
G__27642.cljs$lang$applyTo = (function (arglist__27644){
var args = cljs.core.seq(arglist__27644);
return G__27642__delegate(args);
});
G__27642.cljs$core$IFn$_invoke$arity$variadic = G__27642__delegate;
return G__27642;
})()
;

return null;
});
