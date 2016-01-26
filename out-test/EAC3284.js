goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28629__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28630__i = 0, G__28630__a = new Array(arguments.length -  0);
while (G__28630__i < G__28630__a.length) {G__28630__a[G__28630__i] = arguments[G__28630__i + 0]; ++G__28630__i;}
  args = new cljs.core.IndexedSeq(G__28630__a,0);
} 
return G__28629__delegate.call(this,args);};
G__28629.cljs$lang$maxFixedArity = 0;
G__28629.cljs$lang$applyTo = (function (arglist__28631){
var args = cljs.core.seq(arglist__28631);
return G__28629__delegate(args);
});
G__28629.cljs$core$IFn$_invoke$arity$variadic = G__28629__delegate;
return G__28629;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28632__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28633__i = 0, G__28633__a = new Array(arguments.length -  0);
while (G__28633__i < G__28633__a.length) {G__28633__a[G__28633__i] = arguments[G__28633__i + 0]; ++G__28633__i;}
  args = new cljs.core.IndexedSeq(G__28633__a,0);
} 
return G__28632__delegate.call(this,args);};
G__28632.cljs$lang$maxFixedArity = 0;
G__28632.cljs$lang$applyTo = (function (arglist__28634){
var args = cljs.core.seq(arglist__28634);
return G__28632__delegate(args);
});
G__28632.cljs$core$IFn$_invoke$arity$variadic = G__28632__delegate;
return G__28632;
})()
;

return null;
});
