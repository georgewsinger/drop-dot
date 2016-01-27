goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23026__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23027__i = 0, G__23027__a = new Array(arguments.length -  0);
while (G__23027__i < G__23027__a.length) {G__23027__a[G__23027__i] = arguments[G__23027__i + 0]; ++G__23027__i;}
  args = new cljs.core.IndexedSeq(G__23027__a,0);
} 
return G__23026__delegate.call(this,args);};
G__23026.cljs$lang$maxFixedArity = 0;
G__23026.cljs$lang$applyTo = (function (arglist__23028){
var args = cljs.core.seq(arglist__23028);
return G__23026__delegate(args);
});
G__23026.cljs$core$IFn$_invoke$arity$variadic = G__23026__delegate;
return G__23026;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23029__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23030__i = 0, G__23030__a = new Array(arguments.length -  0);
while (G__23030__i < G__23030__a.length) {G__23030__a[G__23030__i] = arguments[G__23030__i + 0]; ++G__23030__i;}
  args = new cljs.core.IndexedSeq(G__23030__a,0);
} 
return G__23029__delegate.call(this,args);};
G__23029.cljs$lang$maxFixedArity = 0;
G__23029.cljs$lang$applyTo = (function (arglist__23031){
var args = cljs.core.seq(arglist__23031);
return G__23029__delegate(args);
});
G__23029.cljs$core$IFn$_invoke$arity$variadic = G__23029__delegate;
return G__23029;
})()
;

return null;
});
