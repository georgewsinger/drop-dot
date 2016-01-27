goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__317585__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__317585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__317586__i = 0, G__317586__a = new Array(arguments.length -  0);
while (G__317586__i < G__317586__a.length) {G__317586__a[G__317586__i] = arguments[G__317586__i + 0]; ++G__317586__i;}
  args = new cljs.core.IndexedSeq(G__317586__a,0);
} 
return G__317585__delegate.call(this,args);};
G__317585.cljs$lang$maxFixedArity = 0;
G__317585.cljs$lang$applyTo = (function (arglist__317587){
var args = cljs.core.seq(arglist__317587);
return G__317585__delegate(args);
});
G__317585.cljs$core$IFn$_invoke$arity$variadic = G__317585__delegate;
return G__317585;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__317588__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__317588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__317589__i = 0, G__317589__a = new Array(arguments.length -  0);
while (G__317589__i < G__317589__a.length) {G__317589__a[G__317589__i] = arguments[G__317589__i + 0]; ++G__317589__i;}
  args = new cljs.core.IndexedSeq(G__317589__a,0);
} 
return G__317588__delegate.call(this,args);};
G__317588.cljs$lang$maxFixedArity = 0;
G__317588.cljs$lang$applyTo = (function (arglist__317590){
var args = cljs.core.seq(arglist__317590);
return G__317588__delegate(args);
});
G__317588.cljs$core$IFn$_invoke$arity$variadic = G__317588__delegate;
return G__317588;
})()
;

return null;
});
