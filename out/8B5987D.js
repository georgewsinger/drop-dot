goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__293807__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__293807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293808__i = 0, G__293808__a = new Array(arguments.length -  0);
while (G__293808__i < G__293808__a.length) {G__293808__a[G__293808__i] = arguments[G__293808__i + 0]; ++G__293808__i;}
  args = new cljs.core.IndexedSeq(G__293808__a,0);
} 
return G__293807__delegate.call(this,args);};
G__293807.cljs$lang$maxFixedArity = 0;
G__293807.cljs$lang$applyTo = (function (arglist__293809){
var args = cljs.core.seq(arglist__293809);
return G__293807__delegate(args);
});
G__293807.cljs$core$IFn$_invoke$arity$variadic = G__293807__delegate;
return G__293807;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__293810__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__293810 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__293811__i = 0, G__293811__a = new Array(arguments.length -  0);
while (G__293811__i < G__293811__a.length) {G__293811__a[G__293811__i] = arguments[G__293811__i + 0]; ++G__293811__i;}
  args = new cljs.core.IndexedSeq(G__293811__a,0);
} 
return G__293810__delegate.call(this,args);};
G__293810.cljs$lang$maxFixedArity = 0;
G__293810.cljs$lang$applyTo = (function (arglist__293812){
var args = cljs.core.seq(arglist__293812);
return G__293810__delegate(args);
});
G__293810.cljs$core$IFn$_invoke$arity$variadic = G__293810__delegate;
return G__293810;
})()
;

return null;
});
