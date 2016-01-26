goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21300__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21301__i = 0, G__21301__a = new Array(arguments.length -  0);
while (G__21301__i < G__21301__a.length) {G__21301__a[G__21301__i] = arguments[G__21301__i + 0]; ++G__21301__i;}
  args = new cljs.core.IndexedSeq(G__21301__a,0);
} 
return G__21300__delegate.call(this,args);};
G__21300.cljs$lang$maxFixedArity = 0;
G__21300.cljs$lang$applyTo = (function (arglist__21302){
var args = cljs.core.seq(arglist__21302);
return G__21300__delegate(args);
});
G__21300.cljs$core$IFn$_invoke$arity$variadic = G__21300__delegate;
return G__21300;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21303__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21304__i = 0, G__21304__a = new Array(arguments.length -  0);
while (G__21304__i < G__21304__a.length) {G__21304__a[G__21304__i] = arguments[G__21304__i + 0]; ++G__21304__i;}
  args = new cljs.core.IndexedSeq(G__21304__a,0);
} 
return G__21303__delegate.call(this,args);};
G__21303.cljs$lang$maxFixedArity = 0;
G__21303.cljs$lang$applyTo = (function (arglist__21305){
var args = cljs.core.seq(arglist__21305);
return G__21303__delegate(args);
});
G__21303.cljs$core$IFn$_invoke$arity$variadic = G__21303__delegate;
return G__21303;
})()
;

return null;
});
