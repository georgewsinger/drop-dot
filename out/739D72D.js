goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32830__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32831__i = 0, G__32831__a = new Array(arguments.length -  0);
while (G__32831__i < G__32831__a.length) {G__32831__a[G__32831__i] = arguments[G__32831__i + 0]; ++G__32831__i;}
  args = new cljs.core.IndexedSeq(G__32831__a,0);
} 
return G__32830__delegate.call(this,args);};
G__32830.cljs$lang$maxFixedArity = 0;
G__32830.cljs$lang$applyTo = (function (arglist__32832){
var args = cljs.core.seq(arglist__32832);
return G__32830__delegate(args);
});
G__32830.cljs$core$IFn$_invoke$arity$variadic = G__32830__delegate;
return G__32830;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32833__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32834__i = 0, G__32834__a = new Array(arguments.length -  0);
while (G__32834__i < G__32834__a.length) {G__32834__a[G__32834__i] = arguments[G__32834__i + 0]; ++G__32834__i;}
  args = new cljs.core.IndexedSeq(G__32834__a,0);
} 
return G__32833__delegate.call(this,args);};
G__32833.cljs$lang$maxFixedArity = 0;
G__32833.cljs$lang$applyTo = (function (arglist__32835){
var args = cljs.core.seq(arglist__32835);
return G__32833__delegate(args);
});
G__32833.cljs$core$IFn$_invoke$arity$variadic = G__32833__delegate;
return G__32833;
})()
;

return null;
});
