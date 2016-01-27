goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__313134__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__313134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313135__i = 0, G__313135__a = new Array(arguments.length -  0);
while (G__313135__i < G__313135__a.length) {G__313135__a[G__313135__i] = arguments[G__313135__i + 0]; ++G__313135__i;}
  args = new cljs.core.IndexedSeq(G__313135__a,0);
} 
return G__313134__delegate.call(this,args);};
G__313134.cljs$lang$maxFixedArity = 0;
G__313134.cljs$lang$applyTo = (function (arglist__313136){
var args = cljs.core.seq(arglist__313136);
return G__313134__delegate(args);
});
G__313134.cljs$core$IFn$_invoke$arity$variadic = G__313134__delegate;
return G__313134;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__313137__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__313137 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313138__i = 0, G__313138__a = new Array(arguments.length -  0);
while (G__313138__i < G__313138__a.length) {G__313138__a[G__313138__i] = arguments[G__313138__i + 0]; ++G__313138__i;}
  args = new cljs.core.IndexedSeq(G__313138__a,0);
} 
return G__313137__delegate.call(this,args);};
G__313137.cljs$lang$maxFixedArity = 0;
G__313137.cljs$lang$applyTo = (function (arglist__313139){
var args = cljs.core.seq(arglist__313139);
return G__313137__delegate(args);
});
G__313137.cljs$core$IFn$_invoke$arity$variadic = G__313137__delegate;
return G__313137;
})()
;

return null;
});
