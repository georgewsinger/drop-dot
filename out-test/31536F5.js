goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49711__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49712__i = 0, G__49712__a = new Array(arguments.length -  0);
while (G__49712__i < G__49712__a.length) {G__49712__a[G__49712__i] = arguments[G__49712__i + 0]; ++G__49712__i;}
  args = new cljs.core.IndexedSeq(G__49712__a,0);
} 
return G__49711__delegate.call(this,args);};
G__49711.cljs$lang$maxFixedArity = 0;
G__49711.cljs$lang$applyTo = (function (arglist__49713){
var args = cljs.core.seq(arglist__49713);
return G__49711__delegate(args);
});
G__49711.cljs$core$IFn$_invoke$arity$variadic = G__49711__delegate;
return G__49711;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49714__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49715__i = 0, G__49715__a = new Array(arguments.length -  0);
while (G__49715__i < G__49715__a.length) {G__49715__a[G__49715__i] = arguments[G__49715__i + 0]; ++G__49715__i;}
  args = new cljs.core.IndexedSeq(G__49715__a,0);
} 
return G__49714__delegate.call(this,args);};
G__49714.cljs$lang$maxFixedArity = 0;
G__49714.cljs$lang$applyTo = (function (arglist__49716){
var args = cljs.core.seq(arglist__49716);
return G__49714__delegate(args);
});
G__49714.cljs$core$IFn$_invoke$arity$variadic = G__49714__delegate;
return G__49714;
})()
;

return null;
});
