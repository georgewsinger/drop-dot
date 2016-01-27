goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__333964__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__333964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__333965__i = 0, G__333965__a = new Array(arguments.length -  0);
while (G__333965__i < G__333965__a.length) {G__333965__a[G__333965__i] = arguments[G__333965__i + 0]; ++G__333965__i;}
  args = new cljs.core.IndexedSeq(G__333965__a,0);
} 
return G__333964__delegate.call(this,args);};
G__333964.cljs$lang$maxFixedArity = 0;
G__333964.cljs$lang$applyTo = (function (arglist__333966){
var args = cljs.core.seq(arglist__333966);
return G__333964__delegate(args);
});
G__333964.cljs$core$IFn$_invoke$arity$variadic = G__333964__delegate;
return G__333964;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__333967__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__333967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__333968__i = 0, G__333968__a = new Array(arguments.length -  0);
while (G__333968__i < G__333968__a.length) {G__333968__a[G__333968__i] = arguments[G__333968__i + 0]; ++G__333968__i;}
  args = new cljs.core.IndexedSeq(G__333968__a,0);
} 
return G__333967__delegate.call(this,args);};
G__333967.cljs$lang$maxFixedArity = 0;
G__333967.cljs$lang$applyTo = (function (arglist__333969){
var args = cljs.core.seq(arglist__333969);
return G__333967__delegate(args);
});
G__333967.cljs$core$IFn$_invoke$arity$variadic = G__333967__delegate;
return G__333967;
})()
;

return null;
});
