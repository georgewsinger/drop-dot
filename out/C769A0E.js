goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__117233__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__117233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__117234__i = 0, G__117234__a = new Array(arguments.length -  0);
while (G__117234__i < G__117234__a.length) {G__117234__a[G__117234__i] = arguments[G__117234__i + 0]; ++G__117234__i;}
  args = new cljs.core.IndexedSeq(G__117234__a,0);
} 
return G__117233__delegate.call(this,args);};
G__117233.cljs$lang$maxFixedArity = 0;
G__117233.cljs$lang$applyTo = (function (arglist__117235){
var args = cljs.core.seq(arglist__117235);
return G__117233__delegate(args);
});
G__117233.cljs$core$IFn$_invoke$arity$variadic = G__117233__delegate;
return G__117233;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__117236__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__117236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__117237__i = 0, G__117237__a = new Array(arguments.length -  0);
while (G__117237__i < G__117237__a.length) {G__117237__a[G__117237__i] = arguments[G__117237__i + 0]; ++G__117237__i;}
  args = new cljs.core.IndexedSeq(G__117237__a,0);
} 
return G__117236__delegate.call(this,args);};
G__117236.cljs$lang$maxFixedArity = 0;
G__117236.cljs$lang$applyTo = (function (arglist__117238){
var args = cljs.core.seq(arglist__117238);
return G__117236__delegate(args);
});
G__117236.cljs$core$IFn$_invoke$arity$variadic = G__117236__delegate;
return G__117236;
})()
;

return null;
});
