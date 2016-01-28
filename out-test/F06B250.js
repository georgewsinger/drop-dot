goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__83060__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__83060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83061__i = 0, G__83061__a = new Array(arguments.length -  0);
while (G__83061__i < G__83061__a.length) {G__83061__a[G__83061__i] = arguments[G__83061__i + 0]; ++G__83061__i;}
  args = new cljs.core.IndexedSeq(G__83061__a,0);
} 
return G__83060__delegate.call(this,args);};
G__83060.cljs$lang$maxFixedArity = 0;
G__83060.cljs$lang$applyTo = (function (arglist__83062){
var args = cljs.core.seq(arglist__83062);
return G__83060__delegate(args);
});
G__83060.cljs$core$IFn$_invoke$arity$variadic = G__83060__delegate;
return G__83060;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__83063__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__83063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83064__i = 0, G__83064__a = new Array(arguments.length -  0);
while (G__83064__i < G__83064__a.length) {G__83064__a[G__83064__i] = arguments[G__83064__i + 0]; ++G__83064__i;}
  args = new cljs.core.IndexedSeq(G__83064__a,0);
} 
return G__83063__delegate.call(this,args);};
G__83063.cljs$lang$maxFixedArity = 0;
G__83063.cljs$lang$applyTo = (function (arglist__83065){
var args = cljs.core.seq(arglist__83065);
return G__83063__delegate(args);
});
G__83063.cljs$core$IFn$_invoke$arity$variadic = G__83063__delegate;
return G__83063;
})()
;

return null;
});
