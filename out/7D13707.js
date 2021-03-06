goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__296757__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__296757 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__296758__i = 0, G__296758__a = new Array(arguments.length -  0);
while (G__296758__i < G__296758__a.length) {G__296758__a[G__296758__i] = arguments[G__296758__i + 0]; ++G__296758__i;}
  args = new cljs.core.IndexedSeq(G__296758__a,0);
} 
return G__296757__delegate.call(this,args);};
G__296757.cljs$lang$maxFixedArity = 0;
G__296757.cljs$lang$applyTo = (function (arglist__296759){
var args = cljs.core.seq(arglist__296759);
return G__296757__delegate(args);
});
G__296757.cljs$core$IFn$_invoke$arity$variadic = G__296757__delegate;
return G__296757;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__296760__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__296760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__296761__i = 0, G__296761__a = new Array(arguments.length -  0);
while (G__296761__i < G__296761__a.length) {G__296761__a[G__296761__i] = arguments[G__296761__i + 0]; ++G__296761__i;}
  args = new cljs.core.IndexedSeq(G__296761__a,0);
} 
return G__296760__delegate.call(this,args);};
G__296760.cljs$lang$maxFixedArity = 0;
G__296760.cljs$lang$applyTo = (function (arglist__296762){
var args = cljs.core.seq(arglist__296762);
return G__296760__delegate(args);
});
G__296760.cljs$core$IFn$_invoke$arity$variadic = G__296760__delegate;
return G__296760;
})()
;

return null;
});
