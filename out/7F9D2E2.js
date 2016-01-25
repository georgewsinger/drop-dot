goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__151634__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__151634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151635__i = 0, G__151635__a = new Array(arguments.length -  0);
while (G__151635__i < G__151635__a.length) {G__151635__a[G__151635__i] = arguments[G__151635__i + 0]; ++G__151635__i;}
  args = new cljs.core.IndexedSeq(G__151635__a,0);
} 
return G__151634__delegate.call(this,args);};
G__151634.cljs$lang$maxFixedArity = 0;
G__151634.cljs$lang$applyTo = (function (arglist__151636){
var args = cljs.core.seq(arglist__151636);
return G__151634__delegate(args);
});
G__151634.cljs$core$IFn$_invoke$arity$variadic = G__151634__delegate;
return G__151634;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__151637__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__151637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__151638__i = 0, G__151638__a = new Array(arguments.length -  0);
while (G__151638__i < G__151638__a.length) {G__151638__a[G__151638__i] = arguments[G__151638__i + 0]; ++G__151638__i;}
  args = new cljs.core.IndexedSeq(G__151638__a,0);
} 
return G__151637__delegate.call(this,args);};
G__151637.cljs$lang$maxFixedArity = 0;
G__151637.cljs$lang$applyTo = (function (arglist__151639){
var args = cljs.core.seq(arglist__151639);
return G__151637__delegate(args);
});
G__151637.cljs$core$IFn$_invoke$arity$variadic = G__151637__delegate;
return G__151637;
})()
;

return null;
});
