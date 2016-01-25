goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18053__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18053 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18054__i = 0, G__18054__a = new Array(arguments.length -  0);
while (G__18054__i < G__18054__a.length) {G__18054__a[G__18054__i] = arguments[G__18054__i + 0]; ++G__18054__i;}
  args = new cljs.core.IndexedSeq(G__18054__a,0);
} 
return G__18053__delegate.call(this,args);};
G__18053.cljs$lang$maxFixedArity = 0;
G__18053.cljs$lang$applyTo = (function (arglist__18055){
var args = cljs.core.seq(arglist__18055);
return G__18053__delegate(args);
});
G__18053.cljs$core$IFn$_invoke$arity$variadic = G__18053__delegate;
return G__18053;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18056__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18056 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18057__i = 0, G__18057__a = new Array(arguments.length -  0);
while (G__18057__i < G__18057__a.length) {G__18057__a[G__18057__i] = arguments[G__18057__i + 0]; ++G__18057__i;}
  args = new cljs.core.IndexedSeq(G__18057__a,0);
} 
return G__18056__delegate.call(this,args);};
G__18056.cljs$lang$maxFixedArity = 0;
G__18056.cljs$lang$applyTo = (function (arglist__18058){
var args = cljs.core.seq(arglist__18058);
return G__18056__delegate(args);
});
G__18056.cljs$core$IFn$_invoke$arity$variadic = G__18056__delegate;
return G__18056;
})()
;

return null;
});
