goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37451__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37452__i = 0, G__37452__a = new Array(arguments.length -  0);
while (G__37452__i < G__37452__a.length) {G__37452__a[G__37452__i] = arguments[G__37452__i + 0]; ++G__37452__i;}
  args = new cljs.core.IndexedSeq(G__37452__a,0);
} 
return G__37451__delegate.call(this,args);};
G__37451.cljs$lang$maxFixedArity = 0;
G__37451.cljs$lang$applyTo = (function (arglist__37453){
var args = cljs.core.seq(arglist__37453);
return G__37451__delegate(args);
});
G__37451.cljs$core$IFn$_invoke$arity$variadic = G__37451__delegate;
return G__37451;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37454__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37455__i = 0, G__37455__a = new Array(arguments.length -  0);
while (G__37455__i < G__37455__a.length) {G__37455__a[G__37455__i] = arguments[G__37455__i + 0]; ++G__37455__i;}
  args = new cljs.core.IndexedSeq(G__37455__a,0);
} 
return G__37454__delegate.call(this,args);};
G__37454.cljs$lang$maxFixedArity = 0;
G__37454.cljs$lang$applyTo = (function (arglist__37456){
var args = cljs.core.seq(arglist__37456);
return G__37454__delegate(args);
});
G__37454.cljs$core$IFn$_invoke$arity$variadic = G__37454__delegate;
return G__37454;
})()
;

return null;
});
