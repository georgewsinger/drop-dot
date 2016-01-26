goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__291665__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__291665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__291666__i = 0, G__291666__a = new Array(arguments.length -  0);
while (G__291666__i < G__291666__a.length) {G__291666__a[G__291666__i] = arguments[G__291666__i + 0]; ++G__291666__i;}
  args = new cljs.core.IndexedSeq(G__291666__a,0);
} 
return G__291665__delegate.call(this,args);};
G__291665.cljs$lang$maxFixedArity = 0;
G__291665.cljs$lang$applyTo = (function (arglist__291667){
var args = cljs.core.seq(arglist__291667);
return G__291665__delegate(args);
});
G__291665.cljs$core$IFn$_invoke$arity$variadic = G__291665__delegate;
return G__291665;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__291668__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__291668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__291669__i = 0, G__291669__a = new Array(arguments.length -  0);
while (G__291669__i < G__291669__a.length) {G__291669__a[G__291669__i] = arguments[G__291669__i + 0]; ++G__291669__i;}
  args = new cljs.core.IndexedSeq(G__291669__a,0);
} 
return G__291668__delegate.call(this,args);};
G__291668.cljs$lang$maxFixedArity = 0;
G__291668.cljs$lang$applyTo = (function (arglist__291670){
var args = cljs.core.seq(arglist__291670);
return G__291668__delegate(args);
});
G__291668.cljs$core$IFn$_invoke$arity$variadic = G__291668__delegate;
return G__291668;
})()
;

return null;
});
