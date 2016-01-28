goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__68754__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__68754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68755__i = 0, G__68755__a = new Array(arguments.length -  0);
while (G__68755__i < G__68755__a.length) {G__68755__a[G__68755__i] = arguments[G__68755__i + 0]; ++G__68755__i;}
  args = new cljs.core.IndexedSeq(G__68755__a,0);
} 
return G__68754__delegate.call(this,args);};
G__68754.cljs$lang$maxFixedArity = 0;
G__68754.cljs$lang$applyTo = (function (arglist__68756){
var args = cljs.core.seq(arglist__68756);
return G__68754__delegate(args);
});
G__68754.cljs$core$IFn$_invoke$arity$variadic = G__68754__delegate;
return G__68754;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__68757__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__68757 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68758__i = 0, G__68758__a = new Array(arguments.length -  0);
while (G__68758__i < G__68758__a.length) {G__68758__a[G__68758__i] = arguments[G__68758__i + 0]; ++G__68758__i;}
  args = new cljs.core.IndexedSeq(G__68758__a,0);
} 
return G__68757__delegate.call(this,args);};
G__68757.cljs$lang$maxFixedArity = 0;
G__68757.cljs$lang$applyTo = (function (arglist__68759){
var args = cljs.core.seq(arglist__68759);
return G__68757__delegate(args);
});
G__68757.cljs$core$IFn$_invoke$arity$variadic = G__68757__delegate;
return G__68757;
})()
;

return null;
});
