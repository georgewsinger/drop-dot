goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__309940__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__309940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__309941__i = 0, G__309941__a = new Array(arguments.length -  0);
while (G__309941__i < G__309941__a.length) {G__309941__a[G__309941__i] = arguments[G__309941__i + 0]; ++G__309941__i;}
  args = new cljs.core.IndexedSeq(G__309941__a,0);
} 
return G__309940__delegate.call(this,args);};
G__309940.cljs$lang$maxFixedArity = 0;
G__309940.cljs$lang$applyTo = (function (arglist__309942){
var args = cljs.core.seq(arglist__309942);
return G__309940__delegate(args);
});
G__309940.cljs$core$IFn$_invoke$arity$variadic = G__309940__delegate;
return G__309940;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__309943__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__309943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__309944__i = 0, G__309944__a = new Array(arguments.length -  0);
while (G__309944__i < G__309944__a.length) {G__309944__a[G__309944__i] = arguments[G__309944__i + 0]; ++G__309944__i;}
  args = new cljs.core.IndexedSeq(G__309944__a,0);
} 
return G__309943__delegate.call(this,args);};
G__309943.cljs$lang$maxFixedArity = 0;
G__309943.cljs$lang$applyTo = (function (arglist__309945){
var args = cljs.core.seq(arglist__309945);
return G__309943__delegate(args);
});
G__309943.cljs$core$IFn$_invoke$arity$variadic = G__309943__delegate;
return G__309943;
})()
;

return null;
});
