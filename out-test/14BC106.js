goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38274__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38275__i = 0, G__38275__a = new Array(arguments.length -  0);
while (G__38275__i < G__38275__a.length) {G__38275__a[G__38275__i] = arguments[G__38275__i + 0]; ++G__38275__i;}
  args = new cljs.core.IndexedSeq(G__38275__a,0);
} 
return G__38274__delegate.call(this,args);};
G__38274.cljs$lang$maxFixedArity = 0;
G__38274.cljs$lang$applyTo = (function (arglist__38276){
var args = cljs.core.seq(arglist__38276);
return G__38274__delegate(args);
});
G__38274.cljs$core$IFn$_invoke$arity$variadic = G__38274__delegate;
return G__38274;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38277__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38278__i = 0, G__38278__a = new Array(arguments.length -  0);
while (G__38278__i < G__38278__a.length) {G__38278__a[G__38278__i] = arguments[G__38278__i + 0]; ++G__38278__i;}
  args = new cljs.core.IndexedSeq(G__38278__a,0);
} 
return G__38277__delegate.call(this,args);};
G__38277.cljs$lang$maxFixedArity = 0;
G__38277.cljs$lang$applyTo = (function (arglist__38279){
var args = cljs.core.seq(arglist__38279);
return G__38277__delegate(args);
});
G__38277.cljs$core$IFn$_invoke$arity$variadic = G__38277__delegate;
return G__38277;
})()
;

return null;
});
