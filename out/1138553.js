goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__88517__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__88517 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__88518__i = 0, G__88518__a = new Array(arguments.length -  0);
while (G__88518__i < G__88518__a.length) {G__88518__a[G__88518__i] = arguments[G__88518__i + 0]; ++G__88518__i;}
  args = new cljs.core.IndexedSeq(G__88518__a,0);
} 
return G__88517__delegate.call(this,args);};
G__88517.cljs$lang$maxFixedArity = 0;
G__88517.cljs$lang$applyTo = (function (arglist__88519){
var args = cljs.core.seq(arglist__88519);
return G__88517__delegate(args);
});
G__88517.cljs$core$IFn$_invoke$arity$variadic = G__88517__delegate;
return G__88517;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__88520__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__88520 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__88521__i = 0, G__88521__a = new Array(arguments.length -  0);
while (G__88521__i < G__88521__a.length) {G__88521__a[G__88521__i] = arguments[G__88521__i + 0]; ++G__88521__i;}
  args = new cljs.core.IndexedSeq(G__88521__a,0);
} 
return G__88520__delegate.call(this,args);};
G__88520.cljs$lang$maxFixedArity = 0;
G__88520.cljs$lang$applyTo = (function (arglist__88522){
var args = cljs.core.seq(arglist__88522);
return G__88520__delegate(args);
});
G__88520.cljs$core$IFn$_invoke$arity$variadic = G__88520__delegate;
return G__88520;
})()
;

return null;
});
