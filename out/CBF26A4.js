goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57086__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57087__i = 0, G__57087__a = new Array(arguments.length -  0);
while (G__57087__i < G__57087__a.length) {G__57087__a[G__57087__i] = arguments[G__57087__i + 0]; ++G__57087__i;}
  args = new cljs.core.IndexedSeq(G__57087__a,0);
} 
return G__57086__delegate.call(this,args);};
G__57086.cljs$lang$maxFixedArity = 0;
G__57086.cljs$lang$applyTo = (function (arglist__57088){
var args = cljs.core.seq(arglist__57088);
return G__57086__delegate(args);
});
G__57086.cljs$core$IFn$_invoke$arity$variadic = G__57086__delegate;
return G__57086;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57089__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57090__i = 0, G__57090__a = new Array(arguments.length -  0);
while (G__57090__i < G__57090__a.length) {G__57090__a[G__57090__i] = arguments[G__57090__i + 0]; ++G__57090__i;}
  args = new cljs.core.IndexedSeq(G__57090__a,0);
} 
return G__57089__delegate.call(this,args);};
G__57089.cljs$lang$maxFixedArity = 0;
G__57089.cljs$lang$applyTo = (function (arglist__57091){
var args = cljs.core.seq(arglist__57091);
return G__57089__delegate(args);
});
G__57089.cljs$core$IFn$_invoke$arity$variadic = G__57089__delegate;
return G__57089;
})()
;

return null;
});
