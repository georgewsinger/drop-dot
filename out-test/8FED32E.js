goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__83071__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__83071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83072__i = 0, G__83072__a = new Array(arguments.length -  0);
while (G__83072__i < G__83072__a.length) {G__83072__a[G__83072__i] = arguments[G__83072__i + 0]; ++G__83072__i;}
  args = new cljs.core.IndexedSeq(G__83072__a,0);
} 
return G__83071__delegate.call(this,args);};
G__83071.cljs$lang$maxFixedArity = 0;
G__83071.cljs$lang$applyTo = (function (arglist__83073){
var args = cljs.core.seq(arglist__83073);
return G__83071__delegate(args);
});
G__83071.cljs$core$IFn$_invoke$arity$variadic = G__83071__delegate;
return G__83071;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__83074__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__83074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83075__i = 0, G__83075__a = new Array(arguments.length -  0);
while (G__83075__i < G__83075__a.length) {G__83075__a[G__83075__i] = arguments[G__83075__i + 0]; ++G__83075__i;}
  args = new cljs.core.IndexedSeq(G__83075__a,0);
} 
return G__83074__delegate.call(this,args);};
G__83074.cljs$lang$maxFixedArity = 0;
G__83074.cljs$lang$applyTo = (function (arglist__83076){
var args = cljs.core.seq(arglist__83076);
return G__83074__delegate(args);
});
G__83074.cljs$core$IFn$_invoke$arity$variadic = G__83074__delegate;
return G__83074;
})()
;

return null;
});
