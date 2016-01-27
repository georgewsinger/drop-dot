goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67271__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67271 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67272__i = 0, G__67272__a = new Array(arguments.length -  0);
while (G__67272__i < G__67272__a.length) {G__67272__a[G__67272__i] = arguments[G__67272__i + 0]; ++G__67272__i;}
  args = new cljs.core.IndexedSeq(G__67272__a,0);
} 
return G__67271__delegate.call(this,args);};
G__67271.cljs$lang$maxFixedArity = 0;
G__67271.cljs$lang$applyTo = (function (arglist__67273){
var args = cljs.core.seq(arglist__67273);
return G__67271__delegate(args);
});
G__67271.cljs$core$IFn$_invoke$arity$variadic = G__67271__delegate;
return G__67271;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67274__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67275__i = 0, G__67275__a = new Array(arguments.length -  0);
while (G__67275__i < G__67275__a.length) {G__67275__a[G__67275__i] = arguments[G__67275__i + 0]; ++G__67275__i;}
  args = new cljs.core.IndexedSeq(G__67275__a,0);
} 
return G__67274__delegate.call(this,args);};
G__67274.cljs$lang$maxFixedArity = 0;
G__67274.cljs$lang$applyTo = (function (arglist__67276){
var args = cljs.core.seq(arglist__67276);
return G__67274__delegate(args);
});
G__67274.cljs$core$IFn$_invoke$arity$variadic = G__67274__delegate;
return G__67274;
})()
;

return null;
});
