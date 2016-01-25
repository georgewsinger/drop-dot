goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__195235__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__195235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__195236__i = 0, G__195236__a = new Array(arguments.length -  0);
while (G__195236__i < G__195236__a.length) {G__195236__a[G__195236__i] = arguments[G__195236__i + 0]; ++G__195236__i;}
  args = new cljs.core.IndexedSeq(G__195236__a,0);
} 
return G__195235__delegate.call(this,args);};
G__195235.cljs$lang$maxFixedArity = 0;
G__195235.cljs$lang$applyTo = (function (arglist__195237){
var args = cljs.core.seq(arglist__195237);
return G__195235__delegate(args);
});
G__195235.cljs$core$IFn$_invoke$arity$variadic = G__195235__delegate;
return G__195235;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__195238__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__195238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__195239__i = 0, G__195239__a = new Array(arguments.length -  0);
while (G__195239__i < G__195239__a.length) {G__195239__a[G__195239__i] = arguments[G__195239__i + 0]; ++G__195239__i;}
  args = new cljs.core.IndexedSeq(G__195239__a,0);
} 
return G__195238__delegate.call(this,args);};
G__195238.cljs$lang$maxFixedArity = 0;
G__195238.cljs$lang$applyTo = (function (arglist__195240){
var args = cljs.core.seq(arglist__195240);
return G__195238__delegate(args);
});
G__195238.cljs$core$IFn$_invoke$arity$variadic = G__195238__delegate;
return G__195238;
})()
;

return null;
});
