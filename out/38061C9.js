goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25647__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25648__i = 0, G__25648__a = new Array(arguments.length -  0);
while (G__25648__i < G__25648__a.length) {G__25648__a[G__25648__i] = arguments[G__25648__i + 0]; ++G__25648__i;}
  args = new cljs.core.IndexedSeq(G__25648__a,0);
} 
return G__25647__delegate.call(this,args);};
G__25647.cljs$lang$maxFixedArity = 0;
G__25647.cljs$lang$applyTo = (function (arglist__25649){
var args = cljs.core.seq(arglist__25649);
return G__25647__delegate(args);
});
G__25647.cljs$core$IFn$_invoke$arity$variadic = G__25647__delegate;
return G__25647;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25650__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25651__i = 0, G__25651__a = new Array(arguments.length -  0);
while (G__25651__i < G__25651__a.length) {G__25651__a[G__25651__i] = arguments[G__25651__i + 0]; ++G__25651__i;}
  args = new cljs.core.IndexedSeq(G__25651__a,0);
} 
return G__25650__delegate.call(this,args);};
G__25650.cljs$lang$maxFixedArity = 0;
G__25650.cljs$lang$applyTo = (function (arglist__25652){
var args = cljs.core.seq(arglist__25652);
return G__25650__delegate(args);
});
G__25650.cljs$core$IFn$_invoke$arity$variadic = G__25650__delegate;
return G__25650;
})()
;

return null;
});
