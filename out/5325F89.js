goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__282579__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__282579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__282580__i = 0, G__282580__a = new Array(arguments.length -  0);
while (G__282580__i < G__282580__a.length) {G__282580__a[G__282580__i] = arguments[G__282580__i + 0]; ++G__282580__i;}
  args = new cljs.core.IndexedSeq(G__282580__a,0);
} 
return G__282579__delegate.call(this,args);};
G__282579.cljs$lang$maxFixedArity = 0;
G__282579.cljs$lang$applyTo = (function (arglist__282581){
var args = cljs.core.seq(arglist__282581);
return G__282579__delegate(args);
});
G__282579.cljs$core$IFn$_invoke$arity$variadic = G__282579__delegate;
return G__282579;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__282582__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__282582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__282583__i = 0, G__282583__a = new Array(arguments.length -  0);
while (G__282583__i < G__282583__a.length) {G__282583__a[G__282583__i] = arguments[G__282583__i + 0]; ++G__282583__i;}
  args = new cljs.core.IndexedSeq(G__282583__a,0);
} 
return G__282582__delegate.call(this,args);};
G__282582.cljs$lang$maxFixedArity = 0;
G__282582.cljs$lang$applyTo = (function (arglist__282584){
var args = cljs.core.seq(arglist__282584);
return G__282582__delegate(args);
});
G__282582.cljs$core$IFn$_invoke$arity$variadic = G__282582__delegate;
return G__282582;
})()
;

return null;
});
