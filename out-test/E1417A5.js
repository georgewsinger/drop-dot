goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26057__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26058__i = 0, G__26058__a = new Array(arguments.length -  0);
while (G__26058__i < G__26058__a.length) {G__26058__a[G__26058__i] = arguments[G__26058__i + 0]; ++G__26058__i;}
  args = new cljs.core.IndexedSeq(G__26058__a,0);
} 
return G__26057__delegate.call(this,args);};
G__26057.cljs$lang$maxFixedArity = 0;
G__26057.cljs$lang$applyTo = (function (arglist__26059){
var args = cljs.core.seq(arglist__26059);
return G__26057__delegate(args);
});
G__26057.cljs$core$IFn$_invoke$arity$variadic = G__26057__delegate;
return G__26057;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26060__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26061__i = 0, G__26061__a = new Array(arguments.length -  0);
while (G__26061__i < G__26061__a.length) {G__26061__a[G__26061__i] = arguments[G__26061__i + 0]; ++G__26061__i;}
  args = new cljs.core.IndexedSeq(G__26061__a,0);
} 
return G__26060__delegate.call(this,args);};
G__26060.cljs$lang$maxFixedArity = 0;
G__26060.cljs$lang$applyTo = (function (arglist__26062){
var args = cljs.core.seq(arglist__26062);
return G__26060__delegate(args);
});
G__26060.cljs$core$IFn$_invoke$arity$variadic = G__26060__delegate;
return G__26060;
})()
;

return null;
});
