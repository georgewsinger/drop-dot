goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46640__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46641__i = 0, G__46641__a = new Array(arguments.length -  0);
while (G__46641__i < G__46641__a.length) {G__46641__a[G__46641__i] = arguments[G__46641__i + 0]; ++G__46641__i;}
  args = new cljs.core.IndexedSeq(G__46641__a,0);
} 
return G__46640__delegate.call(this,args);};
G__46640.cljs$lang$maxFixedArity = 0;
G__46640.cljs$lang$applyTo = (function (arglist__46642){
var args = cljs.core.seq(arglist__46642);
return G__46640__delegate(args);
});
G__46640.cljs$core$IFn$_invoke$arity$variadic = G__46640__delegate;
return G__46640;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46643__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46644__i = 0, G__46644__a = new Array(arguments.length -  0);
while (G__46644__i < G__46644__a.length) {G__46644__a[G__46644__i] = arguments[G__46644__i + 0]; ++G__46644__i;}
  args = new cljs.core.IndexedSeq(G__46644__a,0);
} 
return G__46643__delegate.call(this,args);};
G__46643.cljs$lang$maxFixedArity = 0;
G__46643.cljs$lang$applyTo = (function (arglist__46645){
var args = cljs.core.seq(arglist__46645);
return G__46643__delegate(args);
});
G__46643.cljs$core$IFn$_invoke$arity$variadic = G__46643__delegate;
return G__46643;
})()
;

return null;
});
