goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__252233__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__252233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__252234__i = 0, G__252234__a = new Array(arguments.length -  0);
while (G__252234__i < G__252234__a.length) {G__252234__a[G__252234__i] = arguments[G__252234__i + 0]; ++G__252234__i;}
  args = new cljs.core.IndexedSeq(G__252234__a,0);
} 
return G__252233__delegate.call(this,args);};
G__252233.cljs$lang$maxFixedArity = 0;
G__252233.cljs$lang$applyTo = (function (arglist__252235){
var args = cljs.core.seq(arglist__252235);
return G__252233__delegate(args);
});
G__252233.cljs$core$IFn$_invoke$arity$variadic = G__252233__delegate;
return G__252233;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__252236__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__252236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__252237__i = 0, G__252237__a = new Array(arguments.length -  0);
while (G__252237__i < G__252237__a.length) {G__252237__a[G__252237__i] = arguments[G__252237__i + 0]; ++G__252237__i;}
  args = new cljs.core.IndexedSeq(G__252237__a,0);
} 
return G__252236__delegate.call(this,args);};
G__252236.cljs$lang$maxFixedArity = 0;
G__252236.cljs$lang$applyTo = (function (arglist__252238){
var args = cljs.core.seq(arglist__252238);
return G__252236__delegate(args);
});
G__252236.cljs$core$IFn$_invoke$arity$variadic = G__252236__delegate;
return G__252236;
})()
;

return null;
});
