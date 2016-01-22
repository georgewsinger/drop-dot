goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11348__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11349__i = 0, G__11349__a = new Array(arguments.length -  0);
while (G__11349__i < G__11349__a.length) {G__11349__a[G__11349__i] = arguments[G__11349__i + 0]; ++G__11349__i;}
  args = new cljs.core.IndexedSeq(G__11349__a,0);
} 
return G__11348__delegate.call(this,args);};
G__11348.cljs$lang$maxFixedArity = 0;
G__11348.cljs$lang$applyTo = (function (arglist__11350){
var args = cljs.core.seq(arglist__11350);
return G__11348__delegate(args);
});
G__11348.cljs$core$IFn$_invoke$arity$variadic = G__11348__delegate;
return G__11348;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11351__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11352__i = 0, G__11352__a = new Array(arguments.length -  0);
while (G__11352__i < G__11352__a.length) {G__11352__a[G__11352__i] = arguments[G__11352__i + 0]; ++G__11352__i;}
  args = new cljs.core.IndexedSeq(G__11352__a,0);
} 
return G__11351__delegate.call(this,args);};
G__11351.cljs$lang$maxFixedArity = 0;
G__11351.cljs$lang$applyTo = (function (arglist__11353){
var args = cljs.core.seq(arglist__11353);
return G__11351__delegate(args);
});
G__11351.cljs$core$IFn$_invoke$arity$variadic = G__11351__delegate;
return G__11351;
})()
;

return null;
});
