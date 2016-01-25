goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16822__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16823__i = 0, G__16823__a = new Array(arguments.length -  0);
while (G__16823__i < G__16823__a.length) {G__16823__a[G__16823__i] = arguments[G__16823__i + 0]; ++G__16823__i;}
  args = new cljs.core.IndexedSeq(G__16823__a,0);
} 
return G__16822__delegate.call(this,args);};
G__16822.cljs$lang$maxFixedArity = 0;
G__16822.cljs$lang$applyTo = (function (arglist__16824){
var args = cljs.core.seq(arglist__16824);
return G__16822__delegate(args);
});
G__16822.cljs$core$IFn$_invoke$arity$variadic = G__16822__delegate;
return G__16822;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16825__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16826__i = 0, G__16826__a = new Array(arguments.length -  0);
while (G__16826__i < G__16826__a.length) {G__16826__a[G__16826__i] = arguments[G__16826__i + 0]; ++G__16826__i;}
  args = new cljs.core.IndexedSeq(G__16826__a,0);
} 
return G__16825__delegate.call(this,args);};
G__16825.cljs$lang$maxFixedArity = 0;
G__16825.cljs$lang$applyTo = (function (arglist__16827){
var args = cljs.core.seq(arglist__16827);
return G__16825__delegate(args);
});
G__16825.cljs$core$IFn$_invoke$arity$variadic = G__16825__delegate;
return G__16825;
})()
;

return null;
});
