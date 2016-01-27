goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__310676__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__310676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__310677__i = 0, G__310677__a = new Array(arguments.length -  0);
while (G__310677__i < G__310677__a.length) {G__310677__a[G__310677__i] = arguments[G__310677__i + 0]; ++G__310677__i;}
  args = new cljs.core.IndexedSeq(G__310677__a,0);
} 
return G__310676__delegate.call(this,args);};
G__310676.cljs$lang$maxFixedArity = 0;
G__310676.cljs$lang$applyTo = (function (arglist__310678){
var args = cljs.core.seq(arglist__310678);
return G__310676__delegate(args);
});
G__310676.cljs$core$IFn$_invoke$arity$variadic = G__310676__delegate;
return G__310676;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__310679__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__310679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__310680__i = 0, G__310680__a = new Array(arguments.length -  0);
while (G__310680__i < G__310680__a.length) {G__310680__a[G__310680__i] = arguments[G__310680__i + 0]; ++G__310680__i;}
  args = new cljs.core.IndexedSeq(G__310680__a,0);
} 
return G__310679__delegate.call(this,args);};
G__310679.cljs$lang$maxFixedArity = 0;
G__310679.cljs$lang$applyTo = (function (arglist__310681){
var args = cljs.core.seq(arglist__310681);
return G__310679__delegate(args);
});
G__310679.cljs$core$IFn$_invoke$arity$variadic = G__310679__delegate;
return G__310679;
})()
;

return null;
});
