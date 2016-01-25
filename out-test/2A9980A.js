goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34034__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34035__i = 0, G__34035__a = new Array(arguments.length -  0);
while (G__34035__i < G__34035__a.length) {G__34035__a[G__34035__i] = arguments[G__34035__i + 0]; ++G__34035__i;}
  args = new cljs.core.IndexedSeq(G__34035__a,0);
} 
return G__34034__delegate.call(this,args);};
G__34034.cljs$lang$maxFixedArity = 0;
G__34034.cljs$lang$applyTo = (function (arglist__34036){
var args = cljs.core.seq(arglist__34036);
return G__34034__delegate(args);
});
G__34034.cljs$core$IFn$_invoke$arity$variadic = G__34034__delegate;
return G__34034;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34037__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34038__i = 0, G__34038__a = new Array(arguments.length -  0);
while (G__34038__i < G__34038__a.length) {G__34038__a[G__34038__i] = arguments[G__34038__i + 0]; ++G__34038__i;}
  args = new cljs.core.IndexedSeq(G__34038__a,0);
} 
return G__34037__delegate.call(this,args);};
G__34037.cljs$lang$maxFixedArity = 0;
G__34037.cljs$lang$applyTo = (function (arglist__34039){
var args = cljs.core.seq(arglist__34039);
return G__34037__delegate(args);
});
G__34037.cljs$core$IFn$_invoke$arity$variadic = G__34037__delegate;
return G__34037;
})()
;

return null;
});
