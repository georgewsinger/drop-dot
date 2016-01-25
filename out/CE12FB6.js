goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18944__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18945__i = 0, G__18945__a = new Array(arguments.length -  0);
while (G__18945__i < G__18945__a.length) {G__18945__a[G__18945__i] = arguments[G__18945__i + 0]; ++G__18945__i;}
  args = new cljs.core.IndexedSeq(G__18945__a,0);
} 
return G__18944__delegate.call(this,args);};
G__18944.cljs$lang$maxFixedArity = 0;
G__18944.cljs$lang$applyTo = (function (arglist__18946){
var args = cljs.core.seq(arglist__18946);
return G__18944__delegate(args);
});
G__18944.cljs$core$IFn$_invoke$arity$variadic = G__18944__delegate;
return G__18944;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18947__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18948__i = 0, G__18948__a = new Array(arguments.length -  0);
while (G__18948__i < G__18948__a.length) {G__18948__a[G__18948__i] = arguments[G__18948__i + 0]; ++G__18948__i;}
  args = new cljs.core.IndexedSeq(G__18948__a,0);
} 
return G__18947__delegate.call(this,args);};
G__18947.cljs$lang$maxFixedArity = 0;
G__18947.cljs$lang$applyTo = (function (arglist__18949){
var args = cljs.core.seq(arglist__18949);
return G__18947__delegate(args);
});
G__18947.cljs$core$IFn$_invoke$arity$variadic = G__18947__delegate;
return G__18947;
})()
;

return null;
});
