goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__155692__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__155692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__155693__i = 0, G__155693__a = new Array(arguments.length -  0);
while (G__155693__i < G__155693__a.length) {G__155693__a[G__155693__i] = arguments[G__155693__i + 0]; ++G__155693__i;}
  args = new cljs.core.IndexedSeq(G__155693__a,0);
} 
return G__155692__delegate.call(this,args);};
G__155692.cljs$lang$maxFixedArity = 0;
G__155692.cljs$lang$applyTo = (function (arglist__155694){
var args = cljs.core.seq(arglist__155694);
return G__155692__delegate(args);
});
G__155692.cljs$core$IFn$_invoke$arity$variadic = G__155692__delegate;
return G__155692;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__155695__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__155695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__155696__i = 0, G__155696__a = new Array(arguments.length -  0);
while (G__155696__i < G__155696__a.length) {G__155696__a[G__155696__i] = arguments[G__155696__i + 0]; ++G__155696__i;}
  args = new cljs.core.IndexedSeq(G__155696__a,0);
} 
return G__155695__delegate.call(this,args);};
G__155695.cljs$lang$maxFixedArity = 0;
G__155695.cljs$lang$applyTo = (function (arglist__155697){
var args = cljs.core.seq(arglist__155697);
return G__155695__delegate(args);
});
G__155695.cljs$core$IFn$_invoke$arity$variadic = G__155695__delegate;
return G__155695;
})()
;

return null;
});
