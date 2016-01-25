goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__238431__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__238431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__238432__i = 0, G__238432__a = new Array(arguments.length -  0);
while (G__238432__i < G__238432__a.length) {G__238432__a[G__238432__i] = arguments[G__238432__i + 0]; ++G__238432__i;}
  args = new cljs.core.IndexedSeq(G__238432__a,0);
} 
return G__238431__delegate.call(this,args);};
G__238431.cljs$lang$maxFixedArity = 0;
G__238431.cljs$lang$applyTo = (function (arglist__238433){
var args = cljs.core.seq(arglist__238433);
return G__238431__delegate(args);
});
G__238431.cljs$core$IFn$_invoke$arity$variadic = G__238431__delegate;
return G__238431;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__238434__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__238434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__238435__i = 0, G__238435__a = new Array(arguments.length -  0);
while (G__238435__i < G__238435__a.length) {G__238435__a[G__238435__i] = arguments[G__238435__i + 0]; ++G__238435__i;}
  args = new cljs.core.IndexedSeq(G__238435__a,0);
} 
return G__238434__delegate.call(this,args);};
G__238434.cljs$lang$maxFixedArity = 0;
G__238434.cljs$lang$applyTo = (function (arglist__238436){
var args = cljs.core.seq(arglist__238436);
return G__238434__delegate(args);
});
G__238434.cljs$core$IFn$_invoke$arity$variadic = G__238434__delegate;
return G__238434;
})()
;

return null;
});
