goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__295249__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__295249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295250__i = 0, G__295250__a = new Array(arguments.length -  0);
while (G__295250__i < G__295250__a.length) {G__295250__a[G__295250__i] = arguments[G__295250__i + 0]; ++G__295250__i;}
  args = new cljs.core.IndexedSeq(G__295250__a,0);
} 
return G__295249__delegate.call(this,args);};
G__295249.cljs$lang$maxFixedArity = 0;
G__295249.cljs$lang$applyTo = (function (arglist__295251){
var args = cljs.core.seq(arglist__295251);
return G__295249__delegate(args);
});
G__295249.cljs$core$IFn$_invoke$arity$variadic = G__295249__delegate;
return G__295249;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__295252__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__295252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295253__i = 0, G__295253__a = new Array(arguments.length -  0);
while (G__295253__i < G__295253__a.length) {G__295253__a[G__295253__i] = arguments[G__295253__i + 0]; ++G__295253__i;}
  args = new cljs.core.IndexedSeq(G__295253__a,0);
} 
return G__295252__delegate.call(this,args);};
G__295252.cljs$lang$maxFixedArity = 0;
G__295252.cljs$lang$applyTo = (function (arglist__295254){
var args = cljs.core.seq(arglist__295254);
return G__295252__delegate(args);
});
G__295252.cljs$core$IFn$_invoke$arity$variadic = G__295252__delegate;
return G__295252;
})()
;

return null;
});
