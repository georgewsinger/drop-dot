goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11758__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11759__i = 0, G__11759__a = new Array(arguments.length -  0);
while (G__11759__i < G__11759__a.length) {G__11759__a[G__11759__i] = arguments[G__11759__i + 0]; ++G__11759__i;}
  args = new cljs.core.IndexedSeq(G__11759__a,0);
} 
return G__11758__delegate.call(this,args);};
G__11758.cljs$lang$maxFixedArity = 0;
G__11758.cljs$lang$applyTo = (function (arglist__11760){
var args = cljs.core.seq(arglist__11760);
return G__11758__delegate(args);
});
G__11758.cljs$core$IFn$_invoke$arity$variadic = G__11758__delegate;
return G__11758;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11761__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11762__i = 0, G__11762__a = new Array(arguments.length -  0);
while (G__11762__i < G__11762__a.length) {G__11762__a[G__11762__i] = arguments[G__11762__i + 0]; ++G__11762__i;}
  args = new cljs.core.IndexedSeq(G__11762__a,0);
} 
return G__11761__delegate.call(this,args);};
G__11761.cljs$lang$maxFixedArity = 0;
G__11761.cljs$lang$applyTo = (function (arglist__11763){
var args = cljs.core.seq(arglist__11763);
return G__11761__delegate(args);
});
G__11761.cljs$core$IFn$_invoke$arity$variadic = G__11761__delegate;
return G__11761;
})()
;

return null;
});
