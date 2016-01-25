goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54754__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54755__i = 0, G__54755__a = new Array(arguments.length -  0);
while (G__54755__i < G__54755__a.length) {G__54755__a[G__54755__i] = arguments[G__54755__i + 0]; ++G__54755__i;}
  args = new cljs.core.IndexedSeq(G__54755__a,0);
} 
return G__54754__delegate.call(this,args);};
G__54754.cljs$lang$maxFixedArity = 0;
G__54754.cljs$lang$applyTo = (function (arglist__54756){
var args = cljs.core.seq(arglist__54756);
return G__54754__delegate(args);
});
G__54754.cljs$core$IFn$_invoke$arity$variadic = G__54754__delegate;
return G__54754;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54757__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54757 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54758__i = 0, G__54758__a = new Array(arguments.length -  0);
while (G__54758__i < G__54758__a.length) {G__54758__a[G__54758__i] = arguments[G__54758__i + 0]; ++G__54758__i;}
  args = new cljs.core.IndexedSeq(G__54758__a,0);
} 
return G__54757__delegate.call(this,args);};
G__54757.cljs$lang$maxFixedArity = 0;
G__54757.cljs$lang$applyTo = (function (arglist__54759){
var args = cljs.core.seq(arglist__54759);
return G__54757__delegate(args);
});
G__54757.cljs$core$IFn$_invoke$arity$variadic = G__54757__delegate;
return G__54757;
})()
;

return null;
});
