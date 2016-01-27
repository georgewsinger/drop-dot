goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__327869__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__327869 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__327870__i = 0, G__327870__a = new Array(arguments.length -  0);
while (G__327870__i < G__327870__a.length) {G__327870__a[G__327870__i] = arguments[G__327870__i + 0]; ++G__327870__i;}
  args = new cljs.core.IndexedSeq(G__327870__a,0);
} 
return G__327869__delegate.call(this,args);};
G__327869.cljs$lang$maxFixedArity = 0;
G__327869.cljs$lang$applyTo = (function (arglist__327871){
var args = cljs.core.seq(arglist__327871);
return G__327869__delegate(args);
});
G__327869.cljs$core$IFn$_invoke$arity$variadic = G__327869__delegate;
return G__327869;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__327872__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__327872 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__327873__i = 0, G__327873__a = new Array(arguments.length -  0);
while (G__327873__i < G__327873__a.length) {G__327873__a[G__327873__i] = arguments[G__327873__i + 0]; ++G__327873__i;}
  args = new cljs.core.IndexedSeq(G__327873__a,0);
} 
return G__327872__delegate.call(this,args);};
G__327872.cljs$lang$maxFixedArity = 0;
G__327872.cljs$lang$applyTo = (function (arglist__327874){
var args = cljs.core.seq(arglist__327874);
return G__327872__delegate(args);
});
G__327872.cljs$core$IFn$_invoke$arity$variadic = G__327872__delegate;
return G__327872;
})()
;

return null;
});
