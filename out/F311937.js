goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26379__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26380__i = 0, G__26380__a = new Array(arguments.length -  0);
while (G__26380__i < G__26380__a.length) {G__26380__a[G__26380__i] = arguments[G__26380__i + 0]; ++G__26380__i;}
  args = new cljs.core.IndexedSeq(G__26380__a,0);
} 
return G__26379__delegate.call(this,args);};
G__26379.cljs$lang$maxFixedArity = 0;
G__26379.cljs$lang$applyTo = (function (arglist__26381){
var args = cljs.core.seq(arglist__26381);
return G__26379__delegate(args);
});
G__26379.cljs$core$IFn$_invoke$arity$variadic = G__26379__delegate;
return G__26379;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26382__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26383__i = 0, G__26383__a = new Array(arguments.length -  0);
while (G__26383__i < G__26383__a.length) {G__26383__a[G__26383__i] = arguments[G__26383__i + 0]; ++G__26383__i;}
  args = new cljs.core.IndexedSeq(G__26383__a,0);
} 
return G__26382__delegate.call(this,args);};
G__26382.cljs$lang$maxFixedArity = 0;
G__26382.cljs$lang$applyTo = (function (arglist__26384){
var args = cljs.core.seq(arglist__26384);
return G__26382__delegate(args);
});
G__26382.cljs$core$IFn$_invoke$arity$variadic = G__26382__delegate;
return G__26382;
})()
;

return null;
});
