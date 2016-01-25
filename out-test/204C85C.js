goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24804__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24805__i = 0, G__24805__a = new Array(arguments.length -  0);
while (G__24805__i < G__24805__a.length) {G__24805__a[G__24805__i] = arguments[G__24805__i + 0]; ++G__24805__i;}
  args = new cljs.core.IndexedSeq(G__24805__a,0);
} 
return G__24804__delegate.call(this,args);};
G__24804.cljs$lang$maxFixedArity = 0;
G__24804.cljs$lang$applyTo = (function (arglist__24806){
var args = cljs.core.seq(arglist__24806);
return G__24804__delegate(args);
});
G__24804.cljs$core$IFn$_invoke$arity$variadic = G__24804__delegate;
return G__24804;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24807__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24808__i = 0, G__24808__a = new Array(arguments.length -  0);
while (G__24808__i < G__24808__a.length) {G__24808__a[G__24808__i] = arguments[G__24808__i + 0]; ++G__24808__i;}
  args = new cljs.core.IndexedSeq(G__24808__a,0);
} 
return G__24807__delegate.call(this,args);};
G__24807.cljs$lang$maxFixedArity = 0;
G__24807.cljs$lang$applyTo = (function (arglist__24809){
var args = cljs.core.seq(arglist__24809);
return G__24807__delegate(args);
});
G__24807.cljs$core$IFn$_invoke$arity$variadic = G__24807__delegate;
return G__24807;
})()
;

return null;
});
