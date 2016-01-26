goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__295992__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__295992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295993__i = 0, G__295993__a = new Array(arguments.length -  0);
while (G__295993__i < G__295993__a.length) {G__295993__a[G__295993__i] = arguments[G__295993__i + 0]; ++G__295993__i;}
  args = new cljs.core.IndexedSeq(G__295993__a,0);
} 
return G__295992__delegate.call(this,args);};
G__295992.cljs$lang$maxFixedArity = 0;
G__295992.cljs$lang$applyTo = (function (arglist__295994){
var args = cljs.core.seq(arglist__295994);
return G__295992__delegate(args);
});
G__295992.cljs$core$IFn$_invoke$arity$variadic = G__295992__delegate;
return G__295992;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__295995__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__295995 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295996__i = 0, G__295996__a = new Array(arguments.length -  0);
while (G__295996__i < G__295996__a.length) {G__295996__a[G__295996__i] = arguments[G__295996__i + 0]; ++G__295996__i;}
  args = new cljs.core.IndexedSeq(G__295996__a,0);
} 
return G__295995__delegate.call(this,args);};
G__295995.cljs$lang$maxFixedArity = 0;
G__295995.cljs$lang$applyTo = (function (arglist__295997){
var args = cljs.core.seq(arglist__295997);
return G__295995__delegate(args);
});
G__295995.cljs$core$IFn$_invoke$arity$variadic = G__295995__delegate;
return G__295995;
})()
;

return null;
});
