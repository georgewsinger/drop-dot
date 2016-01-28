goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58003__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58004__i = 0, G__58004__a = new Array(arguments.length -  0);
while (G__58004__i < G__58004__a.length) {G__58004__a[G__58004__i] = arguments[G__58004__i + 0]; ++G__58004__i;}
  args = new cljs.core.IndexedSeq(G__58004__a,0);
} 
return G__58003__delegate.call(this,args);};
G__58003.cljs$lang$maxFixedArity = 0;
G__58003.cljs$lang$applyTo = (function (arglist__58005){
var args = cljs.core.seq(arglist__58005);
return G__58003__delegate(args);
});
G__58003.cljs$core$IFn$_invoke$arity$variadic = G__58003__delegate;
return G__58003;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58006__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58007__i = 0, G__58007__a = new Array(arguments.length -  0);
while (G__58007__i < G__58007__a.length) {G__58007__a[G__58007__i] = arguments[G__58007__i + 0]; ++G__58007__i;}
  args = new cljs.core.IndexedSeq(G__58007__a,0);
} 
return G__58006__delegate.call(this,args);};
G__58006.cljs$lang$maxFixedArity = 0;
G__58006.cljs$lang$applyTo = (function (arglist__58008){
var args = cljs.core.seq(arglist__58008);
return G__58006__delegate(args);
});
G__58006.cljs$core$IFn$_invoke$arity$variadic = G__58006__delegate;
return G__58006;
})()
;

return null;
});
