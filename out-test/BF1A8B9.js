goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__54179__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__54179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54180__i = 0, G__54180__a = new Array(arguments.length -  0);
while (G__54180__i < G__54180__a.length) {G__54180__a[G__54180__i] = arguments[G__54180__i + 0]; ++G__54180__i;}
  args = new cljs.core.IndexedSeq(G__54180__a,0);
} 
return G__54179__delegate.call(this,args);};
G__54179.cljs$lang$maxFixedArity = 0;
G__54179.cljs$lang$applyTo = (function (arglist__54181){
var args = cljs.core.seq(arglist__54181);
return G__54179__delegate(args);
});
G__54179.cljs$core$IFn$_invoke$arity$variadic = G__54179__delegate;
return G__54179;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__54182__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__54182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54183__i = 0, G__54183__a = new Array(arguments.length -  0);
while (G__54183__i < G__54183__a.length) {G__54183__a[G__54183__i] = arguments[G__54183__i + 0]; ++G__54183__i;}
  args = new cljs.core.IndexedSeq(G__54183__a,0);
} 
return G__54182__delegate.call(this,args);};
G__54182.cljs$lang$maxFixedArity = 0;
G__54182.cljs$lang$applyTo = (function (arglist__54184){
var args = cljs.core.seq(arglist__54184);
return G__54182__delegate(args);
});
G__54182.cljs$core$IFn$_invoke$arity$variadic = G__54182__delegate;
return G__54182;
})()
;

return null;
});
