goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30134__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30135__i = 0, G__30135__a = new Array(arguments.length -  0);
while (G__30135__i < G__30135__a.length) {G__30135__a[G__30135__i] = arguments[G__30135__i + 0]; ++G__30135__i;}
  args = new cljs.core.IndexedSeq(G__30135__a,0);
} 
return G__30134__delegate.call(this,args);};
G__30134.cljs$lang$maxFixedArity = 0;
G__30134.cljs$lang$applyTo = (function (arglist__30136){
var args = cljs.core.seq(arglist__30136);
return G__30134__delegate(args);
});
G__30134.cljs$core$IFn$_invoke$arity$variadic = G__30134__delegate;
return G__30134;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30137__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30137 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30138__i = 0, G__30138__a = new Array(arguments.length -  0);
while (G__30138__i < G__30138__a.length) {G__30138__a[G__30138__i] = arguments[G__30138__i + 0]; ++G__30138__i;}
  args = new cljs.core.IndexedSeq(G__30138__a,0);
} 
return G__30137__delegate.call(this,args);};
G__30137.cljs$lang$maxFixedArity = 0;
G__30137.cljs$lang$applyTo = (function (arglist__30139){
var args = cljs.core.seq(arglist__30139);
return G__30137__delegate(args);
});
G__30137.cljs$core$IFn$_invoke$arity$variadic = G__30137__delegate;
return G__30137;
})()
;

return null;
});
