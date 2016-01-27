goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19040__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19041__i = 0, G__19041__a = new Array(arguments.length -  0);
while (G__19041__i < G__19041__a.length) {G__19041__a[G__19041__i] = arguments[G__19041__i + 0]; ++G__19041__i;}
  args = new cljs.core.IndexedSeq(G__19041__a,0);
} 
return G__19040__delegate.call(this,args);};
G__19040.cljs$lang$maxFixedArity = 0;
G__19040.cljs$lang$applyTo = (function (arglist__19042){
var args = cljs.core.seq(arglist__19042);
return G__19040__delegate(args);
});
G__19040.cljs$core$IFn$_invoke$arity$variadic = G__19040__delegate;
return G__19040;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19043__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19043 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19044__i = 0, G__19044__a = new Array(arguments.length -  0);
while (G__19044__i < G__19044__a.length) {G__19044__a[G__19044__i] = arguments[G__19044__i + 0]; ++G__19044__i;}
  args = new cljs.core.IndexedSeq(G__19044__a,0);
} 
return G__19043__delegate.call(this,args);};
G__19043.cljs$lang$maxFixedArity = 0;
G__19043.cljs$lang$applyTo = (function (arglist__19045){
var args = cljs.core.seq(arglist__19045);
return G__19043__delegate(args);
});
G__19043.cljs$core$IFn$_invoke$arity$variadic = G__19043__delegate;
return G__19043;
})()
;

return null;
});
