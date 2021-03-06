goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15398__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15399__i = 0, G__15399__a = new Array(arguments.length -  0);
while (G__15399__i < G__15399__a.length) {G__15399__a[G__15399__i] = arguments[G__15399__i + 0]; ++G__15399__i;}
  args = new cljs.core.IndexedSeq(G__15399__a,0);
} 
return G__15398__delegate.call(this,args);};
G__15398.cljs$lang$maxFixedArity = 0;
G__15398.cljs$lang$applyTo = (function (arglist__15400){
var args = cljs.core.seq(arglist__15400);
return G__15398__delegate(args);
});
G__15398.cljs$core$IFn$_invoke$arity$variadic = G__15398__delegate;
return G__15398;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15401__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15402__i = 0, G__15402__a = new Array(arguments.length -  0);
while (G__15402__i < G__15402__a.length) {G__15402__a[G__15402__i] = arguments[G__15402__i + 0]; ++G__15402__i;}
  args = new cljs.core.IndexedSeq(G__15402__a,0);
} 
return G__15401__delegate.call(this,args);};
G__15401.cljs$lang$maxFixedArity = 0;
G__15401.cljs$lang$applyTo = (function (arglist__15403){
var args = cljs.core.seq(arglist__15403);
return G__15401__delegate(args);
});
G__15401.cljs$core$IFn$_invoke$arity$variadic = G__15401__delegate;
return G__15401;
})()
;

return null;
});
