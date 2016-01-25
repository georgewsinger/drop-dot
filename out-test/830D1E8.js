goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46651__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46652__i = 0, G__46652__a = new Array(arguments.length -  0);
while (G__46652__i < G__46652__a.length) {G__46652__a[G__46652__i] = arguments[G__46652__i + 0]; ++G__46652__i;}
  args = new cljs.core.IndexedSeq(G__46652__a,0);
} 
return G__46651__delegate.call(this,args);};
G__46651.cljs$lang$maxFixedArity = 0;
G__46651.cljs$lang$applyTo = (function (arglist__46653){
var args = cljs.core.seq(arglist__46653);
return G__46651__delegate(args);
});
G__46651.cljs$core$IFn$_invoke$arity$variadic = G__46651__delegate;
return G__46651;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46654__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46654 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46655__i = 0, G__46655__a = new Array(arguments.length -  0);
while (G__46655__i < G__46655__a.length) {G__46655__a[G__46655__i] = arguments[G__46655__i + 0]; ++G__46655__i;}
  args = new cljs.core.IndexedSeq(G__46655__a,0);
} 
return G__46654__delegate.call(this,args);};
G__46654.cljs$lang$maxFixedArity = 0;
G__46654.cljs$lang$applyTo = (function (arglist__46656){
var args = cljs.core.seq(arglist__46656);
return G__46654__delegate(args);
});
G__46654.cljs$core$IFn$_invoke$arity$variadic = G__46654__delegate;
return G__46654;
})()
;

return null;
});
