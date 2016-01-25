goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18042__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18043__i = 0, G__18043__a = new Array(arguments.length -  0);
while (G__18043__i < G__18043__a.length) {G__18043__a[G__18043__i] = arguments[G__18043__i + 0]; ++G__18043__i;}
  args = new cljs.core.IndexedSeq(G__18043__a,0);
} 
return G__18042__delegate.call(this,args);};
G__18042.cljs$lang$maxFixedArity = 0;
G__18042.cljs$lang$applyTo = (function (arglist__18044){
var args = cljs.core.seq(arglist__18044);
return G__18042__delegate(args);
});
G__18042.cljs$core$IFn$_invoke$arity$variadic = G__18042__delegate;
return G__18042;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18045__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18046__i = 0, G__18046__a = new Array(arguments.length -  0);
while (G__18046__i < G__18046__a.length) {G__18046__a[G__18046__i] = arguments[G__18046__i + 0]; ++G__18046__i;}
  args = new cljs.core.IndexedSeq(G__18046__a,0);
} 
return G__18045__delegate.call(this,args);};
G__18045.cljs$lang$maxFixedArity = 0;
G__18045.cljs$lang$applyTo = (function (arglist__18047){
var args = cljs.core.seq(arglist__18047);
return G__18045__delegate(args);
});
G__18045.cljs$core$IFn$_invoke$arity$variadic = G__18045__delegate;
return G__18045;
})()
;

return null;
});
