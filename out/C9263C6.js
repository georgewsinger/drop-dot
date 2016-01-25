goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11180__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11181__i = 0, G__11181__a = new Array(arguments.length -  0);
while (G__11181__i < G__11181__a.length) {G__11181__a[G__11181__i] = arguments[G__11181__i + 0]; ++G__11181__i;}
  args = new cljs.core.IndexedSeq(G__11181__a,0);
} 
return G__11180__delegate.call(this,args);};
G__11180.cljs$lang$maxFixedArity = 0;
G__11180.cljs$lang$applyTo = (function (arglist__11182){
var args = cljs.core.seq(arglist__11182);
return G__11180__delegate(args);
});
G__11180.cljs$core$IFn$_invoke$arity$variadic = G__11180__delegate;
return G__11180;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11183__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11184__i = 0, G__11184__a = new Array(arguments.length -  0);
while (G__11184__i < G__11184__a.length) {G__11184__a[G__11184__i] = arguments[G__11184__i + 0]; ++G__11184__i;}
  args = new cljs.core.IndexedSeq(G__11184__a,0);
} 
return G__11183__delegate.call(this,args);};
G__11183.cljs$lang$maxFixedArity = 0;
G__11183.cljs$lang$applyTo = (function (arglist__11185){
var args = cljs.core.seq(arglist__11185);
return G__11183__delegate(args);
});
G__11183.cljs$core$IFn$_invoke$arity$variadic = G__11183__delegate;
return G__11183;
})()
;

return null;
});
