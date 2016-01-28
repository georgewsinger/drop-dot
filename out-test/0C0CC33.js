goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18337__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18338__i = 0, G__18338__a = new Array(arguments.length -  0);
while (G__18338__i < G__18338__a.length) {G__18338__a[G__18338__i] = arguments[G__18338__i + 0]; ++G__18338__i;}
  args = new cljs.core.IndexedSeq(G__18338__a,0);
} 
return G__18337__delegate.call(this,args);};
G__18337.cljs$lang$maxFixedArity = 0;
G__18337.cljs$lang$applyTo = (function (arglist__18339){
var args = cljs.core.seq(arglist__18339);
return G__18337__delegate(args);
});
G__18337.cljs$core$IFn$_invoke$arity$variadic = G__18337__delegate;
return G__18337;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18340__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18341__i = 0, G__18341__a = new Array(arguments.length -  0);
while (G__18341__i < G__18341__a.length) {G__18341__a[G__18341__i] = arguments[G__18341__i + 0]; ++G__18341__i;}
  args = new cljs.core.IndexedSeq(G__18341__a,0);
} 
return G__18340__delegate.call(this,args);};
G__18340.cljs$lang$maxFixedArity = 0;
G__18340.cljs$lang$applyTo = (function (arglist__18342){
var args = cljs.core.seq(arglist__18342);
return G__18340__delegate(args);
});
G__18340.cljs$core$IFn$_invoke$arity$variadic = G__18340__delegate;
return G__18340;
})()
;

return null;
});
