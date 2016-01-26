goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42665__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42666__i = 0, G__42666__a = new Array(arguments.length -  0);
while (G__42666__i < G__42666__a.length) {G__42666__a[G__42666__i] = arguments[G__42666__i + 0]; ++G__42666__i;}
  args = new cljs.core.IndexedSeq(G__42666__a,0);
} 
return G__42665__delegate.call(this,args);};
G__42665.cljs$lang$maxFixedArity = 0;
G__42665.cljs$lang$applyTo = (function (arglist__42667){
var args = cljs.core.seq(arglist__42667);
return G__42665__delegate(args);
});
G__42665.cljs$core$IFn$_invoke$arity$variadic = G__42665__delegate;
return G__42665;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42668__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42669__i = 0, G__42669__a = new Array(arguments.length -  0);
while (G__42669__i < G__42669__a.length) {G__42669__a[G__42669__i] = arguments[G__42669__i + 0]; ++G__42669__i;}
  args = new cljs.core.IndexedSeq(G__42669__a,0);
} 
return G__42668__delegate.call(this,args);};
G__42668.cljs$lang$maxFixedArity = 0;
G__42668.cljs$lang$applyTo = (function (arglist__42670){
var args = cljs.core.seq(arglist__42670);
return G__42668__delegate(args);
});
G__42668.cljs$core$IFn$_invoke$arity$variadic = G__42668__delegate;
return G__42668;
})()
;

return null;
});
