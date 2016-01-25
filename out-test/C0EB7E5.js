goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18400__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18401__i = 0, G__18401__a = new Array(arguments.length -  0);
while (G__18401__i < G__18401__a.length) {G__18401__a[G__18401__i] = arguments[G__18401__i + 0]; ++G__18401__i;}
  args = new cljs.core.IndexedSeq(G__18401__a,0);
} 
return G__18400__delegate.call(this,args);};
G__18400.cljs$lang$maxFixedArity = 0;
G__18400.cljs$lang$applyTo = (function (arglist__18402){
var args = cljs.core.seq(arglist__18402);
return G__18400__delegate(args);
});
G__18400.cljs$core$IFn$_invoke$arity$variadic = G__18400__delegate;
return G__18400;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18403__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18404__i = 0, G__18404__a = new Array(arguments.length -  0);
while (G__18404__i < G__18404__a.length) {G__18404__a[G__18404__i] = arguments[G__18404__i + 0]; ++G__18404__i;}
  args = new cljs.core.IndexedSeq(G__18404__a,0);
} 
return G__18403__delegate.call(this,args);};
G__18403.cljs$lang$maxFixedArity = 0;
G__18403.cljs$lang$applyTo = (function (arglist__18405){
var args = cljs.core.seq(arglist__18405);
return G__18403__delegate(args);
});
G__18403.cljs$core$IFn$_invoke$arity$variadic = G__18403__delegate;
return G__18403;
})()
;

return null;
});
