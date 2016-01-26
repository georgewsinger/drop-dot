goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25643__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25644__i = 0, G__25644__a = new Array(arguments.length -  0);
while (G__25644__i < G__25644__a.length) {G__25644__a[G__25644__i] = arguments[G__25644__i + 0]; ++G__25644__i;}
  args = new cljs.core.IndexedSeq(G__25644__a,0);
} 
return G__25643__delegate.call(this,args);};
G__25643.cljs$lang$maxFixedArity = 0;
G__25643.cljs$lang$applyTo = (function (arglist__25645){
var args = cljs.core.seq(arglist__25645);
return G__25643__delegate(args);
});
G__25643.cljs$core$IFn$_invoke$arity$variadic = G__25643__delegate;
return G__25643;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25646__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25647__i = 0, G__25647__a = new Array(arguments.length -  0);
while (G__25647__i < G__25647__a.length) {G__25647__a[G__25647__i] = arguments[G__25647__i + 0]; ++G__25647__i;}
  args = new cljs.core.IndexedSeq(G__25647__a,0);
} 
return G__25646__delegate.call(this,args);};
G__25646.cljs$lang$maxFixedArity = 0;
G__25646.cljs$lang$applyTo = (function (arglist__25648){
var args = cljs.core.seq(arglist__25648);
return G__25646__delegate(args);
});
G__25646.cljs$core$IFn$_invoke$arity$variadic = G__25646__delegate;
return G__25646;
})()
;

return null;
});
