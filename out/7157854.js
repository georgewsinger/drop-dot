goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__237309__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__237309 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__237310__i = 0, G__237310__a = new Array(arguments.length -  0);
while (G__237310__i < G__237310__a.length) {G__237310__a[G__237310__i] = arguments[G__237310__i + 0]; ++G__237310__i;}
  args = new cljs.core.IndexedSeq(G__237310__a,0);
} 
return G__237309__delegate.call(this,args);};
G__237309.cljs$lang$maxFixedArity = 0;
G__237309.cljs$lang$applyTo = (function (arglist__237311){
var args = cljs.core.seq(arglist__237311);
return G__237309__delegate(args);
});
G__237309.cljs$core$IFn$_invoke$arity$variadic = G__237309__delegate;
return G__237309;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__237312__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__237312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__237313__i = 0, G__237313__a = new Array(arguments.length -  0);
while (G__237313__i < G__237313__a.length) {G__237313__a[G__237313__i] = arguments[G__237313__i + 0]; ++G__237313__i;}
  args = new cljs.core.IndexedSeq(G__237313__a,0);
} 
return G__237312__delegate.call(this,args);};
G__237312.cljs$lang$maxFixedArity = 0;
G__237312.cljs$lang$applyTo = (function (arglist__237314){
var args = cljs.core.seq(arglist__237314);
return G__237312__delegate(args);
});
G__237312.cljs$core$IFn$_invoke$arity$variadic = G__237312__delegate;
return G__237312;
})()
;

return null;
});
