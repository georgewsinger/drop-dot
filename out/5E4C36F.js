goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__379668__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__379668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__379669__i = 0, G__379669__a = new Array(arguments.length -  0);
while (G__379669__i < G__379669__a.length) {G__379669__a[G__379669__i] = arguments[G__379669__i + 0]; ++G__379669__i;}
  args = new cljs.core.IndexedSeq(G__379669__a,0);
} 
return G__379668__delegate.call(this,args);};
G__379668.cljs$lang$maxFixedArity = 0;
G__379668.cljs$lang$applyTo = (function (arglist__379670){
var args = cljs.core.seq(arglist__379670);
return G__379668__delegate(args);
});
G__379668.cljs$core$IFn$_invoke$arity$variadic = G__379668__delegate;
return G__379668;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__379671__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__379671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__379672__i = 0, G__379672__a = new Array(arguments.length -  0);
while (G__379672__i < G__379672__a.length) {G__379672__a[G__379672__i] = arguments[G__379672__i + 0]; ++G__379672__i;}
  args = new cljs.core.IndexedSeq(G__379672__a,0);
} 
return G__379671__delegate.call(this,args);};
G__379671.cljs$lang$maxFixedArity = 0;
G__379671.cljs$lang$applyTo = (function (arglist__379673){
var args = cljs.core.seq(arglist__379673);
return G__379671__delegate(args);
});
G__379671.cljs$core$IFn$_invoke$arity$variadic = G__379671__delegate;
return G__379671;
})()
;

return null;
});
