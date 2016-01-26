goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11883__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11884__i = 0, G__11884__a = new Array(arguments.length -  0);
while (G__11884__i < G__11884__a.length) {G__11884__a[G__11884__i] = arguments[G__11884__i + 0]; ++G__11884__i;}
  args = new cljs.core.IndexedSeq(G__11884__a,0);
} 
return G__11883__delegate.call(this,args);};
G__11883.cljs$lang$maxFixedArity = 0;
G__11883.cljs$lang$applyTo = (function (arglist__11885){
var args = cljs.core.seq(arglist__11885);
return G__11883__delegate(args);
});
G__11883.cljs$core$IFn$_invoke$arity$variadic = G__11883__delegate;
return G__11883;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11886__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11887__i = 0, G__11887__a = new Array(arguments.length -  0);
while (G__11887__i < G__11887__a.length) {G__11887__a[G__11887__i] = arguments[G__11887__i + 0]; ++G__11887__i;}
  args = new cljs.core.IndexedSeq(G__11887__a,0);
} 
return G__11886__delegate.call(this,args);};
G__11886.cljs$lang$maxFixedArity = 0;
G__11886.cljs$lang$applyTo = (function (arglist__11888){
var args = cljs.core.seq(arglist__11888);
return G__11886__delegate(args);
});
G__11886.cljs$core$IFn$_invoke$arity$variadic = G__11886__delegate;
return G__11886;
})()
;

return null;
});
