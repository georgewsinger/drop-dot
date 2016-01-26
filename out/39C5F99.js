goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__285526__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__285526 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__285527__i = 0, G__285527__a = new Array(arguments.length -  0);
while (G__285527__i < G__285527__a.length) {G__285527__a[G__285527__i] = arguments[G__285527__i + 0]; ++G__285527__i;}
  args = new cljs.core.IndexedSeq(G__285527__a,0);
} 
return G__285526__delegate.call(this,args);};
G__285526.cljs$lang$maxFixedArity = 0;
G__285526.cljs$lang$applyTo = (function (arglist__285528){
var args = cljs.core.seq(arglist__285528);
return G__285526__delegate(args);
});
G__285526.cljs$core$IFn$_invoke$arity$variadic = G__285526__delegate;
return G__285526;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__285529__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__285529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__285530__i = 0, G__285530__a = new Array(arguments.length -  0);
while (G__285530__i < G__285530__a.length) {G__285530__a[G__285530__i] = arguments[G__285530__i + 0]; ++G__285530__i;}
  args = new cljs.core.IndexedSeq(G__285530__a,0);
} 
return G__285529__delegate.call(this,args);};
G__285529.cljs$lang$maxFixedArity = 0;
G__285529.cljs$lang$applyTo = (function (arglist__285531){
var args = cljs.core.seq(arglist__285531);
return G__285529__delegate(args);
});
G__285529.cljs$core$IFn$_invoke$arity$variadic = G__285529__delegate;
return G__285529;
})()
;

return null;
});
