goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__328854__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__328854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__328855__i = 0, G__328855__a = new Array(arguments.length -  0);
while (G__328855__i < G__328855__a.length) {G__328855__a[G__328855__i] = arguments[G__328855__i + 0]; ++G__328855__i;}
  args = new cljs.core.IndexedSeq(G__328855__a,0);
} 
return G__328854__delegate.call(this,args);};
G__328854.cljs$lang$maxFixedArity = 0;
G__328854.cljs$lang$applyTo = (function (arglist__328856){
var args = cljs.core.seq(arglist__328856);
return G__328854__delegate(args);
});
G__328854.cljs$core$IFn$_invoke$arity$variadic = G__328854__delegate;
return G__328854;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__328857__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__328857 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__328858__i = 0, G__328858__a = new Array(arguments.length -  0);
while (G__328858__i < G__328858__a.length) {G__328858__a[G__328858__i] = arguments[G__328858__i + 0]; ++G__328858__i;}
  args = new cljs.core.IndexedSeq(G__328858__a,0);
} 
return G__328857__delegate.call(this,args);};
G__328857.cljs$lang$maxFixedArity = 0;
G__328857.cljs$lang$applyTo = (function (arglist__328859){
var args = cljs.core.seq(arglist__328859);
return G__328857__delegate(args);
});
G__328857.cljs$core$IFn$_invoke$arity$variadic = G__328857__delegate;
return G__328857;
})()
;

return null;
});
