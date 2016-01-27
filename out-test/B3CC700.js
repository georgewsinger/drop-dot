goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14430__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14431__i = 0, G__14431__a = new Array(arguments.length -  0);
while (G__14431__i < G__14431__a.length) {G__14431__a[G__14431__i] = arguments[G__14431__i + 0]; ++G__14431__i;}
  args = new cljs.core.IndexedSeq(G__14431__a,0);
} 
return G__14430__delegate.call(this,args);};
G__14430.cljs$lang$maxFixedArity = 0;
G__14430.cljs$lang$applyTo = (function (arglist__14432){
var args = cljs.core.seq(arglist__14432);
return G__14430__delegate(args);
});
G__14430.cljs$core$IFn$_invoke$arity$variadic = G__14430__delegate;
return G__14430;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14433__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14434__i = 0, G__14434__a = new Array(arguments.length -  0);
while (G__14434__i < G__14434__a.length) {G__14434__a[G__14434__i] = arguments[G__14434__i + 0]; ++G__14434__i;}
  args = new cljs.core.IndexedSeq(G__14434__a,0);
} 
return G__14433__delegate.call(this,args);};
G__14433.cljs$lang$maxFixedArity = 0;
G__14433.cljs$lang$applyTo = (function (arglist__14435){
var args = cljs.core.seq(arglist__14435);
return G__14433__delegate(args);
});
G__14433.cljs$core$IFn$_invoke$arity$variadic = G__14433__delegate;
return G__14433;
})()
;

return null;
});
