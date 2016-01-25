goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__235477__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__235477 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235478__i = 0, G__235478__a = new Array(arguments.length -  0);
while (G__235478__i < G__235478__a.length) {G__235478__a[G__235478__i] = arguments[G__235478__i + 0]; ++G__235478__i;}
  args = new cljs.core.IndexedSeq(G__235478__a,0);
} 
return G__235477__delegate.call(this,args);};
G__235477.cljs$lang$maxFixedArity = 0;
G__235477.cljs$lang$applyTo = (function (arglist__235479){
var args = cljs.core.seq(arglist__235479);
return G__235477__delegate(args);
});
G__235477.cljs$core$IFn$_invoke$arity$variadic = G__235477__delegate;
return G__235477;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__235480__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__235480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__235481__i = 0, G__235481__a = new Array(arguments.length -  0);
while (G__235481__i < G__235481__a.length) {G__235481__a[G__235481__i] = arguments[G__235481__i + 0]; ++G__235481__i;}
  args = new cljs.core.IndexedSeq(G__235481__a,0);
} 
return G__235480__delegate.call(this,args);};
G__235480.cljs$lang$maxFixedArity = 0;
G__235480.cljs$lang$applyTo = (function (arglist__235482){
var args = cljs.core.seq(arglist__235482);
return G__235480__delegate(args);
});
G__235480.cljs$core$IFn$_invoke$arity$variadic = G__235480__delegate;
return G__235480;
})()
;

return null;
});
