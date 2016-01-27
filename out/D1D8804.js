goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__305131__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__305131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__305132__i = 0, G__305132__a = new Array(arguments.length -  0);
while (G__305132__i < G__305132__a.length) {G__305132__a[G__305132__i] = arguments[G__305132__i + 0]; ++G__305132__i;}
  args = new cljs.core.IndexedSeq(G__305132__a,0);
} 
return G__305131__delegate.call(this,args);};
G__305131.cljs$lang$maxFixedArity = 0;
G__305131.cljs$lang$applyTo = (function (arglist__305133){
var args = cljs.core.seq(arglist__305133);
return G__305131__delegate(args);
});
G__305131.cljs$core$IFn$_invoke$arity$variadic = G__305131__delegate;
return G__305131;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__305134__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__305134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__305135__i = 0, G__305135__a = new Array(arguments.length -  0);
while (G__305135__i < G__305135__a.length) {G__305135__a[G__305135__i] = arguments[G__305135__i + 0]; ++G__305135__i;}
  args = new cljs.core.IndexedSeq(G__305135__a,0);
} 
return G__305134__delegate.call(this,args);};
G__305134.cljs$lang$maxFixedArity = 0;
G__305134.cljs$lang$applyTo = (function (arglist__305136){
var args = cljs.core.seq(arglist__305136);
return G__305134__delegate(args);
});
G__305134.cljs$core$IFn$_invoke$arity$variadic = G__305134__delegate;
return G__305134;
})()
;

return null;
});
