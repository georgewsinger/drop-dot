goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__291632__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__291632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__291633__i = 0, G__291633__a = new Array(arguments.length -  0);
while (G__291633__i < G__291633__a.length) {G__291633__a[G__291633__i] = arguments[G__291633__i + 0]; ++G__291633__i;}
  args = new cljs.core.IndexedSeq(G__291633__a,0);
} 
return G__291632__delegate.call(this,args);};
G__291632.cljs$lang$maxFixedArity = 0;
G__291632.cljs$lang$applyTo = (function (arglist__291634){
var args = cljs.core.seq(arglist__291634);
return G__291632__delegate(args);
});
G__291632.cljs$core$IFn$_invoke$arity$variadic = G__291632__delegate;
return G__291632;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__291635__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__291635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__291636__i = 0, G__291636__a = new Array(arguments.length -  0);
while (G__291636__i < G__291636__a.length) {G__291636__a[G__291636__i] = arguments[G__291636__i + 0]; ++G__291636__i;}
  args = new cljs.core.IndexedSeq(G__291636__a,0);
} 
return G__291635__delegate.call(this,args);};
G__291635.cljs$lang$maxFixedArity = 0;
G__291635.cljs$lang$applyTo = (function (arglist__291637){
var args = cljs.core.seq(arglist__291637);
return G__291635__delegate(args);
});
G__291635.cljs$core$IFn$_invoke$arity$variadic = G__291635__delegate;
return G__291635;
})()
;

return null;
});
