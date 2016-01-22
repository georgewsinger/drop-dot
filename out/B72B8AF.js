goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37384__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37384 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37385__i = 0, G__37385__a = new Array(arguments.length -  0);
while (G__37385__i < G__37385__a.length) {G__37385__a[G__37385__i] = arguments[G__37385__i + 0]; ++G__37385__i;}
  args = new cljs.core.IndexedSeq(G__37385__a,0);
} 
return G__37384__delegate.call(this,args);};
G__37384.cljs$lang$maxFixedArity = 0;
G__37384.cljs$lang$applyTo = (function (arglist__37386){
var args = cljs.core.seq(arglist__37386);
return G__37384__delegate(args);
});
G__37384.cljs$core$IFn$_invoke$arity$variadic = G__37384__delegate;
return G__37384;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37387__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37388__i = 0, G__37388__a = new Array(arguments.length -  0);
while (G__37388__i < G__37388__a.length) {G__37388__a[G__37388__i] = arguments[G__37388__i + 0]; ++G__37388__i;}
  args = new cljs.core.IndexedSeq(G__37388__a,0);
} 
return G__37387__delegate.call(this,args);};
G__37387.cljs$lang$maxFixedArity = 0;
G__37387.cljs$lang$applyTo = (function (arglist__37389){
var args = cljs.core.seq(arglist__37389);
return G__37387__delegate(args);
});
G__37387.cljs$core$IFn$_invoke$arity$variadic = G__37387__delegate;
return G__37387;
})()
;

return null;
});
