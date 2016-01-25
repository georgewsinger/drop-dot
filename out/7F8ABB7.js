goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__277274__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__277274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__277275__i = 0, G__277275__a = new Array(arguments.length -  0);
while (G__277275__i < G__277275__a.length) {G__277275__a[G__277275__i] = arguments[G__277275__i + 0]; ++G__277275__i;}
  args = new cljs.core.IndexedSeq(G__277275__a,0);
} 
return G__277274__delegate.call(this,args);};
G__277274.cljs$lang$maxFixedArity = 0;
G__277274.cljs$lang$applyTo = (function (arglist__277276){
var args = cljs.core.seq(arglist__277276);
return G__277274__delegate(args);
});
G__277274.cljs$core$IFn$_invoke$arity$variadic = G__277274__delegate;
return G__277274;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__277277__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__277277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__277278__i = 0, G__277278__a = new Array(arguments.length -  0);
while (G__277278__i < G__277278__a.length) {G__277278__a[G__277278__i] = arguments[G__277278__i + 0]; ++G__277278__i;}
  args = new cljs.core.IndexedSeq(G__277278__a,0);
} 
return G__277277__delegate.call(this,args);};
G__277277.cljs$lang$maxFixedArity = 0;
G__277277.cljs$lang$applyTo = (function (arglist__277279){
var args = cljs.core.seq(arglist__277279);
return G__277277__delegate(args);
});
G__277277.cljs$core$IFn$_invoke$arity$variadic = G__277277__delegate;
return G__277277;
})()
;

return null;
});
