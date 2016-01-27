goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34629__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34630__i = 0, G__34630__a = new Array(arguments.length -  0);
while (G__34630__i < G__34630__a.length) {G__34630__a[G__34630__i] = arguments[G__34630__i + 0]; ++G__34630__i;}
  args = new cljs.core.IndexedSeq(G__34630__a,0);
} 
return G__34629__delegate.call(this,args);};
G__34629.cljs$lang$maxFixedArity = 0;
G__34629.cljs$lang$applyTo = (function (arglist__34631){
var args = cljs.core.seq(arglist__34631);
return G__34629__delegate(args);
});
G__34629.cljs$core$IFn$_invoke$arity$variadic = G__34629__delegate;
return G__34629;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34632__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34633__i = 0, G__34633__a = new Array(arguments.length -  0);
while (G__34633__i < G__34633__a.length) {G__34633__a[G__34633__i] = arguments[G__34633__i + 0]; ++G__34633__i;}
  args = new cljs.core.IndexedSeq(G__34633__a,0);
} 
return G__34632__delegate.call(this,args);};
G__34632.cljs$lang$maxFixedArity = 0;
G__34632.cljs$lang$applyTo = (function (arglist__34634){
var args = cljs.core.seq(arglist__34634);
return G__34632__delegate(args);
});
G__34632.cljs$core$IFn$_invoke$arity$variadic = G__34632__delegate;
return G__34632;
})()
;

return null;
});
