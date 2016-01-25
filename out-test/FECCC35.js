goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29783__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__29783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29784__i = 0, G__29784__a = new Array(arguments.length -  0);
while (G__29784__i < G__29784__a.length) {G__29784__a[G__29784__i] = arguments[G__29784__i + 0]; ++G__29784__i;}
  args = new cljs.core.IndexedSeq(G__29784__a,0);
} 
return G__29783__delegate.call(this,args);};
G__29783.cljs$lang$maxFixedArity = 0;
G__29783.cljs$lang$applyTo = (function (arglist__29785){
var args = cljs.core.seq(arglist__29785);
return G__29783__delegate(args);
});
G__29783.cljs$core$IFn$_invoke$arity$variadic = G__29783__delegate;
return G__29783;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__29786__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__29786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29787__i = 0, G__29787__a = new Array(arguments.length -  0);
while (G__29787__i < G__29787__a.length) {G__29787__a[G__29787__i] = arguments[G__29787__i + 0]; ++G__29787__i;}
  args = new cljs.core.IndexedSeq(G__29787__a,0);
} 
return G__29786__delegate.call(this,args);};
G__29786.cljs$lang$maxFixedArity = 0;
G__29786.cljs$lang$applyTo = (function (arglist__29788){
var args = cljs.core.seq(arglist__29788);
return G__29786__delegate(args);
});
G__29786.cljs$core$IFn$_invoke$arity$variadic = G__29786__delegate;
return G__29786;
})()
;

return null;
});
