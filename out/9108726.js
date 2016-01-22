goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14058__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14059__i = 0, G__14059__a = new Array(arguments.length -  0);
while (G__14059__i < G__14059__a.length) {G__14059__a[G__14059__i] = arguments[G__14059__i + 0]; ++G__14059__i;}
  args = new cljs.core.IndexedSeq(G__14059__a,0);
} 
return G__14058__delegate.call(this,args);};
G__14058.cljs$lang$maxFixedArity = 0;
G__14058.cljs$lang$applyTo = (function (arglist__14060){
var args = cljs.core.seq(arglist__14060);
return G__14058__delegate(args);
});
G__14058.cljs$core$IFn$_invoke$arity$variadic = G__14058__delegate;
return G__14058;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14061__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14062__i = 0, G__14062__a = new Array(arguments.length -  0);
while (G__14062__i < G__14062__a.length) {G__14062__a[G__14062__i] = arguments[G__14062__i + 0]; ++G__14062__i;}
  args = new cljs.core.IndexedSeq(G__14062__a,0);
} 
return G__14061__delegate.call(this,args);};
G__14061.cljs$lang$maxFixedArity = 0;
G__14061.cljs$lang$applyTo = (function (arglist__14063){
var args = cljs.core.seq(arglist__14063);
return G__14061__delegate(args);
});
G__14061.cljs$core$IFn$_invoke$arity$variadic = G__14061__delegate;
return G__14061;
})()
;

return null;
});
