goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38699__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38700__i = 0, G__38700__a = new Array(arguments.length -  0);
while (G__38700__i < G__38700__a.length) {G__38700__a[G__38700__i] = arguments[G__38700__i + 0]; ++G__38700__i;}
  args = new cljs.core.IndexedSeq(G__38700__a,0);
} 
return G__38699__delegate.call(this,args);};
G__38699.cljs$lang$maxFixedArity = 0;
G__38699.cljs$lang$applyTo = (function (arglist__38701){
var args = cljs.core.seq(arglist__38701);
return G__38699__delegate(args);
});
G__38699.cljs$core$IFn$_invoke$arity$variadic = G__38699__delegate;
return G__38699;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38702__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38703__i = 0, G__38703__a = new Array(arguments.length -  0);
while (G__38703__i < G__38703__a.length) {G__38703__a[G__38703__i] = arguments[G__38703__i + 0]; ++G__38703__i;}
  args = new cljs.core.IndexedSeq(G__38703__a,0);
} 
return G__38702__delegate.call(this,args);};
G__38702.cljs$lang$maxFixedArity = 0;
G__38702.cljs$lang$applyTo = (function (arglist__38704){
var args = cljs.core.seq(arglist__38704);
return G__38702__delegate(args);
});
G__38702.cljs$core$IFn$_invoke$arity$variadic = G__38702__delegate;
return G__38702;
})()
;

return null;
});
