goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35719__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35720__i = 0, G__35720__a = new Array(arguments.length -  0);
while (G__35720__i < G__35720__a.length) {G__35720__a[G__35720__i] = arguments[G__35720__i + 0]; ++G__35720__i;}
  args = new cljs.core.IndexedSeq(G__35720__a,0);
} 
return G__35719__delegate.call(this,args);};
G__35719.cljs$lang$maxFixedArity = 0;
G__35719.cljs$lang$applyTo = (function (arglist__35721){
var args = cljs.core.seq(arglist__35721);
return G__35719__delegate(args);
});
G__35719.cljs$core$IFn$_invoke$arity$variadic = G__35719__delegate;
return G__35719;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35722__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35723__i = 0, G__35723__a = new Array(arguments.length -  0);
while (G__35723__i < G__35723__a.length) {G__35723__a[G__35723__i] = arguments[G__35723__i + 0]; ++G__35723__i;}
  args = new cljs.core.IndexedSeq(G__35723__a,0);
} 
return G__35722__delegate.call(this,args);};
G__35722.cljs$lang$maxFixedArity = 0;
G__35722.cljs$lang$applyTo = (function (arglist__35724){
var args = cljs.core.seq(arglist__35724);
return G__35722__delegate(args);
});
G__35722.cljs$core$IFn$_invoke$arity$variadic = G__35722__delegate;
return G__35722;
})()
;

return null;
});
