goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54879__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54880__i = 0, G__54880__a = new Array(arguments.length -  0);
while (G__54880__i < G__54880__a.length) {G__54880__a[G__54880__i] = arguments[G__54880__i + 0]; ++G__54880__i;}
  args = new cljs.core.IndexedSeq(G__54880__a,0);
} 
return G__54879__delegate.call(this,args);};
G__54879.cljs$lang$maxFixedArity = 0;
G__54879.cljs$lang$applyTo = (function (arglist__54881){
var args = cljs.core.seq(arglist__54881);
return G__54879__delegate(args);
});
G__54879.cljs$core$IFn$_invoke$arity$variadic = G__54879__delegate;
return G__54879;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54882__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54882 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54883__i = 0, G__54883__a = new Array(arguments.length -  0);
while (G__54883__i < G__54883__a.length) {G__54883__a[G__54883__i] = arguments[G__54883__i + 0]; ++G__54883__i;}
  args = new cljs.core.IndexedSeq(G__54883__a,0);
} 
return G__54882__delegate.call(this,args);};
G__54882.cljs$lang$maxFixedArity = 0;
G__54882.cljs$lang$applyTo = (function (arglist__54884){
var args = cljs.core.seq(arglist__54884);
return G__54882__delegate(args);
});
G__54882.cljs$core$IFn$_invoke$arity$variadic = G__54882__delegate;
return G__54882;
})()
;

return null;
});
