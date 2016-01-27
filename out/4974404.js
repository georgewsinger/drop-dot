goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__343108__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__343108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__343109__i = 0, G__343109__a = new Array(arguments.length -  0);
while (G__343109__i < G__343109__a.length) {G__343109__a[G__343109__i] = arguments[G__343109__i + 0]; ++G__343109__i;}
  args = new cljs.core.IndexedSeq(G__343109__a,0);
} 
return G__343108__delegate.call(this,args);};
G__343108.cljs$lang$maxFixedArity = 0;
G__343108.cljs$lang$applyTo = (function (arglist__343110){
var args = cljs.core.seq(arglist__343110);
return G__343108__delegate(args);
});
G__343108.cljs$core$IFn$_invoke$arity$variadic = G__343108__delegate;
return G__343108;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__343111__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__343111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__343112__i = 0, G__343112__a = new Array(arguments.length -  0);
while (G__343112__i < G__343112__a.length) {G__343112__a[G__343112__i] = arguments[G__343112__i + 0]; ++G__343112__i;}
  args = new cljs.core.IndexedSeq(G__343112__a,0);
} 
return G__343111__delegate.call(this,args);};
G__343111.cljs$lang$maxFixedArity = 0;
G__343111.cljs$lang$applyTo = (function (arglist__343113){
var args = cljs.core.seq(arglist__343113);
return G__343111__delegate(args);
});
G__343111.cljs$core$IFn$_invoke$arity$variadic = G__343111__delegate;
return G__343111;
})()
;

return null;
});
