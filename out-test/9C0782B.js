goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26532__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26533__i = 0, G__26533__a = new Array(arguments.length -  0);
while (G__26533__i < G__26533__a.length) {G__26533__a[G__26533__i] = arguments[G__26533__i + 0]; ++G__26533__i;}
  args = new cljs.core.IndexedSeq(G__26533__a,0);
} 
return G__26532__delegate.call(this,args);};
G__26532.cljs$lang$maxFixedArity = 0;
G__26532.cljs$lang$applyTo = (function (arglist__26534){
var args = cljs.core.seq(arglist__26534);
return G__26532__delegate(args);
});
G__26532.cljs$core$IFn$_invoke$arity$variadic = G__26532__delegate;
return G__26532;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26535__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26536__i = 0, G__26536__a = new Array(arguments.length -  0);
while (G__26536__i < G__26536__a.length) {G__26536__a[G__26536__i] = arguments[G__26536__i + 0]; ++G__26536__i;}
  args = new cljs.core.IndexedSeq(G__26536__a,0);
} 
return G__26535__delegate.call(this,args);};
G__26535.cljs$lang$maxFixedArity = 0;
G__26535.cljs$lang$applyTo = (function (arglist__26537){
var args = cljs.core.seq(arglist__26537);
return G__26535__delegate(args);
});
G__26535.cljs$core$IFn$_invoke$arity$variadic = G__26535__delegate;
return G__26535;
})()
;

return null;
});
