goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32859__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32860__i = 0, G__32860__a = new Array(arguments.length -  0);
while (G__32860__i < G__32860__a.length) {G__32860__a[G__32860__i] = arguments[G__32860__i + 0]; ++G__32860__i;}
  args = new cljs.core.IndexedSeq(G__32860__a,0);
} 
return G__32859__delegate.call(this,args);};
G__32859.cljs$lang$maxFixedArity = 0;
G__32859.cljs$lang$applyTo = (function (arglist__32861){
var args = cljs.core.seq(arglist__32861);
return G__32859__delegate(args);
});
G__32859.cljs$core$IFn$_invoke$arity$variadic = G__32859__delegate;
return G__32859;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32862__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32863__i = 0, G__32863__a = new Array(arguments.length -  0);
while (G__32863__i < G__32863__a.length) {G__32863__a[G__32863__i] = arguments[G__32863__i + 0]; ++G__32863__i;}
  args = new cljs.core.IndexedSeq(G__32863__a,0);
} 
return G__32862__delegate.call(this,args);};
G__32862.cljs$lang$maxFixedArity = 0;
G__32862.cljs$lang$applyTo = (function (arglist__32864){
var args = cljs.core.seq(arglist__32864);
return G__32862__delegate(args);
});
G__32862.cljs$core$IFn$_invoke$arity$variadic = G__32862__delegate;
return G__32862;
})()
;

return null;
});
