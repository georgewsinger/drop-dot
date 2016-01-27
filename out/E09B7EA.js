goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32301__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32302__i = 0, G__32302__a = new Array(arguments.length -  0);
while (G__32302__i < G__32302__a.length) {G__32302__a[G__32302__i] = arguments[G__32302__i + 0]; ++G__32302__i;}
  args = new cljs.core.IndexedSeq(G__32302__a,0);
} 
return G__32301__delegate.call(this,args);};
G__32301.cljs$lang$maxFixedArity = 0;
G__32301.cljs$lang$applyTo = (function (arglist__32303){
var args = cljs.core.seq(arglist__32303);
return G__32301__delegate(args);
});
G__32301.cljs$core$IFn$_invoke$arity$variadic = G__32301__delegate;
return G__32301;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32304__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32305__i = 0, G__32305__a = new Array(arguments.length -  0);
while (G__32305__i < G__32305__a.length) {G__32305__a[G__32305__i] = arguments[G__32305__i + 0]; ++G__32305__i;}
  args = new cljs.core.IndexedSeq(G__32305__a,0);
} 
return G__32304__delegate.call(this,args);};
G__32304.cljs$lang$maxFixedArity = 0;
G__32304.cljs$lang$applyTo = (function (arglist__32306){
var args = cljs.core.seq(arglist__32306);
return G__32304__delegate(args);
});
G__32304.cljs$core$IFn$_invoke$arity$variadic = G__32304__delegate;
return G__32304;
})()
;

return null;
});
