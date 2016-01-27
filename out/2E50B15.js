goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32870__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32871__i = 0, G__32871__a = new Array(arguments.length -  0);
while (G__32871__i < G__32871__a.length) {G__32871__a[G__32871__i] = arguments[G__32871__i + 0]; ++G__32871__i;}
  args = new cljs.core.IndexedSeq(G__32871__a,0);
} 
return G__32870__delegate.call(this,args);};
G__32870.cljs$lang$maxFixedArity = 0;
G__32870.cljs$lang$applyTo = (function (arglist__32872){
var args = cljs.core.seq(arglist__32872);
return G__32870__delegate(args);
});
G__32870.cljs$core$IFn$_invoke$arity$variadic = G__32870__delegate;
return G__32870;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32873__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32874__i = 0, G__32874__a = new Array(arguments.length -  0);
while (G__32874__i < G__32874__a.length) {G__32874__a[G__32874__i] = arguments[G__32874__i + 0]; ++G__32874__i;}
  args = new cljs.core.IndexedSeq(G__32874__a,0);
} 
return G__32873__delegate.call(this,args);};
G__32873.cljs$lang$maxFixedArity = 0;
G__32873.cljs$lang$applyTo = (function (arglist__32875){
var args = cljs.core.seq(arglist__32875);
return G__32873__delegate(args);
});
G__32873.cljs$core$IFn$_invoke$arity$variadic = G__32873__delegate;
return G__32873;
})()
;

return null;
});
