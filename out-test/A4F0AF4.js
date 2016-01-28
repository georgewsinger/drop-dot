goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37707__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37708__i = 0, G__37708__a = new Array(arguments.length -  0);
while (G__37708__i < G__37708__a.length) {G__37708__a[G__37708__i] = arguments[G__37708__i + 0]; ++G__37708__i;}
  args = new cljs.core.IndexedSeq(G__37708__a,0);
} 
return G__37707__delegate.call(this,args);};
G__37707.cljs$lang$maxFixedArity = 0;
G__37707.cljs$lang$applyTo = (function (arglist__37709){
var args = cljs.core.seq(arglist__37709);
return G__37707__delegate(args);
});
G__37707.cljs$core$IFn$_invoke$arity$variadic = G__37707__delegate;
return G__37707;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37710__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37711__i = 0, G__37711__a = new Array(arguments.length -  0);
while (G__37711__i < G__37711__a.length) {G__37711__a[G__37711__i] = arguments[G__37711__i + 0]; ++G__37711__i;}
  args = new cljs.core.IndexedSeq(G__37711__a,0);
} 
return G__37710__delegate.call(this,args);};
G__37710.cljs$lang$maxFixedArity = 0;
G__37710.cljs$lang$applyTo = (function (arglist__37712){
var args = cljs.core.seq(arglist__37712);
return G__37710__delegate(args);
});
G__37710.cljs$core$IFn$_invoke$arity$variadic = G__37710__delegate;
return G__37710;
})()
;

return null;
});
