goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15399__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15400__i = 0, G__15400__a = new Array(arguments.length -  0);
while (G__15400__i < G__15400__a.length) {G__15400__a[G__15400__i] = arguments[G__15400__i + 0]; ++G__15400__i;}
  args = new cljs.core.IndexedSeq(G__15400__a,0);
} 
return G__15399__delegate.call(this,args);};
G__15399.cljs$lang$maxFixedArity = 0;
G__15399.cljs$lang$applyTo = (function (arglist__15401){
var args = cljs.core.seq(arglist__15401);
return G__15399__delegate(args);
});
G__15399.cljs$core$IFn$_invoke$arity$variadic = G__15399__delegate;
return G__15399;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15402__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15402 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15403__i = 0, G__15403__a = new Array(arguments.length -  0);
while (G__15403__i < G__15403__a.length) {G__15403__a[G__15403__i] = arguments[G__15403__i + 0]; ++G__15403__i;}
  args = new cljs.core.IndexedSeq(G__15403__a,0);
} 
return G__15402__delegate.call(this,args);};
G__15402.cljs$lang$maxFixedArity = 0;
G__15402.cljs$lang$applyTo = (function (arglist__15404){
var args = cljs.core.seq(arglist__15404);
return G__15402__delegate(args);
});
G__15402.cljs$core$IFn$_invoke$arity$variadic = G__15402__delegate;
return G__15402;
})()
;

return null;
});
