goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__269646__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__269646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__269647__i = 0, G__269647__a = new Array(arguments.length -  0);
while (G__269647__i < G__269647__a.length) {G__269647__a[G__269647__i] = arguments[G__269647__i + 0]; ++G__269647__i;}
  args = new cljs.core.IndexedSeq(G__269647__a,0);
} 
return G__269646__delegate.call(this,args);};
G__269646.cljs$lang$maxFixedArity = 0;
G__269646.cljs$lang$applyTo = (function (arglist__269648){
var args = cljs.core.seq(arglist__269648);
return G__269646__delegate(args);
});
G__269646.cljs$core$IFn$_invoke$arity$variadic = G__269646__delegate;
return G__269646;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__269649__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__269649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__269650__i = 0, G__269650__a = new Array(arguments.length -  0);
while (G__269650__i < G__269650__a.length) {G__269650__a[G__269650__i] = arguments[G__269650__i + 0]; ++G__269650__i;}
  args = new cljs.core.IndexedSeq(G__269650__a,0);
} 
return G__269649__delegate.call(this,args);};
G__269649.cljs$lang$maxFixedArity = 0;
G__269649.cljs$lang$applyTo = (function (arglist__269651){
var args = cljs.core.seq(arglist__269651);
return G__269649__delegate(args);
});
G__269649.cljs$core$IFn$_invoke$arity$variadic = G__269649__delegate;
return G__269649;
})()
;

return null;
});
