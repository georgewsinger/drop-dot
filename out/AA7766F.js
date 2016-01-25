goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18955__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18956__i = 0, G__18956__a = new Array(arguments.length -  0);
while (G__18956__i < G__18956__a.length) {G__18956__a[G__18956__i] = arguments[G__18956__i + 0]; ++G__18956__i;}
  args = new cljs.core.IndexedSeq(G__18956__a,0);
} 
return G__18955__delegate.call(this,args);};
G__18955.cljs$lang$maxFixedArity = 0;
G__18955.cljs$lang$applyTo = (function (arglist__18957){
var args = cljs.core.seq(arglist__18957);
return G__18955__delegate(args);
});
G__18955.cljs$core$IFn$_invoke$arity$variadic = G__18955__delegate;
return G__18955;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18958__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18959__i = 0, G__18959__a = new Array(arguments.length -  0);
while (G__18959__i < G__18959__a.length) {G__18959__a[G__18959__i] = arguments[G__18959__i + 0]; ++G__18959__i;}
  args = new cljs.core.IndexedSeq(G__18959__a,0);
} 
return G__18958__delegate.call(this,args);};
G__18958.cljs$lang$maxFixedArity = 0;
G__18958.cljs$lang$applyTo = (function (arglist__18960){
var args = cljs.core.seq(arglist__18960);
return G__18958__delegate(args);
});
G__18958.cljs$core$IFn$_invoke$arity$variadic = G__18958__delegate;
return G__18958;
})()
;

return null;
});
