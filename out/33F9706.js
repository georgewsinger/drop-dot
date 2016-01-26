goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24236__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24237__i = 0, G__24237__a = new Array(arguments.length -  0);
while (G__24237__i < G__24237__a.length) {G__24237__a[G__24237__i] = arguments[G__24237__i + 0]; ++G__24237__i;}
  args = new cljs.core.IndexedSeq(G__24237__a,0);
} 
return G__24236__delegate.call(this,args);};
G__24236.cljs$lang$maxFixedArity = 0;
G__24236.cljs$lang$applyTo = (function (arglist__24238){
var args = cljs.core.seq(arglist__24238);
return G__24236__delegate(args);
});
G__24236.cljs$core$IFn$_invoke$arity$variadic = G__24236__delegate;
return G__24236;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24239__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24240__i = 0, G__24240__a = new Array(arguments.length -  0);
while (G__24240__i < G__24240__a.length) {G__24240__a[G__24240__i] = arguments[G__24240__i + 0]; ++G__24240__i;}
  args = new cljs.core.IndexedSeq(G__24240__a,0);
} 
return G__24239__delegate.call(this,args);};
G__24239.cljs$lang$maxFixedArity = 0;
G__24239.cljs$lang$applyTo = (function (arglist__24241){
var args = cljs.core.seq(arglist__24241);
return G__24239__delegate(args);
});
G__24239.cljs$core$IFn$_invoke$arity$variadic = G__24239__delegate;
return G__24239;
})()
;

return null;
});
