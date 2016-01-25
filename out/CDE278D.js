goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__237881__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__237881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__237882__i = 0, G__237882__a = new Array(arguments.length -  0);
while (G__237882__i < G__237882__a.length) {G__237882__a[G__237882__i] = arguments[G__237882__i + 0]; ++G__237882__i;}
  args = new cljs.core.IndexedSeq(G__237882__a,0);
} 
return G__237881__delegate.call(this,args);};
G__237881.cljs$lang$maxFixedArity = 0;
G__237881.cljs$lang$applyTo = (function (arglist__237883){
var args = cljs.core.seq(arglist__237883);
return G__237881__delegate(args);
});
G__237881.cljs$core$IFn$_invoke$arity$variadic = G__237881__delegate;
return G__237881;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__237884__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__237884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__237885__i = 0, G__237885__a = new Array(arguments.length -  0);
while (G__237885__i < G__237885__a.length) {G__237885__a[G__237885__i] = arguments[G__237885__i + 0]; ++G__237885__i;}
  args = new cljs.core.IndexedSeq(G__237885__a,0);
} 
return G__237884__delegate.call(this,args);};
G__237884.cljs$lang$maxFixedArity = 0;
G__237884.cljs$lang$applyTo = (function (arglist__237886){
var args = cljs.core.seq(arglist__237886);
return G__237884__delegate(args);
});
G__237884.cljs$core$IFn$_invoke$arity$variadic = G__237884__delegate;
return G__237884;
})()
;

return null;
});
