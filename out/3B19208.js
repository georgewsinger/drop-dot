goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__105646__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__105646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__105647__i = 0, G__105647__a = new Array(arguments.length -  0);
while (G__105647__i < G__105647__a.length) {G__105647__a[G__105647__i] = arguments[G__105647__i + 0]; ++G__105647__i;}
  args = new cljs.core.IndexedSeq(G__105647__a,0);
} 
return G__105646__delegate.call(this,args);};
G__105646.cljs$lang$maxFixedArity = 0;
G__105646.cljs$lang$applyTo = (function (arglist__105648){
var args = cljs.core.seq(arglist__105648);
return G__105646__delegate(args);
});
G__105646.cljs$core$IFn$_invoke$arity$variadic = G__105646__delegate;
return G__105646;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__105649__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__105649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__105650__i = 0, G__105650__a = new Array(arguments.length -  0);
while (G__105650__i < G__105650__a.length) {G__105650__a[G__105650__i] = arguments[G__105650__i + 0]; ++G__105650__i;}
  args = new cljs.core.IndexedSeq(G__105650__a,0);
} 
return G__105649__delegate.call(this,args);};
G__105649.cljs$lang$maxFixedArity = 0;
G__105649.cljs$lang$applyTo = (function (arglist__105651){
var args = cljs.core.seq(arglist__105651);
return G__105649__delegate(args);
});
G__105649.cljs$core$IFn$_invoke$arity$variadic = G__105649__delegate;
return G__105649;
})()
;

return null;
});
