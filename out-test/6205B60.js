goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31337__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31338__i = 0, G__31338__a = new Array(arguments.length -  0);
while (G__31338__i < G__31338__a.length) {G__31338__a[G__31338__i] = arguments[G__31338__i + 0]; ++G__31338__i;}
  args = new cljs.core.IndexedSeq(G__31338__a,0);
} 
return G__31337__delegate.call(this,args);};
G__31337.cljs$lang$maxFixedArity = 0;
G__31337.cljs$lang$applyTo = (function (arglist__31339){
var args = cljs.core.seq(arglist__31339);
return G__31337__delegate(args);
});
G__31337.cljs$core$IFn$_invoke$arity$variadic = G__31337__delegate;
return G__31337;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31340__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31341__i = 0, G__31341__a = new Array(arguments.length -  0);
while (G__31341__i < G__31341__a.length) {G__31341__a[G__31341__i] = arguments[G__31341__i + 0]; ++G__31341__i;}
  args = new cljs.core.IndexedSeq(G__31341__a,0);
} 
return G__31340__delegate.call(this,args);};
G__31340.cljs$lang$maxFixedArity = 0;
G__31340.cljs$lang$applyTo = (function (arglist__31342){
var args = cljs.core.seq(arglist__31342);
return G__31340__delegate(args);
});
G__31340.cljs$core$IFn$_invoke$arity$variadic = G__31340__delegate;
return G__31340;
})()
;

return null;
});
