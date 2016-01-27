goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__340042__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__340042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__340043__i = 0, G__340043__a = new Array(arguments.length -  0);
while (G__340043__i < G__340043__a.length) {G__340043__a[G__340043__i] = arguments[G__340043__i + 0]; ++G__340043__i;}
  args = new cljs.core.IndexedSeq(G__340043__a,0);
} 
return G__340042__delegate.call(this,args);};
G__340042.cljs$lang$maxFixedArity = 0;
G__340042.cljs$lang$applyTo = (function (arglist__340044){
var args = cljs.core.seq(arglist__340044);
return G__340042__delegate(args);
});
G__340042.cljs$core$IFn$_invoke$arity$variadic = G__340042__delegate;
return G__340042;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__340045__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__340045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__340046__i = 0, G__340046__a = new Array(arguments.length -  0);
while (G__340046__i < G__340046__a.length) {G__340046__a[G__340046__i] = arguments[G__340046__i + 0]; ++G__340046__i;}
  args = new cljs.core.IndexedSeq(G__340046__a,0);
} 
return G__340045__delegate.call(this,args);};
G__340045.cljs$lang$maxFixedArity = 0;
G__340045.cljs$lang$applyTo = (function (arglist__340047){
var args = cljs.core.seq(arglist__340047);
return G__340045__delegate(args);
});
G__340045.cljs$core$IFn$_invoke$arity$variadic = G__340045__delegate;
return G__340045;
})()
;

return null;
});
