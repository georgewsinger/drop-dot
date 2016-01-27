goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__76236__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__76236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76237__i = 0, G__76237__a = new Array(arguments.length -  0);
while (G__76237__i < G__76237__a.length) {G__76237__a[G__76237__i] = arguments[G__76237__i + 0]; ++G__76237__i;}
  args = new cljs.core.IndexedSeq(G__76237__a,0);
} 
return G__76236__delegate.call(this,args);};
G__76236.cljs$lang$maxFixedArity = 0;
G__76236.cljs$lang$applyTo = (function (arglist__76238){
var args = cljs.core.seq(arglist__76238);
return G__76236__delegate(args);
});
G__76236.cljs$core$IFn$_invoke$arity$variadic = G__76236__delegate;
return G__76236;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__76239__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__76239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76240__i = 0, G__76240__a = new Array(arguments.length -  0);
while (G__76240__i < G__76240__a.length) {G__76240__a[G__76240__i] = arguments[G__76240__i + 0]; ++G__76240__i;}
  args = new cljs.core.IndexedSeq(G__76240__a,0);
} 
return G__76239__delegate.call(this,args);};
G__76239.cljs$lang$maxFixedArity = 0;
G__76239.cljs$lang$applyTo = (function (arglist__76241){
var args = cljs.core.seq(arglist__76241);
return G__76239__delegate(args);
});
G__76239.cljs$core$IFn$_invoke$arity$variadic = G__76239__delegate;
return G__76239;
})()
;

return null;
});
