goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__291654__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__291654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__291655__i = 0, G__291655__a = new Array(arguments.length -  0);
while (G__291655__i < G__291655__a.length) {G__291655__a[G__291655__i] = arguments[G__291655__i + 0]; ++G__291655__i;}
  args = new cljs.core.IndexedSeq(G__291655__a,0);
} 
return G__291654__delegate.call(this,args);};
G__291654.cljs$lang$maxFixedArity = 0;
G__291654.cljs$lang$applyTo = (function (arglist__291656){
var args = cljs.core.seq(arglist__291656);
return G__291654__delegate(args);
});
G__291654.cljs$core$IFn$_invoke$arity$variadic = G__291654__delegate;
return G__291654;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__291657__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__291657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__291658__i = 0, G__291658__a = new Array(arguments.length -  0);
while (G__291658__i < G__291658__a.length) {G__291658__a[G__291658__i] = arguments[G__291658__i + 0]; ++G__291658__i;}
  args = new cljs.core.IndexedSeq(G__291658__a,0);
} 
return G__291657__delegate.call(this,args);};
G__291657.cljs$lang$maxFixedArity = 0;
G__291657.cljs$lang$applyTo = (function (arglist__291659){
var args = cljs.core.seq(arglist__291659);
return G__291657__delegate(args);
});
G__291657.cljs$core$IFn$_invoke$arity$variadic = G__291657__delegate;
return G__291657;
})()
;

return null;
});
