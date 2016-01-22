goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34376__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34376 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34377__i = 0, G__34377__a = new Array(arguments.length -  0);
while (G__34377__i < G__34377__a.length) {G__34377__a[G__34377__i] = arguments[G__34377__i + 0]; ++G__34377__i;}
  args = new cljs.core.IndexedSeq(G__34377__a,0);
} 
return G__34376__delegate.call(this,args);};
G__34376.cljs$lang$maxFixedArity = 0;
G__34376.cljs$lang$applyTo = (function (arglist__34378){
var args = cljs.core.seq(arglist__34378);
return G__34376__delegate(args);
});
G__34376.cljs$core$IFn$_invoke$arity$variadic = G__34376__delegate;
return G__34376;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34379__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34380__i = 0, G__34380__a = new Array(arguments.length -  0);
while (G__34380__i < G__34380__a.length) {G__34380__a[G__34380__i] = arguments[G__34380__i + 0]; ++G__34380__i;}
  args = new cljs.core.IndexedSeq(G__34380__a,0);
} 
return G__34379__delegate.call(this,args);};
G__34379.cljs$lang$maxFixedArity = 0;
G__34379.cljs$lang$applyTo = (function (arglist__34381){
var args = cljs.core.seq(arglist__34381);
return G__34379__delegate(args);
});
G__34379.cljs$core$IFn$_invoke$arity$variadic = G__34379__delegate;
return G__34379;
})()
;

return null;
});
