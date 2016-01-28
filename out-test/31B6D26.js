goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45690__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45691__i = 0, G__45691__a = new Array(arguments.length -  0);
while (G__45691__i < G__45691__a.length) {G__45691__a[G__45691__i] = arguments[G__45691__i + 0]; ++G__45691__i;}
  args = new cljs.core.IndexedSeq(G__45691__a,0);
} 
return G__45690__delegate.call(this,args);};
G__45690.cljs$lang$maxFixedArity = 0;
G__45690.cljs$lang$applyTo = (function (arglist__45692){
var args = cljs.core.seq(arglist__45692);
return G__45690__delegate(args);
});
G__45690.cljs$core$IFn$_invoke$arity$variadic = G__45690__delegate;
return G__45690;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45693__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45694__i = 0, G__45694__a = new Array(arguments.length -  0);
while (G__45694__i < G__45694__a.length) {G__45694__a[G__45694__i] = arguments[G__45694__i + 0]; ++G__45694__i;}
  args = new cljs.core.IndexedSeq(G__45694__a,0);
} 
return G__45693__delegate.call(this,args);};
G__45693.cljs$lang$maxFixedArity = 0;
G__45693.cljs$lang$applyTo = (function (arglist__45695){
var args = cljs.core.seq(arglist__45695);
return G__45693__delegate(args);
});
G__45693.cljs$core$IFn$_invoke$arity$variadic = G__45693__delegate;
return G__45693;
})()
;

return null;
});
