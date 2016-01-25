goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__235946__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__235946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235947__i = 0, G__235947__a = new Array(arguments.length -  0);
while (G__235947__i < G__235947__a.length) {G__235947__a[G__235947__i] = arguments[G__235947__i + 0]; ++G__235947__i;}
  args = new cljs.core.IndexedSeq(G__235947__a,0);
} 
return G__235946__delegate.call(this,args);};
G__235946.cljs$lang$maxFixedArity = 0;
G__235946.cljs$lang$applyTo = (function (arglist__235948){
var args = cljs.core.seq(arglist__235948);
return G__235946__delegate(args);
});
G__235946.cljs$core$IFn$_invoke$arity$variadic = G__235946__delegate;
return G__235946;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__235949__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__235949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235950__i = 0, G__235950__a = new Array(arguments.length -  0);
while (G__235950__i < G__235950__a.length) {G__235950__a[G__235950__i] = arguments[G__235950__i + 0]; ++G__235950__i;}
  args = new cljs.core.IndexedSeq(G__235950__a,0);
} 
return G__235949__delegate.call(this,args);};
G__235949.cljs$lang$maxFixedArity = 0;
G__235949.cljs$lang$applyTo = (function (arglist__235951){
var args = cljs.core.seq(arglist__235951);
return G__235949__delegate(args);
});
G__235949.cljs$core$IFn$_invoke$arity$variadic = G__235949__delegate;
return G__235949;
})()
;

return null;
});
