goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__281300__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__281300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__281301__i = 0, G__281301__a = new Array(arguments.length -  0);
while (G__281301__i < G__281301__a.length) {G__281301__a[G__281301__i] = arguments[G__281301__i + 0]; ++G__281301__i;}
  args = new cljs.core.IndexedSeq(G__281301__a,0);
} 
return G__281300__delegate.call(this,args);};
G__281300.cljs$lang$maxFixedArity = 0;
G__281300.cljs$lang$applyTo = (function (arglist__281302){
var args = cljs.core.seq(arglist__281302);
return G__281300__delegate(args);
});
G__281300.cljs$core$IFn$_invoke$arity$variadic = G__281300__delegate;
return G__281300;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__281303__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__281303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__281304__i = 0, G__281304__a = new Array(arguments.length -  0);
while (G__281304__i < G__281304__a.length) {G__281304__a[G__281304__i] = arguments[G__281304__i + 0]; ++G__281304__i;}
  args = new cljs.core.IndexedSeq(G__281304__a,0);
} 
return G__281303__delegate.call(this,args);};
G__281303.cljs$lang$maxFixedArity = 0;
G__281303.cljs$lang$applyTo = (function (arglist__281305){
var args = cljs.core.seq(arglist__281305);
return G__281303__delegate(args);
});
G__281303.cljs$core$IFn$_invoke$arity$variadic = G__281303__delegate;
return G__281303;
})()
;

return null;
});
